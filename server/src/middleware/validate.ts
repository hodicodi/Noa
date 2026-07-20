// middleware/validate.ts
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from "http-status-codes";
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
