import { useRecoilValue, useSetRecoilState } from "recoil";
import { errorState, participantListState } from "../atom";

export const useAddParticipant = () => {
  const setList = useSetRecoilState(participantListState);
  const list = useRecoilValue(participantListState);
  const setError = useSetRecoilState(errorState);
  return (participantName: string) => {
    if (list.includes(participantName)) {
      setError("Duplicate names are not allowed");
      setTimeout( ()=>{
        setError('')
      }, 3000)
      return;
    }
    return setList((atualList) => [...atualList, participantName]);
  };
};
