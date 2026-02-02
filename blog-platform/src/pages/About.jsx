import React from 'react';

export default function About() {
    return (
            <main style={{ maxWidth: "900", margin: "0 auto", padding: "20px" }}>
            <section style={{
                background: "#f8f9fa",
                padding: "30px",
                borderRadius: "10px",
            }}
            >
                <h1 style={{ margin: 0}}>About Me</h1>

                <p style={{ lineHeight: "1.6" }}>
                    Hello this is the blog platform where I share my practice projects and write about web development, programming, and technology.
                    this will include Ract, routing, and clean UI design while growing my portfolio. Even though I am a recent graduate from SFSU,
                    I am still working on improving my skills and learning new technologies to become a better developer. However I'm still working
                    my way to becoming a System Administrator by working my way as a tech support specialist.
                </p>

                <h3>What I'm working on</h3>
                <ul style={{ lineHeight: "1.8" }}>
                    <li>Frontend projects with React (specifically using Vite, routing, and components)</li>
                    <li>IT & security labs by using Intune, Defender, and Entra ID.</li>
                    <li>Building a portfolio for IT support / Helpdesk role.</li>
                </ul>

                <h3>Why this blog exists</h3>
                <p style={{ lineHeight: "1.6 "}}>
                    This site is a place to create posts, managethem, and keep imporving the layout and features.
                </p>

                <p style={{ marginBottom: 0, lineHeight: "1.6" }}>
                    Thank you for cheking this out -more updates coming soon.
                </p>
            </section>
        </main>
    );
}