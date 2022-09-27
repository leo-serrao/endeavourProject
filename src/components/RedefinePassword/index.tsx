import { RoutesContext } from "../../contexts/RouteContext";
import { useContext } from "react";
import { ResetButton, ResetFormContainer } from "./styles";

export function RedefinePasswordForm() {
  const { defineLoginRoute } = useContext(RoutesContext);
  return (
    <ResetFormContainer>
      <h1>Redefine password</h1>
      <form action="">
        <label>
          <input
            type="text"
            placeholder="New password"
            required
            minLength={5}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Repeat password"
            required
            minLength={5}
          />
        </label>

        <ResetButton type="submit">Redefine</ResetButton>
        <a onClick={() => defineLoginRoute("login")}>Come back</a>
      </form>
    </ResetFormContainer>
  );
}
