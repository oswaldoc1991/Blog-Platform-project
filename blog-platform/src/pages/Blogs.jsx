import React, { useState } from "react";
import { Link }  from "react-router-dom";

export default function Blogs ({ posts = [] }) {
    const [search, setSearch] = useState("");
    const [sortOrder, setSortOrder] = useState("New");

    const filteredPosts = posts.filter((post) => {
        const title = (post.title ?? "").toLocaleLowerCase();
        const content = (post.content ?? "").toLocaleLowerCase();
        const query = search.toLocaleLowerCase();

        return title.includes(query) || content.includes(query);
    });

    const sortedPosts = [...filteredPosts].sort((a, b) => {
        if (sortOrder === "New") return b.id - a.id;
        if (sortOrder === "Old") return a.id - b.id;
        return 0;
    });

    return (
        <main style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
            <h2>Latest Posts Available({sortedPosts.length})</h2>

            <div 
                style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "center",
                    marginBottom: "20px",
                }}
            >
                <input
                    type="text"
                    placeholder="Search posts..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{ flex: 1, padding: "8px" }}
                />
                
                <select
                    value={sortOrder}
                    onChange={(e => setSortOrder(e.target.value))}
                    style={{
                        padding: "12px",
                        fontSize: "16px",
                        borderRadius: "6px",
                        border: "1px solid #ccc",
                        background: "#fff",
                    }}
                >
                    <option value="Recent">New</option>
                    <option value="Oldest">Old</option>
                </select>
            </div>

            <ul style={{ listStyleType: "none", padding: 0 }}>
                {sortedPosts.map((post) => {
                    const preview = (post.content || "").substring(0, 80);

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

                            <p style={{ marginTop: "8px" }}>
                                {preview}
                                {post.content ? "..." : ""}
                            </p>

                            <hr />
                        </li>
                    );
                })}
            </ul>

            {sortedPosts.length == 0 && <p>No posts available.</p>}
        </main>
    )
}