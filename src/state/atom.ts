import { atom } from "recoil";

export const participantListState = atom<string[]>({
  key: "participantListState",
  default: [],
});

export const resultOccultFriend = atom<Map<string, string>>({
  key: 'resultOccultFriend',
  default: new Map()
})

export const errorState = atom<string>({
  key: "errorState",
  default: '',
})