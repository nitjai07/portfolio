import React from 'react';
import { shallow } from 'enzyme';
import ProjectDetails from './ProjectDetails';
import meImg from '../../../assets/images/me_1.jpg';

const ProjectData = {
  DnD: {
    heading: 'Deal or No Deal',
    shortDesc: 'Deal or no deal is a fictional game based on the inidian TV Game show.',
    client: 'Training MFRP',
    role: 'Front End Developer',
    date: 'April 2015',
    images: [meImg],
    tech: 'HTML5, CSS3, JavaScript'
  }
};

test('Project Details Component renders correctly', () => {
  const component = shallow(
    <ProjectDetails ProjectData={ProjectData} prevProj="previous project name" nextProj="next project name" />
  );
  expect(component).toMatchSnapshot();
});
