"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import DashboardLayout from "@/components/layout/DashboardLayout";
import QuestionCard from "@/components/tests/QuestionCard";
import { getQuestions, getTestById } from "@/lib/services/tests";

type Question = {
  id: string;
  question: string;
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
  correct_answer: string;
  image_url: string | null;
};

const answerLetters = ["A", "B", "C", "D"];

export default function TakeTestPage() {
  const { id } = useParams();

  const [testTitle, setTestTitle] = useState("");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    async function loadTest() {
      try {
        const [test, testQuestions] = await Promise.all([
          getTestById(id as string),
          getQuestions(id as string),
        ]);

        setTestTitle(test.title);
        setQuestions(testQuestions);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }

    loadTest();
  }, [id]);

  function chooseAnswer(index: number) {
    const q = questions[current];
    const correctIndex = answerLetters.indexOf(q.correct_answer);

    let newScore = score;
    if (index === correctIndex) {
      newScore += 1;
      setScore(newScore);
    }

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  }

  if (loading) {
    return (
      <DashboardLayout>
        <div
          style={{
            background: "white",
            padding: 40,
            borderRadius: 20,
          }}
        >
          Загрузка...
        </div>
      </DashboardLayout>
    );
  }

  if (questions.length === 0) {
    return (
      <DashboardLayout>
        <div
          style={{
            background: "white",
            padding: 40,
            borderRadius: 20,
          }}
        >
          В этом тесте пока нет вопросов.
        </div>
      </DashboardLayout>
    );
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

          <h2 style={{ color: "#0B5ED7" }}>Ваш результат:</h2>

          <h1>
            {score} / {questions.length}
          </h1>

          <p>Правильных ответов: {score}</p>
        </div>
      </DashboardLayout>
    );
  }

  const q = questions[current];

  return (
    <DashboardLayout>
      <h1 style={{ color: "#0B5ED7" }}>🧪 {testTitle}</h1>

      <p>
        Вопрос {current + 1} из {questions.length}
      </p>

      <div style={{ marginTop: 25 }}>
        <QuestionCard
          question={q.question}
          answers={[q.option_a, q.option_b, q.option_c, q.option_d]}
          imageUrl={q.image_url}
          onAnswer={chooseAnswer}
        />
      </div>
    </DashboardLayout>
  );
}
