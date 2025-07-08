import { useState } from "react";
import { FaSpinner } from "react-icons/fa";

export default function QueryInput({ onSubmit }) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    if (!query.trim()) return;

    setLoading(true);
    setTimeout(() => {
      onSubmit(query);
      setLoading(false);
      setQuery("");
    }, 1000);
  };

  return (
    <div className="bg-[#2d2d2d] p-4 rounded-lg shadow-md w-full">
      <textarea
        rows="1"
        className="w-full p-3 border border-gray-300  text-white rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-gray-600"
        placeholder="Ask a legal question..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* Wrapper div to push button to right */}
      <div className="mt-3 flex justify-end">
        <button
          className="px-4 py-2 rounded-md bg-gray-600 text-white font-medium hover:bg-gray-700 transition flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={loading}
          onClick={handleClick}
        >
          {loading && <FaSpinner className="animate-spin" />}
          {loading ? "Generating..." : "Submit"}
        </button>
      </div>
    </div>
  );
}
