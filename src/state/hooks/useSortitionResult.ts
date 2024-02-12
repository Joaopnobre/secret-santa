import { useRecoilValue } from "recoil"
import { resultOccultFriend } from "../atom"

export const useSortitionResult = () => {
    return useRecoilValue(resultOccultFriend)
}