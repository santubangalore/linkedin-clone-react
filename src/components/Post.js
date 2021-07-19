import { Avatar } from '@material-ui/core'
import React, {useState} from 'react'
import InputOption from './InputOption';
import './Post.css';
import ThumbsUpAltOutLinedIcon from '@material-ui/icons/ThumbUpAltRounded';
import ChatOutLinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutLinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutLinedIcon from '@material-ui/icons/SendOutlined';


function Post({name, description, message, photoUrl}) {
   


    return (
        <div className="post">
            <div className="post__header">
                <Avatar/>
                <div className="post_info" >
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post__body">
              <p>{message} </p>
            </div>
            <div className="post__buttons">
          
                <InputOption title="Like" Icon={ThumbsUpAltOutLinedIcon} color="grey" />
                <InputOption title="Message" Icon={ChatOutLinedIcon} color="grey" />
                <InputOption title="Share" Icon={ShareOutLinedIcon} color="grey" />
                <InputOption title="Send" Icon={SendOutLinedIcon} color="grey" />
            </div>
        </div>
    )
}

export default Post
