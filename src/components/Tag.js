import React, { Component } from 'react'

export default class Tag extends Component {
    render() {
        const {current} = this.props;
        return (
            <div className="tag">
                   {
                    Object.entries(current).length !== 0 ?
                        <div className="datail">    
                            <div className="ptag">   
                            <p>Tags</p>    
                            </div>
                            <div>
                            <a className="json">{current.tag}</a>
                            </div>
                        </div>
                        :""
                }
            </div>
        )
    }
}
