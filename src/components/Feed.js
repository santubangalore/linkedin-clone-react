import React, {useState, useEffect} from 'react';
import './feed.css';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/Event';

import CalendarViewDayIcon from '@material-ui/icons/CalendarToday';
import InputOption from './InputOption';
import Post from './Post';
import { PostAddSharp } from '@material-ui/icons/PostAddSharp';
import {db} from '../app/firebase';

import firebase from 'firebase';

function Feed() {

    const [input, setInput]= useState('');
    
    const [posts, setPosts]= useState([]) ;

    useEffect(() => {
        db.collection('posts').orderBy("timestamp","desc")
                .onSnapshot((snapshot) =>(
                setPosts(snapshot.docs.map(doc => (
                        {
                            id:doc.id,
                            name:doc.name,
                            description:doc.description,
                            data:doc.data()
                        }
                    )
                ))
            ));
        },[]
    )

    const sendPost= e =>{
            e.preventDefault();
            db.collection("posts").add({
                name:"santu ",
                description:'this is a test',
                message:input,
                photoUrl:'',
                timestamp:firebase.firestore.FieldValue.serverTimestamp()
            });
            setInput('');
    };
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text" value={input} onChange={e=>setInput(
                            e.target.value)}>

                        </input>
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>

                <div className="feed__inputOptions">
                    <InputOption title="Photo" Icon={ImageIcon} color="#7085f9" />
                    <InputOption title="Video" Icon={SubscriptionsIcon} color="#7085f9" />
                    <InputOption title="Event" Icon={EventNoteIcon} color="#7085f9" />
                    <InputOption title="Write Article" Icon={CalendarViewDayIcon} color="#7085f9" />
                </div>
            </div>
            {/* Posts*/}
            { posts.map((post) => (
                <Post name={post.data.name} description={post.data.description} 
                message={post.data.message} key={post.data.id}/>
            ))} 

            {/* <Post name="santu ghosh" description="this is test" message="this is message" /> */}
            
        </div>
    )
}

export default Feed
