import styled from "styled-components";

export const OpenPositionsStyle = styled.div`
  display: flex;
  flex-direction: row;
  height: 30rem;
  width: 100%;
  padding: 0;
  justify-content: center;
  align-items: center;
  flex: 1;
  border: 0;
  border-radius: 4px;
  box-shadow: 0 0px 5px 1px rgba(0, 0, 0, 0.3);

  .container {
    width: 100%;
    height: 30rem;
    padding: 1rem 1.8rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    align-items: center;
    justify-content: center;
    margin: 0;
    border-radius: 4px;
    border: 0;
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
  }

  thead {
    color: var(--gray-300);
  }

  .owner {
    display: flex;
    flex-direction: row;
  }

  .title {
    color: var(--gray-300);
  }

  .lastupdate {
    font-weight: normal;
    color: var(--gray-100);
  }

  #tableheader {
    width: 430px;
    padding: 0;
    border: 0;
  }

  #header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.5rem 0 0;
    width: 100%;
    border: 0;
  }

  #headerTd {
    padding: 0.5rem 0;
    border: 0;
  }

  .headerelements {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  #textoowner {
    margin-top: 15px;
    font-size: 14px;
    font-weight: normal;
    font: 400 1rem Poppins, sans - serif;
    font-family: "Poppins";
  }

  .search {
    color: var(--gray-100);
    display: flex;
    flex-direction: row;
    border-radius: 4px;
    border: 0;
    height: 3rem;
    box-shadow: 0 0px 5px 1px rgba(0, 0, 0, 0.3);
    justify-content: center;
    align-items: center;
    padding: 1rem;

    input {
      margin-left: 0.5rem;
      outline: none;
    }
  }

  .newworkbutton {
    color: #fff;
    background-color: var(--blue-300);
    height: 3rem;
    padding: 0.5rem;
    border-radius: 4px;
    border: 0;
    font-weight: bold;
    box-shadow: 0 0px 5px 1px rgba(0, 0, 0, 0.3);
  }

  .filter {
    color: var(--gray-300);
    background-color: transparent;
    padding: 0.8rem;
    line-height: 0;
    height: 3rem;
    border-radius: 4px;
    border: 0;
    box-shadow: 0 0px 5px 1px rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .inactivebutton {
    color: #fff;
    background-color: #ff5555;
    width: 70px;
    height: 30px;
    border-radius: 4px;
    border: 0;
    justify-content: center;
    font: 400 1rem Poppins, sans - serif;
    font-family: "Poppins";
    box-shadow: 0 0px 2px 1px rgba(0, 0, 0, 0.2);
  }

  .activebutton {
    color: var(--white);
    background-color: var(--blue-150);
    width: 70px;
    height: 30px;
    border-radius: 4px;
    border: 0;
    justify-content: center;
    font: 400 1rem Poppins, sans - serif;
    font-family: "Poppins";
    box-shadow: 0 0px 2px 1px rgba(0, 0, 0, 0.2);
  }

  .donebutton {
    color: var(--white);
    background-color: var(--green);
    width: 70px;
    height: 30px;
    border-radius: 4px;
    border: 0;
    justify-content: center;
    font: 400 1rem Poppins, sans - serif;
    font-family: "Poppins";
    box-shadow: 0 0px 2px 1px rgba(0, 0, 0, 0.2);
  }

  .edit,
  .add,
  .squares {
    color: #34a1ff;
    background-color: transparent;
    border: 0;
  }

  th {
    padding: 10px;
    text-align: left;

    &:last-child {
      text-align: center;
    }
  }

  td {
    text-align: left;
    padding: 0.5rem 1rem;
    color: var(--gray-300);
    border-top: 4px solid rgba(0, 0, 0, 0.1);

    button {
      background: transparent;
      border: 0;
      color: var(--blue-150);
    }

    &:nth-child(2) {
      width: 45%;
    }

    &:nth-child(3) {
      width: 40%;
    }

    &:last-child {
      align-items: right;
      text-align: right;
    }
  }

  .trash {
    color: #ff5555;
    background-color: transparent;
    margin: 5px;
    border: 0;
  }

  #texto {
    border: 0;
  }
`;

export const TableStyle = styled.table`
  width: 100%;
  height: 30rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  align-items: center;
  justify-content: center;
  margin: 0;
  border-radius: 4px;
  border: 0;

  .table {
    margin-top: 20px;
    border-spacing: 0;
    border: 0;
    width: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
    box-shadow: 0 0px 5px 1px rgba(0, 0, 0, 0.3);
    border-radius: 4px;
  }

  .tbody tr:nth-child(odd) {
    background-color: rgba(176, 225, 255, 0.3);
  }
`;
