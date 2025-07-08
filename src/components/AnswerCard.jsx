export default function AnswerCard({ answer, citation, onCitationClick }) {
  return (
    <div className=" p-4  text-sm text-white space-y-4    ">
      <div>
              <p>{answer}</p>
      </div>

      <div
        className="text-white underline cursor-pointer hover:text-gray-800"
        onClick={onCitationClick}
      >
        {citation.text} <br />
        <span className="text-xs text-white ">Source: {citation.source}</span>
      </div>
    </div>
  );
}
