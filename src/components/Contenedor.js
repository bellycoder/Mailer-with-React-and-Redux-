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
        const {removeInterval, startInterval, changeProperties, addElement, requestElements} = this.props;

        this.clearInterval = removeInterval.bind(this);
        this.startInterval = startInterval.bind(this);
        this.changeProperties = changeProperties.bind(this);
        this.addElement = addElement.bind(this);
        
        this.startInterval(900,this.addElement);
        
        requestElements();
    }

    // Code cleanup to prevent timer to continue running
    componentWillUnmount() {
        const {interval} = this.props;
        this.clearInterval(interval);
    }

    render() {
        const {messageList, current} = this.props;
        return (
            <div className="contenedor">
                <Filter/>
                <Options changeProperties={this.changeProperties} current={current}/>
                <TittleMessage/>
                <Search/>
                <MessageBody/>
                <List changeProperties={this.changeProperties} messageList={messageList}/>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return state.List;
};

const mapDispatchToProps = (dispatch) => ({
    startInterval: (time, callback) => dispatch(LIST_ACTIONS.startInterval(time, callback)),
    removeInterval: (interval) => dispatch(LIST_ACTIONS.clearInterval(interval)),
    addElement: (data) => dispatch(LIST_ACTIONS.addElement(data)),
    changeProperties: (id, newValues) => dispatch(LIST_ACTIONS.changeProperties(id, newValues)),
    requestElements: () => dispatch(LIST_ACTIONS.requestElements())
});

export default connect(mapStateToProps, mapDispatchToProps)(Contenedor);
