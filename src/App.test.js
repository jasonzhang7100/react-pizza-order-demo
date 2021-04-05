// 检测能否成功把details作为props传给EYD
// 检测能否调EYD的props上的函数——改变了主wrapper的details——再在EYD的props看到这个details

import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import EnterYourDetails from './components/EnterYourDetails';

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should pass details to <EnterYourDetails />', () => {
    const details = { name: 'Jason' };
    wrapper.setState({ details });
    expect(wrapper.find(EnterYourDetails).prop('details')).toEqual(details);
  });

  it('should pass new details to <EnterYourDetails /> by calling handleDetailChange', () => {
    const { handleDetailChange } = wrapper.find(EnterYourDetails).props();
    handleDetailChange('name', 'Jack');
    expect(wrapper.find(EnterYourDetails).prop('details')).toEqual({
      name: 'Jack'
    });
  });

});
