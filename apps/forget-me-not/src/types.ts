export type User = {
  name?: string;
};

export type LovedOne = {
  name?: string;
};

export type Companion = {
  name?: string;
  randomName?: boolean;
};

export type Memory = {
  title?: string;
  story?: string;
};

export type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue };
