import React from "react";

export default function PageCounter({ children }) {
    return (
        <main style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
            {children}
        </main>
    );
}