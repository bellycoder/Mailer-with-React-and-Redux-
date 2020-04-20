import React, { Component } from 'react'
import Filter from './Filter'
import Search from './Search'
import Options from './Options'
import List from './List'
import MessageBody from './MessageBody'
import TittleMessage from './TittleMessage'
import {LIST_ACTIONS} from '../redux/actions/list'
import { connect } from 'react-redux';

const Contenedor =  class Contenedor extends Component {
    constructor(props){
        super(props);
        this.clearInterval = clearInterval.bind(this);
        this.startInterval = startInterval.bind(this);
        this.changeProperties = changeProperties.bind(this);
        this.addElement = addElement.bind(this);
        this.addElement = addElement.bind(this);
    }
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

const mapStateToProps = (state) => {
    return state.List;
};

const mapDispatchToProps = (dispatch) => ({
    startInterval: (time, callback) => dispatch(LIST_ACTIONS.startInterval(time, callback)),
    clearInterval: (interval) => dispatch(LIST_ACTIONS.clearInterval(interval)),
    addElement: (data) => dispatch(LIST_ACTIONS.addElement(data)),
    changeProperties: (id, newValues) => dispatch(LIST_ACTIONS.changeProperties(id, newValues))
});

export default connect(mapStateToProps, mapDispatchToProps)(Contenedor);
