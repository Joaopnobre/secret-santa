import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Footer from "./Footer";
import { useParticipantList } from "../../state/hooks/useParticipantList";
jest.mock("../state/hooks/useParticipantList.ts", () => {
  return {
    useParticipantList: jest.fn(),
  };
});

const mockNavigation = jest.fn();
const mockDraw = jest.fn();

jest.mock('../../state/hooks/useSortition.ts', () => {
  return {
    useSortition: ()=> mockDraw
  }
})

jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavigation,
  };
});

describe("Not enough participants", () => {
  beforeEach(() => {
    (useParticipantList as jest.Mock).mockReturnValue([]);
  });
  test("The game cannot start", () => {
    render(
      <RecoilRoot>
        <Footer></Footer>
      </RecoilRoot>
    );
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });
});

describe("Exist enough participants", () => {
  beforeEach(() => {
    (useParticipantList as jest.Mock).mockReturnValue([
      "João",
      "Thamiris",
      "Bruno",
    ]);
  });
  test("Can be started", () => {
    render(
      <RecoilRoot>
        <Footer></Footer>
      </RecoilRoot>
    );
    const button = screen.getByRole("button");
    expect(button).not.toBeDisabled();
  });
  test("The game was started", () => {
    render(
      <RecoilRoot>
        <Footer></Footer>
      </RecoilRoot>
    );
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(mockNavigation).toHaveBeenCalled();
    expect(mockNavigation).toHaveBeenCalledWith("/sorteio");
    expect(mockDraw).toHaveBeenCalledTimes(1);
  });
});
