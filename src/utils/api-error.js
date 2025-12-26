class ApiError extends Error {
  constructor(
    statusCode,
    massage = "something went wrong",
    error = [],
    stack = ""
  ) {
    super(massage);
    this.statusCode = statusCode;
    this.data = null;
    this.success = false;
    this.massage = massage;
    this.errors = errors;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
export { ApiError };
