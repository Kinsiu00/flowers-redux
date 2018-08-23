import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import UserList from '../../components/UserList';

describe('<UserList>', () => {
    test('renders UserList', () => {
        const wrapper = shallow(<UserList userData={[]}/>)

        expect(wrapper).toMatchSnapshot()
    })
})