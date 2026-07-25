"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { createTest } from "@/lib/services/tests";

export default function CreateTestPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [timeLimit, setTimeLimit] = useState("");

  const [questions, setQuestions] = useState([1]);

  async function saveTest() {
    try {
      await createTest({
        title,
        topic,
        time_limit: Number(timeLimit),
        description: "",
      });

      alert("✅ Тест успешно создан!");

      window.location.href = "/teacher/tests";
    } catch (error: any) {
      console.error(error);
      alert(error.message ?? "Ошибка при сохранении теста");
    }
  }

  function addQuestion() {
    setQuestions([...questions, questions.length + 1]);
  }
  return (
    <DashboardLayout>
      <h1
        style={{
          color: "#0B5ED7",
          fontSize: 34,
          marginBottom: 30,
        }}
      >
        ➕ Создание теста
      </h1>

      <div
        style={{
          background: "white",
          padding: 30,
          borderRadius: 20,
          boxShadow: "0 10px 25px rgba(0,0,0,.08)",
        }}
      >
        <input
          placeholder="Название теста"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={input}
        />

        <input
          placeholder="Тема"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          style={input}
        />

        <input
          placeholder="Время (мин)"
          value={timeLimit}
          onChange={(e) => setTimeLimit(e.target.value)}
          style={input}
        />

        <hr style={{ margin: "30px 0" }} />

        {questions.map((q) => (
          <div
            key={q}
            style={{
              border: "1px solid #ddd",
              borderRadius: 15,
              padding: 20,
              marginBottom: 25,
            }}
          >
            <h2
              style={{
                marginBottom: 20,
                color: "#0B5ED7",
              }}
            >
              Вопрос {q}
            </h2>

            <input
              placeholder="Введите вопрос..."
              style={input}
            />

            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                style={{ marginBottom: 12 }}
              >
                <input type="radio" name={`q${q}`} />

                <input
                  placeholder={`Ответ ${n}`}
                  style={{
                    ...input,
                    width: "90%",
                    marginLeft: 10,
                  }}
                />
              </div>
            ))}
          </div>
        ))}

        <div
          style={{
            display: "flex",
            gap: 15,
            marginTop: 20,
          }}
        >
          <button
            onClick={addQuestion}
            style={button}
          >
            ➕ Добавить вопрос
          </button>

          <button
            onClick={saveTest}
            style={{
              ...button,
              background: "#198754",
            }}
          >
            💾 Сохранить тест
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}

const input = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "10px",
  border: "1px solid #ccc",
  fontSize: "16px",
};

const button = {
  background: "#0B5ED7",
  color: "white",
  border: "none",
  borderRadius: "10px",
  padding: "14px 24px",
  cursor: "pointer",
  fontSize: "16px",
};