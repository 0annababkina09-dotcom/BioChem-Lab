"use client";

import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";

const questions = [
  {
    question: "Белки состоят из...",
    answers: ["Аминокислот", "Жирных кислот", "Глюкозы", "Воды"],
    correct: 0,
  },
  {
    question: "Сколько существует стандартных аминокислот?",
    answers: ["10", "15", "20", "25"],
    correct: 2,
  },
  {
    question: "Как называется связь между аминокислотами?",
    answers: [
      "Водородная",
      "Пептидная",
      "Ионная",
      "Гликозидная",
    ],
    correct: 1,
  },
];

export default function ProteinTest() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  function chooseAnswer(index: number) {
    let newScore = score;

    if (index === questions[current].correct) {
      newScore += 1;
      setScore(newScore);
    }

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  }

  if (finished) {
    return (
      <DashboardLayout>
        <div
          style={{
            background: "white",
            padding: 40,
            borderRadius: 20,
            textAlign: "center",
          }}
        >
          <h1>🎉 Тест завершён!</h1>

          <h2 style={{ color: "#0B5ED7" }}>
            Ваш результат:
          </h2>

          <h1>
            {score} / {questions.length}
          </h1>

          <p>
            Правильных ответов: {score}
          </p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <h1 style={{ color: "#0B5ED7" }}>
        🧪 Биохимия белков
      </h1>

      <p>
        Вопрос {current + 1} из {questions.length}
      </p>

      <div
        style={{
          background: "white",
          padding: 30,
          borderRadius: 20,
          marginTop: 25,
        }}
      >
        <h2>{questions[current].question}</h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 15,
            marginTop: 25,
          }}
        >
          {questions[current].answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => chooseAnswer(index)}
              style={{
                padding: 15,
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
    </DashboardLayout>
  );
}