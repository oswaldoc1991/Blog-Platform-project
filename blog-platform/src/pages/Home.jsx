import React from "react";
import { Link } from "react-router-dom";

export default function Home({ posts }) {
    return (
        <main
            style={{
                maxWidth: "900px",
                margin: "0 auto",
                padding: "20px",
            }}
        >
            <h2>Welcome to The Blog</h2>

            <ul style={{ listStyle: "none", padding: "0" }}>
                {posts.map((post) => 
                <li key={post.id} style={{ marginBottom: "25px" }}>
                    <Link
                        to={`/post/${post.id}`}
                        style={{
                            color: "#007bff",
                            textDecoration: "none",
                            fontSize: "18px",
                            fontWeight: "600"
                        }}
                    >
                        {post.title}
                    </Link>
                    <p>{post.content.substring(0, 80)}...</p>
                    <hr />
                </li>
                )}
            </ul>
        </main>
    );
}