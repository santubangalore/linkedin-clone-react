import { Avatar } from '@material-ui/core'
import React from 'react'

function Post({name, description, message, photoUrl}) {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar/>
                <div className="post__info" >
                    <h3>Santu Ghosh</h3>
                    <p>Description</p>
                </div>
            </div>
            <div className="post__body">
                
            </div>
        </div>
    )
}

export default Post
