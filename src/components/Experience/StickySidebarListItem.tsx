import React from "react";
import { ExperienceDataType } from "@@types/Experience";
import styled from "styled-components";

interface StickySidebarListItemProps extends ExperienceDataType {}

const StickySidebarListItem = ({ Company }: StickySidebarListItemProps) => {
  const {
    CompanyName,
    CompanyDescription,
    CompanyPosition,
    CompanyEndPeriod,
    CompanyStartPeriod,
  } = Company ?? [];
  return (
    <Wrap>
      <SideContentBox>
        <SideContent>
          <CompanyNameText>{CompanyName}</CompanyNameText>
          <CompanyContentText>{`${CompanyStartPeriod} ~ ${CompanyEndPeriod}`}</CompanyContentText>
          <CompanyContentText>{CompanyPosition}</CompanyContentText>
          <CompanySubContentText>{CompanyDescription}</CompanySubContentText>
        </SideContent>
      </SideContentBox>
      <CenterContentBox>
        <CenterContent></CenterContent>
      </CenterContentBox>
    </Wrap>
  );
};

export default StickySidebarListItem;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 16px;
`;

const SideContentBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3 1 30%;
  padding-right: 2rem;
`;

const SideContent = styled.div`
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

const CenterContentBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 7 1 70%;
`;

const CenterContent = styled.div`
  background-color: pink;
  width: 100%;
  min-height: 1000px;
  display: flex;
  flex-direction: column;
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
