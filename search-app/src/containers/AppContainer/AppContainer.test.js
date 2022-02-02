import React from 'react';
import renderer from 'react-test-renderer';
import AppContainer from './AppContainer';

test('Render AppContainer', () => {
    const component = renderer.create(
        <AppContainer />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});