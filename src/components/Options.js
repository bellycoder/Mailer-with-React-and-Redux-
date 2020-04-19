import React, { Component } from 'react';


export default class Options extends Component {
    render() {
        return (
            <div className="options">
                <div>
                    <button className="buttonDelete">Delete</button>
                    <button className="buttonSpam">Spam</button> 
                </div>
                    <button className="buttonUnread">Mark as unread</button>
            </div>
        )
    }
}
