import { Component } from 'react';
import styled from 'styled-components';

import EnterYourDetails from './components/EnterYourDetails';
import validateAllDetails from './utils/validator/validatorDetails';
import SelectYourPizza from './components/SelectYourPizza';
import OrderList from './components/OrderLIst';

const Layout = styled.div`
  padding: 30px 30px;
`;

const OrderButton = styled.button`
  margin-top: 10px;
  width: 100%;
  height: 40px;
  border: 0;
  outline: 0;
  border-radius: 5px;
  font-size: 15px;
  color: white;
  background-color: #98C550;
  cursor: pointer;

  &:hover {
    background-color: #b9ea6a
  }
`;

const sizes = [
  {
    percentage: 1,
    name: 'Large (13")',
    price: 13.99,
  },
  {
    percentage: 0.8,
    name: 'Medium (11")',
    price: 11.99,
  },
  {
    percentage: 0.65,
    name: 'Small (9")',
    price: 9.99,
  }
];

const toppings = [
  {
    name: 'bacon',
    price: 0.99,
  },
  {
    name: 'egg',
    price: 0.99,
  },
  {
    name: 'onion',
    price: 0.99,
  },
  {
    name: 'mushroom',
    price: 0.99,
  },
  {
    name: 'chili',
    price: 0.99,
  },
  {
    name: 'pepper',
    price: 0.99,
  },
  {
    name: 'sweetcorn',
    price: 0.99,
  },
  {
    name: 'anchovy',
    price: 0.99,
  }
];

class App extends Component {

  state = {
    formDirty: false,
    details: {},
    chosenSize: sizes[0],
    chosenToppings: []
  };

  handleDetailChange = (key, value) => {
    this.setState(preState => ({
      details: {
        ...preState.details,
        [key]: value
      }
    }));
  };

  handleSizeChoose = (size) => {
    this.setState({ chosenSize: size });
  };

  handleToppingsChoose = (toppingItem) => {
    this.setState(preState => {
      const { chosenToppings } = preState;
      if (chosenToppings.includes(toppingItem)) {
        return {
          chosenToppings: chosenToppings.filter(chosenTopping => chosenTopping !== toppingItem)
        };
      };
      return {
        chosenToppings: [
          ...chosenToppings,
          toppingItem
        ]
      };
    });
  };

  render() {
    const { formDirty, details, chosenSize, chosenToppings } = this.state;
    return (
      <Layout>
        <EnterYourDetails
          formDirty={formDirty}
          details={details}
          handleDetailChange={this.handleDetailChange}
        />
        <SelectYourPizza
          formDirty={formDirty}
          sizes={sizes}
          chosenSize={chosenSize}
          handleSizeChoose={this.handleSizeChoose}
          toppings={toppings}
          chosenToppings={chosenToppings}
          handleToppingsChoose={this.handleToppingsChoose}
        />
        <OrderList
          chosenSize={chosenSize}
          chosenToppings={chosenToppings}
        />
        <OrderButton
          onClick={() => {
            this.setState({ formDirty: true });
            const detailsValidResult = validateAllDetails(details);
            if (!detailsValidResult || chosenToppings.length === 0) {
              return;
            }
            alert('PLACE ORDER');
          }}
        >
          Submit Your Order
        </OrderButton>
      </Layout>
    );
  };
};

export default App;
