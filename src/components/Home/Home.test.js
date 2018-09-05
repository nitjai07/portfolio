import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

test('Home Component renders correctly', () => {
  const component = shallow(<Home />);
  expect(component).toMatchSnapshot();
});
