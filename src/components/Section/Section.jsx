import PropTypes from 'prop-types';
import { PageSection, SectionTitle } from './Section.styled';

const Section = ({ children, title }) => {
  return (
    <PageSection>
      {title && <SectionTitle>{title}</SectionTitle>}
      {children}
    </PageSection>
  );
};

export default Section;

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};
