export class AppError extends Error {
  constructor(message = "Something went wrong", statusCode = 500) {
    super(message);
    this.success = false;
    this.message = message;
    this.statusCode = statusCode;
  }
}
