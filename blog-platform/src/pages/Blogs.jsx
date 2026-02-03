import React, { useState } from "react";
import { Link }  from "react-router-dom";

export default function Blogs ({ posts = [] }) {

    const [ search, setSearch ] = useState("");

const filteredPosts = posts.filter((post) => 
    post.title.toLowerCase().includes(search.toLowerCase()) ||
    post.content.toLowerCase().includes(search.toLowerCase())
);
    return (
        <main style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
            <h2>Latest Posts ({filteredPosts.length})</h2>

            <input 
                type="text"
                placeholder="Search posts here"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                    width: "100%",
                    padding: "16px",
                    marginBottom: "20px",
                    fontSize: "16px",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                }}
                />

           <ul style={{ listStyleType: "none", padding: 0 }}>
            {filteredPosts.map((post)  => {
                
                const preview = (post.content ?? "").substring(0,80);

                return (
                    <li key={post.id} style={{ marginBottom: "25px" }}>
                        <Link
                            to={`/post/${post.id}`}
                            style={{
                                fontSize: "18px",
                                fontWeight: "600",
                                color: "#007bff",
                                textDecoration: "none",
                            }}
                        >
                            {post.title}
                        </Link>

                        <p style={{ marginTop: "8px"}}>
                            {preview}
                            {post.content ? "..." : ""}
                        </p>
                        <hr />
                    </li>
                );
            })}
           </ul>

           {filteredPosts.length === 0 && <p>No posts found.</p>}
        </main>
    );
}