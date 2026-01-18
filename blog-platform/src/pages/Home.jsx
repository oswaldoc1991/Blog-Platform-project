import React from "react";
import { Link } from "react-router-dom";

export default function Home({ posts}) {
    return (
        <main style={{ padding: "18px " }}>
            <h2>Welcome to The Blog</h2>
            <ul style={{ listStyle: "none", padding: 0 }}>
                {posts.map((post) => (
                    <li key={post.id} style={{ marginBottom: "15px" }}>
                        <Link
                            to={`/post/${post.id}`}
                            style={{
                                color: "#007bff",
                                textDecoration: "none",
                                fontSize: "18px",
                            }}
                            >
                            {post.title}
                        </Link>
                        <p style={{ margin: "5px 0" }}>
                            {post.content.substring(0, 60)}...
                        </p>
                        <hr />
                    </li>
                ))}
            </ul>
        </main>
    );
}