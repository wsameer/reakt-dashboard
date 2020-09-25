import React from 'react';
import { mount, shallow } from 'enzyme';
import App from './App';
import Layout from './Components/Layout';
import Footer from './Components/Footer';

describe('<App />', () => {
  let component;

  beforeEach(() => (component = shallow(<App />)));

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should contain Layout component', () => {
    expect(component.find(Layout)).toHaveLength(1);
  });

  it('should contain Footer component', () => {
    expect(component.find(Footer)).toHaveLength(1);
  });
});