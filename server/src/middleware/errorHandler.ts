// src/middleware/errorHandler.ts
import { ErrorRequestHandler } from "express";
import { HttpError } from "../errors/httpError.ts";
import { StatusCodes } from "http-status-codes";

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof HttpError) {
    res.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
    return;
  }

  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    status: "error",
    message: err.message,
  });
};
