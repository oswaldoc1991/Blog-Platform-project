import React from 'react';

export default function Footer() {
    return (
        <footer
            style={{
                marginTop: "40px",
                padding: "20px",
                background: "#333",
                color: "#fff",
                textAlign: "center",
            }}
        >
            <p>©{new Date().getFullYear()} My Blog Platform</p>
            <p>Built with React and Node.js</p>
        </footer>
    );
}