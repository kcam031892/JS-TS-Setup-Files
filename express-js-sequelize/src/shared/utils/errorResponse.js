export class ErrorResponse extends Error {
  constructor(message, httpResponse) {
    super(message);
    this.error = message;
    this.statusCode = httpResponse?.statusCode;
    this.message = httpResponse?.message;
  }
}
