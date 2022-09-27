import styled from "styled-components";

export const ErrorBody = styled.div`
  background-color: var(--blue-500);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--white);
  font-size: 1rem;

  @media (max-width: 930px) {
    font-size: 0.765rem;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  img {
    width: 25%;
    margin-bottom: 2rem;
    animation: shake 0.2s;
  }

  .endeavourLogo {
    width: 6%;
    position: fixed;
    left: 1rem;
    bottom: -1rem;
  }

  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-2px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
      transform: rotateZ(-5deg);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
      transform: rotateZ(5deg);
    }
  }
`;
