import { useState, useEffect } from "react";
import Comment from "./Comment";
function Post({ setPostsAndCommentStatus, item, postsAndCommentStatus,}) {
   const [commentData, setCommentData] = useState();
    const handleClick = (item) => {
       fetch("http://localhost:3000/data/blog/comments/" + item._id) 
        .then((res) => res.json()) 
        .then(() => setPostsAndCommentStatus("displayComments")
        .then((data) => setCommentData(data)) );
        
       };
      useEffect(() => {
         console.log("see2", commentData);
         }, [commentData]); 
    return (
      <div className="w3-container">
        <p> <strong>{item.title}</strong> </p>
        <p>{item.body}</p> <div className="w3-row w3-small"> 
        {
          postsAndCommentStatus === "displayPosts" 
          && 
          ( 
          <button 
            className="w3-button w3-small w3-right" 
            onClick={() => handleClick(item)} 
          >
               评论 
          </button> 
          )
        } 
        {postsAndCommentStatus === "displayComments" 
        && 
        ( 
        <button 
          className="w3-button w3-small w3-right" 
          onClick={() => {}}> 关闭评论 </button> 
        )} 
        </div> 
          {postsAndCommentStatus === "displayComments" 
          && 
          commentData 
          && 
          commentData.map((comment) => ( 
            <Comment key={comment._id} comment={comment} />
            ))
          } 
      </div> 
    );
  }
  
  export default Post;