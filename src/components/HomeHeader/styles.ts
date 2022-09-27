import styled from "styled-components";

export const HomeHeaderContainer = styled.header`
  display: flex;
  width: 100%;
  height: 4.7rem;
  box-shadow: 0 0px 5px 1px rgba(0, 0, 0, 0.3);

  .menu {
    background-color: var(--blue-200);
    max-width: 5.2rem;
    min-width: 4.8rem;
    width: 6.7%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
      background-color: var(--blue-500);
      transition: all 0.2s ease-in;
    }
  }

  .headerContent {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 1.6rem;

    .dropDown {
      display: flex;
      justify-content: center;

      .dropDownIcon {
        margin-top: 0.4rem;
        margin-right: 0.5rem;
      }

      .dropDownTitle {
        display: flex;
        flex-direction: column;

        strong {
          color: var(--blue-200);
        }
      }
    }

    .userMenu {
      button {
        background-color: transparent;
        line-height: 0;
        border: 0;
        margin: 0.3rem;
        color: var(--blue-200);

        &:hover {
          color: var(--gray-100);
        }
      }
    }
  }
`;

interface UserButtonActiveParams {
  isDropDownActive: Boolean;
}

export const UserButton = styled.button<UserButtonActiveParams>`
  position: relative;

  .dropDownMenu {
    position: absolute;
    right: 0.8rem;
    top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--blue-200);
    box-shadow: 0 0px 5px 1px rgba(0, 0, 0, 0.3);
    background-color: var(--white);
    border-radius: 6px 0 6px 6px;
    width: 0;
    height: 0;
    display: none;
  }

  .dropDownMenuActive {
    position: absolute;
    right: 0.8rem;
    top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 0.5rem;
    width: 6rem;
    height: 6rem;
    color: var(--blue-200);
    box-shadow: 0 0px 5px 1px rgba(0, 0, 0, 0.3);
    background-color: var(--white);
    border-radius: 6px 0 6px 6px;

    a {
      text-decoration: none;
      color: var(--blue-200);
      padding: 1rem 0 0.5rem 0;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.2rem;

      &:hover {
        color: var(--blue-500);
      }
    }

    div {
      border: 1px solid var(--blue-200);
      width: 75%;
      height: 1px;
      margin-bottom: -0.3rem;
    }
  }
`;
