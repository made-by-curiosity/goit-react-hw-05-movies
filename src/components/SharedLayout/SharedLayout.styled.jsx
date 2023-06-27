import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const PageHeader = styled.header`
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;

  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.75);
`;

export const MenuList = styled.ul`
  padding-left: 30px;

  display: flex;
  gap: 10px;
`;

export const MenuLink = styled(NavLink)`
  display: inline-block;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 5px;
  padding-right: 5px;

  font-weight: 600;
  color: #000;

  &.active {
    color: orangered;
  }
`;
