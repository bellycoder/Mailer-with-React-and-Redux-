import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <div>
                    <h2>Inbox</h2>
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
