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
