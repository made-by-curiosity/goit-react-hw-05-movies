import PropTypes from 'prop-types';
import { PageContainer } from './Container.styled';

export const Container = ({ children }) => {
  return <PageContainer>{children}</PageContainer>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
