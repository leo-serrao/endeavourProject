import { useContext } from "react";
import { NewWorkItemForm } from "../../components/OpenPositionsComponents/NewWorkItemForm";
import OpenPositionsDashboard from "../../components/OpenPositionsComponents/OpenPositionDashboard";
import { WorkIncrement } from "../../components/OpenPositionsComponents/WorkIncrement";
import { RoutesContext } from "../../contexts/RouteContext";

export default function OpenPositions() {
  const { positionsRoute } = useContext(RoutesContext);

  return (
    <>
      {positionsRoute === "positions" && <OpenPositionsDashboard />}
      {positionsRoute === "workItemForm" && <NewWorkItemForm />}
      {positionsRoute === "workItemIncrement" && <WorkIncrement />}
    </>
  );
}
