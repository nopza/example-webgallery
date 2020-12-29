import React from 'react';
import { shallow } from 'enzyme';
import MyPage from './MyPage';

describe('MyPage', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<MyPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
