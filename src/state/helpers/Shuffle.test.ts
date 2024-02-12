import { AchieveDraw } from "./AchieveDraw";

describe('given a secret friend draw', ()=> {
    test('a participant does not draw their own name', () => {
const participants = [
    "João",
    "Thamiris",
    "Bruno",
    "Tai",
    "Arthur",
    "Alane",
    "Jéssica"
]
    const draw = AchieveDraw(participants)
        participants.forEach(participant => {
            const occultFriend = draw.get(participant)
            expect(occultFriend).not.toEqual(participant)
        })
    })
})