import React, { Component } from 'react'

export default class MessagePreview extends Component {

    render() {
        const {data} = this.props;

        return (
            <div className={`messagePreview ${data.isReaded ? "read":"unread"}`}>
                <div className="large_block">
                    <div className="sender"><b>{data.from}</b></div>
                    <span className="preview">{data.subject}</span>
                </div>
                <div className="small_block">
                    <div className="hour">{data.date}</div>
                    <div className="attachment"><img className="icon" alt="clip" src="https://img.icons8.com/ios/50/000000/attach.png"/></div>
                </div>
            </div>
        )
    }
}
