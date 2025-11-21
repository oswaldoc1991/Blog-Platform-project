import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { posts } from "../data/posts";

export default function BlogPost() {
    const { id } = useParams();
    const navigate = useNavigate();

    const numericId = parseInt(id, 10);
    const post = posts.find((p) => p.id === numericId);

    if (!post) {
        return (
            <main style={{ padding: "20px" }}>
                <h2>Current post not found</h2>
                <p>The blog you're looking for doesn't exist.</p>
            </main>
        );
    }

    const handleDelete = () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this post?");
        if (!confirmDelete) return;
        
        const index = posts.findIndex((p) => p.id === numericId);
        
        if (index !== -1) {
            posts.splice(index, 1);
        }

        navigate("/");
    }

    return (
        <main style={{ padding: "20px" }}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>

            {/* button section */}
            <div style={{ marginTop: "20px" }}>
                <button
                    onClick={() => navigate(-1)}
                    style={{
                        marginRight: "10px",
                        padding: "8px 16px",
                        border: "1px solid #333",
                        backgroundColor: "#fff",
                        cursor: "pointer",
                    }}
                >
                    Back
                </button>

                <button
                    onClick={handleDelete}
                    style={{
                        padding:"8px 16px",
                        border: "none",
                        backgroundColor: "#d9534f",
                        color: "#fff",
                        cursor: "pointer",
                    }}
                    > 
                    Delete Post
                </button>
            </div>
            {/* button section */}
        </main>
    );
}