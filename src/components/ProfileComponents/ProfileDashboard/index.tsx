import {
  ArrowRight,
  Funnel,
  MagnifyingGlass,
  PencilSimple,
} from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { RoutesContext } from "../../../contexts/RouteContext";
import { api } from "../../../services/apiClient";
import { ProfileContainer } from "../../../styles/Routes/Profile.styles";

export function ProfileDashboard() {
  const { defineProfileRoute } = useContext(RoutesContext);
  const [profiles, setProfiles] = useState<any>();

  async function getProfiles() {
    const response = await api.get("/candidates");
    setProfiles([...response.data]);
  }

  useEffect(() => {
    getProfiles();
  }, []);

  return (
    <ProfileContainer>
      <form action="">
        <div className="superior">
          <div className="cabeçario">
            <h1>PROFILE</h1>
            <span>Last updated by Mapfre Mapfre on 09/03/2022 09:23 AM</span>
          </div>
          <div className="searchArea">
            <label>
              <MagnifyingGlass size={25} />
              <input type="text" placeholder="Search for pofile..." />
              <ArrowRight size={25} />
            </label>
            <button id="filter">
              <Funnel size={25} />
            </button>
            <button
              id="newProfile"
              onClick={() => defineProfileRoute("profileForm")}
              type="submit"
            >
              <h3>NEW PROFILE</h3>
            </button>
          </div>
        </div>
      </form>

      <table>
        <thead>
          <tr id="tableHead">
            <th>S.No</th>
            <th>Title</th>
            <th>Email</th>
            <th>Skill</th>
            <th></th>
            <th>Actions</th>
          </tr>
          {profiles?.map((profile: any) => {
            return (
              <tr id="tableBody" key={profile.id}>
                <td>{profile.id}</td>
                <td
                  onClick={() =>
                    defineProfileRoute("profileIncrement", profile)
                  }
                >
                  {profile.first_name} {profile.last_name}
                </td>
                <td>{profile.email}</td>
                <td>
                  <label className="done">{profile.skillTag.name}</label>
                </td>
                <td></td>
                <td>
                  <button>
                    <PencilSimple size={25} />
                  </button>
                </td>
              </tr>
            );
          })}
        </thead>
      </table>
    </ProfileContainer>
  );
}
