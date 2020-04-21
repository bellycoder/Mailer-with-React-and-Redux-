import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
                <div className="inboxFilter">
                   <div>
                        <a className="inbox">Inbox</a> 
                        <a className="count">1</a>    
                    </div>
                    <div className="select">
                        <select id="inbox-spam" defaultValue="filter_by">
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
