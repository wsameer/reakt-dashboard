import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Layout from './Components/Layout';
import Footer from './Components/Footer';

describe('<App />', () => {
  let container;

  beforeEach(() => (container = shallow(<App />)));

  it('should render correctly', () => {
    expect(container).toMatchSnapshot();
  });

  it('should contain Layout component', () => {
    expect(container.containsMatchingElement(<Layout />)).toEqual(true);
  });

  it('should contain Footer component', () => {
    // expect(container.find(Footer)).toHaveLength(1); altrnative
    expect(container.containsMatchingElement(<Footer />)).toBeTruthy();
  });
});