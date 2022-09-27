import styled from "styled-components";

export const WorkIncrementContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-top: -1.5rem;

  h1,
  h2 {
    color: var(--gray-300);
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  .backButton {
    width: 100%;
    display: flex;
    margin-top: 0.5rem;
    cursor: pointer;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--gray-300);
    }
  }
`;

export const MainWorkContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-template-columns: 1.5fr 1fr;
  padding: 0 2rem 1rem;
  box-shadow: 0 0px 5px 1px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  height: 30rem;

  @media (min-height: 1115px) {
    height: 60rem;
  }

  @media (min-height: 900px) and (max-height: 1114px) {
    height: 45rem;
  }

  @media (min-height: 500px) and (max-height: 660px) {
    height: 25rem;
  }

  span {
    color: var(--gray-300);
  }

  .mainContainerHeader {
    position: relative;
    height: 5rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      outline: none;
      background-color: var(--blue-300);
      color: var(--white);
      padding: 0.2rem 1rem;
      border-radius: 4px;

      &:hover {
        background-color: var(--blue-500);
        transition: all 0.2s ease-in;
      }
    }
  }
`;

export const InfoContainer = styled.main`
  display: grid;
  grid-template-columns: 2fr 1fr;
  box-shadow: 0 0px 5px 1px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  align-items: left;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 25px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--blue-900); /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
    border: 10px solid var(--white); /* creates padding around scroll thumb */
  }

  h3 {
    color: var(--gray-300);
    font-size: 0.875rem;
  }

  span {
    font-size: 0.75rem;
  }

  .leftSide {
    height: 20rem;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    border-right: 1px solid rgba(0, 0, 0, 0.3);

    @media (min-height: 1115px) {
      height: 45rem;
    }
    @media (min-height: 901px) and (max-height: 1114px) {
      height: 35rem;
    }

    @media (min-height: 500px) and (max-height: 660px) {
      height: 25rem;
    }
  }

  .rightSide {
    padding-left: 2rem;
    height: 20rem;
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;

    @media (min-height: 925px) {
      margin-top: -15rem;
    }
    @media (min-height: 499px) and (max-height: 586px) {
      padding-top: 6rem;
    }

    @media (min-height: 200px) and (max-height: 499px) {
      padding-top: 4rem;
    }
  }
`;

export const InfoRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export const InfoRowMultiple = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
`;

export const InfoRowRight = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  span {
    width: 50%;
  }
`;
