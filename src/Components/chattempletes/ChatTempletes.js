import React, { Component } from 'react'
import './chattempletes.css'

export default class ChatTempletes extends Component {
    render() {
        let className= this.props.type ? 'chattempletes_me' : 'chattempletes_other'

        return (
            
            <div className={className}>
            
            <div className="img_chat">
                <img src={this.props.image} alt="" />
            </div>
            <div className="mainchat">
            <h6 className="para">{this.props.chat}</h6>
            <div className="chat_info">
                <span><p>16 min ago.</p></span>
                <span id="span2"><p>seen.</p></span>
                </div>


            </div>
            </div>
        )
    }
}
