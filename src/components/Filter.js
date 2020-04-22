import React, { Component } from 'react'

export default class Filter extends Component {

    constructor(props) {
        super(props);
    }

    onSelectFilter(selected) {
        const {filterMessages, filterBy} = this.props;
        let filter;
        switch (selected) {
            case 'spam':
                filter = Object.assign(filterBy,{isSpam: true});
                delete filter.isDeleted;
                filterMessages(filter);
                break;
            case 'delete':
                filter = Object.assign(filterBy,{isDeleted: true});
                delete filter.isSpam;
                filterMessages(filter);
                break;
            case 'inbox':
                filterMessages(Object.assign(filterBy,{isSpam: false, isDeleted: false}));
                break;
        }
    }

    render() {
        const {messageList} = this.props;
        return (
                <div className="inboxFilter">
                   <div>
                        <a className="inbox">Inbox</a> 
                        <a className="count">{messageList.length}</a>
                    </div>
                    <div className="select" >
                        <select id="inbox-spam" defaultValue="filter_by" onChange={(e) => this.onSelectFilter(e.target.value)}>
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
