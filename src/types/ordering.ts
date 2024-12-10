export type Ordering =
  | "name"
  | "released"
  | "metacritic"
  | "-name"
  | "-released"
  | "-metacritic"
  | "";

type OrderByOption = { value: Ordering; label: string };

export const OrderByOptions: OrderByOption[] = [
  { value: "", label: "Trending" },
  { value: "-metacritic", label: "Metacritic (Desc)" },
  { value: "metacritic", label: "Metacritic (Asc)" },
  { value: "-released", label: "Release Date (Desc)" },
  { value: "released", label: "Release Date (Asc)" },
  { value: "-name", label: "Name (A-Z)" },
  { value: "name", label: "Name (Z-A)" },
];
