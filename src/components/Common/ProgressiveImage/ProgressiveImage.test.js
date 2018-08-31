import React from 'react';
import { shallow } from 'enzyme';
import ProgressiveImage from './ProgressiveImage';
import meImg from '../../../assets/images/me_1.jpg';
import meImLow from '../../../assets/images/me_1_low.jpg';

test('ProgressiveImage renders correctly', () => {
  const component = shallow(<ProgressiveImage piTinyImageSource={meImLow} piMainImageSource={meImg} />);
  expect(component).toMatchSnapshot();
});
