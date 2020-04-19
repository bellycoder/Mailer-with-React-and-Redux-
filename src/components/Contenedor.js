import React, { Component } from 'react'
import Filter from './Filter'
import Search from './Search'
import Options from './Options'
import List from './List'
import MessageBody from './MessageBody'
import TittleMessage from './TittleMessage'

export default class Contenedor extends Component {
    render() {
        return (
            <div className="contenedor">
                <Filter/>
                <Options/>
                <TittleMessage/>
                <Search/>
                <MessageBody/>
                <List/>
            </div>
        )
    }
}
