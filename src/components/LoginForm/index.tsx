import { RoutesContext } from "../../contexts/RouteContext";
import { AuthContext } from "../../contexts/AuthContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Check, User, Lock } from "phosphor-react";
import { FormContainer, InvalidCredentials, LoginButton } from "./styles";

const newLoginValidationSchema = z.object({
  email: z.string(),
  senha: z.string(),
});

type NewLoginDataProps = z.infer<typeof newLoginValidationSchema>;

export function LoginForm() {
  const { defineLoginRoute } = useContext(RoutesContext);
  const { signIn, loginFailMessage } = useContext(AuthContext);
  const [checkRemindMe, setCheckRemindMe] = useState(false);
  const newLoginForm = useForm<NewLoginDataProps>({
    resolver: zodResolver(newLoginValidationSchema),
    defaultValues: {
      email: "",
      senha: "",
    },
  });

  const { register, handleSubmit } = newLoginForm;

  function handleCheckRemindMe() {
    if (checkRemindMe === false) {
      setCheckRemindMe(true);
    } else if (checkRemindMe === true) {
      setCheckRemindMe(false);
    }
  }

  async function handleSubmitLoginRequest(data: NewLoginDataProps) {
    signIn(data);
  }

  return (
    <FormContainer>
      <form
        action=""
        onSubmit={handleSubmit(handleSubmitLoginRequest)}
        title="loginForm"
      >
        <InvalidCredentials>{loginFailMessage}</InvalidCredentials>

        <label>
          <User size={24} color="#9C9C9C" />
          <input
            type="text"
            placeholder="Username"
            required
            minLength={5}
            {...register("email")}
          />
        </label>

        <label>
          <Lock size={24} color="#9C9C9C" />
          <input
            type="password"
            placeholder="Password"
            required
            minLength={6}
            {...register("senha")}
          />
        </label>

        <div className="forgotPassword">
          <label className={checkRemindMe ? "inputChecked" : "inputUnchecked"}>
            <input
              type="checkbox"
              name="remindMe"
              onClick={handleCheckRemindMe}
            />
            <Check
              className={checkRemindMe ? "checkedIcon" : "uncheckedIcon"}
            />
            <span>Remind me</span>
          </label>
          <a onClick={() => defineLoginRoute("forgot")}>Forgot password?</a>
        </div>

        <LoginButton type="submit">Log in</LoginButton>
      </form>
    </FormContainer>
  );
}
