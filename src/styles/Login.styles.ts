import styled from "styled-components";

export const LoginContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&display=swap");
  font-family: "Poppins", sans-serif;
  display: flex;
  height: 95vh;

  @media (max-width: 930px) {
    padding: 0 2rem;
  }
`;

export const Aside = styled.aside`
  background-color: var(--blue-500);
  color: var(--white);
  max-width: 32rem;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10.12rem 1.37rem 1.37re;

  & > h1 {
    margin-top: 7rem;
  }

  & > p {
    font-size: 0.875rem;
  }

  .tcsLogo {
    width: 12rem;
    min-width: 8rem;
    position: fixed;
    top: 5rem;
  }

  .welcomeMessage {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 30%;
  }

  .asideIlustration {
    position: fixed;
    bottom: 3rem;
    max-width: 32rem;
    width: 100%;
  }

  .asideFooter {
    position: fixed;
    bottom: 1rem;
    font-size: 0.775rem;
  }

  @media (max-width: 930px) {
    display: none;
  }
`;

export const MainContent = styled.main`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  .mainContainer {
    max-width: 30.25rem;
    width: 100%;
    height: 29.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 930px) {
      margin-top: -5rem;
    }
  }
`;
