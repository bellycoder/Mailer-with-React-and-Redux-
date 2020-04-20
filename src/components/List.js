import React, { Component } from 'react'
import MessagePreview from "./MessagePreview";
import { connect } from 'react-redux';
import {LIST_ACTIONS} from '../redux/actions/list'

const List = class List extends Component {

    constructor(props) {
        super(props);
        const {startInterval, messageList} = this.props;
        this.state = {
            messageList: messageList || []
        };
        startInterval(10);
    }

    messageList() {
        const {messageList} = this.state;
        return messageList.map((current) => {
            return <MessagePreview unread={current.isReaded}/>
        })
    }

    render(){
        return (
            <div className="lista">
                {this.messageList()}
            </div>
        )
    }

};

const mapStateToProps = (state) => {
    return state.List;
};

const mapDispatchToProps = (dispatch) => ({
    startInterval: (time) => dispatch(LIST_ACTIONS.startInterval(time)),
    clearInterval: (interval) => dispatch(LIST_ACTIONS.clearInterval(interval))
});

export default connect(mapStateToProps, mapDispatchToProps)(List);



