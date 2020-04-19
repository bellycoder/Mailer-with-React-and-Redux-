import React, { Component } from 'react'

export default class MessagePreview extends Component {
    render() {
        return (
            <div className="messagePreview">
                <div className="large_block">
                    <div className="sender">Croswell Bowen</div>
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
