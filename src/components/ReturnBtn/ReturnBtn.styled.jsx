import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const ReturnButton = styled(Link)`
  width: 100px;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 5px;
  padding-right: 5px;
  margin-bottom: 10px;

  display: inline-flex;
  justify-content: center;

  border: 1px solid rgb(192, 192, 192);
  border-radius: 5px;

  &:hover,
  &:focus {
    background-color: orangered;
    color: rgb(250, 250, 250);
  }

  &:active {
    background-color: DarkRed;
  }
`;
