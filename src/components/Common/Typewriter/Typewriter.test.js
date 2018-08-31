import React from 'react';
import { shallow } from 'enzyme';
import Typewriter from './Typewriter';

test('Typewriter Component renders correctly', () => {
  const component = shallow(<Typewriter typeTxt="test text" idValue="testId" />);
  expect(component).toMatchSnapshot();
});
