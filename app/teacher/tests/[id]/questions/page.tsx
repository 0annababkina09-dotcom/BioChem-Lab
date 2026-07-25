"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Link from "next/link";
import {
  getQuestions,
  deleteQuestion,
} from "@/lib/services/tests";

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

export default function QuestionsPage() {
  const { id } = useParams();

  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadQuestions() {
      try {
        const data = await getQuestions(id as string);
        setQuestions(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }

    loadQuestions();
  }, [id]);

  async function removeQuestion(questionId: string) {
    if (!confirm("Удалить вопрос?")) return;

    try {
      await deleteQuestion(questionId);

      setQuestions((prev) =>
        prev.filter((q) => q.id !== questionId)
      );
    } catch (e) {
      console.error(e);
      alert("Ошибка удаления");
    }
  }

  return (
    <DashboardLayout>
      <h1
        style={{
          color: "#0B5ED7",
          fontSize: 34,
          marginBottom: 25,
        }}
      >
        📝 Вопросы теста
      </h1>

      <Link
        href={`/teacher/tests/${id}/questions/create`}
        style={{
          background: "#198754",
          color: "white",
          textDecoration: "none",
          padding: "14px 22px",
          borderRadius: 12,
          display: "inline-block",
          marginBottom: 30,
        }}
      >
        ➕ Добавить вопрос
      </Link>

      {loading ? (
        <div
          style={{
            background: "white",
            padding: 30,
            borderRadius: 20,
          }}
        >
          Загрузка...
        </div>
      ) : questions.length === 0 ? (
        <div
          style={{
            background: "white",
            padding: 30,
            borderRadius: 20,
          }}
        >
          Пока вопросов нет.
        </div>
      ) : (
        questions.map((q, index) => (
          <div
            key={q.id}
            style={{
              background: "white",
              borderRadius: 20,
              padding: 25,
              marginBottom: 20,
              boxShadow: "0 10px 25px rgba(0,0,0,.08)",
            }}
          >
            <h2
              style={{
                color: "#0B5ED7",
                marginBottom: 15,
              }}
            >
              Вопрос {index + 1}
            </h2>

            <p
              style={{
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              {q.question}
            </p>

            {q.image_url && (
              <img
                src={q.image_url}
                alt="question"
                style={{
                  width: 350,
                  marginTop: 15,
                  marginBottom: 20,
                  borderRadius: 12,
                }}
              />
            )}

            <p>A. {q.option_a}</p>
            <p>B. {q.option_b}</p>
            <p>C. {q.option_c}</p>
            <p>D. {q.option_d}</p>

            <p
              style={{
                color: "#198754",
                fontWeight: "bold",
                marginTop: 15,
              }}
            >
              ✔ Правильный ответ: {q.correct_answer}
            </p>

            <button
              onClick={() => removeQuestion(q.id)}
              style={{
                background: "#DC3545",
                color: "white",
                border: "none",
                borderRadius: 10,
                padding: "10px 18px",
                marginTop: 15,
                cursor: "pointer",
              }}
            >
              🗑️ Удалить
            </button>
          </div>
        ))
      )}
    </DashboardLayout>
  );
}