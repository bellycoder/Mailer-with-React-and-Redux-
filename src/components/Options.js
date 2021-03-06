import React, { Component } from 'react';


export default class Options extends Component {

    onClickSpam(){
        const {changeProperties, filterBy, filterMessages, current} = this.props;
        changeProperties(current.id, {isSpam: true});
        filterMessages(filterBy);
    }

    onClickMarkUnread(){
        const {changeProperties, filterBy, filterMessages, current} = this.props;
        changeProperties(current.id, {isReaded: false});
        filterMessages(filterBy);
    }

    onClickDelete(){
        const {changeProperties, filterBy, filterMessages, current} = this.props;
        changeProperties(current.id, {isDeleted: true});
        filterMessages(filterBy);
    }

    render() {
       const {current} = this.props;
        return (
            <div>
                  {
                    Object.entries(current).length !== 0 ?
                        <div className="options">
                            <div className="two">
                                <button className="buttonDelete" onClick={() => this.onClickDelete()}>Delete</button>
                                <button className="buttonSpam" onClick={() => this.onClickSpam()}>Spam</button> 
                            </div>
                                <button className="buttonUnread" onClick={()=> this.onClickMarkUnread()}>Mark as unread</button>
                        </div>
                        :""
                }
            </div>
        )
    }
}

