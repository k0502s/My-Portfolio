import { memo } from "react";
import { HobbyDataType } from "@@types/Hobby";
import MarkerListItem from "@components/atoms/common/MarkerListItem";
import styled from "styled-components";

interface HobbyListItemProps {
  data: HobbyDataType;
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
          <MarkerListItem key={index} text={item} />
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

const DescriptionListBox = styled.div``;
