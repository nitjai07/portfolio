import React from 'react';
import { shallow } from 'enzyme';
import Skills from './Skills';

test('Skills Component renders correctly', () => {
  const component = shallow(<Skills />);
  expect(component).toMatchSnapshot();
});
