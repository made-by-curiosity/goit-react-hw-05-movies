import styled from '@emotion/styled';

export const FilmsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;

  & li {
    display: flex;
    gap: 5px;
  }

  & svg {
    width: 20px;
    height: 20px;

    fill: orange;
  }
`;
