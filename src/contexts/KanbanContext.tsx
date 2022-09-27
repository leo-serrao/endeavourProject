import { createContext, ReactNode, useEffect, useState } from "react";

interface KanbanContextType {
  defineCandidates: (candidates: object[]) => void;
  definePositions: (positions: object[]) => void;
  defineDone: (dones: object[]) => void;
  createNewCard: (data: any) => void;
  done: any[];
  positions: any[];
  candidates: any[];
}

export const KanbanContext = createContext({} as KanbanContextType);

interface KanbanContextProviderProps {
  children: ReactNode;
}

export function KanbanContextProvider({
  children,
}: KanbanContextProviderProps) {
  const [candidates, setCandidates] = useState<object[]>([]);
  const [positions, setPositions] = useState<object[]>([]);
  const [done, setDone] = useState<object[]>([]);

  useEffect(() => {
    // eslint-disable-next-line prettier/prettier
    const LocalCandidates = localStorage.getItem("@edeavourKanban-candidates:1.0.0");
    if (LocalCandidates) {
      const candidatesParse = JSON.parse(LocalCandidates);
      setCandidates([...candidatesParse]);
    }

    const LocalPositions = localStorage.getItem(
      "@edeavourKanban-positions:1.0.0"
    );
    if (LocalPositions) {
      const positionsParse = JSON.parse(LocalPositions);
      setPositions([...positionsParse]);
    }

    const LocalDone = localStorage.getItem("@edeavourKanban-done:1.0.0");
    if (LocalDone) {
      const doneParse = JSON.parse(LocalDone);
      setDone([...doneParse]);
    }
  }, []);

  useEffect(() => {
    const candidatesJSON = JSON.stringify(candidates);
    localStorage.setItem("@edeavourKanban-candidates:1.0.0", candidatesJSON);

    const positionsJSON = JSON.stringify(positions);
    localStorage.setItem("@edeavourKanban-positions:1.0.0", positionsJSON);

    const doneJSON = JSON.stringify(done);
    localStorage.setItem("@edeavourKanban-done:1.0.0", doneJSON);
  }, [candidates, positions, done]);

  function defineCandidates(newCandidates: any) {
    setCandidates(newCandidates);
  }

  function definePositions(newPositions: any) {
    setPositions(newPositions);
  }

  function defineDone(newDones: any) {
    setDone(newDones);
  }

  function createNewCard(data: any) {
    const currentCandidates = [...candidates];

    setCandidates([...currentCandidates, data]);
  }

  return (
    <KanbanContext.Provider
      value={{
        defineCandidates,
        definePositions,
        defineDone,
        createNewCard,
        done,
        positions,
        candidates,
      }}
    >
      {children}
    </KanbanContext.Provider>
  );
}
