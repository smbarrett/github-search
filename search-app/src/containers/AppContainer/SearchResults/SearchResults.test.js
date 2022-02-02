import React from 'react';
import renderer from 'react-test-renderer';
import SearchResults from './SearchResults';

test('Render SearchResults', () => {
    let results = [
        {
            name: 'repoName',
            owner: 'owner',
            stars: 10,
            url: 'urlToRepo',
        }
    ];
    const component = renderer.create(
        <SearchResults results={results}/>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
