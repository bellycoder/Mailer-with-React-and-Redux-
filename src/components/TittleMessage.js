import React, { Component } from 'react'

export default class TittleMessage extends Component {
    render() {
        const {current} = this.props;
        return (
            <div className="tittleMessage">
                <div className="subject">
                    <div className="inSide">
                        {current.from}
                    </div>
                </div>
            </div>
        )
    }
}
