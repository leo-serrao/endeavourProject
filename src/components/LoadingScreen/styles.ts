import styled from "styled-components";

export const LoadingContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
  width: 100%;
  height: 100vh;
  color: var(--white);

  video {
    width: 15rem;
  }
`;
