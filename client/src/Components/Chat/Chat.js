import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import './Chat.css';
import Header from './Header/Header';
import Messages from './Messages/Messages';
import Form from './FormSend/FormSend';
import Online from './Online/Online';
let socket;

const Chat = ({ location }) => { //any link
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);
    const ENDPOINT = "http://localhost:5000";

    useEffect(() => {

        const { name, room } = queryString.parse(location.search);
        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);
        // {error}
        socket.emit('join', { name, room }, ({ error }) => {
            alert(error);
        });

        return () => {
            socket.emit('disconnect');
            socket.off();
        }

    }, [ENDPOINT, location.search]);


    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        });

    }, [messages]);


    useEffect(() => {
        socket.on('allusers', allusers => {
            setUsers(allusers);
          
        });
    }, [users]);


    const sendMessage = (event) => {
        event.preventDefault();

        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    return (
        <div className="row">
            <div className="col-4 offset-4">
                <div className="outcontainer">
                    <Header room={room}></Header>
                    <Messages messages={messages} name={name}></Messages>
                    <Form sendMessage={sendMessage} message={message} setMessage={setMessage}></Form>
                </div>
            </div>
            <div className="col-3 offset-1">
                <Online users={users}></Online>
            </div>
        </div>

    )
}

export default Chat;