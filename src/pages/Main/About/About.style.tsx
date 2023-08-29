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
  ContentBox,
  Content,
  LinkBox,
  LinkText,
  Bottomline,
};
