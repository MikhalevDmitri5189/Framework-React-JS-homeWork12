import { useState } from "react";


function CommentsList() {
   
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" },
        { id: 4, text: "Это четвертый комментарий" },
        { id: 5, text: "Это пятый комментарий" }
    ])

    const deleteComments = (id) => {
        const newComments = comments.filter((comment) =>{
            return comment.id !== id;
        })
        setComments(newComments)
    }
    return ( 
        <div className="comments-box">
            <ul className="comments-list">
                {comments.map((comment) => (
                    <div className="comments-list-item">
                        <li className="comments-li" key={comment.id}>{comment.text}</li>
                        <button className="button del-button" onClick={() => {deleteComments(comment.id)}}>Удалить</button>
                </div>))}
            </ul>
        </div>
     );
}

export default CommentsList;