import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import CreatePost from "./pages/CreatePost.jsx";
import BlogPost from "./pages/BlogPost.jsx";
import EditPost from "./pages/EditPost.jsx";
import Blogs from "./pages/Blogs.jsx";


import { defaultPosts } from "./data/posts";

function App() {
    const [posts, setPosts] = useState(defaultPosts);

    return(
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
             <Navbar />
            <div style={{ flex: 1 }}>
                <Routes>
                    <Route path="/home" element={<Home posts={posts} />} />
                    <Route path="/blogs" element={<Blogs posts={posts} />} />
                    <Route path="/create-post" element={<CreatePost posts={posts} setPosts={setPosts} />} />
                    <Route path="/post/:id" element={<BlogPost posts={posts} setPosts={setPosts} />} />
                    <Route path="/post/:id/edit" element={<EditPost posts={posts} setPosts={setPosts} />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;