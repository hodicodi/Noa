import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from "http-status-codes";
import { AnyZodObject } from 'zod/v3';


export const validateBody = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const result = await schema.safeParseAsync(req.body);


    if (!result.success) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: "Validation failed",
        errors: result.error.message, 
      });
    }

    req.body = result.data;
    next();
  };
};
