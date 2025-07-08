import './App.css';
import { useState } from "react";
import QueryInput from "./components/QueryInput";
import AnswerCard from "./components/AnswerCard";

function App() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState(null);

  const handleQuerySubmit = (userQuery) => {
    setQuery(userQuery);

    const fakeResponse = {
      answer:
        "Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased’s annual income should be added as future prospects.",
      citations: [
        {
          text: "“as the age of the deceased at the time of accident was held to be about 54-55 years by the learned Tribunal, being self-employed, as such, 10% of annual income should have been awarded on account of future prospects.” (Para 7 of the document)",
          source: "Dani_Devi_v_Pritam_Singh.pdf",
          link: "https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz"
        },
      ],
    };

    setTimeout(() => setResponse(fakeResponse), 1000);
  };

  const handleCitationClick = () => {
    if (response?.citations[0]?.link) {
      window.open(response.citations[0].link, "_blank");
    }
  };

  return (
    <div className="min-h-screen bg-[#202020] flex flex-col items-center justify-center space-y-6 space-x-6">
      <div className="w-full max-w-2xl rounded-xl p-6 flex flex-col space-y-6">
        <h1 className="text-5xl font-bold text-center text-white mb-2 ">Lexi Legal Assistant</h1>

        {/* Chat area */}
        <div className="flex flex-col space-y-4">
          {query && (
            <div className="flex justify-end">
              <div className="bg-gray-600 text-white px-6 py-2 rounded-lg max-w-sm text-sm shadow">
                <strong className="block mb-1">You:</strong>
                {query}
              </div>
            </div>
          )}

          {response && (
            <div className="flex justify-start">
              <div className="bg-[#656565] text-gray-800 px-4 py-2 rounded-lg max-w-sm text-sm shadow">
                <strong className="block mb-1">Lexi:</strong>
                <AnswerCard
                  answer={response.answer}
                  citation={response.citations[0]}
                  onCitationClick={handleCitationClick}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Input at bottom */}
      <div className="w-full max-w-2xl mt-6">
        <QueryInput onSubmit={handleQuerySubmit} />
      </div>
    </div>
  );
}

export default App;
