import styled from "styled-components";

const Wrap = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Area = styled.div`
  width: 100%;
  max-width: 992px;
  padding: 64px 20px;
`;

const Title = styled.h4`
  font-size: 0.75rem;
  color: rgb(90, 103, 216);
  width: 100%;
  text-align: left;
`;
const TitleKorean = styled.h2`
  text-transform: uppercase;
  margin-bottom: 1rem;
  font-size: 1.125rem;
  font-weight: 700;
  width: 100%;
  text-align: left;
`;

const lines = styled.h2`
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

const Border = styled.div`
  width: 100%;
  height: 0x;
  border-top: 2px solid rgb(102, 126, 234);
  margin-bottom: 2.5rem;
`;

export { Wrap, Area, Title, TitleKorean, lines, Border };
