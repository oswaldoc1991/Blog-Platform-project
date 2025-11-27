import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { posts } from "../data/posts";

export default function BlogPost() {
    const { id } = useParams();
    const navigate = useNavigate();

    const numericId = parseInt(id, 10);

    if (Number.isNaN(numericId)) {
        return (
            <main style={{ padding: "20px" }}>
                <h2>Invalid post</h2>
                <p>The URL does not contain a valid post id.</p>
            </main>
        );
    }

    const post = posts.find((p) => p.id === numericId);

    if (!post) {
        return (
            <main style={{ padding: "20px" }}>
                <h2>Current post is not found</h2>
                <p>The blog you're looking for does not exist.</p>
            </main>
        );
    }

    const handleDelete = () => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this post?"
        );
        if (!confirmDelete) return;

        // 🔹 Use the posts array, not post
        const index = posts.findIndex((p) => p.id === numericId);

        if (index !== -1) {
            posts.splice(index, 1);
            alert("Post deleted Successfully");
            navigate("/");  // go back to the home / list page
        }
    };

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
                        padding: "8px 16px",
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
