import styled from "styled-components";

export const KanbanContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;

  h1,
  h2 {
    color: var(--gray-300);
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  .done {
    opacity: 0.6;
  }
`;

export const MainKanbanContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem 1rem;
  box-shadow: 0 0px 5px 1px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  height: 30rem;

  .done {
    opacity: 0.6;
  }

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
  display: flex;
  width: 100%;
  grid-gap: 1rem;
  border-top: 1px solid var(--gray-100);
  overflow: scroll;

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
`;

export const ListContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  position: relative;
  height: 20rem;
  margin-bottom: 0.5rem;

  @media (min-height: 500px) and (max-height: 660px) {
    padding-top: 2rem;
  }

  .listHeader {
    box-shadow: 0 0px 5px 1px rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    padding: 1rem;
    margin-bottom: 0.5rem;

    @media (min-height: 1115px) {
      margin-top: -14rem;
    }

    @media (min-height: 900px) and (max-height: 1114px) {
      margin-top: -6rem;
    }
  }

  .listBody {
    box-shadow: 0 0px 5px 1px rgba(0, 0, 0, 0.3);
    display: flex;
    width: 18.4rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    padding: 1rem;

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

    @media (min-height: 500px) and (max-height: 660px) {
      height: 40rem;
    }
  }
`;
