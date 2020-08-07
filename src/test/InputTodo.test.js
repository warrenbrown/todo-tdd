import React from 'react';

import { shallow, mount } from 'enzyme';
import InputTodo from '../components/InputTodo';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<InputTodo />);
})

describe('<InputTodo />', () => {
  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render `Input Todo`, title', () => {
    expect(wrapper.find('h1').text()).toBe('My Todo List')
  })

  it('should render an form field with an input and a button with the value of Add', () => {
    expect(wrapper.find('form').length).toEqual(1)
    expect(wrapper.find('input').length).toEqual(1)
    expect(wrapper.find('button').text()).toBe('Add Todo')
  })

  // it("should update state on click", () => {
  //   const onSubmitForm = jest.spyOn(React, "useState");
  //   onSubmitForm.mockImplementation((description) => [description, setDescription]);

  //   wrapper.find("button").simulate("click");
  //   expect(setDescription).toHaveBeenCalledWith(1);
  //   // expect(setState).toHaveBeenCalledWith(1);
  // });
})

