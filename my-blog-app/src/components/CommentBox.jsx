import { useState } from "react";
import { Navigate, useParams } from "react-router";
import axios from "axios";
import { useAuth } from "./authWrapper/AuthContext";

function CommentBox({ addComment }) {
  const { post_id } = useParams();
  const { user } = useAuth();
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  //I use loading here
  

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    if (!text) {
      alert("Do not leave blank comments.");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(
        `https://jsonplaceholder.typicode.com/posts/${post_id}/comments`,
        {
          name: user.username,
          body: text,
        }
      );

      addComment({
        id: res.data.id || Date.now(),
        name: user.username,
        body: text,
      });
      setText("");
    } catch (error) {
      console.error("Error posting comment:", error);
      alert("There was an error posting your comment.");
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return <Navigate to="/login" />;
  }
  return (
    <form onSubmit={handleSubmit} className="comment-box">
      <textarea
        placeholder="Your comment"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit" disabled={loading}>
        {loading ? "Posting..." : "Submit"}
      </button>
    </form>
  );
}

export default CommentBox;