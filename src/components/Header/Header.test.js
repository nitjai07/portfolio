import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

test('Header component renders properly', () => {
  const component = shallow(<Header />);
  expect(component).toMatchSnapshot();
});
