import {  type Request, type Response } from "express";
import { UserService } from "../Services/user.service.js";

export class UserController {
  constructor(private userService: UserService) {}

  async handleToggleIsAdministor(req: Request, res: Response) {
    try {
      const { uuid } = req.params;
      const updatedUser = await this.userService.toggleIsAdministor(Number(uuid));
      res.json(updatedUser);
    } catch (error) {
      res.status(400).json({ error });
    }
  }
}