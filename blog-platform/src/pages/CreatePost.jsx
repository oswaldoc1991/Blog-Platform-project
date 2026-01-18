import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
   const [title, setTitle] = useState("");
   const [content, setContent] = useState("");
   const navigate = useNavigate();

   const handleSubmit = (e) => {
        e.preventDefault();

        const nextID = posts.length ? Math.max(...posts.map((p) => p.id)) + 1 : 1;

        const newPost = {
            id: nextID,
            title,
            content,
        };

        setPosts([newPost, ...posts]);
        navigate("/");
   };

   return (
    <main style={{ padding: "20px" }}>
        <h1>Create a New Post</h1>
        <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "15px" }}>
                {/* code for title starts */}
                <label>Title: </label>
                <br />
                <input 
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    style={{
                        width: "100%",
                        padding: "10px",
                        fontSize: "16px",
                        marginTop: "5px",
                    }}
                />
            </div>
            {/* code for title ends */}
            
            {/* code for content starts */}
            <div style={{ marginBottom: "15px" }}>
                <label>Content: </label>
                <br />
                <textarea 
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                    rows="11"
                    style={{
                        width: "100%",
                        padding: "10px",
                        fontSize: "16px",
                        marginTop: "5px",
                    }}
                />
            </div>
            {/* code for content ends here */}

            {/* code for button */}
            <button 
                type="submit"
                style={{
                    backgroundColor: "#007bff",
                    color: "#fff",
                    padding: "10px 20px",
                    border: "none",
                    cursor: "pointer",
                }}
            >
                Submit Post
            </button>
            {/* code for button */}
        </form>
    </main>
   )
}