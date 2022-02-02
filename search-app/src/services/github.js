export async function getSearchResults(input) {
    const encodedQuery = encodeURIComponent(`user:${input}`);
    const sort = 'sort=stars';
    const perPage = 'per_page=15';
    const url = 'https://api.github.com/search/repositories';
    const results = await fetch(`${url}?q=${encodedQuery}&${sort}&${perPage}`, {
        method: 'GET',
        headers: {
            Accept: 'application/vnd.github.v3+json',
        },
    });

    if (results.status !== 200) {
        return [];
    }

    const searchResults = await results.json();

    return searchResults.items.map(result => ({
        name: result.name,
        owner: result.owner.login,
        url: result.html_url,
        stars: result.stargazers_count,
    }));
}