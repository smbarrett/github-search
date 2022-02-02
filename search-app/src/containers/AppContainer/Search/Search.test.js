import React from 'react';
import renderer from 'react-test-renderer';
import Search from './Search';

test('Render Search', () => {
    const component = renderer.create(
        <Search value="searchText" onSearch={() => {}}/>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});