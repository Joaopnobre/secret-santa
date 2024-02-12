import React from "react";
import { useParticipantList } from "../state/hooks/useParticipantList";

function ParticipantList() {
  const participants: string[] = useParticipantList();
  return (
    <ul>
      {participants.map((participant) => (
        <li key={participant}> {participant}</li>
      ))}
    </ul>
  );
}

export default ParticipantList;
