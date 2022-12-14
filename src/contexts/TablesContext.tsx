export let profiles = [
  {
    id: Math.floor(Math.random() * 100000),
    first_name: "Lucas",
    last_name: "Almeida",
    email: "lucas@hotmail.com",
    city: "Londina",
    country: "Brazil",
    phone_number: "(43)99565-5236",
    tcs_associate: 1234567,
    salary_intention: 2200,
    linkedin_url: "https://linkedin.com/lucas",
    github_url: "https://github.com/lucas",
    spanish: 3,
    english: 3,
    seniority: "Junior",
    years_experience: 2,
    description: "Cv não aprovado",
    status: "DONE",
  },
  {
    id: Math.floor(Math.random() * 100000),
    first_name: "Gabriel",
    last_name: "Camargo",
    email: "gabriel@hotmail.com",
    city: "Londina",
    country: "Brazil",
    phone_number: "(43)98365-4336",
    tcs_associate: 1234567,
    salary_intention: 2500,
    linkedin_url: "https://linkedin.com/gabriel",
    github_url: "https://github.com/gabriel",
    spanish: 1,
    english: 2,
    seniority: "Pleno",
    years_experience: 4,
    description: "Cv não aprovado",
    status: "DONE",
  },
  {
    id: Math.floor(Math.random() * 100000),
    first_name: "Letícia",
    last_name: "da Costa",
    email: "leticia@hotmail.com",
    city: "Marília",
    country: "Brazil",
    phone_number: "(43)99765-4334",
    tcs_associate: 1234567,
    salary_intention: 3300,
    linkedin_url: "https://linkedin.com/leticia",
    github_url: "https://github.com/leticia",
    spanish: 1,
    english: 5,
    seniority: "Pleno",
    years_experience: 5,
    description: "Cv não aprovado",
    status: "DONE",
  },
  {
    id: Math.floor(Math.random() * 100000),
    first_name: "Bruna",
    last_name: "Cardoso",
    city: "Londina",
    country: "Brazil",
    phone_number: "(43)99565-5236",
    tcs_associate: 1234567,
    salary_intention: 2200,
    linkedin_url: "https://linkedin.com/lucas",
    github_url: "https://github.com/lucas",
    spanish: 3,
    english: 3,
    seniority: "Junior",
    years_experience: 2,
    email: "bruna@hotmail.com",
    description: "Cv não aprovado",
    status: "DONE",
  },
  {
    id: Math.floor(Math.random() * 100000),
    first_name: "Paulo",
    last_name: "Kogos",
    email: "paulo@hotmail.com",
    city: "Londina",
    country: "Brazil",
    phone_number: "(43)99565-5236",
    tcs_associate: 1234567,
    salary_intention: 2200,
    linkedin_url: "https://linkedin.com/lucas",
    github_url: "https://github.com/lucas",
    spanish: 3,
    english: 3,
    seniority: "Junior",
    years_experience: 2,
    description: "Cv não aprovado",
    status: "DONE",
  },
  {
    id: Math.floor(Math.random() * 100000),
    first_name: "Charles",
    last_name: "da Cunha",
    email: "charles@hotmail.com",
    city: "Londina",
    country: "Brazil",
    phone_number: "(43)99565-5236",
    tcs_associate: 1234567,
    salary_intention: 2200,
    linkedin_url: "https://linkedin.com/lucas",
    github_url: "https://github.com/lucas",
    spanish: 3,
    english: 3,
    seniority: "Junior",
    years_experience: 2,
    description: "Cv não aprovado",
    status: "DONE",
  },
  {
    id: Math.floor(Math.random() * 100000),
    first_name: "Eliane",
    last_name: "Carvalho",
    email: "eliane@hotmail.com",
    city: "Londina",
    country: "Brazil",
    phone_number: "(43)99565-5236",
    tcs_associate: "1234567",
    salary_intention: 2200,
    linkedin_url: "https://linkedin.com/lucas",
    github_url: "https://github.com/lucas",
    spanish: 3,
    english: 3,
    seniority: "Junior",
    years_experience: 2,
    description: "Cv não aprovado",
    status: "DONE",
  },
];

export function defineProfile(profile: any) {
  profiles.unshift(profile);
}

export function deleteProfile(profilePassed: any) {
  const profilesWhitoutDeletedOne = profiles.filter((profile) => {
    return profile.id !== profilePassed.id;
  });

  profiles = [...profilesWhitoutDeletedOne];
}
