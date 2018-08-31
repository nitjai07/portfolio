import React from 'react';
import { shallow } from 'enzyme';
import SideNav from './SideNav';

test('SideNav Component renders correctly', () => {
  const component = shallow(<SideNav />);
  expect(component).toMatchSnapshot();
});
