import React from 'react';
import { shallow } from 'enzyme';

import SearchBar from './search-bar.component';

describe('SearchBar Component', () => {
	const wrapper = shallow(<SearchBar />);
	it('expect to render SearchBar Component', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
