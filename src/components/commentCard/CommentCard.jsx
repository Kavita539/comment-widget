import { useState } from "react";
import {FiChevronUp} from "react-icons/fi";
import {FiChevronDown} from "react-icons/fi";
import {CgMailReply} from "react-icons/cg";
import "./commentCard.css";

const CommentCard = ({comment}) => {

    // const [edit, setEdit] = useState(false);
    return(
        <li className="comment-card">
            <div className="comment-car-container">
            <div className="commenter-avatar-container">
                <img src="" alt="" />
            </div>
            <div className="commenter-user-info">
               <p className="commenter-name">{comment?.name}</p>
               <p className="commenter-cmt">{comment?.comment}</p>
               <div className="commenter-actions">
                <div className="comment-like"><FiChevronUp/></div>
                <div className="comment-dislike"><FiChevronDown/></div>
                <div className="comment-reply"><CgMailReply/>Reply</div>
               </div>
            </div>
            </div>
            {comment?.childrenComment.length > 0 && (
                <ul>
                    {comment.childrenComment.map((childComment) => (
            <CommentCard
              key={childComment.id}
              comment={childComment}
            />
          ))}
                </ul>
            )}
        </li>
    )
}

export {CommentCard}