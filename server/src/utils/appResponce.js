export class AppResponse {
  constructor(statusCode = 400, message = "success", data) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.success = statusCode < 400;
  }
}
