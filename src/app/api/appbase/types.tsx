export type CommonResponseData<T> = {
  statusCode: number;
  errorCode: string | number;
  message: string;
  data: T;
};

export type CommonRequestData = {
  code?: string;
  url: string;
  data?: object;
  params?: object;
  headers?: object;
  async?: boolean;
};

export type RequestData = {
  data?: object;
  params?: object;
};

export enum HttpMethods {
  GET = "get",
  PUT = "put",
  POST = "post",
  DELETE = "delete",
  PATCH = "patch",
}
