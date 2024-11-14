import { atom, selector, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "userToken", // this key is using to store data in local storage
  storage: sessionStorage, // configure which storage will be used to store the data
  converter: JSON,
});

const userToken = atom<string>({
  key: "userToken",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

const userTokenState = selector({
  key: "userTokenState",
  get: ({ get }) => get(userToken),
});

export const useGetToken = () => {
  return useRecoilValue(userTokenState);
};

export const useSetToken = () => {
  return useSetRecoilState(userToken);
};

export const useTokenState = () => {
  return useRecoilState(userToken);
};
