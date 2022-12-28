import { atom } from "recoil";

export const scrollState = atom({
  key: "scroll",
  default: 0,
});

export const clubs = atom({
  key: "clubs",
  default: [],
});