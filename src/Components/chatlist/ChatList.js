import React, { Component } from 'react';
import './chatlist.css';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import ChatListItems from '../chatlistitems/ChatListItems';

export default class ChatList extends Component {
     render() {
        
        const allchatuser=[
            {
                key:1,
                name: "Ayush Raj",
                last_seen:"30 min ago",
                imgFile: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU",
            
            },
            {
                key:2,
                name: "Abdul",
                last_seen:" 40 min ago",
                imgFile: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJo1MiPQp3IIdp54vvRDXlhbqlhXW9v1v6kw&usqp=CAU",
            
            },
            {
                key:3,
                name: "Titas",
                last_seen:"43 min ago",
                imgFile: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU",
            
            },
            {
                key:4,
                name: "Xotic",
                last_seen:"1hr ago",
                imgFile: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ6tM7Nj72bWjr_8IQ37Apr2lJup_pxX_uZA&usqp=CAU",
            
            },
            {
                key:5,
                name: "Chetuboy",
                last_seen:"8 hr ago",
                imgFile: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJo1MiPQp3IIdp54vvRDXlhbqlhXW9v1v6kw&usqp=CAU",
            
            },
            {
                key:6,
                name: "Inderpreet",
                last_seen:"15 min ago",
                imgFile: "https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",
            
            },
            {
                key:7,
                name: "Sushant",
                last_seen:"1 min ago",
                imgFile: "https://www.paintingcontest.org/components/com_djclassifieds/assets/images/default_profile.png",
            
            },
            {
                key:8,
                name: "Dhruv",
                last_seen: "12 min ago",
                imgFile: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
            
            },
            {
                key:9,
                name: "Ridhaka",
                last_seen: "Active",
                imgFile: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSM6p4C6imkewkCDW-9QrpV-MMAhOC7GnJcIQ&usqp=CAU",
            
            },
           
        ]






        return (
            <div className="chatlist1">
                <div className="searchbar">
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <Button size="sm" variant="outline-secondary"><i className="bi bi-plus"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                            </svg></i></Button>
                        </InputGroup.Prepend>
                        <FormControl aria-describedby="basic-addon1"
                            placeholder="New conversation "
                        />
                    </InputGroup>
                    <h2>Chats</h2>

                </div>
                <div className="searchbar">
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Search Here"

                        />
                        <InputGroup.Append>
                            <Button variant="outline-secondary"><i className="bi bi-search"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg></i></Button>
                        </InputGroup.Append>
                    </InputGroup>

                </div>
                <div className="chattemplate">
                 {allchatuser.map((allchatuser) =>(
                     <ChatListItems 
                     key={allchatuser.key}
                     name={allchatuser.name}
                     last_seen={allchatuser.last_seen}
                     Image={allchatuser.imgFile}

                    />
                 ))}
                    
                </div>
                    
                      
            </div>
                 









        )
    }
}
