export interface Company {
  companyName: string;
  companyStartPeriod: string;
  companyEndPeriod: string;
  companyPosition: string;
  companyDescription: string;
  blogLink?: string;
}
export interface Project {
  title: string;
  projectStartPeriod: string;
  projectEndPeriod: string;
  projectTechs: string[];
  projectDescription: string;
  projectSummaryList: string[];
  linkUrl?: string;
  imgs: string[];
}

export interface ExperienceDataType {
  company: Company;
  projects: Project[];
}
