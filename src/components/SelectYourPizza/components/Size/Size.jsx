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
  border: 2px solid ${({ selected }) => selected ? '#1a98e1' : 'transparent'};  
`;

const Name = styled.span`
  margin-left: 5px;
  font-size: 15px;
  color:${({ selected }) => selected ? '#1a98e1' : ''};
`;

const Size = ({ sizeItem, selected, handleSizeChoose }) => {

  const { name, percentage } = sizeItem;
  const size = 70 * percentage;

  return (
    <Layout onClick={() => handleSizeChoose(sizeItem)}>
      <PizzaPic src={pizzaImage} size={size} selected={selected} />
      <Name selected={selected}>{name}</Name>
    </Layout>
  );
};

Size.propTypes = {
  sizeItem: PropTypes.object.isRequired,
  selected: PropTypes.bool.isRequired,
  handleSizeChoose: PropTypes.func.isRequired
};

export default Size;