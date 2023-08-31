import styled from "styled-components";

const Wrap = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(247, 250, 252);
  width: 100%;
`;

const Area = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 992px;
  padding: 20px;
`;

const ProfileBox = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImagBox = styled.div`
  position: relative;
  overflow: hidden;
  width: 62px;
  height: 62px;
  border-radius: 31px;
  margin-right: 0.75rem;
  border: 1px solid rgb(79, 209, 197);
`;

const ProfileImg = styled.img`
  position: absolute;
  top: 0px;
  bottom: 0px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 88%;
  height: 88%;
  border-radius: 50%;
  object-fit: cover;
  object-position: center center;
`;

const ProfileText = styled.h1`
  font-weight: inherit;
  font-size: 1.125rem;
  margin: 0.67em 0;
`;

const SideBox = styled.div`
  display: flex;
  align-items: center;
`;

const LinkBox = styled.div`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const LinkText = styled.a`
  cursor: pointer;
  color: rgb(90, 103, 216);
  line-height: 1.5;
  border-bottom: 1px solid rgb(79, 209, 197);
  @media only screen and (max-width: 768px) {
    margin-right: auto;
  }
`;

const NavbarListsWrap = styled.div<{ mobileNavbarCollapsed: boolean }>`
  overflow: hidden;
  background-color: rgb(247, 250, 252);
  transition: max-height 0.2s ease-in-out;
  max-height: ${({ mobileNavbarCollapsed }) =>
    mobileNavbarCollapsed ? 0 : "100px"};
`;

const NavbarListsArea = styled.div`
  display: block;
  z-index: 1000;
  padding: 0px 20px;
`;

export {
  Wrap,
  Area,
  ProfileBox,
  ProfileImagBox,
  ProfileImg,
  ProfileText,
  SideBox,
  LinkBox,
  LinkText,
  NavbarListsWrap,
  NavbarListsArea,
};
