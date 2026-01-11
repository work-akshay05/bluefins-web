import { useState } from "react";

const NotifyMe = () => {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNotify = async () => {
    if (!email) {
      setMsg("Please enter your email");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost:3000/notify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      setMsg(data.message);
      setEmail("");
    } catch (err) {
      setMsg("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-3 max-w-sm">
      <input
        type="email"
        placeholder="Enter your email"
        className="border px-3 py-2 rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        onClick={handleNotify}
        disabled={loading}
        className="bg-black text-white py-2 rounded hover:bg-gray-800"
      >
        {loading ? "Saving..." : "Notify Me"}
      </button>

      {msg && <p className="text-sm text-green-600">{msg}</p>}
    </div>
  );
};

export default NotifyMe;
