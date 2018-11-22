import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchVal: ''
        }
    }

    render() {
        return(
            <input
                type="search" id="query" name="query" className="search-field"
                placeholder="Search YouTube"
                value={this.state.searchVal}
                onChange={event => this.onInputChange(event.target.value)}/>
        )
    }

    onInputChange(searchVal) {
        super.setState({searchVal});
        this.props.onSearch(searchVal);
    }
}

export default SearchBar;