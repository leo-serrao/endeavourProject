import styled from "styled-components";

export const ResetFormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: var(--gray-300);

  h1 {
    margin-bottom: 2rem;
    margin-top: 2rem;
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 1rem;
    width: 100%;

    a {
      cursor: pointer;

      &:hover {
        color: var(--blue-200);
        transition: all 0.2s ease-in;
      }
    }

    & > label {
      display: flex;
      border-radius: 6px;
      padding: 0.9rem 0.687rem;
      margin-bottom: 1rem;
      box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.2);
      width: 100%;

      &:focus-within {
        outline: 2px solid var(--blue-200);
      }

      input {
        font-size: 1rem;
        width: 100%;
        border: 0;
        outline: 0;
        margin-left: 0.5rem;

        &::placeholder {
          color: var(--gray-300);
        }
      }
    }
  }
`;

export const ResetButton = styled.button`
  background-color: var(--blue-200);
  border: 0;
  outline: 0;
  display: flex;
  padding: 0.5rem;
  align-items: center;
  justify-content: center;
  width: 17.81rem;
  font-weight: 700;
  font-size: 1rem;
  color: var(--white);
  border-radius: 30px;
  margin-top: 5rem;
  margin-bottom: 0.5rem;
  box-shadow: 0 2px 3px 1px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: var(--blue-500);
    transition: all 0.2s ease-in;
  }
`;
