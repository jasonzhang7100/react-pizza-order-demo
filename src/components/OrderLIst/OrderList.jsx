import PropTypes from 'prop-types';
import styled from 'styled-components';

import SectionLayout from '../SectionLayout';

const SizePart = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ToppingPart = styled.div`
  display: flex;
  justify-content: space-between;
`;

const OrderList = ({ chosenSize, chosenToppings }) => (
  <SectionLayout
    title="This is your order"
  >
    <>
      <SizePart>
        <div>{chosenSize.name}</div>
        <div>${chosenSize.price}</div>
      </SizePart>
      <hr />

      {chosenToppings.map(toppingItem => (
        <ToppingPart key={toppingItem.name}>
          <div>{toppingItem.name}</div>
          <div>${toppingItem.price}</div>
        </ToppingPart>
      ))}
      <hr />

      <SizePart>
        <div>Total:</div>
        <div>$</div>
      </SizePart>
    </>
  </SectionLayout>
);

OrderList.propTypes = {
  chosenSize: PropTypes.object.isRequired,
  chosenToppings: PropTypes.array.isRequired
};

export default OrderList;
