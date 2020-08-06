import React from 'react';

import { shallow, mount } from 'enzyme';
import TodoList from '../components/TodoList';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<TodoList />);
})

describe('<Todo />', () => {
  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render an input field', () => {
    expect(wrapper.find('input').length).toEqual(1)
  })
})