import { GameCardInfo } from "./gameCardInfo";

export type PaginatedGames = {
  total: number;
  games: GameCardInfo[];
};
