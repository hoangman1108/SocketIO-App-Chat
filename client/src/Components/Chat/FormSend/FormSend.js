import React, { Component } from 'react'

const FormSend = ({message, setMessage,sendMessage})=> {
        return (
            <form className="form">
                <div className="form-group custom-control-inline">
                    <input type="text" className="input" placeholder="Type a message..." value={message} onChange={(event)=>setMessage(event.target.value)} onKeyPress={event=> event.key==='Enter'?sendMessage(event):null}/>
                    <button className="btn btn-primary" role="button">send</button>
                </div>
            </form>
        )
}

export default FormSend;