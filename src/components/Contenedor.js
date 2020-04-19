import React, { Component } from 'react'
import Filter from './Filter'
import Search from './Search'
import Options from './Options'
import List from './List'
import MessageBody from './MessageBody'



export default class Contenedor extends Component {
    render() {
        return (
            <div className="contenedor">
                <Filter/>
                <Options/>
                <Search/>
                <MessageBody/>
                <List/>
            </div>
        )
    }
}
