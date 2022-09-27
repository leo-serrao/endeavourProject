import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 3.39rem;
    width: 100%;

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
      }
    }

    .forgotPassword {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 4.6rem;

      label {
        color: var(--gray-100);
        display: flex;
        align-items: center;

        span {
          margin-left: 1rem;
        }

        input {
          display: none;
        }
      }

      a {
        color: var(--gray-100);
        cursor: pointer;

        &:hover {
          color: var(--blue-200);
          transition: all 0.2s ease-in;
        }
      }

      .inputUnchecked::before {
        content: "";
        display: flex;
        box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.3);
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 6px;
        margin-right: -1.15rem;
      }

      .inputChecked::before {
        content: "";
        display: flex;
        box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.3);
        background-color: var(--blue-500);
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 6px;
        margin-right: -1.15rem;
      }

      .checkedIcon {
        color: var(--white);
        cursor: pointer;
      }

      .uncheckedIcon {
        color: transparent;
        cursor: pointer;
      }
    }
  }
`;

export const LoginButton = styled.button`
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
  box-shadow: 0 2px 3px 1px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: var(--blue-500);
    transition: all 0.2s ease-in;
  }
`;

export const InvalidCredentials = styled.span`
  color: var(--red);
  margin-bottom: 1rem;
`;
