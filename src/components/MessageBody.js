import React, { Component } from 'react'

export default class MessageBody extends Component {
    render() {
        const {current} = this.props;
        return (
            <div className="messageBody">
                {
                    Object.entries(current).length !== 0 ?
                        <div>    
                            <div className="body">
                            <p>{current.body}</p>
                            </div>
                            <div className="body1">
                                <button className="buttonReplay">Replay</button>
                                <img className="icon" alt="clip" src="https://img.icons8.com/ios/50/000000/attach.png"/>

                            </div>

                        </div>
                        :""
                }
            </div>
        )
    }
}
