import { atom } from "recoil";

const AllProducts = atom({
  key: "AllProducts",
  default: [],
});
const SelectedInfo = atom({
  key: "SelectedInfo",
  default: [],
});

export { SelectedInfo, AllProducts };
