import React, { Component, useState } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header className="justify-content-center">
                <h4 id="room">{this.props.room}</h4>
                <i className="fa fa-window-close" aria-hidden="true" />
            </header>
        )
    }
}
