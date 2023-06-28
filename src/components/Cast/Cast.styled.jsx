import styled from '@emotion/styled';

export const ActorsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ActorItem = styled.li`
  display: flex;
  gap: 10px;

  height: 150px;

  & img {
    width: 100px;
    max-width: 100px;
    object-fit: cover;
  }

  & div {
    padding-top: 10px;

    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const ActorName = styled.p`
  font-weight: 600;
`;
