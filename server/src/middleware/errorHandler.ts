// src/middleware/errorHandler.ts
import { ErrorRequestHandler } from 'express';
import { HttpError } from '../errors/httpError.ts';
import { StatusCodes } from 'http-status-codes';

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  // Check if the error is a known operational error
  if (err instanceof HttpError) {
    res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
    return;
  }

  // Fallback for unhandled internal server errors
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    status: 'error',
    message: 'Internal Server Error',
  });
};
