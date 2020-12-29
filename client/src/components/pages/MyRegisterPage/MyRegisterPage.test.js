import React from 'react';
import { shallow } from 'enzyme';
import MyRegisterPage from './MyRegisterPage';

describe('MyRegisterPage', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<MyRegisterPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
