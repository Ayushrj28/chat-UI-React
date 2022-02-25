import React, { Component } from 'react'
import './chatlistitem.css';

export default class ChatListItems extends Component {
   
        
    
    render() {
        return (
            <div className="chatlistitems">
            <div className="img_group"><img className="img2"src={this.props.Image} alt="" /></div>
            <div className="info">
                <h6>{this.props.name}</h6>
                <p id="last">{this.props.last_seen}</p>
                </div>
                
            </div>
        )
    }
}
