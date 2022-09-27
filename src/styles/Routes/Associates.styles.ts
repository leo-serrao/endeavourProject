import styled from "styled-components";

export const AssociatesContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 2rem;
  box-shadow: 0 0px 5px 1px rgba(0, 0, 0, 0.3);
  border-radius: 0.25rem;
  height: 30rem;
  overflow-y: scroll;
  flex-direction: column;

  &::-webkit-scrollbar {
    width: 1.5rem;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--blue-900); /* color of the scroll thumb */
    border-radius: 1.25rem; /* roundness of the scroll thumb */
    border: 0.6rem solid var(--white); /* creates padding around scroll thumb */
  }

  .superior {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 0.6rem;
  }

  h1 {
    color: var(--gray-300);

    margin-bottom: 0.5rem;
  }

  span {
    color: var(--gray-100);
    margin-bottom: 2rem;
  }

  label {
    display: flex;
    height: 3rem;
    top: 9rem;
    box-shadow: 0 0px 5px 1px rgba(0, 0, 0, 0.3);
    border-radius: 0.3rem;
    align-items: center;
    padding: 1rem;
    flex-direction: row;
    color: var(--gray-300);

    input {
      width: 100%;
      border: none;
      outline: none;
      margin-top: 0.2rem;
      margin-left: 0.5rem;
    }
  }
  table {
    width: 100%;
    border-collapse: collapse;
    border-radius: 0.03rem;
    box-shadow: 0 0px 5px 1px rgba(0, 0, 0, 0.3);
    border-radius: 0.3rem;
  }

  td {
    border-top: 4px solid rgba(0, 0, 0, 0.1);
    padding: 1rem;
    border-collapse: collapse;
    color: var(--gray-300);
  }

  tr:nth-child(even) {
    background-color: rgba(176, 225, 255, 0.3);
    margin: 1rem;
  }

  th {
    background-color: var(--white);
    height: 2.7rem;
    text-align: left;
    padding-left: 1rem;
    color: var(--gray-300);
  }

  th:first-child {
    border-top-left-radius: 4px;
  }

  th:last-child {
    border-top-right-radius: 4px;
  }

  .title {
    width: 50%;
  }
`;
