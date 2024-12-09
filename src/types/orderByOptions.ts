import { Ordering } from "./ordering";

type OrderByOption = { value: Ordering; label: string };

export const OrderByOptions: OrderByOption[] = [
  { value: "", label: "Trending" },
  { value: "-metacritic", label: "Metacritic 🠗" },
  { value: "metacritic", label: "Metacritic 🠕" },
  { value: "-released", label: "Release Date 🠗" },
  { value: "released", label: "Release Date 🠕" },
  { value: "-name", label: "Name (A-Z)" },
  { value: "name", label: "Name (Z-A)" },
];
