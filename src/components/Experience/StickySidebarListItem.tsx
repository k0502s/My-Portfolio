import React from "react";
import styled from "styled-components";

interface StickySidebarListItemProps {}

const StickySidebarListItem = ({}: StickySidebarListItemProps) => {
  return (
    <Wrap>
      <SideContentBox>
        <SideContent>
          <h3>Sticky sidebar</h3>
        </SideContent>
      </SideContentBox>
      <CenterContentBox>
        <CenterContent>
          <h2>Main content</h2>
          <p>Scroll down the page!</p>
          <h3>How to recreate this</h3>
        </CenterContent>
      </CenterContentBox>
    </Wrap>
  );
};

export default StickySidebarListItem;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 16px;
`;

const SideContentBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3 1 30%;
  padding-right: 2rem;
`;

const SideContent = styled.div`
  border: 5px solid $color-dark;
  background-color: pink;
  border-radius: 10px;

  width: 100%;
  min-height: 200px;
  overflow: auto;
  position: -webkit-sticky;
  position: sticky;
  top: 16px;
`;

const CenterContentBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 7 1 70%;
`;

const CenterContent = styled.div`
  border: 5px solid $color-dark;
  background-color: pink;
  border-radius: 10px;

  width: 100%;
  min-height: 1000px;
  display: flex;
  flex-direction: column;
`;
