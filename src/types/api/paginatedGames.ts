import { ApiGame } from "./game";

export type ApiPaginatedGames = {
  count: number;
  next: string | null;
  previous: string | null;
  results: ApiGame[];
};
