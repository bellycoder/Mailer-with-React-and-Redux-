import React, { Component } from 'react'

export default class MessagePreview extends Component {

    render() {
        const {unread} = this.props;

        return (
            <div className={`messagePreview ${unread ? "read": ""}`}>
                <div className="large_block">
                    <div className="sender"><b>Croswell Bowen</b></div>
                    <span className="preview">Lorem Ipsum is simply dummy</span>
                </div>
                <div className="small_block">
                    <div className="hour">09:15 AM</div>
                    <div className="attachment"><img className="icon" alt="clip" src="https://img.icons8.com/ios/50/000000/attach.png"/></div>
                </div>
            </div>
        )
    }
}
