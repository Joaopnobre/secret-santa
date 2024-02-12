import { useState } from "react";
import { useParticipantList } from "../../state/hooks/useParticipantList";
import { useSortitionResult } from "../../state/hooks/useSortitionResult";
import "./styles.css";

function Sortition() {
  const participants = useParticipantList();
  const [turnParticipant, setTurnParticipant] = useState("");
  const [occultFriend, setOccultFriend] = useState("");
  const result = useSortitionResult();
  const draw = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (result.has(turnParticipant)) {
      setOccultFriend(result.get(turnParticipant)!);
    }
  };
  return (
    <section className="sortition">
      <h2>Whose turn is it?</h2>
      <form onSubmit={draw}>
        <select
          required
          name="participant"
          id="participant"
          aria-placeholder="Choose your name"
          value={turnParticipant}
          onChange={(e) => setTurnParticipant(e.target.value)}
        >
          {participants.map((participant) => (
            <option key={participant}>{participant}</option>
          ))}
        </select>
        <button className="sortition-button">Draw Names</button>
      </form>
      {occultFriend && (
        <div className="result-field">
          <p className="result" role="alert">
            {occultFriend}
          </p>
        </div>
      )}
      <footer className="sortition">
        <img src="../../../public/assets/aviao.png" alt="" />
      </footer>
    </section>
  );
}

export default Sortition;
