import { AssociatesContainer } from "../../styles/Routes/Associates.styles";
import { MagnifyingGlass, ArrowRight } from "phosphor-react";
import { useEffect, useState } from "react";
import { api } from "../../services/apiClient";

export default function Associates() {
  const [users, setUsers] = useState<any>();

  async function getUsers() {
    const response = await api.get("/users");
    setUsers([...response.data]);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <AssociatesContainer>
      <div className="superior">
        <div className="cabeçario">
          <h1> ASSOCIATES</h1>
          <span>Last updated by Mapfre Mapfre on 09/03/2022 09:23 AM</span>
        </div>
        <label>
          <MagnifyingGlass size={25} />
          <input type="text" placeholder="Search for associates..." />
          <ArrowRight size={25} />
        </label>
      </div>

      <div className="tabela">
        <table>
          <tr>
            <th>S.No</th>
            <th className="title"> Name </th>
            <th>Email</th>
          </tr>
          {users?.map((user: any) => {
            return (
              <tr key={user.id}>
                <td>{user.tcsId}</td>
                <td>
                  {user.firstName} {user.lastName}
                </td>
                <td>{user.email}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </AssociatesContainer>
  );
}
