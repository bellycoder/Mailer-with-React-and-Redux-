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
                        </div>
                        :""
                }
            </div>
        )
    }
}
