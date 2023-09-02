export interface ExperienceDataType {
  company: {
    companyName: string;
    companyStartPeriod: string;
    companyEndPeriod: string;
    companyPosition: string;
    companyDescription: string;
    blogLink?: string;
  };
  projects: {
    title: string;
    projectStartPeriod: string;
    projectEndPeriod: string;
    projectTechs: string[];
    projectDescription: string;
    projectSummaryList: string[];
    linkUrl?: string;
    imgs: string[];
  }[];
}
