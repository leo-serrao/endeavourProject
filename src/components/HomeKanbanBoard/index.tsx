/* eslint-disable prettier/prettier */
import { AuthContext } from "../../contexts/AuthContext";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import * as Dialog from "@radix-ui/react-dialog";
import { useContext } from "react";

import {
  InfoContainer,
  MainKanbanContainer,
  KanbanContainer,
  ListContainer,
} from "./styles";
import { NewCardModal } from "./NewCardModal";

import { KanbanContext } from "../../contexts/KanbanContext";
import { ReactSortable } from "react-sortablejs";
import { Card } from "./Card";

export function HomeKanbanBoard() {
  const {
    candidates,
    positions,
    done,
    defineCandidates,
    definePositions,
    defineDone,
  } = useContext(KanbanContext);

  const { user } = useContext(AuthContext);

  return (
    <DndProvider backend={HTML5Backend}>
      <KanbanContainer>
        <h1>Hello {user?.name} {user?.lastName}</h1>

        <MainKanbanContainer>
          <div className="mainContainerHeader">
            <div>
              <h2>WORKITEMS</h2>
              <span>What would you like to do today?</span>
            </div>

            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button>NEW WORKITEM</button>
              </Dialog.Trigger>

              <NewCardModal />
            </Dialog.Root>
          </div>

          <InfoContainer>
            <ReactSortable
              list={candidates}
              setList={defineCandidates}
              animation={150}
              group="cards"
              onChange={(order, sortable, evt) => { }}
              onEnd={(evt) => { }}
            >
              <ListContainer>
                <div className="listHeader">
                  <h3>Candidates</h3>
                </div>

                <div className="listBody">
                  <ReactSortable
                    list={candidates}
                    setList={defineCandidates}
                    animation={150}
                    group="cards"
                    onChange={(order, sortable, evt) => { }}
                    onEnd={(evt) => { }}
                  >
                    {candidates.map((card: any) => (
                      <Card data={card} key={card.description} />
                    ))}
                  </ReactSortable>
                </div>
              </ListContainer>
            </ReactSortable>

            <ReactSortable
              list={positions}
              setList={definePositions}
              animation={150}
              group="cards"
              onChange={(order, sortable, evt) => { }}
              onEnd={(evt) => { }}
              swap
            >
              <ListContainer>
                <div className="listHeader">
                  <h3>Positions</h3>
                </div>

                <div className="listBody">
                  <ReactSortable
                    list={positions}
                    setList={definePositions}
                    animation={150}
                    group="cards"
                    onChange={(order, sortable, evt) => { }}
                    onEnd={(evt) => { }}
                    swap
                  >
                    {positions.map((card: any) => (
                      <Card data={card} key={card.description} />
                    ))}
                  </ReactSortable>
                </div>
              </ListContainer>
            </ReactSortable>

            <ReactSortable
              list={done}
              setList={defineDone}
              animation={150}
              group="cards"
              onChange={(order, sortable, evt) => { }}
              onEnd={(evt) => { }}
            >
              <ListContainer className="done">
                <div className="listHeader">
                  <h3>Done</h3>
                </div>

                <div className="listBody">
                  <ReactSortable
                    list={done}
                    setList={defineDone}
                    animation={150}
                    group="cards"
                    onChange={(order, sortable, evt) => { }}
                    onEnd={(evt) => { }}
                  >
                    {done.map((card: any) => (
                      <Card data={card} key={card.description} />
                    ))}
                  </ReactSortable>
                </div>
              </ListContainer>
            </ReactSortable>
          </InfoContainer>
        </MainKanbanContainer>
      </KanbanContainer>
    </DndProvider>
  );
}
