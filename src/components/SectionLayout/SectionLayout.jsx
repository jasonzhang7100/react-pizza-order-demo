import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.div`
  margin: 10px 0;
  padding: 10px;
  font-size: 22px;
  font-weight: 300;
  color: #6E7790;
  background-color: lightgray;
`;

const Children = styled.div`
  padding: 10px;
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
  children: PropTypes.node.isRequired
};

export default SectionLayout;
