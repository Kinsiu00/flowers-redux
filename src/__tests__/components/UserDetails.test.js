import React from 'react';
import { shallow } from 'enzyme';

import UserList from '../../components/UserDetails';

describe('<UserDetails>', () => {
    test('renders UserDetails', () => {
        const wrapper = shallow(<UserList currentUser={[]}/>)

        expect(wrapper).toMatchSnapshot()
    })
})