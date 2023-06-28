import styled from '@emotion/styled';

export const MovieInfoWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;

  display: flex;
  gap: 20px;
`;

export const PosterContainer = styled.div`
  height: 300px;
  min-width: 200px;
  width: 200px;

  & > img {
    height: 100%;
    width: 100%;

    object-fit: cover;
  }
`;

export const TextWrapper = styled.div`
  padding-top: 10px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const MovieGenres = styled.p`
  display: flex;
  gap: 10px;
`;
