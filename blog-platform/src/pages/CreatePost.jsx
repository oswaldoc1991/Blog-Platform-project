import React from "react";
import { useNavigate } from "react-router-dom";
import { posts } from "../data/posts";

export default function CreatePost() {
   const [title, setTitle] = useState("");
   const [content, setContent] = useState("");
   const navigate = useNavigate();

   const handleSubmit = (e) => {
        e.preventDefault();
        
        // this will create a new post 
        const newPost = {
            id: posts.Length + 1,
            title,
            content,
        };

        // this will add the new post to the posts array
        posts.push(newPost);

        // this will help go back to the home page
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
            <div style={{ marginBottom: "15px "}}>
                <lable>Content: </lable>
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