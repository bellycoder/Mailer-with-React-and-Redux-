import React, { Component } from 'react'

export default class MessageBody extends Component {
    render() {
        const {current} = this.props;
        return (
            <div>
                {
                    Object.entries(current).length !== 0 ?
                        <div className="messageBody">
                            <h3>Mensaje</h3>
                            <p>{current.body}</p>
                        </div>
                        :""
                }
            </div>

        )
    }
}
