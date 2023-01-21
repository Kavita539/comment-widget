import { useState } from "react";
import { comments } from "../../data/comments";
import { CommentCard } from "../commentCard/CommentCard";
import "./commentForm.css";

const Input = () => {
    const [commentInput, setCommentInput] = useState("");

    const commentChangeHandler = (e) => {
        setCommentInput(e.target.value);
    }

    const commentSubmitHandler = () => {
        setCommentInput("");
    }

    return(
        <form onSubmit={commentSubmitHandler} className="comment-form">
            <div className="input-container">
            <div className="avatar">
                <img src="https://avatars.dicebear.com/api/avataaars/qwerasxqergdsacssfghvsd.svg" alt="avatar" className="responsive-avatar-img"/>
            </div>
            <input type="text" placeholder="Join the discussion..." className="comment-input" value={commentInput} onChange={commentChangeHandler}/>
            <button className="comment-btn">Post</button>
            </div>
            <ul className="comments-list">
                {comments && comments.map((commentData)=>{
                    return(<CommentCard comment={commentData} key={commentData.id}/>)
                })}
            </ul>
        </form>
    );
}

export {Input};