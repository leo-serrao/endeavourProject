import { ProfileIncrement } from "../../components/ProfileComponents/ProfileIncrement";
import { ProfileDashboard } from "../../components/ProfileComponents/ProfileDashboard";
import { NewProfileForm } from "../../components/ProfileComponents/NewProfileForm";
import { RoutesContext } from "../../contexts/RouteContext";
import { useContext } from "react";

export default function Profile() {
  const { profileRoute } = useContext(RoutesContext);

  return (
    <>
      {profileRoute === "profiles" && <ProfileDashboard />}
      {profileRoute === "profileForm" && <NewProfileForm />}
      {profileRoute === "profileIncrement" && <ProfileIncrement />}
    </>
  );
}
