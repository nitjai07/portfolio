import React from 'react';
import { shallow } from 'enzyme';
import GMap from './GMap';

test('Heading Component renders correctly', () => {
  const component = shallow(<GMap latitude={12.123} longitude={32.21} />);
  expect(component).toMatchSnapshot();
});
