import { RoutesContext } from "../../contexts/RouteContext";
import { useContext } from "react";

import { House, MagnifyingGlass, UserFocus, UsersThree } from "phosphor-react";

import LogoAside from "../../assets/logo-endeavour-white.svg";
import { AsideContent, AsideNav, NavButton } from "./styles";

export function HomeSideBar() {
  const { defineRoute, defineProfileRoute, definePositionsRoute } =
    useContext(RoutesContext);

  function defineProfileRoutes() {
    defineRoute("profile");
    defineProfileRoute("profiles");
  }

  function definePositionsRoutes() {
    defineRoute("open-positions");
    definePositionsRoute("positions");
  }

  return (
    <AsideContent>
      <aside className="asideContainer">
        <AsideNav>
          <NavButton onClick={() => defineRoute("dashboard")}>
            <House size={25} />
            <span>Home</span>
          </NavButton>
          <NavButton onClick={definePositionsRoutes}>
            <MagnifyingGlass size={25} />
            <span>Open Positions</span>
          </NavButton>
          <NavButton onClick={defineProfileRoutes}>
            <UserFocus size={25} />
            <span>Profile</span>
          </NavButton>
          <NavButton onClick={() => defineRoute("associates")}>
            <UsersThree size={25} />
            <span>Associates</span>
          </NavButton>
        </AsideNav>
        <div className="endeavourAsideLogo">
          <img src={LogoAside.src} alt="" />
        </div>
      </aside>
    </AsideContent>
  );
}
