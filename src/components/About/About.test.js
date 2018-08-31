import React from 'react';
import { shallow } from 'enzyme';
import About from './About';

test('About renders correctly', () => {
  const component = shallow(<About />);
  expect(component).toMatchSnapshot();
});
