import React, { Component } from 'react'
import Filter from './Filter'
import Search from './Search'
import Options from './Options'
import List from './List'
import MessageBody from './MessageBody'
import TittleMessage from './TittleMessage'
import Tag from './tag'
import {LIST_ACTIONS, LIST_FILTERS} from '../redux/actions/list'
import { connect } from 'react-redux';


const Contenedor =  class Contenedor extends Component {
    constructor(props){
        super(props);
        const {removeInterval, startInterval, changeProperties, requestElements, filterMessages} = this.props;
     //exporting functions    
        this.removeInterval = removeInterval.bind(this);
        this.startInterval = startInterval.bind(this);
        this.changeProperties = changeProperties.bind(this);
        this.requestElements = requestElements.bind(this);
        this.filterMessages = filterMessages.bind(this);
        
        this.startInterval(90,this.requestElements);
        
        requestElements();
    }

    // Code cleanup to prevent timer to continue running
    componentWillUnmount() {
        const {interval} = this.props;
        this.removeInterval(interval);
    }

    render() {
        const {showList, current} = this.props;
        return (
            <div className="contenedor">
                <Filter filterMessages={this.filterMessages}/>
                <Options changeProperties={this.changeProperties} current={current}/>
                <TittleMessage current={current}/>
                <Search/>
                <Tag current={current}/>
                <MessageBody current={current}/>
                <List changeProperties={this.changeProperties} messageList={showList}/>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return state.List;
};

const mapDispatchToProps = (dispatch) => ({
    filterMessages: (filter) => dispatch(LIST_ACTIONS.filterMessages(filter)),
    startInterval: (time, callback) => dispatch(LIST_ACTIONS.startInterval(time, callback)),
    removeInterval: (interval) => dispatch(LIST_ACTIONS.clearInterval(interval)),
    changeProperties: (id, newValues) => dispatch(LIST_ACTIONS.changeProperties(id, newValues)),
    requestElements: () => dispatch(LIST_ACTIONS.requestElements())
});

export default connect(mapStateToProps, mapDispatchToProps)(Contenedor);
