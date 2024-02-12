import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "./Form";
import { RecoilRoot } from "recoil";

describe("Form behavior", () => {
  test("when input is empty, no new participants", () => {
    render(
      <RecoilRoot>
        <Form></Form>
      </RecoilRoot>
    );
    // Find input in DOM
    const input = screen.getByPlaceholderText(
      "Enter the name of the participants"
    );
    // Find button
    const button = screen.getByRole("button");
    // Assure input input is in the document
    expect(input).toBeInTheDocument();
    // Assure the button is in the document
    expect(button).toBeDisabled();
  });

  test("add a participant if the input is filled in", () => {
    const input = screen.getByPlaceholderText(
      "Enter the name of the participants"
    );

    const button = screen.getByRole("button");

    // Insert a input value
    fireEvent.change(input, {
      target: {
        value: "João",
      },
    });
    // Click on submit button
    fireEvent.click(button);
    // Check if input focus is active
    expect(input).toHaveFocus();
    // Check if input doesnt have a value
    expect(input).toHaveValue("");
  });

  test("Duplicate names can't be added in list", () => {
    render(
      <RecoilRoot>
        <Form></Form>
      </RecoilRoot>
    );
    const input = screen.getByPlaceholderText(
      "Enter the name of the participants"
    );

    const button = screen.getByRole("button");

    fireEvent.change(input, {
      target: {
        value: "João",
      },
    });

    fireEvent.click(button);
    fireEvent.change(input, {
      target: {
        value: "João",
      },
    });
    fireEvent.click(button);

    const errorMessage = screen.getByRole("alert");
    expect(errorMessage).toBe("Duplicate names not allowed");
  });

  test("Error message must disappear after 3 seconds", () => {
    jest.useFakeTimers();
    render(
      <RecoilRoot>
        <Form></Form>
      </RecoilRoot>
    );
    const input = screen.getByPlaceholderText(
      "Enter the name of the participants"
    );

    const button = screen.getByRole("button");

    fireEvent.change(input, {
      target: {
        value: "João",
      },
    });

    fireEvent.click(button);
    fireEvent.change(input, {
      target: {
        value: "João",
      },
    });
    fireEvent.click(button);

    let errorMessage = screen.queryByRole("alert");
    expect(errorMessage).toBeInTheDocument;
    // Wait 3 seconds

    act(() => {
      jest.runAllTimers();
    });

    errorMessage = screen.queryByRole("alert");
    expect(errorMessage).toBeNull();
  });
});
