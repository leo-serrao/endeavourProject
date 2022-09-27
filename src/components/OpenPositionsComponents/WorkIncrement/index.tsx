import { ArrowLeft } from "phosphor-react";
import { useContext } from "react";
import { RoutesContext } from "../../../contexts/RouteContext";

import {
  InfoContainer,
  InfoRow,
  InfoRowMultiple,
  InfoRowRight,
  MainWorkContainer,
  WorkIncrementContainer,
} from "./styles";

export function WorkIncrement() {
  const { position, definePositionsRoute } = useContext(RoutesContext);

  return (
    <WorkIncrementContainer>
      <div
        className="backButton"
        onClick={() => {
          definePositionsRoute("positions");
        }}
      >
        <div>
          <ArrowLeft />
          <span>Back</span>
        </div>
      </div>
      <h1>WORKITEM INCREMENT</h1>

      <MainWorkContainer>
        <div className="mainContainerHeader">
          <div>
            <h2>{position.title}</h2>
            <span>Created by Leonardo Serrão on 09/03/2022</span>
          </div>

          <button>EDIT</button>
        </div>

        <InfoContainer>
          <div className="leftSide">
            <InfoRow>
              <h3>Description</h3>
              <span>{position.description}</span>
            </InfoRow>
            <InfoRow>
              <h3>Linkedin URL</h3>
              <span>{position.linkedinUrl}</span>
            </InfoRow>
            <InfoRowMultiple>
              <InfoRow>
                <h3>Skill</h3>
                <span>{position.mainSkill.name}</span>
              </InfoRow>
              <InfoRow>
                <h3>Team Name</h3>
                <span>{position.teamName}</span>
              </InfoRow>
              <InfoRow>
                <h3>English</h3>
                <span>{position.english}</span>
              </InfoRow>
            </InfoRowMultiple>
            <InfoRowMultiple>
              <InfoRow>
                <h3>Seniority</h3>
                <span>{position.seniority}</span>
              </InfoRow>
              <InfoRow>
                <h3>Experience (in Years)</h3>
                <span>{position.yearsExperience}</span>
              </InfoRow>
              <InfoRow>
                <h3>Spanish</h3>
                <span>{position.spanish}</span>
              </InfoRow>
            </InfoRowMultiple>
            <InfoRowMultiple>
              <InfoRow>
                <h3>Role</h3>
                <span>{position.role.name}</span>
              </InfoRow>
              <InfoRow>
                <h3>Customer Interview</h3>
                <span>{position.customerInterview ? "Yes" : "No"}</span>
              </InfoRow>
              <InfoRow>
                <h3>New Position</h3>
                <span>{position.newPosition ? "Yes" : "No"}</span>
              </InfoRow>
            </InfoRowMultiple>
            <InfoRowMultiple>
              <InfoRow>
                <h3>Manager</h3>
                <span>
                  {position.manager.firstName} {position.manager.lastName}
                </span>
              </InfoRow>
              <InfoRow>
                <h3>Office Location</h3>
                <span>
                  {position.officeLocation.city} {" - "}
                  {position.officeLocation.state}
                </span>
              </InfoRow>
              <InfoRow>
                <h3>Won</h3>
                <span>{position.won}</span>
              </InfoRow>
            </InfoRowMultiple>
            <InfoRowMultiple>
              <InfoRow>
                <h3>RGS</h3>
                <span>{position.rgs}</span>
              </InfoRow>
              <InfoRow>
                <h3>REQ</h3>
                <span>{position.req}</span>
              </InfoRow>
              <InfoRow>
                <h3>RGS Confirmed</h3>
                <span>{position.rgsConfirmed ? "Yes" : "No"}</span>
              </InfoRow>
            </InfoRowMultiple>
          </div>
          <div className="rightSide">
            <InfoRowRight>
              <h3>Status :</h3>
              <span>{position.positionStatus.name}</span>
            </InfoRowRight>
            <InfoRowRight>
              <h3>Priority :</h3>
              <span>{position.priority ? "Yes" : "No"}</span>
            </InfoRowRight>
            <InfoRowRight>
              <h3>Amount :</h3>
              <span>R$: {position.amountVacancy}</span>
            </InfoRowRight>
            <InfoRowRight>
              <h3>Work Model :</h3>
              <span>{position.workModel}</span>
            </InfoRowRight>
            <InfoRowRight>
              <h3>Working Hours :</h3>
              <span>{position.workingHours}</span>
            </InfoRowRight>
          </div>
        </InfoContainer>
      </MainWorkContainer>
    </WorkIncrementContainer>
  );
}
