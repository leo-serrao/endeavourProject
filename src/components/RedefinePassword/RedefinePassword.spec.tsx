import { render, screen } from "@testing-library/react";
import { RedefinePasswordForm } from ".";

describe("RedefinePassword Component", () => {
  it("renders form correctly", () => {
    render(<RedefinePasswordForm />);

    expect(screen.getByText("Redefine password")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("New password")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Repeat password")).toBeInTheDocument();
    expect(screen.getByText("Redefine")).toBeInTheDocument();
    expect(screen.getByText("Come back")).toBeInTheDocument();
  });
});
