import { render, screen } from "@testing-library/react";
import { LoginForm } from ".";

jest.mock("react-hook-form", () => {
  return {
    useForm() {
      return {
        register() {
          return {
            name: "",
          };
        },
        handleSubmit: () => Promise<void>,
      };
    },
  };
});

describe("LoginForm component", () => {
  it("renders correctly", () => {
    render(<LoginForm />);

    expect(screen.getByText("Log in")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Username")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.getByText("Remind me")).toBeInTheDocument();
    expect(screen.getByText("Forgot password?")).toBeInTheDocument();
    expect(screen.getByText("Log in")).toBeInTheDocument();
  });
});
