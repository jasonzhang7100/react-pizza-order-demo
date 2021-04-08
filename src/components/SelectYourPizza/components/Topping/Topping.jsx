import styled from 'styled-components';
import PropTypes from 'prop-types';

import bacon from '../../../assets/bacon.svg';
import egg from '../../../assets/egg.svg';
import onion from '../../../assets/onion.svg';
import mushroom from '../../../assets/mushroom.svg';
import chili from '../../../assets/chili.svg';
import pepper from '../../../assets/pepper.svg';
import sweetcorn from '../../../assets/sweetcorn.svg';
import anchovy from '../../../assets/anchovy.svg';

const toppingImages = {
  bacon,
  egg,
  onion,
  mushroom,
  chili,
  pepper,
  sweetcorn,
  anchovy
};

const Layout = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid ${({ selected }) => selected ? '#98C550' : 'transparent'}; 
  background-color: #fff;
  cursor: pointer;
`;

const ToppingPic = styled.img`
  padding: 5px 10px;
  width: 45px;
`;

const Name = styled.div`
  width: 100%;
  font-size: 15px;
  text-align: center;
`;

const Topping = ({ name, selected, handleToppingsChoose }) => {

  return (
    <Layout data-test="toppingLayout" selected={selected} onClick={handleToppingsChoose}>
      <ToppingPic src={toppingImages[name]} />
      <Name data-test="toppingName">{name}</Name>
    </Layout>
  );
};

Topping.propTypes = {
  name: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  handleToppingsChoose: PropTypes.func.isRequired
};

export default Topping;
