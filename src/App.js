import { Component } from 'react';
import styled from 'styled-components';

import EnterYourDetails from './components/EnterYourDetails';
import SelectYourPizza from './components/SelectYourPizza';
import OrderList from './components/OrderLIst';

const Layout = styled.div`
  padding: 20px 30px;
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
  text-align: center;
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
  },
];

const TOPPINGS = [
  {
    name: 'bacon',
    price: 1,
  },
  {
    name: 'egg',
    price: 1,
  },
];

class App extends Component {

  state = {
    chosenSize: SIZES[0],
    details: [
      { name: 'Joey' },
      { email: 'joey@gmail.com' },
    ],
    chosenToppings: [
      TOPPINGS[0],
      TOPPINGS[1],
    ],
  };

  render() {

    const { chosenSize, chosenToppings } = this.state;

    return (
      <Layout>
        <EnterYourDetails />
        <SelectYourPizza />
        <OrderList
          chosenSize={chosenSize}
          chosenToppings={chosenToppings}
        />
        <OrderButton>Submit Your Order</OrderButton>
      </Layout>
    );
  };
};

export default App;
