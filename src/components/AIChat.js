import React, { useState } from "react";
import axios from "axios";

export default function AIChat() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);

  const send = async () => {
    if (!prompt.trim()) return;
    setMessages((m) => [...m, { from: "You", text: prompt }]);
    setPrompt("");

    const key = localStorage.getItem("hf_key");
    if (!key) {
      setTimeout(() => {
        setMessages((m) => [...m, { from: "AI", text: `Demo reply: stay safe, share details with authorities. (Your prompt: "${prompt.slice(0,80)}")` }]);
      }, 500);
      return;
    }

    try {
      const res = await axios.post(
        "https://api-inference.huggingface.co/models/gpt2",
        { inputs: prompt, options: { wait_for_model: true } },
        { headers: { Authorization: `Bearer ${key}` } }
      );
      const aiText = (res.data && res.data[0] && res.data[0].generated_text) || JSON.stringify(res.data);
      setMessages((m) => [...m, { from: "AI", text: aiText }]);
    } catch (err) {
      console.error(err);
      setMessages((m) => [...m, { from: "AI", text: "Model error or invalid key. Check console." }]);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-6 p-4 bg-white rounded shadow">
      <h3 className="font-bold mb-2">Ask AI</h3>
      <div className="h-40 overflow-auto border p-2 bg-gray-50 mb-2">
        {messages.map((m, i) => (
          <div key={i} className={`${m.from === "AI" ? "text-blue-700" : "text-red-600"} mb-1`}>
            <strong>{m.from}:</strong> {m.text}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="flex-1 border p-2 rounded"
          placeholder="Ask safety tips, or how to report..."
        />
        <button onClick={send} className="bg-red-600 text-white px-4 py-2 rounded">Send</button>
      </div>
      <p className="text-xs mt-2 text-gray-500">
        Tip: for real AI, set Hugging Face key in console: <code>localStorage.setItem('hf_key','YOUR_KEY')</code>
      </p>
    </div>
  );
}
