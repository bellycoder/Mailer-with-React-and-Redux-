import React, { Component } from 'react'

export default class Tag extends Component {
    render() {
        const {current} = this.props;
        return (
            <div className="tag">
                    {current.tag}
            </div>
        )
    }
}
