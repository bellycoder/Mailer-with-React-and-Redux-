import React, { Component } from 'react'
import MessagePreview from "./MessagePreview";

export default class List extends Component {

    messageList() {
        const {messageList} = this.props;
        return messageList.map((current) => {
            return <div className="messageComponent" key={current.id} onClick={() => this.onClickMessage(current.id)}>
                <MessagePreview data={current}/>
            </div>
        })   
    }

    onClickMessage(id){
        const {changeProperties, filterBy, filterMessages} = this.props;
        changeProperties(id, {isReaded: true});
        filterMessages(filterBy, false);
    }

    render(){
        return (
            <div className="lista">
                {this.messageList()}
            </div>
        )
    }
};

