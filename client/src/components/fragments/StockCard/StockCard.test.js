import React from 'react';
import { shallow } from 'enzyme';
import StockCard from './StockCard';

describe('StockCard', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<StockCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
