import React, { useContext, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

import {
  ArrowRight,
  Funnel,
  MagnifyingGlass,
  PencilSimple,
  Trash,
  Plus,
} from "phosphor-react";

import {
  OpenPositionsStyle,
  TableStyle,
} from "../../../styles/Routes/OpenPositions.styles";
import { RoutesContext } from "../../../contexts/RouteContext";
import { api } from "../../../services/apiClient";

export default function OpenPositionsDashboard() {
  const { definePositionsRoute } = useContext(RoutesContext);
  const [positions, setPositions] = useState<any>();

  async function getPositions() {
    const response = await api.get("/vacancies");
    setPositions([...response.data]);
  }

  useEffect(() => {
    getPositions();
  }, []);

  return (
    <OpenPositionsStyle>
      <TableStyle>
        <div className="container">
          <tr id="header">
            <td id="headerTd">
              <label>
                <h1 className="title">OPEN POSITION</h1>
                <span className="lastupdate">
                  Last updated by Mapfre on 09/03/2022 09:23 AM
                </span>
              </label>
            </td>
            <td id="tableheader">
              <form className="headerelements" action="">
                <label className="search">
                  <MagnifyingGlass size={25} />
                  <input
                    type="search"
                    id="texto"
                    placeholder="Search for positions"
                  />
                  <ArrowRight size={25} />
                </label>
                <button className="filter">
                  <Funnel size={25} />
                </button>
                <button
                  className="newworkbutton"
                  onClick={() => definePositionsRoute("workItemForm")}
                >
                  NEW WORKITEM
                </button>
              </form>
            </td>
          </tr>
          <Table className="table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Title</th>
                <th>Discription</th>
                <th>Status</th>
                <th></th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="tbody">
              {positions?.map((position: any) => {
                return (
                  <tr
                    className="rows"
                    key={position.id}
                    onClick={() => {
                      definePositionsRoute("workItemIncrement", position);
                    }}
                  >
                    <td className="td">{position.id}</td>
                    <td className="td">{position.title}</td>
                    <td className="td">{position.description}</td>
                    <td className="td">
                      <button className="inactivebutton">
                        {position.positionStatus.name}
                      </button>
                    </td>
                    <td className="td"></td>
                    <td className="td">
                      <div>
                        <button className="edit">
                          <PencilSimple size={18} />
                        </button>
                        <button className="trash">
                          <Trash size={18} />
                        </button>
                        <button className="add">
                          <Plus size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </TableStyle>
    </OpenPositionsStyle>
  );
}
