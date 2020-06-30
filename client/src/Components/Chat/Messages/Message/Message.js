import React, { Component } from 'react'

export default class Message extends Component {

    render() {
        return (
            <div>
                <div class="message-left">
                    <div class="boxmess">
                        <div class="textmess">Xin chào</div>
                    </div>
                    <div class="usersend">hoangman</div>
                </div>

                <div class="message-right">
                    <div class="usersend">hoangman</div>
                    <div class="boxmess-current">
                        <div class="textmess">Chào clmm</div>
                    </div>
                </div>
            </div>
        )
    }
}
