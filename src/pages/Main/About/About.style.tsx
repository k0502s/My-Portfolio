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

export { Wrap, Area, TextBox, ContentBox, Content };
