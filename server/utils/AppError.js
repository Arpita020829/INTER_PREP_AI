/**
 * Custom operational error class
 * Extends native Error with HTTP statusCode support
 *
 * Usage:
 *   throw new AppError('User not found', 404);
 *   next(new AppError('Unauthorized', 401));
 */
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true; // Distinguish from programming errors

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
