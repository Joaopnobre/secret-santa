import { useSetRecoilState } from "recoil";
import { useParticipantList } from "./useParticipantList";
import { resultOccultFriend } from "../atom";
import { AchieveDraw } from "../helpers/AchieveDraw";

export const useSortition = () => {
  const participants = useParticipantList();
  const setResult = useSetRecoilState(resultOccultFriend)
  return () => {
  const result = AchieveDraw(participants)
    setResult(result);
  }
}
