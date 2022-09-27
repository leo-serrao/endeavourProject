import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import InputMask from "react-input-mask";

import { ArrowSquareDown, Paperclip } from "phosphor-react";
import { NewProfileContainer } from "./styles";
import { RoutesContext } from "../../../contexts/RouteContext";
import { useContext, useEffect, useState } from "react";
import { api } from "../../../services/apiClient";
// import { api } from "../../../services/apiClient";

const newProfileFormValidationSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string(),
  city: z.string(),
  country: z.string(),
  tcs_associate: z.string(),
  phone_number: z.string(),
  linkedin_url: z.string(),
  github_url: z.string(),
  salary_intention: z.string(),
  english: z.string(),
  spanish: z.string(),
  seniority: z.string(),
  years_experience: z.string(),
  skill_tag: z.object({
    id: z.string(),
  }),
});

type NewProfileFormDataProps = z.infer<typeof newProfileFormValidationSchema>;

export function NewProfileForm() {
  const newWorkItemForm = useForm<NewProfileFormDataProps>({
    resolver: zodResolver(newProfileFormValidationSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      city: "",
      country: "",
      tcs_associate: "",
      phone_number: "",
      linkedin_url: "",
      github_url: "",
      salary_intention: "",
      english: "",
      spanish: "",
      seniority: "Select",
      years_experience: "",
      skill_tag: {
        id: "",
      },
    },
  });

  const { defineProfileRoute } = useContext(RoutesContext);
  const [skills, setSkills] = useState<any>();

  async function handleSubmitNewProfile(data: NewProfileFormDataProps) {
    api.post("/candidates", {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      city: data.city,
      country: data.country,
      tcs_associate: data.tcs_associate,
      phone_number: data.phone_number,
      linkedin_url: data.linkedin_url,
      github_url: data.github_url,
      salary_intention: parseFloat(data.salary_intention),
      english: parseInt(data.english),
      spanish: parseInt(data.spanish),
      seniority: data.seniority,
      years_experience: parseInt(data.years_experience),
      skill_tag: {
        id: parseInt(data.skill_tag.id),
      },
    });

    reset();
    defineProfileRoute("profiles");
  }

  async function getSkills() {
    const response = await api.get("/skillTag");
    setSkills(response.data);
  }

  useEffect(() => {
    getSkills();
  }, []);

  const { register, handleSubmit, reset } = newWorkItemForm;
  return (
    <NewProfileContainer>
      <h1>NEW PROFILE</h1>
      <form action="" onSubmit={handleSubmit(handleSubmitNewProfile)}>
        <div className="formsLeft">
          <div className="doubleRow">
            <label>
              First Name*
              <input type="text" {...register("first_name")} />
            </label>
            <label>
              Last Name*
              <input type="text" {...register("last_name")} />
            </label>
          </div>
          <div className="doubleRow">
            <label>
              City*
              <input type="text" {...register("city")} />
            </label>
            <label>
              Country*
              <input type="text" {...register("country")} />
            </label>
          </div>
          <div className="doubleRow">
            <label>
              Tcs Associate
              <input type="text" {...register("tcs_associate")} />
            </label>
            <label>
              Phone Number*
              <InputMask
                type="text"
                mask="(99) 99999-9999"
                {...register("phone_number")}
              />
            </label>
          </div>
          <label className="uploadFile">
            Attachments
            <input type="file" />
            <div>
              <Paperclip size={20} />
              <span>Upload File</span>
            </div>
          </label>
          <label>
            Email
            <input
              type="text"
              placeholder="youremail@example.com"
              {...register("email")}
            />
          </label>
          <label>
            Linkedin URL
            <input
              type="text"
              placeholder="Enter Linkedin URL (Link)"
              {...register("linkedin_url")}
            />
          </label>
          <label>
            GitHub URL
            <input
              type="text"
              placeholder="Enter Linkedin github URL (Link)"
              {...register("github_url")}
            />
          </label>
        </div>
        <div className="formsRight">
          <label>
            <span>Salary intention</span>
            <input
              type="text"
              placeholder="Ex: 1500"
              {...register("salary_intention")}
            />
          </label>
          <label>
            <span>Skill*</span>
            <select {...register("skill_tag.id")}>
              {skills?.map((skill: any) => {
                return (
                  <option key={skill.id} value={skill.id}>
                    {skill.name}
                  </option>
                );
              })}
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
            <span>Seniority*</span>
            <select id="title" {...register("seniority")}>
              <option value="Junior">Junior</option>
              <option value="Pleno">Pleno</option>
              <option value="Senior">Senior</option>
              <option value="Expert">Expert</option>
            </select>
            <ArrowSquareDown size={15} className="selectArrow" />
          </label>
          <label>
            <span>Years of Experience</span>
            <input
              type="text"
              placeholder="0"
              {...register("years_experience")}
            />
          </label>
          <div className="formButtons">
            <button
              onClick={() => {
                defineProfileRoute("profiles");
              }}
            >
              CANCEL
            </button>
            <button type="submit">SUBMIT</button>
          </div>
        </div>
      </form>
    </NewProfileContainer>
  );
}
