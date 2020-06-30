import React, { Component } from 'react'

const Message = ({ message: { text, user }, name }) => {
    let isCurrentUser = false;

    if (name) {
        const trimmedName = name.trim().toLowerCase();
        if (user === trimmedName) {
            isCurrentUser = true;
        }
    }
    return (
        isCurrentUser
            ?
            (<div className="message-right">
                <div className="usersend">{user}</div>
                <div className="boxmess-current">
                    <div className="textmess">{text}</div>
                </div>
            </div>)
            :
            (<div className="message-left">
                <div className="boxmess">
                    <div className="textmess">{text}</div>
                </div>
                <div className="usersend">{user}</div>
            </div>)
    )
}
export default Message;