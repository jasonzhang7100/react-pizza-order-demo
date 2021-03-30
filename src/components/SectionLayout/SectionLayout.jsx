import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.h2`
  margin-bottom: 10px;
  font-size: 22px;
  font-weight: 300;
  color: #6E7790;  
`;

const Children = styled.div`
  padding: 10px 0;
  border-radius: 5px;
  background-color: #f3efef;
`;

const SectionLayout = ({ title, children }) => (
  <>
    <Title>{title}</Title>
    <Children>
      {children}
    </Children>
  </>
);

SectionLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default SectionLayout;

