import { HomeKanbanBoard } from "../../components/HomeKanbanBoard/index";
import { KanbanContextProvider } from "../../contexts/KanbanContext";

export default function Dashboard() {
  return (
    <KanbanContextProvider>
      <HomeKanbanBoard />
    </KanbanContextProvider>
  );
}
