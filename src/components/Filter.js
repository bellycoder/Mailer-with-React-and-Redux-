import React, { Component } from 'react'

export default class Filter extends Component {
    onSelectFilter(e){
        const {filterMessages} = this.props; 
        filterMessages({isSpam: e.target.value === "spam"});
    }
    render() {
        return (
                <div className="inboxFilter">
                   <div>
                        <a className="inbox">Inbox</a> 
                        <a className="count">1</a>    
                    </div>
                    <div className="select" >
                        <select id="inbox-spam" defaultValue="filter_by" onChange={this.onSelectFilter}>
                            <option disabled value="filter_by">Filter by</option>
                            <option value="inbox">Inbox</option>
                            <option value="spam">Spam</option>
                            <option value="delete">Deleted</option>
                        </select>
                    </div>
                </div>   
        )
    }
}
