import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import CreatePost from "./pages/CreatePost.jsx";
import BlogPost from "./pages/BlogPost.jsx";
import EditPost from "./pages/EditPost.jsx";

import { defaultPosts } from "./data/posts";

function App() {
    const [posts, setPosts] = useState(defaultPosts);

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