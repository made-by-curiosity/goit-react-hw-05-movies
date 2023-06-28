import styled from '@emotion/styled';

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & svg {
    width: 20px;
    height: 20px;
    margin-left: 5px;

    fill: orangered;
  }

  & h4 {
    margin-bottom: 10px;
  }

  & p {
    padding-left: 20px;
  }
`;
