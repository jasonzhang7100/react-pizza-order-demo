import { Component } from 'react';
import styled from 'styled-components';

import EnterYourDetails from './components/EnterYourDetails';
import SelectYourPizza from './components/SelectYourPizza';
import OrderList from './components/OrderLIst';
import validateAllDetails from './utils/validator/validatorDetails';

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

const SIZES = [
  {
    size: 'big',
    name: '20 inch',
    price: 20,
  },
  {
    size: 'middle',
    name: '15 inch',
    price: 15,
  }
];

const TOPPINGS = [
  {
    name: 'bacon',
    price: 1,
  },
  {
    name: 'egg',
    price: 1,
  }
];

class App extends Component {

  state = {
    formDirty: false,
    chosenSize: SIZES[0],
    details: {},
    chosenToppings: [
      TOPPINGS[0],
      TOPPINGS[1]
    ],
  };

  handleDetailChange = (key, value) => {
    this.setState(preState => ({
      details: {
        ...preState.details,
        [key]: value
      }
    }));
  };

  render() {

    const { formDirty, chosenSize, details, chosenToppings } = this.state;

    return (
      <Layout>
        <EnterYourDetails
          formDirty={formDirty}
          details={details}
          handleDetailChange={this.handleDetailChange}
        />
        <SelectYourPizza />
        <OrderList
          chosenSize={chosenSize}
          chosenToppings={chosenToppings}
        />
        <OrderButton
          onClick={() => {
            this.setState({ formDirty: true });

            const detailsValidResult = validateAllDetails(details);
            if (!detailsValidResult) {
              return;
            }
            alert('ORDER SENT');
          }}
        >
          Submit Your Order
        </OrderButton>
      </Layout>
    );
  };
};

export default App;
