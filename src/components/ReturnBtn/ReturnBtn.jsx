import PropTypes from 'prop-types';
import { ReturnButton } from './ReturnBtn.styled';

export const ReturnBtn = ({ backLink }) => {
  return <ReturnButton to={backLink}>&#129044; Go back</ReturnButton>;
};

ReturnBtn.propTypes = {
  backLink: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      pathname: PropTypes.string.isRequired,
      search: PropTypes.string.isRequired,
      hash: PropTypes.string.isRequired,
      state: PropTypes.any,
      key: PropTypes.string.isRequired,
    }),
  ]).isRequired,
};
