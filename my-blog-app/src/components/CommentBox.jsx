import { useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

function CommentBox({ addComment }) {
  const { post_id } = useParams();

  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    if (!name || !text) {
      alert("Please fill in all fields");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(
        `https://jsonplaceholder.typicode.com/posts/${post_id}/comments`,
        {
          name: name,
          body: text,
        }
      );

      addComment(res.data);

      setName("");
      setText("");
    } catch (error) {
      console.error("Error posting comment:", error);
      alert("There was an error posting your comment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="comment-box">
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

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