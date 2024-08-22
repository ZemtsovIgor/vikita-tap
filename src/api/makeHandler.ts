import { Request } from './request';

type RequestFactory<Params> = (req: Params) => Request;
type ResponseFactory<Data> = (res: any) => Data;

type RequestHandler<RequestParams, ResponseData, T extends string = string> = {
  type: T;
  prepare: RequestFactory<RequestParams>;
  decode: ResponseFactory<ResponseData>;
};

export function makeHandler<Params, Data, T extends string>(
  type: T,
  prepare: RequestFactory<Params>,
  decode: ResponseFactory<Data>
): RequestHandler<Params, Data, T> {
  return {
    type,
    prepare,
    decode,
  };
}
