import { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import BlogPost from "./components/BlogPost";
import CommentBox from "./components/CommentBox";
import CommentList from "./components/CommentList";
import Footer from "./components/Footer";
import posts from "./data/posts";
import IndividualBlogPost from "./IndividualBlogPost";
import ContactsPage from "./contact/ContactsPage";
import { Route, Routes } from "react-router";
import PostList from "./postList/PostList";
import HomePage from "./components/homepage/HomePage";
import Login from "./components/login/Login";
import { AuthProvider } from "./components/authWrapper/AuthProvider";

function App() {
    // const [comments, setComments] = useState([
    //     "Interesting!",
    //     "Ohh...",
    // ]);

    // const addComment = (text) => {
    //     setComments([...comments, text]);
    // };
    
    return (
        <div className="app">
            <AuthProvider>
            <header>
                <Header></Header>
            </header>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/contact" element={<ContactsPage/>}/>
                    <Route path="/posts" element={<PostList/>}/>
                    <Route path="/posts/:post_id" element={<IndividualBlogPost/>}/>
                </Routes>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
            </AuthProvider>
        </div>
    );
}

export default App;