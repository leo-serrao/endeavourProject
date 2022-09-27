import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 17rem;
  height: 6rem;
  border-radius: 4px;
  box-shadow: 0 0px 5px 1px rgba(0, 0, 0, 0.3);
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  background-color: var(--white);

  p {
    color: var(--gray-300);
    font-weight: 700;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;

    button {
      position: absolute;
      right: 0;
      bottom: 0;
      line-height: 0;
      border-radius: 6px;
      border: 0;
      background: transparent;
      padding: 0.2rem;
      color: var(--red);

      &:hover {
        color: var(--blue-900);
      }
    }
  }
`;

interface StatusProps {
  statusColor: string;
}

export const Status = styled.div<StatusProps>`
  display: flex;
  align-items: center;
  text-align: center;
  color: var(--white);
  padding: 0.2rem 0.5rem;
  background-color: var(--red);
  height: 2rem;
  border-radius: 4px;

  ${(props) => props.statusColor === "Urgent" && "background-color: var(--red)"}
  ${(props) =>
    props.statusColor === "Resolve" && "background-color: var(--blue-200)"}
`;
