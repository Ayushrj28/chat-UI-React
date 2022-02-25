import React, { Component } from 'react'
import './chatbody.css';
import ChatList from '../chatlist/ChatList';
import ChatArea from "../chatarea/ChatArea";
import UserProfile from '../userprofile/UserProfile'
export default class ChatBody extends Component {
    render() {
        return (
            <div className="chatbody">
                <ChatList/>
                <ChatArea/>
                <UserProfile/>
            </div>
        )
    }
}
