import styled from "styled-components";

const Wrap = styled.main`
  scroll-behavior: smooth;
`;

const ContentArea = styled.div`
  animation: fade 0.5s ease-in-out alternate;
  @keyframes fade {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export { Wrap, ContentArea };
