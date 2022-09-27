import styled from "styled-components";

export const NewWorkItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;

  h1 {
    color: var(--gray-300);
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  form {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    padding: 1rem 0;
    box-shadow: 0 0px 5px 1px rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    height: 30rem;
    overflow-y: scroll;

    @media (min-height: 1115px) {
      height: 60rem;
    }

    @media (min-height: 900px) and (max-height: 1114px) {
      height: 45rem;
    }

    @media (min-height: 500px) and (max-height: 660px) {
      height: 25rem;
    }

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
  }

  label {
    color: var(--gray-300);
    margin-bottom: 2rem;
    font-weight: bold;
  }

  input {
    border: none;
    box-shadow: 0 0px 5px 1px rgba(0, 0, 0, 0.3);
    padding: 0.5rem;
    margin-top: 0.5rem;
    border-radius: 4px;

    &::placeholder {
      color: var(--gray-100);
    }

    &:focus {
      outline: 2px solid var(--blue-200);
    }
  }

  textarea {
    resize: none;
    border: none;
    box-shadow: 0 0px 5px 1px rgba(0, 0, 0, 0.3);
    padding: 0.5rem;
    margin-top: 0.5rem;
    border-radius: 4px;

    &:focus {
      outline: 2px solid var(--blue-200);
    }
  }

  .formsLeft {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    border-right: 1px solid var(--blue-900);

    label {
      display: flex;
      flex-direction: column;
    }

    .uploadFile {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 2rem;
      margin-bottom: 2rem;

      input[type="file"] {
        display: none;
      }

      div {
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--blue-500);
        cursor: pointer;
      }
    }
  }

  .formsRight {
    display: flex;
    flex-direction: column;
    padding: 2.2rem 1rem 0;

    label {
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      position: relative;
      margin-bottom: 2rem;

      span {
        max-width: 10rem;
        width: 35%;
        margin-right: 0.5rem;
      }

      input {
        width: 100%;
      }

      select {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        width: 100%;
        padding: 0.5rem;
        border-radius: 4px;
        border-style: none;
        outline: none;
        box-shadow: 0 0px 5px 1px rgba(0, 0, 0, 0.3);
        background-color: transparent;
        color: var(--gray-300);
        cursor: pointer;
      }

      .selectArrow {
        position: absolute;
        right: 0.5rem;
        display: hidden;
      }
    }

    .formButtons {
      display: flex;
      width: 100%;
      justify-content: flex-end;

      button[type="submit"] {
        background-color: var(--blue-300);
        border: none;
        outline: none;
        color: var(--white);
        padding: 0.5rem 2rem;
        border-radius: 4px;
        margin-left: 2rem;

        &:hover {
          transition: all 0.2s ease-in;
          background-color: var(--blue-500);
          color: var(--white);
        }
      }

      button {
        background: transparent;
        color: var(--gray-300);
        border: none;

        &:hover {
          color: var(--blue-900);
        }
      }
    }
  }
`;
