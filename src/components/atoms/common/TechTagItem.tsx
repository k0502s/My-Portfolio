import styled from "styled-components";

interface TechTagItemProps {
  text: string;
}

const TechTagItem = ({ text }: TechTagItemProps) => {
  return <TechTag>{text}</TechTag>;
};

export default TechTagItem;

const TechTag = styled.li`
  display: inline-block;
  margin: 0.5rem 0.4rem 0 0;
  padding: 3px 8px;
  font-size: 0.7rem;
  border: 1px dashed rgb(49, 132, 255);
  color: inherit;
  border-radius: 7px;
`;
