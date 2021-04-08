import styled from 'styled-components';
import PropTypes from 'prop-types';

import SectionLayout from '../SectionLayout';
import Size from './components/Size';
import Topping from './components/Topping';
import sizePropTypes from '../../propTypes/Size';
import toppingPropTypes from '../../propTypes/Topping';
import ErrorMsg from '../ErrorMsg';

const SubSection = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  height: 20px;
  font-size: 16px;
  color: #6E7790;
  line-height: 20px;
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
  formDirty,
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
                name={sizeItem.name}
                percentage={sizeItem.percentage}
                selected={chosenSize === sizeItem}
                handleSizeChoose={() => handleSizeChoose(sizeItem)}
              />
            </SizeItem>
          ))}
        </Layout>
      </SubSection>
      <SubSection>
        <Title>
          Select the toppings
          {(formDirty && chosenToppings.length === 0) && (
            <ErrorMsg>
              Please select at least one topping
            </ErrorMsg>
          )}
        </Title>

        <Layout>
          {toppings.map(toppingItem => (
            <ToppingItem key={toppingItem.name}>
              <Topping
                name={toppingItem.name}
                selected={chosenToppings.includes(toppingItem)}
                handleToppingsChoose={() => handleToppingsChoose(toppingItem)}
              />
            </ToppingItem>
          ))}

        </Layout>
      </SubSection>
    </SectionLayout >
  );
};

SelectYourPizza.propTypes = {
  formDirty: PropTypes.bool.isRequired,
  sizes: PropTypes.arrayOf(PropTypes.shape(sizePropTypes)).isRequired,
  chosenSize: PropTypes.shape(sizePropTypes).isRequired,
  handleSizeChoose: PropTypes.func.isRequired,
  toppings: PropTypes.arrayOf(PropTypes.shape(toppingPropTypes)).isRequired,
  chosenToppings: PropTypes.arrayOf(PropTypes.shape(toppingPropTypes)).isRequired,
  handleToppingsChoose: PropTypes.func.isRequired
};

export default SelectYourPizza;
