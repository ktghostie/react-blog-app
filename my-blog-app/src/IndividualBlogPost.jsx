import React, { useState } from 'react'
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import BlogPost from "./components/BlogPost";
import CommentBox from "./components/CommentBox";
import CommentList from "./components/CommentList";
import Footer from "./components/Footer";
import posts from "./data/posts";


function IndividualBlogPost() {
    const [comments, setComments] = useState([
        { name: "Jeevan", body: "Great post! Really loved it :)." },
        { name: "KT", body: "Thanks for reading this! I've been sick :(" },
    ]);

    const addComment = (comment) => {
        setComments([...comments, comment]);
    };
    return (
    <div className="blog-container">
        <BlogPost />
        <h3>Comments</h3>
        <CommentBox addComment={addComment} />
        <CommentList comments={comments} />
    </div>
    )
}

export default IndividualBlogPost