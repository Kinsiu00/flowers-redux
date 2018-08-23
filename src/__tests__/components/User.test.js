import React from 'react';
import { shallow } from 'enzyme';

import User from '../../components/User';

describe('<User>', () => {
    test('renders User', () => {
        const wrapper = shallow(<User eachUser={[]}/>)

        expect(wrapper).toMatchSnapshot()
    })
})

describe("<User />", () => {
    describe("onClick()", () => {
      test("successfully fires off click function", () => {
        const mockOnClick = jest.fn();
        const wrapper = shallow(
          <User eachUser={['test']} onClick={jest.fn()}/>
        );
        const component = wrapper
        component.find(".clickMe").simulate("click");
        expect(mockOnClick.mock.calls.length).toEqual(1);
      });
    });
  });
