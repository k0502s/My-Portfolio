export interface ExperienceDataType {
  Company: {
    companyName: string;
    companyStartPeriod: string;
    companyEndPeriod: string;
    companyPosition: string;
    companyDescription: string;
  };
  Projects: {
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
