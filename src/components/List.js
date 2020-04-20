import React, { Component } from 'react'
import MessagePreview from "./MessagePreview";


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


