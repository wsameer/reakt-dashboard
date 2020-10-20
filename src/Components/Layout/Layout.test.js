import React from 'react';
import { shallow } from 'enzyme';
import Layout from './Layout';
import TodoList from '../TodoList/TodoList';

describe('<Layout />', () => {
  let container;

  beforeEach(() => (container = shallow(<Layout />)));

  it('should render the Layout component', () => {
    expect(container).toMatchSnapshot();
  });

  it('should render the TodoList component', () => {
    expect(container.find(TodoList)).toHaveLength(1);
  });
});