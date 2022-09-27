/* eslint-disable prettier/prettier */
import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const Title = styled(Dialog.Title)`
  color: var(--gray-300);
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: var(--white);
  box-shadow: 0 0px 5px 1px rgba(0, 0, 0, 0.3);

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border-radius: 6px;
      border: 0;
      color: var(--gray-300);
      padding: 1rem;
      box-shadow: 0 0px 5px 1px rgba(0, 0, 0, 0.3);
      
      &:focus {
        outline: 2px solid var(--blue-200);
      }

      &::placeholder {
        color: var(--gray-100);
      }
    }

    label {
      display: flex;
      flex-direction: column;
      font-weight: bold;
      position: relative;
      margin-bottom: 1rem;
      

      span {
        max-width: 10rem;
        width: 35%;
        margin-bottom: 0.5rem;
        color: var(--gray-300);
      }

      input {
        width: 100%;
      }

      select {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        padding: 1rem;
        width: 100%;
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
        right: 1rem;
        bottom: 0.8rem;
        display: hidden;
      }
    }

    button[type="submit"] {
      height: 58px;
      border: 0;
      background: var(--blue-300);
      color: var(--white);
      font-weight: bold;
      padding: 0 1.25rem;
      border-radius: 6px;
      margin-top: 1.5rem;
      cursor: pointer;

      &:not(:disabled):hover {
        background-color: var(--blue-500);
        transition: background-color 0.2s;
      }

      &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
      }
    }
  }
`;


export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: var(--gray-300);
`;
