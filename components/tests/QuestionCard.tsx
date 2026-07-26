type QuestionCardProps = {
  question: string;
  answers: string[];
  imageUrl?: string | null;
  onAnswer: (index: number) => void;
};

export default function QuestionCard({
  question,
  answers,
  imageUrl,
  onAnswer,
}: QuestionCardProps) {
  return (
    <div
      style={{
        background: "white",
        padding: 30,
        borderRadius: 20,
        boxShadow: "0 10px 25px rgba(0,0,0,.08)",
      }}
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt="question"
          className="max-w-full rounded-lg mb-4"
        />
      )}

      <h2
        style={{
          marginBottom: 25,
          color: "#0B5ED7",
        }}
      >
        {question}
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 15,
        }}
      >
        {answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => onAnswer(index)}
            style={{
              padding: 16,
              borderRadius: 12,
              border: "1px solid #ddd",
              background: "white",
              cursor: "pointer",
              fontSize: 16,
              textAlign: "left",
            }}
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
}
