import React, { Component } from 'react'
import MessagePreview from "./MessagePreview";

export default class List extends Component {

    render() {
        const {seconds} = this.state;
        return (
            <div className="lista">
                {seconds}
                <MessagePreview unread={true}/>
                <MessagePreview unread={false}/>
            </div>
        )
    }
}
