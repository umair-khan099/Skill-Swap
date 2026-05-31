export class AppResponse<T> {
  statusCode: number;
  message: string;
  data: T;
  success: boolean;

  constructor(
    statusCode: number = 400,
    message: string = "success",
    data: T
  ) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.success = statusCode < 400;
  }
}