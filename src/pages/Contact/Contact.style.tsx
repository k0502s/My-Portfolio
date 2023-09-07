import styled from "styled-components";

const Wrap = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #e2e8f0;
`;

const Area = styled.div`
  width: 100%;
  max-width: 992px;
  padding: 64px 40px;
`;

const BorderBoxBox = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 992px) {
    flex-wrap: wrap;
  }
`;

const BorderBox = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(226, 232, 240);
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
  :not(:last-child) {
    margin-right: 20px;
  }
  @media only screen and (max-width: 768px) {
    :not(:last-child) {
      margin-right: 0px;
    }
    width: 100%;
  }
`;

const BorderBoxIconBox = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid rgb(102, 126, 234);
  border-radius: 9999px;
  margin-bottom: 0.5rem;
`;

const BorderBoxIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const BorderBoxTitle = styled.h3`
  margin-top: 0.25rem;
  font-weight: 600;
`;

const BorderBoxContent = styled.a`
  margin-top: 1rem;
  font-size: 0.875rem;
  color: rgb(90, 103, 216);
  cursor: pointer;
  :hover {
    color: rgb(60, 54, 107);
  }
`;

export {
  Wrap,
  Area,
  BorderBoxBox,
  BorderBox,
  BorderBoxIconBox,
  BorderBoxIcon,
  BorderBoxTitle,
  BorderBoxContent,
};
