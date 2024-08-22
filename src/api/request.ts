export type Request = {
  /** HTTP method */
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  /** path */
  path: string;
  /** JSON data */
  data?: object;
  /** FORM data */
  form?: any;
  /** Any additional headers */
  headers?: Record<string, string>;
};

export type FormDataEntry = {
  name: string;
  value: any;
};
