import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div className="search">
                <input type="text" placeholder="Search.."></input>
                <span class="icon"><i class="fa fa-search"></i></span>
            </div>
        )
    }
}
