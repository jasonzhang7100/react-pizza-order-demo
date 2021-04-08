import PropTypes from 'prop-types';
import styled from 'styled-components';

import SectionLayout from '../SectionLayout';

const SizePart = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const ToppingPart = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2px 0 2px 4px;
  font-size: 14px;
`;

const getTotalPrice = (size, toppings) => {
  const totalPrice = toppings.reduce((preValue, { price }) => preValue + price, size.price);
  return totalPrice.toFixed(2);
};

const OrderList = ({ chosenSize, chosenToppings }) => (
  <SectionLayout
    title="This is your order"
  >
    <SizePart>
      <div>{chosenSize.name}</div>
      <div>${chosenSize.price}</div>
    </SizePart>

    {chosenToppings.map(toppingItem => (
      <ToppingPart key={toppingItem.name}>
        <div>{toppingItem.name}</div>
        <div>${toppingItem.price}</div>
      </ToppingPart>
    ))}
    <hr />

    <SizePart>
      <div>Total:</div>
      <div>${getTotalPrice(chosenSize, chosenToppings)}</div>
    </SizePart>
  </SectionLayout>
);

OrderList.propTypes = {
  chosenSize: PropTypes.object.isRequired,
  chosenToppings: PropTypes.array.isRequired
};

export default OrderList;
