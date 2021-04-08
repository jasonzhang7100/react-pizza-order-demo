import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.div`
  margin: 8px 0;
  padding: 10px;
  font-size: 25px;
  font-weight: 300;
  color: #6E7790;
`;

const Children = styled.div`
  padding: 10px;
  border-radius: 5px;
  background-color: #f3f3f3;
`;

const SectionLayout = ({ title, children }) => (
  <>
    <Title data-test="title">{title}</Title>
    <Children data-test="children">
      {children}
    </Children>
  </>
);

SectionLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default SectionLayout;
