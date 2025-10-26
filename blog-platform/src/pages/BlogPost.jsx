import React from "react";
import { useParams } from "react-router-dom";

export default function BlogPost() {
    const { id } = useParams();

    return (
        <main className="p-6">
            <h2>Blog post #{id}</h2>
            <p>This is where a specific post will be displayed by the user.</p>
        </main>
    );
}