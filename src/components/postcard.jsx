import React from 'react'
import Likebutton from './likeButton'

function Postcard({
    profileImage,
    isLiked,
    username,
    content,
}) {
  return (
    <div style={{background:'black'}}>
        <img style={{height:200}} src={profileImage} alt="" />
        <Likebutton 
        isLiked={isLiked}/>
        <p style={{color:'white'}}>{username}</p>
        <p style={{color:'white'}}>{content}</p>
    </div>
  )
}

export default Postcard