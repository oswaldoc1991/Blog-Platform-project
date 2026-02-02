import React from "react";
import { Link }  from "react-router-dom";
import PageCounter from "../components/PageCounter.jsx";

export default function Blogs ({ posts = [] }) {
    return (
        <PageCounter>
            <h2>Latest Posts ({posts.length})</h2>

           <ul style={{ listStyleType: "none", padding: 0 }}>
            {posts.map((post)  => {
                
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
        </PageCounter>
    );
}