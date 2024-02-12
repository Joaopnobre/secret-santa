import { RecoilRoot } from "recoil";
import { render, screen } from "@testing-library/react";
import ParticipantList from "./ParticipantList";
import { useParticipantList } from "../state/hooks/useParticipantList";

jest.mock('../state/hooks/useParticipantList', ()=> {
    return {
        useParticipantList: jest.fn(),
    }
})

describe("Empty list of participants", () => {
    beforeEach(() => {
        (useParticipantList as jest.Mock).mockReturnValue([]);
    })
    test("Must render without elements" , () => {
  render(
    <RecoilRoot>
      <ParticipantList></ParticipantList>
    </RecoilRoot>
  );

  const itens = screen.queryByRole("listitem")
  expect(itens).toHaveLength(0);
})
});

describe("Full list of participants", () => {
    const participants = ["Thamiris", "Bruno"]
    beforeEach(() => {
        (useParticipantList as jest.Mock).mockReturnValue([participants]);
    })
    test("Must render with elements" , () => {
  render(
    <RecoilRoot>
      <ParticipantList></ParticipantList>
    </RecoilRoot>
  );

  const itens = screen.queryByRole("listitem")
  expect(itens).toHaveLength(participants.length);
})
});
