import React, { Component } from 'react';
import UserOnline from './UserOnline/UserOnline'; 
const Online = ({users}) => {
    return (
        <div className="online">
            <ul>
                {users.map((user,i)=><li key={i}><UserOnline name={user.name} ></UserOnline></li>)}
            </ul>
        </div>
    );
}

export default Online;