import styled from 'styled-components';
import PropTypes from 'prop-types';

import SectionLayout from '../SectionLayout';
import Size from './components/Size';
import Topping from './components/Topping';

const SubSection = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.div`
  margin-bottom: 15px;
  font-size: 16px;
  color: #6E7790;
`;

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`;

const SizeItem = styled.div`
  width: calc(100%/3 - 80px);
`;

const ToppingItem = styled.div`
  margin-bottom: 10px;
  width: calc(100%/4 - 15px);
`;

const SelectYourPizza = ({
  sizes,
  chosenSize,
  handleSizeChoose,
  toppings,
  chosenToppings,
  handleToppingsChoose
}) => {

  return (
    <SectionLayout
      title="Select your pizza"
    >
      <SubSection>
        <Title>Select the size</Title>
        <Layout>
          {sizes.map(sizeItem => (
            <SizeItem key={sizeItem.name}>
              <Size
                sizeItem={sizeItem}
                selected={chosenSize === sizeItem}
                handleSizeChoose={handleSizeChoose}
              />
            </SizeItem>
          ))}
        </Layout>
      </SubSection>
      <SubSection>
        <Title>Select the toppings</Title>
        <Layout>
          {toppings.map(toppingItem => (
            <ToppingItem key={toppingItem.name}>
              <Topping
                toppingItem={toppingItem}
                chosenToppings={chosenToppings}
                selected={chosenToppings.includes(toppingItem)}
                handleToppingsChoose={handleToppingsChoose}
              />
            </ToppingItem>
          ))}

        </Layout>
      </SubSection>
    </SectionLayout>
  );
};

SelectYourPizza.propTypes = {
  sizes: PropTypes.array.isRequired,
  chosenSize: PropTypes.object.isRequired,
  handleSizeChoose: PropTypes.func.isRequired
};

export default SelectYourPizza;
