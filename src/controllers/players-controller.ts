import { Request, Response } from "express";
import {
  getPlayerService,
  getPlayerByIdService,
} from "../services/players-service";
import { ok } from "../utils/http-helper";

export const getPlayer = async (req: Request, res: Response) => {
  const httpResponse = await getPlayerService();

  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getPlayerByID = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id as string);
  const httpResponse = await getPlayerByIdService(id);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};
