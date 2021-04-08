import styled from 'styled-components';
import PropTypes from 'prop-types';

import pizzaImage from '../../../assets/pizza.svg';

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const PizzaPic = styled.img`
  margin-right: 10px;
  width: ${({ size }) => `${size}px`};
  border-radius: 50%;
  border: 2px solid ${({ selected }) => selected ? '#629412' : 'transparent'};  
`;

const Name = styled.span`
  margin-left: 5px;
  font-size: 15px;
  color:${({ selected }) => selected ? '#629412' : ''};
`;

const Size = ({ name, percentage, selected, handleSizeChoose }) => {

  const size = 70 * percentage;

  return (
    <Layout onClick={handleSizeChoose}>
      <PizzaPic src={pizzaImage} size={size} selected={selected} />
      <Name selected={selected}>{name}</Name>
    </Layout>
  );
};

Size.defaultProps = {
  selected: false
};

Size.propTypes = {
  name: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  selected: PropTypes.bool,
  handleSizeChoose: PropTypes.func.isRequired
};

export default Size;
