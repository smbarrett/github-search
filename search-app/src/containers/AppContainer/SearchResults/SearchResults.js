import React, { Component } from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

class SearchResults extends Component {
    constructor(props) {
        super(props);
    }

    renderRow(result) {
        const { name, owner, stars, url } = result;

        return (
            <TableRow key={`${name}-${owner}`}>
                <TableCell>
                    <a href={url}>{name}</a>
                </TableCell>
                <TableCell>{owner}</TableCell>
                <TableCell>{stars}</TableCell>
            </TableRow>
        );
    }

    render() {
        const { results } = this.props; 

        if (results && !results.length) {
            return (
                <div>No Results Found</div>
            );
        }

        return (
            <div>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Owner</TableCell>
                                <TableCell>Stars</TableCell>
                            </TableRow>
                            {results.map(result => this.renderRow(result))}
                        </TableHead>
                    </Table>
                </TableContainer>
            </div>
        );
    }
}

export default SearchResults;