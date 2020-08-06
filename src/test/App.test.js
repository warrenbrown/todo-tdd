import React from 'react';

import { shallow, mount } from 'enzyme';
import App from '../App';
import TodoList from '../components/TodoList';
import InputTodo from '../components/InputTodo';


let wrapper;
beforeEach(() => {
  wrapper = shallow(<App />);
})

describe('<Todo />', () => {

  it('should render InputTodo Component', () => {
    console.log(wrapper.debug())
    expect(wrapper.containsMatchingElement(<InputTodo />)).toEqual(true);
  });

  it('should render TodoList Component', () => {
    console.log(wrapper.debug())
    expect(wrapper.containsMatchingElement(<TodoList />)).toEqual(true);
  });
})