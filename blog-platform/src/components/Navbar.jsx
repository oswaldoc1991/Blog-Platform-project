import React from "react";
import { Link, NavLink } from "react-router-dom";

const containerStyle = {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
}

const navStyle ={
    backgroundColor: "#333",
    color: "#fff",
}

const linkStyle ={
    marginLeft: "10px",
    color: "#fff",
    textDecoration: "none",
    fontWeight: "500",
}

export default function Navbar() {
    return (
        <nav style={navStyle}>
            <div style={containerStyle}>
                <Link
                    to="/" 
                    style={{ color: "#fff", textDecoration: "none"}}>
                    <h1>The Blog</h1>
                </Link>

                    <div>
                    {/* home */}
                    <NavLink
                        to="/Home"
                        style={({ isActive}) => ({
                            ...linkStyle,
                            textDecoration: isActive ? "underline" : "none",
                        })}
                        >
                        Home
                    </NavLink>

                    {/* create post */}
                    <NavLink
                    to="/create-post"
                        style={({ isActive}) => ({
                            ...linkStyle,
                            textDecoration: isActive ? "underline" : "none",
                        })}
                        >
                        Create
                    </NavLink>

                    {/* blogs */}
                    <NavLink
                        to="/blogs"
                        style={({ isActive}) => ({
                            ...linkStyle,
                            textDecoration: isActive ? "underline" : "none",
                        })}
                        >
                        Blogs
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}