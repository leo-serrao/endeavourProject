import styled from "styled-components";

export const ProfileContainer = styled.div`
  align-items: left;
  border-radius: 4px;
  box-shadow: 0 0px 5px 1px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  height: 30rem;
  width: 100%;
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

  .superior {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.6rem;
    padding: 1rem 2rem 0;

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

    #filter {
      background-color: transparent;
      color: var(--gray-300);
      padding: 0.8rem;
      box-shadow: 0 0px 5px 1px rgba(0, 0, 0, 0.3);
      border: none;
      border-radius: 4px;
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    #newProfile {
      background-color: var(--blue-300);
      border: 0;
      border-radius: 4px;
      box-shadow: 0 0px 5px 1px rgba(0, 0, 0, 0.3);
      color: var(--white);
      font-size: 0.8;
      padding: 0.5rem;
    }

    .searchArea {
      display: flex;
      gap: 1rem;
      height: 3rem;
    }
  }

  form {
    display: flex;
  }

  h1 {
    color: var(--gray-300);
    font-size: 2rem;
    margin-bottom: 0;
  }

  @media (max-width: 1030px) {
    h1 {
      font-size: 1.5rem;
    }
  }

  table {
    align-items: left;
    border-collapse: collapse;
    color: var(--gray-300);
    margin: 2rem;
    box-shadow: 0 0px 5px 1px rgba(0, 0, 0, 0.3);
    border-radius: 4px;

    th,
    td {
      padding: 10px;
      text-align: left;
    }

    td {
      align-items: center;
      padding-left: 1rem;
      color: var(--gray-300);
      border-top: 4px solid rgba(0, 0, 0, 0.1);

      button {
        background: transparent;
        border: 0;
        color: var(--blue-150);
      }

      &:nth-child(2) {
        width: 25%;
      }

      &:nth-child(3) {
        width: 40%;
      }

      &:last-child {
        button {
          padding-left: 1.3rem;
        }
      }
    }

    tr {
      border-radius: 2px;
    }

    tr:nth-child(even) {
      background-color: rgba(176, 225, 255, 0.3);
    }
  }

  .done {
    background-color: var(--green);
    border: 0;
    border-radius: 4px;
    color: var(--white);
    font-size: 1rem;
    justify-content: space-around;
    line-height: 0;
    padding: 0 0.5rem;
  }

  .undone {
    background-color: var(--red);
    border: 0;
    border-radius: 4px;
    color: var(--white);
    font-size: 1rem;
    justify-content: space-around;
    line-height: 0;
    padding: 0 0.5rem;
  }
`;
