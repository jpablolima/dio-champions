import { Request, Response } from "express";

import {
  getPlayerService,
  getPlayerByIdService,
  createPlayerService,
  deletePlayerService,
} from "../services/players-service";
import { noContent, ok } from "../utils/http-helper";
import * as PlayerService from "../services/players-service";

export const getPlayer = async (req: Request, res: Response) => {
  const httpResponse = await getPlayerService();

  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getPlayerByID = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id as string);
  const httpResponse = await getPlayerByIdService(id);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};
export const deletePlayer = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id as string);
  const httpResponse = await PlayerService.deletePlayerService(id);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const postPlayer = async (req: Request, res: Response) => {
  const bodyValue = req.body;
  const httpResponse = await createPlayerService(bodyValue);

  if (httpResponse) {
    res.status(httpResponse.statusCode).json(httpResponse.body);
  } else {
    const response = await noContent();
    res.status(response.statusCode).json(response.body);
  }
};
