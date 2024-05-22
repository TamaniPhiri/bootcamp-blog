import { atom } from "recoil";
import { IUser } from "../types/interface";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const userDetailsState = atom<IUser | null>({
  key: "userDetailsState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});
