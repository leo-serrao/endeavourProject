import { RedefinePasswordForm } from "../components/RedefinePassword";
import { ForgotPasswordForm } from "../components/ForgotPasswordForm";
import { LoginForm } from "../components/LoginForm/index";

import { RoutesContext } from "../contexts/RouteContext";
import { withSSRGuest } from "../utils/withSSRGuest";
import type { NextPage } from "next";
import { useContext } from "react";

import { Aside, LoginContainer, MainContent } from "../styles/Login.styles";
import asideIlustration from "../assets/aside-ilustration2.png";
import logoEndeavour from "../assets/logo-endeavour.svg";
import logoTcs from "../assets/logo-tcs.svg";

const Login: NextPage = () => {
  const { loginRoute } = useContext(RoutesContext);
  return (
    <LoginContainer>
      <Aside>
        <img src={logoTcs.src} alt="" className="tcsLogo" />
        <div className="welcomeMessage">
          <h1>Welcome back!</h1>
          <p>Access your account</p>
        </div>

        <img src={asideIlustration.src} alt="" className="asideIlustration" />

        <div className="asideFooter">
          <strong>Terms of Use | Browser and Display Compatibility</strong>
          <p>
            Copyright © 2022 Tata Consultancy Services <br /> Entry to this site
            is restricted to employees and affiliates.
          </p>
        </div>
      </Aside>
      <MainContent>
        <div className="mainContainer">
          <img src={logoEndeavour.src} alt="" />

          {loginRoute === "login" && <LoginForm />}
          {loginRoute === "forgot" && <ForgotPasswordForm />}
          {loginRoute === "reset" && <RedefinePasswordForm />}
        </div>
      </MainContent>
    </LoginContainer>
  );
};

export default Login;

export const getServerSideProps = withSSRGuest(async (ctx) => {
  return {
    props: {},
  };
});
