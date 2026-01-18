import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import CreatePost from "./pages/CreatePost.jsx";
import BlogPost from "./pages/BlogPost.jsx";
import EditPost from "./pages/EditPost.jsx";

import { defaultPosts } from "./data/posts";

function App() {
    const [posts, setPosts] = useState([]);

    // loading from the local storage on first render
    useEffect(() => {
        const savedPosts = localStorage.getItem("posts");

        if (savedPosts) {
                setPosts(JSON.parse(savedPosts));
            } else {
                setPosts(defaultPosts); // defaultPosts importated fro data/posts.js
            }
        }, []);

        // this will save local storage whenever posts is being changed
        useEffect(() => {
            localStorage.setItem("posts", JSON.stringify(posts));
        }, [posts]);

    return(
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home posts={posts} />} />
                <Route path="/create-post" element={<CreatePost posts={posts} setPosts={setPosts} />}/>
                <Route path="/post/:id" element={<BlogPost posts={posts} setPosts={setPosts} />} />
                <Route path="/post/:id/edit" element={<EditPost posts={posts} setPosts={setPosts} />} />
            </Routes>
        </div>
    );
}

export default App;