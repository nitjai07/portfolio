import React from 'react';
import { shallow } from 'enzyme';
import Heading from './Heading';

test('Heading Component renders correctly', () => {
  const component = shallow(<Heading headingText="test heading" />);
  expect(component).toMatchSnapshot();
});
