import styled from "styled-components";

export const AsideContent = styled.div`
  max-width: 15.5rem;
  min-width: 5.2rem;

  @media (max-width: 1024px) {
    min-width: 4.5rem;
  }

  &:hover {
    width: 100%;
    animation: open 1.5s;
  }

  .asideContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    background: var(--blue-900);
    color: var(--white);
    height: calc(100vh - 4.7rem);
    padding-top: 4.3rem;
    animation: close 0.4s;

    img {
      max-width: 4.8rem;
      width: 100%;
    }

    span {
      width: 0;
      color: transparent;
    }

    &:hover {
      span {
        color: var(--white);
        width: 80%;
        text-align: left;
      }

      .endeavourAsideLogo {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        img {
          max-width: 4.8rem;
          width: 100%;
        }
      }
    }
  }

  @keyframes open {
    from {
      width: 6.5%;
    }

    to {
      width: 100%;
    }
  }

  @media (max-width: 630px) {
    @keyframes open {
      from {
        width: 18%;
      }

      to {
        width: 100%;
      }
    }
  }

  @keyframes close {
    from {
      width: 100%;
    }

    to {
      width: 6.3%;
    }
  }
`;

export const NavButton = styled.button`
  display: flex;
  align-items: center;
  border: 0;
  margin-bottom: 1rem;
  padding: 0.7rem 0 0.7rem 1.8rem;
  line-height: 0;
  background: transparent;
  color: var(--white);
  width: 100%;
  max-height: 3.1rem;
  gap: 1rem;

  &:hover {
    background: var(--blue-500);
    transition: all 0.2s ease-in;
  }

  &:focus {
    background: var(--blue-200);
  }
`;

export const AsideNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;
`;
