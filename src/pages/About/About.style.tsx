import styled from "styled-components";

const Wrap = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(247, 250, 252);
  width: 100%;
  border-bottom: 1px solid #e2e8f0;
  animation: backgroundColor 1s ease-in-out alternate;
  @keyframes backgroundColor {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Area = styled.div`
  width: 100%;
  max-width: 992px;
  padding: 64px 20px 32px 20px;
`;

const TextBox = styled.div``;

const ContentBox = styled.div`
  max-width: 830px;
  margin-bottom: 3.5rem;
`;

const Content = styled.span`
  word-break: keep-all;
  line-height: 1.5;
  font-size: 1.15rem;
`;

const CurrentStatusBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const CurrentStatusText = styled.span`
  white-space: pre-wrap;
  word-break: keep-all;
  font-weight: bold;
  color: inherit;
  font-size: 1rem;
  line-height: 1.5;
  margin-right: 0.5rem;
  padding: 0px 3px;
  border-bottom: 1px solid rgb(49, 132, 255);
`;

const CurrentStatusTag = styled.div`
  padding: 2px 6px;
  border-radius: 4px;
  /* background-color: rgb(49, 132, 255); */
  background-color: lightgray;
`;

const CurrentStatusTagText = styled.span`
  white-space: pre-wrap;
  word-break: keep-all;
  color: #ffff;
  font-size: 0.875rem;
  line-height: 1.5;
  /* animation: blink 0.5s ease-in-out infinite alternate;
  @keyframes blink {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  } */
  text-decoration-line: line-through;
  text-decoration-style: double;
`;

export {
  Wrap,
  Area,
  TextBox,
  ContentBox,
  Content,
  CurrentStatusBox,
  CurrentStatusText,
  CurrentStatusTag,
  CurrentStatusTagText,
};
