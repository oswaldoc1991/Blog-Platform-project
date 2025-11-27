import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import CreatePost from "./pages/CreatePost.jsx";
import BlogPost from "./pages/BlogPost.jsx";

function App() {
    return(
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create-post" element={<CreatePost />} />
                <Route path="/post/:id" element={<BlogPost />} />
            </Routes>
        </div>
    );
}

export default App;