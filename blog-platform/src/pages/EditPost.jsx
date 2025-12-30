import React, { useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { posts } from "../data/posts";

export default function EditPost() {
    const { id } = useParams();
    const navigate = useNavigate();

    const numericId = parseInt(id, 10);

    if (Number.isNaN(numericId)) {
        return (
            <main style={{ padding: "20px" }}>
                <h2>Invalid post.</h2>
                <p>The URL does not contain a valid post ID.</p>
            </main>
        );
    }

    const post = posts.find((p) => p.id === numericId);

    if (!post) {
        return (
            <main style={{ padding: "20px" }}>
                <h2>Post not found.</h2>
                <p>The blog you are trying to edit does not exist.</p>
            </main>
        );
    }

    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);

    const handleSubmit = (e) => {
        e.preventDefault();

        // finding the indext in the posts array and update the users post
        const index = posts.findIndex((p) => p.id === numericId);
        if (index !== -1) {
            posts[index] = {
                ...posts[index],
                title,
                content,
            };
        }

        alert("Post updated successfully");
        navigate(`/post/${numericId}`);
    };

    return (
        <main style={{ padding: "20px" }}>
            <h1>Edit Post</h1>
            <form onSubmit={handleSubmit}>
                {/* The title */}
                <div style={{ marginBottom: "10px" }}>
                    <label>Title: </label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        style={{
                            width: "100%",
                            padding: "8px",
                            marginTop: "5px",
                            fontSize: "16px",
                        }}
                    />
                </div>

                {/* Content for the post itself */}
                <div style={{marginBottom: "15px"}}>
                    <label>Content: </label>
                    <br />
                    <textarea 
                        value={ content }
                        onChange={(e) => setContent(e.target.value)}
                        required
                        rows="10"
                        style={{
                            width: "100%",
                            padding: "8px",
                            fontSize: "16px",
                            marginTop: "5px",
                        }}
                    />
                </div>

                {/* Submit button */}
                <button
                    type="submit"
                    style={{
                        backgroundColor: "#007bff",
                        color: "#fff",
                        padding: "10px 20px",
                        border: "none",
                        cursor: "pointer",
                        marginRight: "10px",
                    }}
                >
                    Save changes
                </button>

                <button
                    type="button"
                    onClick={() => navigate(-1)}
                    style={{
                        padding: "10px 20px",
                        border: "1px solid #333",
                        backgroundColor: "#fff",
                        cursor: "pointer",
                    }}
                >
                    Cancel
                </button>
            </form>
        </main>
    );
}