import React, { Component } from 'react'
import Filter from './Filter'
import Search from './Search'
import Options from './Options'
import List from './List'
import MessageBody from './MessageBody'
import TittleMessage from './TittleMessage'
import Tag from './Tag'
import {LIST_ACTIONS} from '../redux/actions/list'
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

        // Set filter initially
        filterMessages({isSpam: false, isDeleted: false});
        this.startInterval(90, this.requestElements);
        requestElements();
    }

    // Code cleanup to prevent timer to continue running
    componentWillUnmount() {
        const {interval} = this.props;
        this.removeInterval(interval);
    }

    render() {
        const {showList, current, filterBy} = this.props;
        return (
            <div className="contenedor">
                <Filter messageList={showList} filterMessages={this.filterMessages} filterBy={filterBy}/>
                <Options changeProperties={this.changeProperties} filterMessages={this.filterMessages} filterBy={filterBy} current={current}/>
                <TittleMessage current={current}/>
                <Search filterMessages={this.filterMessages} filterBy={filterBy}/>
                <Tag current={current}/>
                <MessageBody current={current}/>
                <List changeProperties={this.changeProperties} messageList={showList} filterMessages={this.filterMessages} filterBy={filterBy}/>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return state.List;
};

const mapDispatchToProps = (dispatch) => ({
    filterMessages: (filter, reset=true) => dispatch(LIST_ACTIONS.filterMessages(filter, reset)),
    startInterval: (time, callback) => dispatch(LIST_ACTIONS.startInterval(time, callback)),
    removeInterval: (interval) => dispatch(LIST_ACTIONS.clearInterval(interval)),
    changeProperties: (id, newValues) => dispatch(LIST_ACTIONS.changeProperties(id, newValues)),
    requestElements: () => dispatch(LIST_ACTIONS.requestElements())
});

export default connect(mapStateToProps, mapDispatchToProps)(Contenedor);
