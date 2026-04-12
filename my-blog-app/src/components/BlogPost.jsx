import {useEffect, useState} from "react";
import { useParams } from "react-router";
import posts from "../data/posts";
import axios from 'axios';

function BlogPost() {
    const {post_id} = useParams();
    console.log("post_id =", post_id);

    const [loading, setLoading] = useState(true);
    const [postData, setPostData] = useState();
    const [authorData, setAuthorData] = useState();


    useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts/1')
    //     .then((response) => response.json())
    //     .then((json) => console.log(json));
    //     axios.get(`https://jsonplaceholder.typicode.com/posts/${post_id}`)
    //     .then((res) => {setPostData(res.data);})
    //     .catch((e) => alert.log('There was an error processing your request'))
    //     .finally(() => setLoading(false))
    // 
    const fetchData = async () => {
        try {
            const postRes = await axios.get((`https://jsonplaceholder.typicode.com/posts/${post_id}`))
            setPostData(postRes.data)

            const authorRes = await axios.get((`https://jsonplaceholder.typicode.com/users/${postRes.data.userId}`))
            setAuthorData(authorRes.data)
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
            console.log(useState)
        }

    };
    fetchData();
    }, [post_id]);

    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    if (loading) return <p>Loading...</p>;
    if (!postData) return <h2>Post not found</h2>;
    return (
        <div>
            {loading ? (
                <p>Loading</p>
            ) : ( 
                <>
                <h2>{postData.title}</h2>
                <p>{postData.body}</p>

                {authorData && (
                    <small>
                    By {authorData.name} ({authorData.email})
                    </small>
                )}
                <div>
                    <button onClick={() => setLikes(likes + 1)}>
                        👍 {likes}
                    </button>

                    <button onClick={() => setDislikes(dislikes + 1)}>
                        👎 {dislikes}
                    </button>
                </div>
                </>
            )}
        </div>
    )
}

export default BlogPost;