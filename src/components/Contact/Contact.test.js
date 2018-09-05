import React from 'react';
import { shallow } from 'enzyme';
import Contact from './Contact';

test('Contact Component renders correctly', () => {
  const component = shallow(<Contact />);
  expect(component).toMatchSnapshot();
});
