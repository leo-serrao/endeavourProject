import { Gear, List, SignOut, Stack, UserCircle } from "phosphor-react";
import { useContext, useState } from "react";
import { signOut } from "../../contexts/AuthContext";
import { RoutesContext } from "../../contexts/RouteContext";
import { HomeHeaderContainer, UserButton } from "./styles";

export function HomeHeader() {
  const { defineRoute } = useContext(RoutesContext);
  const [isDropDownActive, setIsDropDownActive] = useState(false);

  function handleOpenDropDown() {
    isDropDownActive ? setIsDropDownActive(false) : setIsDropDownActive(true);
  }

  function handleSignOut() {
    setIsDropDownActive(false);
    signOut();
    defineRoute("dashboard");
  }
  return (
    <HomeHeaderContainer>
      <div className="menu">
        <List size={25} color="#ffffff" />
      </div>

      <div className="headerContent">
        <div className="dropDown">
          <Stack className="dropDownIcon" />
          <div className="dropDownTitle">
            <strong>MANAGE TCS</strong>
            <span>Portfolio</span>
          </div>
        </div>
        <div className="userMenu">
          <UserButton
            isDropDownActive={isDropDownActive}
            onClick={handleOpenDropDown}
          >
            <UserCircle size={25} />
            <div
              className={
                isDropDownActive ? "dropDownMenuActive" : "dropDownMenu"
              }
            >
              <a>
                <Gear size={15} />
                Settings
              </a>
              <div></div>
              <a onClick={handleSignOut}>
                <SignOut size={15} />
                Sign Out
              </a>
            </div>
          </UserButton>
        </div>
      </div>
    </HomeHeaderContainer>
  );
}
