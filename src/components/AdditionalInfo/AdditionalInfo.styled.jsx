import styled from '@emotion/styled';

export const AdditionalMovieInfo = styled.div``;

export const InfoMenu = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 20px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  border-top: 2px solid Silver;
  border-bottom: 2px solid Silver;
`;

export const MenuList = styled.ul`
  padding-left: 5px;

  display: flex;
  gap: 20px;
`;

export const MenuInfoItem = styled.li`
  display: flex;

  gap: 2px;
  align-items: center;

  font-weight: 600;

  & svg {
    width: 16px;
    height: 16px;
    fill: goldenrod;
  }

  & a {
    color: black;
    text-decoration: underline;

    &:hover,
    &:focus {
      color: orangered;
    }
  }
`;
