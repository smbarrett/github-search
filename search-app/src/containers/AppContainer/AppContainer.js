import React, { Component } from 'react';
import './AppContainer.css';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Search from './Search/Search';
import CircularProgress from '@mui/material/CircularProgress';
import { getSearchResults } from '../../services/github';
import SearchResults from './SearchResults/SearchResults';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.handleInputText = this.handleInputText.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.state = { 
            searchResults: [], 
            isLoading: false,
            searchText: '',
            hasSearched: false,
        };
    }

    handleInputText(e) {
        this.setState({ searchText: e.target.value });
    };

    async handleSearch(input) {
        this.setState({ isLoading: true });
        const results = await getSearchResults(input);
        this.setState({ isLoading: false, hasSearched: true, searchResults: results });
    }

    render() {
        const { isLoading, searchText, searchResults, hasSearched } = this.state;;

        return (
            <div>
                <Card>
                    <Typography variant='h3' align='center'>
                        Github Repo Search
                    </Typography>
                    <div>
                        <div className="search">
                            <Search
                                value={searchText}
                                handleInput={this.handleInputText}
                                onSearch={this.handleSearch}
                            />
                        </div>
                        <div className='results'>
                            {isLoading && (
                                <CircularProgress/>
                            )}
                            {hasSearched && <SearchResults results={searchResults} />}
                        </div>
                    </div>
                </Card>
            </div>
        );
    }
}

export default AppContainer;