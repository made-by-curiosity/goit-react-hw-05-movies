import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import {
  AdditionalMovieInfo,
  InfoMenu,
  MenuInfoItem,
  MenuList,
} from './AdditionalInfo.styled';
import { GiAlliedStar, Gi3DGlasses } from 'react-icons/gi';
import { LoadingFallback } from 'components/LoadingFallback/LoadingFallback';

export const AdditionalInfo = () => {
  return (
    <AdditionalMovieInfo>
      <InfoMenu>
        <p>Additional information</p>
        <MenuList>
          <MenuInfoItem>
            <GiAlliedStar />
            <Link to="cast">Cast</Link>
          </MenuInfoItem>
          <MenuInfoItem>
            <Gi3DGlasses />
            <Link to="reviews">Reviews</Link>
          </MenuInfoItem>
        </MenuList>
      </InfoMenu>
      <Suspense fallback={<LoadingFallback />}>
        <Outlet />
      </Suspense>
    </AdditionalMovieInfo>
  );
};
