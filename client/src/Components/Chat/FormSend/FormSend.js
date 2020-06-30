import React, { Component } from 'react'

export default class FormSend extends Component {
    render() {
        return (
            <form class="form">
                <div class="form-group custom-control-inline">
                    <input type="text" class="input" aria-describedby="helpId" />
                    <button class="btn btn-primary" role="button">send</button>
                </div>
            </form>
        )
    }
}
