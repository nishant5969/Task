import React from "react";
import { Link } from "react-router-dom";

const PostView = (props) => {
        const rendertopicname = (topicname) => {
            if(topicname !==" "){
                return topicname.map((item) => {
                    return(
                        <div key={item.id}>
                            <h2>{item.name}</h2>
                            <Link className="btn btn-info" to={`/posts/${item.id}`}>Details</Link>
                        </div>
                     )
                })
            }     
        }
        return(
        <div>
           {rendertopicname(props)}
        </div>
    )
}

export default PostView;
