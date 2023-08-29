import styled from "styled-components";

const Wrap = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(247, 250, 252);
  width: 100%;
  border-bottom: 1px solid #e2e8f0;
`;

const Area = styled.div`
  width: 100%;
  max-width: 992px;
  padding: 64px 20px;
`;

const TextBox = styled.div``;

const Occupation = styled.h4`
  font-size: 0.75rem;
  color: rgb(90, 103, 216);
  width: 100%;
  text-align: left;
  margin-bottom: 5px;
`;
const Name = styled.h2`
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

const ContentBox = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;

const Content = styled.span`
  word-break: keep-all;
`;

const LinkBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const LinkText = styled.a`
  cursor: pointer;
  color: rgb(90, 103, 216);
`;

const Bottomline = styled.div`
  height: 1px;
  background-color: rgb(79, 209, 197);
`;

export {
  Wrap,
  Area,
  TextBox,
  Occupation,
  Name,
  lines,
  ContentBox,
  Content,
  LinkBox,
  LinkText,
  Bottomline,
};
