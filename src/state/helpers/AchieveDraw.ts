import shuffle from "just-shuffle";
export function AchieveDraw(participants: string[]) {
  const result = new Map<string, string>();
  const participantsTotal = participants.length;
  const shuffled = shuffle(participants);
  for (let i = 0; i < participantsTotal; i++) {
    const friendsIndex = i === participantsTotal - 1 ? 0 : i + 1;
    result.set(shuffled[i], shuffled[friendsIndex]);
  }
  return result;
}
