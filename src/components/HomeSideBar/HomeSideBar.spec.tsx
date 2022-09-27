import { render, screen } from "@testing-library/react";
import { HomeSideBar } from ".";

describe("RedefinePassword Component", () => {
  it("renders form correctly", () => {
    render(<HomeSideBar />);

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Open Positions")).toBeInTheDocument();
    expect(screen.getByText("Candidates")).toBeInTheDocument();
    expect(screen.getByText("Associates")).toBeInTheDocument();
  });
});
