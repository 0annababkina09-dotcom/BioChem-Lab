"use client";

import { useEffect, useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Link from "next/link";
import { getTests, deleteTest } from "@/lib/services/tests";

type Test = {
  id: string;
  title: string;
  topic: string;
  time_limit: number;
};

export default function TeacherTestsPage() {
  const [tests, setTests] = useState<Test[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTests() {
      try {
        const data = await getTests();
        setTests(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadTests();
  }, []);

  async function removeTest(id: string) {
    if (!confirm("Удалить тест?")) return;

    try {
      await deleteTest(id);
      setTests((prev) => prev.filter((test) => test.id !== id));
    } catch (error) {
      console.error(error);
      alert("Ошибка удаления");
    }
  }

  return (
    <DashboardLayout>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 30,
        }}
      >
        <div>
          <h1
            style={{
              color: "#0B5ED7",
              fontSize: 34,
            }}
          >
            🧪 Конструктор тестов
          </h1>

          <p style={{ color: "#666" }}>
            Создавайте и управляйте тестами
          </p>
        </div>

        <Link
          href="/teacher/tests/create"
          style={{
            background: "#0B5ED7",
            color: "white",
            textDecoration: "none",
            borderRadius: 12,
            padding: "14px 24px",
            fontSize: 16,
          }}
        >
          ➕ Создать тест
        </Link>
      </div>

      {loading ? (
        <div
          style={{
            background: "white",
            borderRadius: 20,
            padding: 30,
          }}
        >
          Загрузка...
        </div>
      ) : tests.length === 0 ? (
        <div
          style={{
            background: "white",
            borderRadius: 20,
            padding: 30,
          }}
        >
          Пока тестов нет.
        </div>
      ) : (
        tests.map((test) => (
          <div
            key={test.id}
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
                marginBottom: 10,
              }}
            >
              {test.title}
            </h2>

            <p>
              <strong>Тема:</strong> {test.topic}
            </p>

            <p>
              <strong>Время:</strong> {test.time_limit} мин
            </p>

            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "15px",
                flexWrap: "wrap",
              }}
            >
              <Link
                href={`/teacher/tests/${test.id}/questions`}
                style={{
                  background: "#198754",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "10px",
                  padding: "10px 18px",
                }}
              >
                ➕ Вопросы
              </Link>

              <Link
                href={`/teacher/tests/edit/${test.id}`}
                style={{
                  background: "#4C8FB8",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "10px",
                  padding: "10px 18px",
                }}
              >
                ✏️ Редактировать
              </Link>

              <button
                onClick={() => removeTest(test.id)}
                style={{
                  background: "#DC3545",
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                  padding: "10px 18px",
                  cursor: "pointer",
                }}
              >
                🗑️ Удалить
              </button>
            </div>
          </div>
        ))
      )}
    </DashboardLayout>
  );
}