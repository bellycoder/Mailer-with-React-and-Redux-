import React, { Component } from 'react';


export default class Options extends Component {
    onClickSpam(){
        const {changeProperties, current} = this.props;
        changeProperties(current.id, {isSpam: true});
    }

    render() {
        return (
            <div className="options">
                <div>
                    <button className="buttonDelete">Delete</button>
                    <button className="buttonSpam" onClick={() => this.onClickSpam()}>Spam</button> 
                </div>
                    <button className="buttonUnread">Mark as unread</button>
            </div>
        )
    }
}
