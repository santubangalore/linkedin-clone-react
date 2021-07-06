import React from 'react'
import './feed.css';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/Event';

import CalendarViewDayIcon from '@material-ui/icons/CalendarToday';
import InputOption from './InputOption';
import Post from './Post';


function Feed() {
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text">

                        </input>
                        <button type="submit">Send</button>
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
            <Post />
        </div>
    )
}

export default Feed
