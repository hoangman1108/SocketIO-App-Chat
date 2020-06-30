import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Join.css'

const Join = () => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    return (
        <div className="text-center" id='join'>
            <div className="form-signin" id="form-join">
                <h1 className="h3 mb-3 ">Join to Room</h1>
                <label htmlFor="inputnickname" className="sr-only">Nick name</label>
                <input type="text" onChange={(event) => setName(event.target.value)} id="inputnickname" className="form-control" placeholder="Nick name" required autoFocus />
                <label htmlFor="inputroom" className="sr-only">Room</label>
                <input type="text" onChange={(event) => setRoom(event.target.value)} id="inputroom" className="form-control" placeholder="Room" required />

                <Link onClick={(event) =>(!name || !room)?event.preventDefault():null} to ={`/chat?name=${name}&&room=${room}`}>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Join</button>
                </Link>
            </div>
        </div>
    )
}

export default Join;