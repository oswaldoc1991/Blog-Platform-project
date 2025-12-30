import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import CreatePost from "./pages/CreatePost.jsx";
import BlogPost from "./pages/BlogPost.jsx";
import EditPost from "./pages/EditPost.jsx";

function App() {
    return(
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create-post" element={<CreatePost />} />
                <Route path="/post/:id" element={<BlogPost />} />
                <Route path="/post/:id/edit" element={<EditPost />} />
            </Routes>
        </div>
    );
}

export default App;