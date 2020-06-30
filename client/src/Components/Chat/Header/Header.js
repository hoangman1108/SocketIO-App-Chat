import React, { Component, useState } from 'react'

const Header = ({room})=> {
        return (
            <header className="justify-content-center">
                <h4 id="room">{room}</h4>
                <i className="fa fa-window-close" aria-hidden="true" />
            </header>
        )
}

export default Header;