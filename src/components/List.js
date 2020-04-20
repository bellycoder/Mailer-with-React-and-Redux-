import React, { Component } from 'react'
import MessagePreview from "./MessagePreview";
import { connect } from 'react-redux';
import {LIST_ACTIONS} from '../redux/actions/list'

const List = class List extends Component {

    constructor(props) {
        super(props);
        const {startInterval, addElement} = this.props;
        this.state = {
            papas: true
        };
        this.addElement = addElement.bind(this);
        startInterval(90, this.addElement);
    }

    messageList() {
        const {messageList} = this.props;
        return messageList.map((current) => {
            return <div className="messageComponent" onClick={() => this.onClickMessage(current.id)}>
                <MessagePreview key={current.id} data={current}/>
            </div>
        })
    }

    onClickMessage(id){
        const {changeState} = this.props;
        changeState(id, true)
    }

    render(){
        return (
            <div className="lista">
                {this.messageList()}
            </div>
        )
    }

    // Code cleanup to prevent timer to continue running
    componentWillUnmount() {
        const {cleanInterval, interval} = this.props;
        cleanInterval(interval);
    }
};

const mapStateToProps = (state) => {
    return state.List;
};

const mapDispatchToProps = (dispatch) => ({
    startInterval: (time, callback) => dispatch(LIST_ACTIONS.startInterval(time, callback)),
    clearInterval: (interval) => dispatch(LIST_ACTIONS.clearInterval(interval)),
    addElement: (data) => dispatch(LIST_ACTIONS.addElement(data)),
    changeState: (id, isReaded) => dispatch(LIST_ACTIONS.changeState(id, isReaded))
});

export default connect(mapStateToProps, mapDispatchToProps)(List);



