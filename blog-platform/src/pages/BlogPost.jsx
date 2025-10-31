import React from "react";
import { useParams } from "react-router-dom";
import { posts } from "../data/posts";

export default function BlogPost() {
    const { id } = useParams();
    const post = posts.find((p) => p.id === parseInt(id));

    if (!post) {
        return (
            <main style={{ padding: "20px" }}>
                <h2>Current post not found</h2>
                <p>The blog you're looking for doesn't exist.</p>
            </main>
        );
    }

    return (
        <main className="p-6">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </main>
    );
}