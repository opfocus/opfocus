import { useState } from "react";

import Comment from "./Comment"


function Post({item}) {
      const [postsAndCommentStatus, setPostsAndCommentStatus] = useState("displayPosts")
      const [comments, setComments] = useState()

      const handleOpenCommentsClick = (item) => {
        fetch("http://localhost:3000/data/blog/comments/" + item._id) 
        .then((res) => res.json()) 
        .then((data) => setComments(data)) 
        .then(() => setPostsAndCommentStatus("displayComments"));
       };

    return (
      <>
        <div className="w3-container w3-display-container w3-padding-16">
          <p><strong>{item.title}</strong></p>
          <p>{item.body}</p>
          <div className="w3-row w3-small">
            {
              postsAndCommentStatus === 'displayPosts' 
              &&
              <button
                className="w3-button w3-small w3-display-bottomright"
                onClick={() => handleOpenCommentsClick(item)}
              >
                评论
              </button>
            }
            {
              postsAndCommentStatus !== 'displayPosts' 
              &&
              <button
                className="w3-button w3-small w3-right"
                onClick={()=> setPostsAndCommentStatus('displayPosts')}
              >
                关闭评论
              </button>
            }
          </div>
        </div>

        { 
          postsAndCommentStatus === 'displayComments'
  
          && 
        
            <Comment 
            setPostsAndCommentStatus={setPostsAndCommentStatus}
            postsAndCommentStatus={postsAndCommentStatus}
            comments={comments}
            handleOpenCommentsClick={handleOpenCommentsClick}
            item={item}
            />
        
        }

      </>
    )
}


export default Post