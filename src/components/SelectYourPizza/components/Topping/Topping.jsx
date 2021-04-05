import styled from 'styled-components';

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
  border: 2px solid ${({ selected }) => selected ? '#1a98e1' : 'transparent'}; 
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

const Topping = ({ toppingItem, selected, handleToppingsChoose }) => {

  const { name } = toppingItem;

  return (
    <Layout selected={selected} onClick={() => handleToppingsChoose(toppingItem)}>
      <ToppingPic src={toppingImages[name]} />
      <Name>{name}</Name>
    </Layout>
  );
};

export default Topping;
