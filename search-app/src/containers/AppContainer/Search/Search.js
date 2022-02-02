import React, { Component } from 'react';
import './Search.css';

import Input from '@mui/material/Input';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';

class Search extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.state = { searchValue: '' };
    }

    get value() {
        return this.props.value || this.state.searchValue;
    }

    handleChange(e) {
        if (this.props.handleInput) {
            this.props.handleInput(e);
        } else {
            this.setState({ searchValue: e.target.value});
        }
    };

    handleEnter(e) {
        if (e.key === 'Enter') {
            this.props.onSearch(this.value);
        }
    }

    handleSearch() {
        this.props.onSearch(this.value);
    }

    render() {
        return (
            <div className="root">
                <Input
                    value={this.value} 
                    onChange={this.handleChange}
                    onKeyDown={this.handleEnter}
                />
                <Button onClick={this.handleSearch}>
                    <SearchIcon/>
                    Search
                </Button>
            </div>
        );
    }
}

export default Search;