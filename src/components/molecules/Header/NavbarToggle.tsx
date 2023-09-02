import { Dispatch, memo, SetStateAction, useCallback } from "react";
import styled from "styled-components";

interface NavbarToggleProps {
  collapsed: boolean;
  onClickMethod: Dispatch<SetStateAction<boolean>>;
}

const NavbarToggle = ({ collapsed, onClickMethod }: NavbarToggleProps) => {
  const onClick = useCallback(() => {
    onClickMethod(!collapsed);
  }, [onClickMethod, collapsed]);

  return (
    <Toggle type="button" onClick={onClick}>
      <Line1 collapsed={collapsed} />
      <Line2 collapsed={collapsed} />
      {collapsed && <Line3 collapsed={collapsed} />}
    </Toggle>
  );
};

const Toggle = styled.button`
  z-index: 4;
  background: transparent;
  outline: none;
  border: none;
  height: 40px;
  width: 46px;
`;

const Line1 = styled.span<{ collapsed: boolean }>`
  display: block;
  width: 22px;
  height: 2px;
  background: rgb(90, 103, 216);
  border-radius: 4px;
  margin-top: 6px;
  margin-bottom: 6px;
  margin-left: auto;
  transition: transform 0.5s, margin 0.5s, background 0.5s;
  transform: ${({ collapsed }) => (collapsed ? null : "rotateZ(45deg)")};
  margin-top: ${({ collapsed }) => (collapsed ? null : "-2px")};
  margin-bottom: ${({ collapsed }) => (collapsed ? null : "-2px")};
`;

const Line2 = styled.span<{ collapsed: boolean }>`
  display: block;
  width: 22px;
  height: 2px;
  background: rgb(79, 209, 197);
  border-radius: 4px;
  margin-top: 6px;
  margin-bottom: 6px;
  margin-left: auto;
  transition: transform 0.5s, margin 0.5s, background 0.5s;
  transform: ${({ collapsed }) => (collapsed ? null : "rotateZ(-45deg)")};
  margin-top: ${({ collapsed }) => (collapsed ? null : "-2px")};
  margin-bottom: ${({ collapsed }) => (collapsed ? null : "-2px")};
`;

const Line3 = styled.span<{ collapsed: boolean }>`
  display: block;
  width: 22px;
  height: 2px;
  background: rgb(90, 103, 216);
  border-radius: 4px;
  margin-top: 6px;
  margin-bottom: 6px;
  margin-left: auto;
  transition: transform 0.5s, margin 0.5s, background 0.5s;
  transform: ${({ collapsed }) => (collapsed ? null : "rotateZ(-45deg)")};
  margin-top: ${({ collapsed }) => (collapsed ? null : "-2px")};
  margin-bottom: ${({ collapsed }) => (collapsed ? null : "-2px")};
`;

export default memo(NavbarToggle);
