import React, { Component } from 'react'
import MessagePreview from "./MessagePreview";

export default class List extends Component {
    render() {
        return (
            <div className="lista">
                <MessagePreview/>
            </div>
        )
    }
}
