import React from "react";
import { ExperienceDataType } from "@@types/Experience";
import styled from "styled-components";

interface StickySidebarListItemProps extends ExperienceDataType {}

const StickySidebarListItem = ({
  Company,
  Projects,
}: StickySidebarListItemProps) => {
  const {
    companyName,
    companyDescription,
    companyPosition,
    companyEndPeriod,
    companyStartPeriod,
  } = Company ?? {};

  return (
    <Wrap>
      <SideContentArea>
        <SideContentBox>
          <CompanyNameText>{companyName}</CompanyNameText>
          <CompanyContentText>{`${companyStartPeriod} ~ ${companyEndPeriod}`}</CompanyContentText>
          <CompanyContentText>{companyPosition}</CompanyContentText>
          <CompanySubContentText>{companyDescription}</CompanySubContentText>
        </SideContentBox>
      </SideContentArea>
      <CenterContentArea>
        {Projects?.map((item, index) => (
          <CenterContentBox key={index}>
            <ProjectTitleText>{item?.title}</ProjectTitleText>
            <ProjectPeriodText>{`${item?.projectStartPeriod} ~ ${item?.projectEndPeriod}`}</ProjectPeriodText>
            <ProjectTechBox>
              {item?.projectTechs?.map((item, index) => (
                <ProjectTechTag>{item}</ProjectTechTag>
              ))}
            </ProjectTechBox>
            <ProjectContentText>{item?.projectDescription}</ProjectContentText>
            {item?.projectSummaryList?.map((item, index) => (
              <ProjectSummaryListBox key={index}>
                <ProjectSummaryList>{item ?? ""}</ProjectSummaryList>
              </ProjectSummaryListBox>
            ))}
          </CenterContentBox>
        ))}
      </CenterContentArea>
    </Wrap>
  );
};

export default StickySidebarListItem;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 16px;
`;

const SideContentArea = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3 1 30%;
  padding-right: 2rem;
`;

const SideContentBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 5px solid $color-dark;
  width: 100%;
  min-height: 200px;
  overflow: auto;
  position: -webkit-sticky;
  position: sticky;
  top: 16px;
`;

const CenterContentArea = styled.div`
  display: flex;
  flex-direction: column;
  flex: 7 1 70%;
`;

const CenterContentBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 3.5rem;
`;

const CompanyNameText = styled.h3`
  margin-bottom: 2rem;
  white-space: pre-wrap;
  word-break: keep-all;
  font-weight: bold;
  color: inherit;
  font-size: 1.75rem;
  line-height: 1.5;
`;

const CompanyContentText = styled.span`
  white-space: pre-wrap;
  word-break: keep-all;
  color: inherit;
  font-size: 1.5rem;
  line-height: 1.5;
`;

const CompanySubContentText = styled.p`
  margin-top: 1.5rem;
  white-space: pre-wrap;
  word-break: keep-all;
  color: rgb(158, 162, 166);
  font-size: 0.875rem;
  line-height: 1.5;
`;

const ProjectTitleText = styled.h3`
  margin-bottom: 1.5rem;
  white-space: pre-wrap;
  word-break: keep-all;
  font-weight: bold;
  color: inherit;
  font-size: 1.75rem;
  line-height: 1.5;
`;

const ProjectPeriodText = styled.span`
  margin-top: 0.25rem;
  white-space: pre-wrap;
  word-break: keep-all;
  color: inherit;
  font-size: 1.5rem;
  line-height: 1.5;
`;

const ProjectTechBox = styled.div`
  display: block;
  margin-top: 0.7rem;
  margin-bottom: 0.7rem;
`;

const ProjectTechTag = styled.span`
  display: inline-block;
  margin: 0.5rem 0.4rem 0 0;
  padding: 3px 8px;
  font-size: 0.7rem;
  border: 1px dashed rgb(49, 132, 255);
  color: inherit;
  border-radius: 7px;
`;

const ProjectContentText = styled.p`
  margin-top: 1rem;
  white-space: pre-wrap;
  word-break: keep-all;
  color: inherit;
  font-size: 1rem;
  line-height: 1.5;
`;

const ProjectSummaryListBox = styled.ul`
  margin-top: 1rem;
  list-style: disc;
  padding-left: 1.5rem;
`;

const ProjectSummaryList = styled.li`
  margin-bottom: 1rem;
  white-space: pre-wrap;
  word-break: keep-all;
  color: inherit;
  font-size: 1rem;
  line-height: 1.5;
  ::marker {
    color: rgb(49, 132, 255);
    unicode-bidi: isolate;
    font-variant-numeric: tabular-nums;
    text-transform: none;
    text-indent: 0px !important;
    text-align: start !important;
    text-align-last: start !important;
  }
`;
