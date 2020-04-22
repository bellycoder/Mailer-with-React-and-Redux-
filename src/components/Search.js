import React, { Component } from 'react'

export default class Search extends Component {

    //keep all clasificated
    onSearchFilter(value){
        const {filterMessages, filterBy} = this.props;       
        let filter = Object.assign(filterBy,{from: value});
        filterMessages(filter);
    }


    render() {
        return (
            <div className="search">
                <div className="inputSearch">
                <input type="text" onChange={(e) => this.onSearchFilter(e.target.value)} placeholder="Search.."/>
                </div>
            </div>
        )
    }
}
