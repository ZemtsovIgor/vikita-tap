export type ErrorDetails =
  | Record<string, string>
  | Record<string, string[]>
  | Record<string, string>[]
  | string[];

export class ApiError extends Error {
  code: string;

  httpStatus?: number;

  httpStatusText?: string;

  details?: ErrorDetails;

  errObj?: any;

  get isTemporary(): boolean {
    if (this.code !== 'NetworkError') return false;
    return !this.httpStatus || this.httpStatus >= 500;
  }

  constructor(code: string, message?: string) {
    super(message);
    this.code = code;
  }
}

export function isApiError(e: Error): e is ApiError {
  return e instanceof ApiError;
}

export function isTmpError(e: Error): boolean {
  return isApiError(e) ? e.isTemporary : false;
}
