import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Sortition from "./Sortition";
import { useParticipantList } from "../../state/hooks/useParticipantList";
import { useSortitionResult } from "../../state/hooks/useSortitionResult";

jest.mock("../../state/hooks/useParticipantList.ts", () => {
  return {
    useParticipantList: jest.fn(),
  };
});

jest.mock("../../state/hooks/useSortitionResult.ts", () => {
  return {
    useSortitionResult: jest.fn(),
  }
})

describe("", () => {
  const participants = ["João", "Thamiris", "Bruno", "Arthur", "Mussi"];
  const result = new Map([
    ['João', 'Thamiris'],
    ['Bruno', 'Arthur'],
    ['Mussi', 'Alane'],
    ['Thamiris', 'Bruno'],
    ['Alane', 'João'],
    ['Athur', 'Mussi']
  ]) 
  beforeEach(() => {
    (useParticipantList as jest.Mock).mockReturnValue(participants);
    (useSortitionResult as jest.Mock).mockReturnValue(result);
  });

  test("Participants can show your occult friend", () => {
    render(
      <RecoilRoot>
        <Sortition></Sortition>
      </RecoilRoot>
    );
    const options = screen.queryAllByRole("option");
    expect(options).toHaveLength(participants.length);
  });
  test("Secret Santa is displayed when asked", () => {
    render(
      <RecoilRoot>
        <Sortition></Sortition>
      </RecoilRoot>
    );
    const select = screen.getAllByPlaceholderText("Choose your name");
    fireEvent.change(select, {
      target: {
        value: participants[0],
      },
    });

    const button = screen.getByRole("button");
    fireEvent.click(button);
    const occultFriend = screen.getByRole("alert");
    expect(occultFriend).toBeInTheDocument();
  });
});
