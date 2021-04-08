import { shallow } from 'enzyme';

import SectionLayout from './SectionLayout';

describe('<SectionLayout />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <SectionLayout title="title">
        hello
      </SectionLayout>
    )
  });

  it('should render title', () => {
    expect(wrapper.find('[data-test="title"]').text()).toBe('title')
  });

  it('should render children', () => {
    expect(wrapper.find('[data-test="children"]').text()).toBe('hello');
  });
});
