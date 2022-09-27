import styled from "styled-components";

export const MainContent = styled.div`
  display: flex;

  main {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding: 2rem;

    @media (min-height: 1115px) {
      height: 65rem;
    }
  }
`;
