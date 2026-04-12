function CommentList({comments}) {
    if (comments.length === 0) {
        return <p>No comments yet. Be the first to comment!</p>;
    }

    return (
        <div>
            {comments.map((comment, index) => (
                <div key={index} className="comment-card">
                    <p className="comment-name">{comment.name}</p>
                    <p className="comment-text">{comment.body}</p>
                </div>
            ))}
        </div>
    );
}

export default CommentList;