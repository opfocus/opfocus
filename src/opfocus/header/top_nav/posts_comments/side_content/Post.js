import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_POST_COMMENTS } from "../../../../../graphql-operations";
import {FormattedMessage} from 'react-intl'
import Comment from "./Comment"
import { app } from "../../../../..";


function Post({item}) {
      const [postsAndCommentStatus, setPostsAndCommentStatus] = useState("displayPosts")

      const {data} = useQuery(GET_POST_COMMENTS, {
          variables: {
            query: {
              title_id: item._id
            }}
        })

      const comments = data? data.comments : null



    return (
      <>
        <div className="w3-container w3-display-container w3-border-bottom">
          <p><strong>{item.title}</strong></p>
          <p>{item.body}</p>
          {
            postsAndCommentStatus === 'displayPosts' 
            &&
            <button
              className="w3-button w3-small w3-opacity w3-display-bottomright"
              onClick={() => setPostsAndCommentStatus("displayComments")}
            >
              <FormattedMessage
                id="comment_open"
                defaultMessage='评论'
              />
            </button>
          }
          {
            postsAndCommentStatus !== 'displayPosts' 
            &&
            <button
              className="w3-button w3-opacity w3-small w3-right"
              onClick={()=> setPostsAndCommentStatus('displayPosts')}
            >
              <FormattedMessage
                id="comment_close"
                defaultMessage='关闭评论'
              />
            </button>
          }
          <span className="w3-small w3-opacity w3-display-topright">
            <FormattedMessage
              id="post_author"
              defaultMessage='作者：{ts}'
              values={{ts: app.currentUser.id.slice(-5,)}}
            />
          </span>
        </div>

        { 
          postsAndCommentStatus === 'displayComments'
          && 
          <Comment 
            setPostsAndCommentStatus={setPostsAndCommentStatus}
            postsAndCommentStatus={postsAndCommentStatus}
            comments={comments}
            item={item}
          />
        
        }

      </>
    )
}


export default Post