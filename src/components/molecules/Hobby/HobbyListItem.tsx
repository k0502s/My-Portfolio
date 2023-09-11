import { memo } from "react";
import { HobbyListDataType } from "@@types/Hobby";
import MarkerListItem from "@components/atoms/common/MarkerListItem";
import styled from "styled-components";

interface HobbyListItemProps {
  data: HobbyListDataType;
}

const HobbyListItem = ({ data }: HobbyListItemProps) => {
  const { title, description } = data ?? {};
  return (
    <Wrap>
      <TitleBox>
        <Title>{title}</Title>
      </TitleBox>
      <DescriptionListBox>
        {description?.map((item, index) => (
          <MarkerListItemBox key={index}>
            <MarkerListItem text={item} />
          </MarkerListItemBox>
        ))}
      </DescriptionListBox>
    </Wrap>
  );
};

export default memo(HobbyListItem);

const Wrap = styled.div`
  :not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const TitleBox = styled.div`
  margin-bottom: 0.3rem;
`;

const Title = styled.span`
  white-space: pre-wrap;
  word-break: keep-all;
  font-weight: bold;
  color: inherit;
  font-size: 1.25rem;
  line-height: 1.5;
`;

const MarkerListItemBox = styled.ul`
  margin-top: 1rem;
  list-style: disc;
  padding-left: 1.5rem;
`;

const DescriptionListBox = styled.div``;
