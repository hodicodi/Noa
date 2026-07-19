// middleware/validate.ts
import { Request, Response, NextFunction } from 'express';
import {z} from 'zod'
import { StatusCodes } from "http-status-codes";
import { HttpError } from "../errors/httpError.ts";
import { AnyZodObject } from 'zod/v3';


export const validateBody = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    // safeParse checks data without crashing the server or throwing unhandled errors
    const result = await schema.safeParseAsync(req.body);


    if (!result.success) {
      // Return a 400 Bad Request with formatted validation errors
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: "Validation failed",
        errors: result.error.message, // Formats errors by field name
      });
    }

    // Replace req.body with the cleaned, fully-typed parsed data
    req.body = result.data;
    next();
  };
};
