import { ArrowLeft } from "phosphor-react";
import { useContext } from "react";
import { RoutesContext } from "../../../contexts/RouteContext";

import {
  InfoContainer,
  InfoRow,
  InfoRowMultiple,
  InfoRowRight,
  MainProfileContainer,
  ProfileIncrementContainer,
} from "./styles";

export function ProfileIncrement() {
  const { defineProfileRoute, profile } = useContext(RoutesContext);

  return (
    <ProfileIncrementContainer>
      <div
        className="backButton"
        onClick={() => {
          defineProfileRoute("profiles");
        }}
      >
        <div>
          <ArrowLeft />
          <span>Back</span>
        </div>
      </div>
      <h1>PROFILE INCREMENT</h1>

      <MainProfileContainer>
        <div className="mainContainerHeader">
          <div className="cardOut">{profile.id}</div>
          <div>
            <h2>
              {profile.first_name} {profile.last_name}
            </h2>
            <span>Created by Leonardo Serrão on 09/03/2022</span>
          </div>

          <button>EDIT</button>
        </div>

        <InfoContainer>
          <div className="leftSide">
            <InfoRow>
              <h3>Description</h3>
              <span>{profile.description}</span>
            </InfoRow>

            <InfoRowMultiple>
              <InfoRow>
                <h3>Email</h3>
                <span>{profile.email}</span>
              </InfoRow>
              <InfoRow>
                <h3>Phone Number</h3>
                <span>{profile.phone_number}</span>
              </InfoRow>
            </InfoRowMultiple>
            <InfoRowMultiple>
              <InfoRow>
                <h3>Linkedin URL</h3>
                <span>{profile.linkedin_url}</span>
              </InfoRow>
              <InfoRow>
                <h3>City</h3>
                <span>{profile.city}</span>
              </InfoRow>
            </InfoRowMultiple>
            <InfoRowMultiple>
              <InfoRow>
                <h3>GitHub URL</h3>
                <span>{profile.github_url}</span>
              </InfoRow>
              <InfoRow>
                <h3>Country</h3>
                <span>{profile.country}</span>
              </InfoRow>
            </InfoRowMultiple>
          </div>
          <div className="rightSide">
            <InfoRowRight>
              <h3>Seniority</h3>
              <span>{profile.seniority}</span>
            </InfoRowRight>
            <InfoRowRight>
              <h3>Years of Experience</h3>
              <span>{profile.years_experience}</span>
            </InfoRowRight>
            <InfoRowRight>
              <h3>Salary Intention</h3>
              <span>R$: {profile.salary_intention}</span>
            </InfoRowRight>
            <InfoRowRight>
              <h3>English</h3>
              <span>{profile.english}</span>
            </InfoRowRight>
            <InfoRowRight>
              <h3>Spanish</h3>
              <span>{profile.spanish}</span>
            </InfoRowRight>
          </div>
        </InfoContainer>
      </MainProfileContainer>
    </ProfileIncrementContainer>
  );
}
