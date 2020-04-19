import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
                <div className="inboxFilter">
                   <div>
                        <a className="inbox">Inbox</a> 
                        <a className="count">1000000000000000000</a>    
                    </div>
                    <div className="select">
                        <select id="inbox-spam">
                            <option disabled selected>Filter by</option>
                                <option value="volvo">Inbox</option>
                            <option value="saab">Spam</option>
                        </select>
                    </div>
                </div>
                
        )
    }
}
