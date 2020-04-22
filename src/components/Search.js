import React, { Component } from 'react'

export default class Search extends Component {

    onSearchFilter(value){
        const {filterMessages, filterBy} = this.props;
        let filter = Object.assign(filterBy,{from: value});
        filterMessages(filter);
    }


    render() {
        return (
            <div className="search">
                <input type="text" onChange={(e) => this.onSearchFilter(e.target.value)} placeholder="Search.."/>
            </div>
        )
    }
}
