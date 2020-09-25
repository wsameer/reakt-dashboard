import React from 'react';
import { mount, render, shallow } from 'enzyme';

import Layout from './Layout';
import WeatherWidget from './WeatherWidget/WeatherWidget';

describe('<Layout />', () => {
  let container;

  beforeEach(() => (container = shallow(<Layout />)));

  it('should render the Layout component', () => {
    expect(container).toMatchSnapshot();
  });

  it('should container WeatherWidget component', () => {
    expect(container.find(WeatherWidget)).toHaveLength(1);
  });
});