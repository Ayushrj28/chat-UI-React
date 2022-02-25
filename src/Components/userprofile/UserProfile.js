import React, { Component } from 'react'
import './userprofile.css';


export default class UserProfile extends Component {
    render() {
        return (
            <div className="userprofile1">
            <div className="container_userprofile">
            <div className="pic_user">
                <img id="pic1"src="https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg" alt="" />
            </div>
            <div className="info_user"><h4>Kakashi Hataka</h4></div>
            
            <div className="intormation">
                <p>C.E.O and Founder Konaha.Inc.</p>
            </div>
            </div>
            
                
            </div>
        )
    }
}
