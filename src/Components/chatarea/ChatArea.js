import React, { Component} from 'react'
import './chatarea.css';
import ChatTempletes from '../chattempletes/ChatTempletes';

export default class ChatArea extends Component {
     chat=[
        {
            key:1,
             convo:"hi",
             type:"me",
             image:"https://lh3.googleusercontent.com/w3oLUa6RLLxFq4r_ZEme_0mN_euveYt0SX1AeGsr_k4JmKn0_Ea7SPil_Z7GwkogsJOx=s85",
        },
        {
            key:2,
             convo:"hey ",
             type:"",
             image:"https://pbs.twimg.com/profile_images/1055263632861343745/vIqzOHXj.jpg",
        },
        {
            key:3,
             convo:"how are you ",
             type:"me",
             image:"https://lh3.googleusercontent.com/w3oLUa6RLLxFq4r_ZEme_0mN_euveYt0SX1AeGsr_k4JmKn0_Ea7SPil_Z7GwkogsJOx=s85",
        },
        {
            key:4,
             convo:" i am fine what about you ",
             type:"",
             image:"https://pbs.twimg.com/profile_images/1055263632861343745/vIqzOHXj.jpg",
        },
        {
            key:5,
             convo:"I am fine",
             type:"me",
             image:"https://lh3.googleusercontent.com/w3oLUa6RLLxFq4r_ZEme_0mN_euveYt0SX1AeGsr_k4JmKn0_Ea7SPil_Z7GwkogsJOx=s85",
        },
        {
            key:6,
             convo:"so what's going? ",
             type:"",
             image:"https://pbs.twimg.com/profile_images/1055263632861343745/vIqzOHXj.jpg",
        },
        {
            key:7,
             convo:"Nothing much,Just planing about holiday after pandamic",
             type:"me",
             image:"https://lh3.googleusercontent.com/w3oLUa6RLLxFq4r_ZEme_0mN_euveYt0SX1AeGsr_k4JmKn0_Ea7SPil_Z7GwkogsJOx=s85",
        },
        {
            key:8,
             convo:"so where to?",
             type:"",
             image:"https://pbs.twimg.com/profile_images/1055263632861343745/vIqzOHXj.jpg",
        },
        {
            key:9,
             convo:"Mumbai i guess ",
             type:"me",
             image:"https://lh3.googleusercontent.com/w3oLUa6RLLxFq4r_ZEme_0mN_euveYt0SX1AeGsr_k4JmKn0_Ea7SPil_Z7GwkogsJOx=s85",
        },
        {
            key:10,
             convo:"wow! sounds exciting ",
             type:"",
             image:"https://pbs.twimg.com/profile_images/1055263632861343745/vIqzOHXj.jpg",
        },
        {
            key:11,
             convo:"but i hope pandemic ends soon ",
             type:"me",
             image:"https://lh3.googleusercontent.com/w3oLUa6RLLxFq4r_ZEme_0mN_euveYt0SX1AeGsr_k4JmKn0_Ea7SPil_Z7GwkogsJOx=s85",
        },
        {
            key:12,
             convo:"ya same here ",
             type:"",
             image:"https://pbs.twimg.com/profile_images/1055263632861343745/vIqzOHXj.jpg",
        },
        {
            key: 13,
             convo:"what about your Home work",
             type:"me",
             image:"https://lh3.googleusercontent.com/w3oLUa6RLLxFq4r_ZEme_0mN_euveYt0SX1AeGsr_k4JmKn0_Ea7SPil_Z7GwkogsJOx=s85",
        },
        {
            key: 14,
             convo:"thoes are tough too",
             type:"",
             image:"https://pbs.twimg.com/profile_images/1055263632861343745/vIqzOHXj.jpg",
        },
        {
            key: 15,
             convo:"ya iam pulling through",
             type:"me",
             image:"https://lh3.googleusercontent.com/w3oLUa6RLLxFq4r_ZEme_0mN_euveYt0SX1AeGsr_k4JmKn0_Ea7SPil_Z7GwkogsJOx=s85",
        },
        {
            key: 16,
             convo:"what about you",
             type:"",
             image:"https://pbs.twimg.com/profile_images/1055263632861343745/vIqzOHXj.jpg",
        },
        {
            key: 17,
             convo:"completed all of them ",
             type:"me",
             image:"https://lh3.googleusercontent.com/w3oLUa6RLLxFq4r_ZEme_0mN_euveYt0SX1AeGsr_k4JmKn0_Ea7SPil_Z7GwkogsJOx=s85",
        }
    ];
 
    render() 
    {
        

        return (
            <div className="chatarea">

                <div className="chatarea_header">

                    <div className="main">
                        <div className="header_logo">
                            <img id="img_header" src="https://lh3.googleusercontent.com/w3oLUa6RLLxFq4r_ZEme_0mN_euveYt0SX1AeGsr_k4JmKn0_Ea7SPil_Z7GwkogsJOx=s85" alt="" />
                        </div>
                        <div className="header_heading">
                            <h5>Ayush Raj</h5>
                        </div>
                        <div className="header_setting">
                            <i className="bi bi-gear-fill"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear-fill" viewBox="0 0 16 16">
                                <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                            </svg></i>

                        </div>

                    </div>
                </div>
                 <div className="chatarea_body">

                 
                 {this.chat.map((chat)=>(
                    <ChatTempletes chat= {chat.convo} type={chat.type} image={chat.image} key={chat.key}/>

                 ))}
                 

                 </div>
                <div className="footer">
                 <div className="search">
                 <button className="addFiles">
              <i className="fa fa-plus"></i>
            </button>
                 <input type="text" id="searchbar" name="search" placeholder="Type A Message Here.." />
                 <button className="btnSendMsg" id="sendMsgBtn" onClick={this.onStateChange}>
              <i className="fa fa-paper-plane"></i>
            </button>
                 </div>
                </div>
            
            </div>
        )
    }
}
