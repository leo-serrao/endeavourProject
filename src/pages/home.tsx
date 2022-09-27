import { RoutesContext } from "../contexts/RouteContext";
import { withSSRAuth } from "../utils/withSSRAuth";
import { useContext } from "react";

import HomeLayout from "../components/HomeLayout/index";
import { HomeHeader } from "../components/HomeHeader";

import OpenPositions from "./Routes/openPositions";
import Associates from "./Routes/associates";
import Dashboard from "./Routes/dashboard";
import Profile from "./Routes/profile";

import { HomeContainer } from "../styles/Home.styles";

export default function Home() {
  const { route } = useContext(RoutesContext);

  return (
    <HomeContainer>
      <HomeHeader />
      <HomeLayout>
        {route === "dashboard" && <Dashboard />}
        {route === "open-positions" && <OpenPositions />}
        {route === "profile" && <Profile />}
        {route === "associates" && <Associates />}
      </HomeLayout>
    </HomeContainer>
  );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
