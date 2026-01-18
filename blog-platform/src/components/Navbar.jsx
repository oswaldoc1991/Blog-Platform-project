import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav
            style={{
                padding: "10px 20px",
                backgroundColor: "#333",
                color: "#fff",
                display: "flex",
                justifyContent: "space-between",
            }}
        >
            <h1>My Blog</h1>
            <div>
                <Link to="/" style={{ margin: "0 10px", color: "#fff" }}>
                Home
                </Link>
                <Link to="/create-post" style={{ margin: "0 10px", color: "#fff" }}>
                    Create
                </Link>
                <Link to="/post/1" style={{ margin: "0 10px", color: "#fff"  }}>
                    Sample Blog Post
                </Link>
            </div>
        </nav>
    );
}