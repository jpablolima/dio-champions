import { Http2ServerResponse } from "http2";
import { PlayerModel } from "../models/player-model";
import { HttpResponse } from "../models/http-response-model";
import * as PlayerRepository from "../repositories/players-repository";
import { noContent, ok, created, badRequest } from "../utils/http-helper";
import * as PlayerService from "../services/players-service";
import { response } from "express";

export const getPlayerService = async () => {
  const data = await PlayerRepository.findAllPlayers();
  let response = null;

  if (data) {
    response = await ok(data);
  } else {
    response = await noContent();
  }
  return response;
};

export const getPlayerByIdService = async (id: number) => {
  const data = await PlayerRepository.findPlayerById(id);
  let response = null;

  if (data) {
    response = await ok(data);
  } else {
    response = await noContent();
  }
  return response;
};

export const createPlayerService = async (player: PlayerModel) => {
  let response: HttpResponse;

  if (Object.keys(player).length != 0) {
    await PlayerRepository.insertPlayer(player);
    return created();
  } else {
    response = {
      statusCode: 400,
      body: "Dados invalidos",
    };
    return response;
  }
};

export const deletePlayerService = async (id: number) => {
  let response = null;
  await PlayerRepository.deleteOnePlayer(id);

  response = {
    statusCode: 200,
    body: {
      message: "Deleted",
    },
  };
  return response;
};
