export type Msg = { id: string; role: "user" | "bot" | "loading"; text: string };

export type Chip = {
  label: string;
  type: "action" | "article";
  slug?: string;
};
