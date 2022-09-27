import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { ArrowSquareDown, Paperclip } from "phosphor-react";
import { NewWorkItemContainer } from "./styles";
import { useContext, useEffect, useState } from "react";
import { RoutesContext } from "../../../contexts/RouteContext";
import { api } from "../../../services/apiClient";

const newWorkFormValidationSchema = z.object({
  amountVacancy: z.string(),
  costumerInterview: z.string(),
  description: z.string(),
  english: z.string(),
  linkedinUrl: z.string(),
  mainSkill: z.object({
    id: z.string(),
  }),
  newPosition: z.string(),
  officeLocation: z.object({
    id: z.string(),
  }),
  positionStatus: z.object({
    id: z.string(),
  }),
  priority: z.string(),
  req: z.string(),
  rgs: z.string(),
  rgsConfirmed: z.string(),
  role: z.object({
    id: z.string(),
  }),
  manager: z.object({
    id: z.string(),
  }),
  seniority: z.string(),
  spanish: z.string(),
  teamName: z.string(),
  title: z.string(),
  won: z.string(),
  workModel: z.string(),
  yearsExperience: z.string(),
  workingHours: z.string(),
});

type NewWorkFormDataProps = z.infer<typeof newWorkFormValidationSchema>;

export function NewWorkItemForm() {
  const newWorkItemForm = useForm<NewWorkFormDataProps>({
    resolver: zodResolver(newWorkFormValidationSchema),
    defaultValues: {
      amountVacancy: "",
      costumerInterview: "",
      description: "",
      english: "",
      linkedinUrl: "",
      mainSkill: {
        id: "",
      },
      newPosition: "",
      officeLocation: {
        id: "",
      },
      positionStatus: {
        id: "",
      },
      priority: "",
      req: "",
      rgs: "",
      rgsConfirmed: "",
      role: {
        id: "",
      },
      manager: {
        id: "",
      },
      seniority: "",
      spanish: "",
      teamName: "",
      title: "",
      won: "",
      workModel: "",
      yearsExperience: "",
      workingHours: "",
    },
  });

  const { register, handleSubmit, reset } = newWorkItemForm;

  function handleBoolean(string: any) {
    if (string === "true") {
      return true;
    } else {
      return false;
    }
  }

  async function handleSubmitNewWorkItem(data: NewWorkFormDataProps) {
    api.post("/vacancies", {
      amountVacancy: parseInt(data.amountVacancy),
      costumerInterview: handleBoolean(data.costumerInterview),
      description: data.description,
      english: parseInt(data.english),
      linkedinUrl: data.linkedinUrl,
      mainSkill: {
        id: parseInt(data.mainSkill.id),
      },
      newPosition: handleBoolean(data.newPosition),
      officeLocation: {
        id: parseInt(data.officeLocation.id),
      },
      positionStatus: {
        id: parseInt(data.positionStatus.id),
      },
      priority: handleBoolean(data.priority),
      req: parseInt(data.req),
      rgs: parseInt(data.rgs),
      rgsConfirmed: handleBoolean(data.rgsConfirmed),
      role: {
        id: parseInt(data.role.id),
      },
      manager: {
        id: parseInt(data.manager.id),
      },
      seniority: data.seniority,
      spanish: parseInt(data.spanish),
      teamName: data.teamName,
      title: data.title,
      won: data.won,
      workModel: data.workModel,
      workingHours: parseInt(data.workingHours),
      yearsExperience: parseInt(data.yearsExperience),
    });

    reset();
    definePositionsRoute("positions");
  }

  const { definePositionsRoute } = useContext(RoutesContext);
  const [skills, setSkills] = useState<any>();
  const [offices, setOffices] = useState<any>();
  const [status, setStatus] = useState<any>();
  const [roles, setRoles] = useState<any>();
  const [managers, setManager] = useState<any>();

  async function getManagers() {
    const response = await api.get("/users/manager");
    setManager(response.data);
  }

  async function getSkills() {
    const response = await api.get("/mainSkills");
    setSkills(response.data);
  }

  async function getOffices() {
    const response = await api.get("/officeLocations");
    setOffices(response.data);
  }

  async function getStatus() {
    const response = await api.get("/positionStatus");
    setStatus(response.data);
  }

  async function getRoles() {
    const response = await api.get("/role");
    setRoles(response.data);
  }

  useEffect(() => {
    getSkills();
    getOffices();
    getStatus();
    getRoles();
    getManagers();
  }, []);

  return (
    <NewWorkItemContainer>
      <h1>NEW WORKITEM</h1>
      <form action="" onSubmit={handleSubmit(handleSubmitNewWorkItem)}>
        <div className="formsLeft">
          <label>
            Title*
            <input
              type="text"
              placeholder="Enter the title"
              {...register("title")}
            />
          </label>
          <label>
            Description
            <textarea id="" rows={10} {...register("description")} />
          </label>
          <label>
            Vacancy Amount*
            <input
              type="text"
              placeholder="Enter the amount"
              {...register("amountVacancy")}
            />
          </label>
          <label className="uploadFile">
            Attachments
            <input type="file" id="" />
            <div>
              <Paperclip size={20} />
              <span>Upload File</span>
            </div>
          </label>
          <label>
            Linkedin open position URL
            <input
              type="text"
              placeholder="Enter Linkedin open position URL (Link)"
              {...register("linkedinUrl")}
            />
          </label>
          <label>
            Project / Squad / Team Name
            <input
              type="text"
              placeholder="Enter Project / Squad / Team Name"
              {...register("teamName")}
            />
          </label>
        </div>
        <div className="formsRight">
          <label>
            <span>Main Skill*</span>
            <select id="title" {...register("mainSkill.id")}>
              {skills?.map((skill: any) => {
                return (
                  <option key={skill.id} value={skill.id.toString()}>
                    {skill.name}
                  </option>
                );
              })}
            </select>
            <ArrowSquareDown size={15} className="selectArrow" />
          </label>
          <label>
            <span>Manager*</span>
            <select id="title" {...register("manager.id")}>
              {managers?.map((manager: any) => {
                return (
                  <option key={manager.id} value={manager.id.toString()}>
                    {manager.firstName} {manager.lastName}
                  </option>
                );
              })}
            </select>
            <ArrowSquareDown size={15} className="selectArrow" />
          </label>
          <label>
            <span>Office Location*</span>
            <select id="title" {...register("officeLocation.id")}>
              {offices?.map((office: any) => {
                return (
                  <option key={office.id} value={office.id.toString()}>
                    {office.city}
                  </option>
                );
              })}
            </select>
            <ArrowSquareDown size={15} className="selectArrow" />
          </label>
          <label>
            <span>Position Status*</span>
            <select id="title" {...register("positionStatus.id")}>
              {status?.map((eachStatus: any) => {
                return (
                  <option key={eachStatus.id} value={eachStatus.id.toString()}>
                    {eachStatus.name}
                  </option>
                );
              })}
            </select>
            <ArrowSquareDown size={15} className="selectArrow" />
          </label>
          <label>
            <span>Role*</span>
            <select id="title" {...register("role.id")}>
              {roles?.map((role: any) => {
                return (
                  <option key={role.id} value={role.id.toString()}>
                    {role.name}
                  </option>
                );
              })}
            </select>
            <ArrowSquareDown size={15} className="selectArrow" />
          </label>
          <label>
            <span>Priority*</span>
            <select id="title" {...register("priority")}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            <ArrowSquareDown size={15} className="selectArrow" />
          </label>
          <label>
            <span>New Position*</span>
            <select id="title" {...register("newPosition")}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            <ArrowSquareDown size={15} className="selectArrow" />
          </label>
          <label>
            <span>Customer Interview*</span>
            <select id="title" {...register("costumerInterview")}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            <ArrowSquareDown size={15} className="selectArrow" />
          </label>
          <label>
            <span>English*</span>
            <select id="title" {...register("english")}>
              <option value={0}>1</option>
              <option value={1}>2</option>
              <option value={2}>3</option>
              <option value={3}>4</option>
              <option value={4}>5</option>
            </select>
            <ArrowSquareDown size={15} className="selectArrow" />
          </label>
          <label>
            <span>Spanish*</span>
            <select id="title" {...register("spanish")}>
              <option value={0}>1</option>
              <option value={1}>2</option>
              <option value={2}>3</option>
              <option value={3}>4</option>
              <option value={4}>5</option>
            </select>
            <ArrowSquareDown size={15} className="selectArrow" />
          </label>
          <label>
            <span>Seniority Required*</span>
            <select id="title" {...register("seniority")}>
              <option value="0">Select</option>
              <option value="Estagiário">Estagiário</option>
              <option value="Trainee">Trainee</option>
              <option value="Junior">Junior</option>
              <option value="Pleno">Pleno</option>
              <option value="Senior">Senior</option>
              <option value="Expert">Expert</option>
            </select>
            <ArrowSquareDown size={15} className="selectArrow" />
          </label>
          <label>
            <span>Minimum Experience Years*</span>
            <input
              type="text"
              pattern="[0-9]*"
              {...register("yearsExperience")}
              placeholder="0"
            />
          </label>
          <label>
            <span>Work Model</span>
            <input type="text" {...register("workModel")} />
          </label>
          <label>
            <span>REQ</span>
            <input type="text" {...register("req")} />
          </label>
          <label>
            <span>RGS</span>
            <input type="text" {...register("rgs")} />
          </label>
          <label>
            <span>RGS Confirmed*</span>
            <select id="title" {...register("rgsConfirmed")}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            <ArrowSquareDown size={15} className="selectArrow" />
          </label>
          <label>
            <span>WON</span>
            <input type="text" {...register("won")} />
          </label>
          <label>
            <span>Working Hours</span>
            <input type="text" {...register("workingHours")} />
          </label>
          <div className="formButtons">
            <button onClick={() => definePositionsRoute("positions")}>
              CANCEL
            </button>
            <button type="submit">SUBMIT</button>
          </div>
        </div>
      </form>
    </NewWorkItemContainer>
  );
}
