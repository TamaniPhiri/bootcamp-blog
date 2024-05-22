import { atom } from "recoil";
import { IUser } from "../types/interface";
import { recoilPersist } from "recoil-persist";
import { Posts } from "../pages/MyPosts";

const { persistAtom } = recoilPersist();

export const userDetailsState = atom<IUser | null>({
  key: "userDetailsState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const selectedPostState = atom<Posts | null>({
  key: "selectedPostState",
  default: null,
});
