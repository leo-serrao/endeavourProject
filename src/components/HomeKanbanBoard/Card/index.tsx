import { Trash } from "phosphor-react";
import { useContext } from "react";
import { KanbanContext } from "../../../contexts/KanbanContext";
import { CardContainer, Status } from "./styles";

export function Card({ data }: any) {
  const {
    done,
    positions,
    candidates,
    defineCandidates,
    definePositions,
    defineDone,
  } = useContext(KanbanContext);

  function handleDeleteCard() {
    const candidatesWithoutDeletedOne = candidates.filter((candidate) => {
      return candidate.description !== data.description;
    });

    defineCandidates([...candidatesWithoutDeletedOne]);

    const positionsWithoutDeletedOne = positions.filter((position) => {
      return position.description !== data.description;
    });

    definePositions([...positionsWithoutDeletedOne]);

    const doneWithoutDeletedOne = done.filter((card) => {
      return card.description !== data.description;
    });

    defineDone([...doneWithoutDeletedOne]);
  }
  return (
    <CardContainer>
      <p>{data.description}</p>
      <div>
        <Status statusColor={data.status}>{data.status}</Status>
        <button onClick={handleDeleteCard}>
          <Trash size={20} className="trashIcon" />
        </button>
      </div>
    </CardContainer>
  );
}
