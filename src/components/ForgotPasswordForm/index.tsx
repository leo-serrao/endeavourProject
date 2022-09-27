import { ResetButton, ForgotFormContainer } from "./ForgotPasswordForm.styles";
import { Envelope } from "phosphor-react";
import { RoutesContext } from "../../contexts/RouteContext";
import { useContext } from "react";

export function ForgotPasswordForm() {
  const { defineLoginRoute } = useContext(RoutesContext);
  return (
    <ForgotFormContainer>
      <h1>Forgot password?</h1>
      <p>Enter your e-mail address below to reset your password.</p>
      <form action="">
        <label>
          <Envelope size={24} color="#9C9C9C" />
          <input type="text" placeholder="Email" required minLength={5} />
        </label>

        <ResetButton type="submit" onClick={() => defineLoginRoute("reset")}>
          Submit
        </ResetButton>
        <a onClick={() => defineLoginRoute("login")}>Come back</a>
      </form>
    </ForgotFormContainer>
  );
}
