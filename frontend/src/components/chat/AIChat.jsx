import React, { useState } from "react";
import { aiService } from "../../services/aiService";

const AIChat = () => {

    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([
        {
            sender: "ai",
            text: "👋 Hi! I'm your Resume AI Assistant. How can I help you?"
        }
    ]);
    const [loading, setLoading] = useState(false);

    const sendPreset = async (prompt) => {

        setLoading(true);

        setMessages(prev => [
            ...prev,
            {
                sender: "user",
                text: prompt
            }
        ]);

        try {

            const reply = await aiService.chat(prompt);

            setMessages(prev => [
                ...prev,
                {
                    sender: "ai",
                    text: reply
                }
            ]);

        } catch {

            setMessages(prev => [
                ...prev,
                {
                    sender: "ai",
                    text: "Unable to connect."
                }
            ]);

        }

        setLoading(false);

    };

    const sendMessage = async () => {

        if (!message.trim()) return;

        const userMessage = {
            sender: "user",
            text: message
        };

        setMessages(prev => [...prev, userMessage]);

        const prompt = message;
        setMessage("");
        setLoading(true);

        try {

            const reply = await aiService.chat(prompt);

            setMessages(prev => [
                ...prev,
                {
                    sender: "ai",
                    text: reply
                }
            ]);

        } catch (err) {

            setMessages(prev => [
                ...prev,
                {
                    sender: "ai",
                    text: "❌ Unable to contact AI."
                }
            ]);

        }

        setLoading(false);
    };

    return (
        <>
            {/* Floating Button */}
            <button
                onClick={() => setOpen(!open)}
                style={{
                    position: "fixed",
                    bottom: 25,
                    right: 25,
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    background: "#6366f1",
                    color: "#fff",
                    border: "none",
                    fontSize: "24px",
                    cursor: "pointer",
                    zIndex: 9999
                }}
            >
                💬
            </button>

            {/* Chat Window */}
            {open && (
                <div
                    style={{
                        position: "fixed",
                        bottom: 100,
                        right: 25,
                        width: 420,
                        height: 650,
                        maxHeight: "85vh",
                        background: "#fff",
                        borderRadius: 12,
                        boxShadow: "0 0 15px rgba(0,0,0,.2)",
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden",
                        zIndex: 9999
                    }}
                >
                    <div
                        style={{
                            background: "#6366f1",
                            color: "white",
                            padding: "16px",
                            fontSize: "18px",
                            fontWeight: "700",
                        }}
                    >
                        Resume AI Assistant
                    </div>

                    <div
                        style={{
                            flex: 1,
                            overflowY: "auto",
                            padding: "15px",
                            background: "#f8fafc",
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                        }}
                    >
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                style={{
                                    textAlign:
                                        msg.sender === "user"
                                            ? "right"
                                            : "left",
                                    marginBottom: 10
                                }}
                            >
                                <span
                                    style={{
                                        display: "inline-block",
                                        background:
                                            msg.sender === "user"
                                                ? "#6366f1"
                                                : "#ffffff",

                                        color:
                                            msg.sender === "user"
                                                ? "#fff"
                                                : "#111827",

                                        padding: "12px 16px",

                                        borderRadius: "15px",

                                        maxWidth: "85%",

                                        wordBreak: "break-word",

                                        lineHeight: "1.5",

                                        boxShadow: "0 2px 8px rgba(0,0,0,.08)"
                                    }}
                                >
                                    {msg.text}
                                </span>
                            </div>
                        ))}

                        {loading && (
                            <p>AI is typing...</p>
                        )}
                    </div>

                    {/* Input Area */}
                    <div
                        style={{
                            borderTop: "1px solid #ddd",
                            padding: "12px",
                            background: "#fff"
                        }}
                    >

                        <div
                            style={{
                                display: "flex",
                                gap: "10px"
                            }}
                        >
                            <input
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") sendMessage();
                                }}
                                placeholder="Ask anything..."
                                style={{
                                    flex: 1,
                                    padding: "12px",
                                    borderRadius: "8px",
                                    border: "1px solid #ddd",
                                    outline: "none"
                                }}
                            />

                            <button
                                onClick={sendMessage}
                                style={{
                                    background: "#6366f1",
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: "8px",
                                    padding: "0 18px",
                                    cursor: "pointer",
                                    fontWeight: "600"
                                }}
                            >
                                Send
                            </button>
                        </div>

                        {/* Quick AI Buttons */}

                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(2,1fr)",
                                gap: "10px",
                                marginTop: "12px"
                            }}
                        >
                            <button onClick={() => sendPreset("Generate a professional summary for a B.Tech Data Science student.")}>
                                📝 Summary
                            </button>

                            <button onClick={() => sendPreset("Generate a career objective for a Java Full Stack Developer.")}>
                                🎯 Objective
                            </button>

                            <button onClick={() => sendPreset("Give 10 ATS keywords for a Java Full Stack resume.")}>
                                🚀 ATS
                            </button>

                            <button onClick={() => sendPreset("Suggest 5 resume improvements.")}>
                                💡 Improve
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
};

export default AIChat;