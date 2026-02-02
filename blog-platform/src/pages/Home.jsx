import React from "react";
import { Link, useNavigate } from "react-router-dom";
import PageCounter from "../components/PageCounter.jsx";

export default function Home() {
    const navigate = useNavigate();

    return (
        <PageCounter>
            <section 
            style={{
                background: "#f8f9fa",
                padding : "30px",
                borderRadius: "10px",
            }}
            >
                <h1>Welcome to the Blog Platform</h1>
                <p>This is a simple blog platform where you can create, edit, and manage. With no problem at all</p>
                <p>Create your blog posts with ease. Get started by browsing the latest posts or creating your own!</p>

                <div style={{ marginTop: "20px", display: "flex", gap: "12px" }}>
                    <button 
                        onClick={() => navigate("/create-post")}
                        style={{
                            marginRight: "10px",
                            padding: "10px 16px",
                            background: "#333",
                            color: "#FFF",
                        }}
                        >
                            Create Posts
                    </button>

                     <button
                        onClick={() => navigate("/blogs")}
                        style={{ 
                            marginRight: "10px",
                            padding: "10px 16px",
                            background: "#333",
                            color: "#FFF",
                        }}
                        >
                            View Blogs
                    </button>
                </div>
            </section>
        </PageCounter>
    )
}