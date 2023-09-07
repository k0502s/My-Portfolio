import React, { memo, ReactNode, useMemo } from "react";
import styled from "styled-components";

interface SectionTitleProps {
  title: string;
  koreaTitle: string | ReactNode;
  align?: "right" | "center" | "left";
}

const SectionTitle = ({ title, koreaTitle, align }: SectionTitleProps) => {
  const alignItems = useMemo(() => {
    switch (align) {
      case "center":
        return "center";
      case "right":
        return "flex-end";
      case "left":
      default:
        return "flex-start";
    }
  }, [align]);

  return (
    <Wrap style={{ alignItems }}>
      <Title>{title}</Title>
      <TitleKorean>{koreaTitle}</TitleKorean>
      <Lines />
    </Wrap>
  );
};

export default memo(SectionTitle);

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h4`
  font-size: 0.75rem;
  color: rgb(90, 103, 216);
  text-align: left;
  margin-bottom: 5px;
`;
const TitleKorean = styled.h2`
  text-transform: uppercase;
  margin-bottom: 1rem;
  font-size: 1.125rem;
  font-weight: 700;
  text-align: left;
`;

const Lines = styled.h2`
  position: relative;
  width: 0.5rem;
  height: 2rem;
  margin-bottom: 1.5rem;
  margin-top: -0.5rem;
  ::before {
    content: "";
    background-color: rgb(102, 126, 234);
    height: 100%;
    width: 1px;
    position: absolute;
    left: 0px;
  }
  ::after {
    content: "";
    background-color: rgb(79, 209, 197);
    height: 1.5rem;
    width: 1px;
    position: absolute;
    margin-left: 0.25rem;
  }
`;
