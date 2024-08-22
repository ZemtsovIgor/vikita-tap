import { TELEGRAM_API_URL } from '../const/general.constants';

import { ApiHandlerParams, ApiHandlerTypes, getHandler, ApiHandlerResponse } from './calls';
import { ApiError, isApiError } from './error';
import { Request, FormDataEntry } from './request';

type ErrorHandler = (e: ApiError) => void;

const extraGoodHttpStatuses = new Set<number>([204]);

function processFormData(form: FormDataEntry[]) {
  if (!Array.isArray(form)) return null;
  const res = new FormData();
  for (const entry of form) {
    res.append(entry.name, entry.value);
  }
  return res;
}

class Api {
  private timeout: number;

  private errorHandler?: ErrorHandler;

  constructor() {
    this.timeout = 60 * 1000;
  }

  call<Type extends ApiHandlerTypes>(
    type: Type,
    params: ApiHandlerParams<Type>
  ): Promise<ApiHandlerResponse<Type>>;
  call(type: any, params: any): any {
    const h = getHandler(type);
    const req = h.prepare(params);
    const a = this.makeRequest(req).then((data: any) => h.decode(data));
    if (this.errorHandler) a.catch(this.errorHandler);
    return a;
  }

  private executeFetch(url: string, params: Request): Promise<any> {
    const headers: Record<string, string> = {
      ...params.headers,
    };

    const jsonData = params.data ? JSON.stringify(params.data) : processFormData(params.form);

    if (params.data) {
      headers['Content-Type'] = 'application/json';
    }

    const init: RequestInit = {
      method: params.method,
      headers,
      body: jsonData,
    };

    const abortController = new AbortController();
    init.signal = abortController.signal;

    let timeoutHandle: ReturnType<typeof setTimeout> | undefined = setTimeout(
      () => abortController.abort(),
      this.timeout
    );
    const cleanupTimeout = () => {
      if (!timeoutHandle) return;
      clearTimeout(timeoutHandle);
      timeoutHandle = undefined;
    };

    // TODO: appProvider.application.logger.info('lib request', url, init);

    return fetch(url, init)
      .then(res => {
        if (res.ok || extraGoodHttpStatuses.has(res.status)) {
          const contentType = res.headers.get('Content-Type');
          const contentLength = res.headers.get('content-length');

          if (contentType === 'text/plain' || contentLength === '0') {
            return Promise.resolve({});
          }

          if (contentType === 'application/pdf') {
            return res.blob().then((blob: Blob) => {
              return blob;
            });
          }

          if (contentType === 'text/csv') {
            return res.blob().then((blob: Blob) => {
              return blob;
            });
          }

          return res.json().then(r => {
            const responseData: any = r.id ? {data: r} : r.meta ? {data: r.data, meta: r.meta} : r.data || { data: r } || {};
            return responseData;
          });
        }

        const err = new ApiError('NetworkError');
        err.httpStatus = res.status;
        err.httpStatusText = res.statusText;
        err.message = '';

        return res.text().then((text: string) => {
          try {
            // const error = data.errors ? data.errors : data;
            const errorDetail: Record<string, string> = {};
            // for (const i in error) {
            //   if (Object.prototype.hasOwnProperty.call(error, i)) {
            //     const e = error[i];
            //
            //     if (e instanceof Array) {
            //       err.message = `${i}: ${e.join(';')}`;
            //       errorDetail[i] = e.join(';');
            //     } else {
            //       if (e.includes('<!DOCTYPE html>')) {
            //         errorDetail[i] = "We're sorry, but something went wrong (500)";
            //       } else {
            //         errorDetail[i] = e;
            //       }
            //     }
            //   }
            // }
            if (Object.prototype.hasOwnProperty.call(errorDetail, 'detail')) {
              err.message = errorDetail.detail;
            }
            err.details = errorDetail;
            err.errObj = errorDetail;
          } catch (e) {
            err.message = text;
          }
          throw err;
        });
      })
      .catch((e: Error) => {
        if (isApiError(e)) throw e;
        throw new ApiError('NetworkError', e.toString());
      })
      .finally(() => {
        cleanupTimeout();
      });
  }

  private makeRequest(params: Request): Promise<any> {
    const url = `${TELEGRAM_API_URL}${params.path}`;

    return this.executeFetch(url, params);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new Api();
