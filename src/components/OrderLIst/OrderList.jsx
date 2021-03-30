import PropTypes from 'prop-types';
import styled from 'styled-components';

import SectionLayout from '../SectionLayout';

const Layout = styled.div`

`;

const SizePart = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ToppingPart = styled.div`
  display: flex;
  justify-content: space-between;
`;

const OrderList = (
  {
    chosenSize,
    chosenToppings,
  }
) => (
  <SectionLayout
    title="This is your order"
  >
    <Layout>
      <SizePart>
        <div>{chosenSize.name}</div>
        <div>${chosenSize.price}</div>
      </SizePart>
      {chosenToppings.map((item, key) => (
        <ToppingPart>
          <div>{item.name}</div>
          <div>${item.price}</div>
        </ToppingPart>
      ))}
    </Layout>
  </SectionLayout>
);

OrderList.propTypes = {
  chosenSize: PropTypes.object.isRequired,
  chosenToppings: PropTypes.array.isRequired,
};

export default OrderList;
