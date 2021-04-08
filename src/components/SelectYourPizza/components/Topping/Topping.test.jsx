import { shallow } from 'enzyme';

import Topping from './Topping';

describe('<Topping />', () => {
  let wrapper;
  let handleToppingsChoose;

  beforeEach(() => {
    handleToppingsChoose = jest.fn();
    wrapper = shallow(
      <Topping
        name="bacon"
        selected
        handleToppingsChoose={handleToppingsChoose}
      />
    )
  });

  it('should pass true flag to styled-component when selected', () => {
    expect(wrapper.find('[data-test="toppingLayout"]').prop('selected')).toBe(true);
  });

  it('should pass false flag to styled-component when not selected', () => {
    wrapper.setProps({
      selected: false
    });
    expect(wrapper.find('[data-test="toppingLayout"]').prop('selected')).toBe(false);
  });

  it('should call handleToppingsChoose when element click', () => {
    wrapper.simulate('click');
    expect(handleToppingsChoose).toBeCalled();
  });

  it('should render name', () => {
    expect(wrapper.find('[data-test="toppingName"]').text()).toBe('bacon');
  });
});
