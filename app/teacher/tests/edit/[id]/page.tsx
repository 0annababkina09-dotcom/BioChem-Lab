"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { getTestById, updateTest } from "@/lib/services/tests";

export default function EditTestPage() {
  const params = useParams();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [timeLimit, setTimeLimit] = useState(30);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTest() {
      try {
        const test = await getTestById(params.id as string);

        setTitle(test.title);
        setTopic(test.topic);
        setTimeLimit(test.time_limit);
      } catch (error) {
        console.error(error);
        alert("Ошибка загрузки теста");
      } finally {
        setLoading(false);
      }
    }

    loadTest();
  }, [params.id]);

  async function save() {
    try {
      await updateTest(params.id as string, {
        title,
        topic,
        time_limit: timeLimit,
      });

      alert("✅ Тест обновлен");

      router.push("/teacher/tests");
    } catch (error) {
      console.error(error);
      alert("Ошибка сохранения");
    }
  }

  if (loading) {
    return (
      <DashboardLayout>
        <h2>Загрузка...</h2>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <h1
        style={{
          color: "#0B5ED7",
          marginBottom: 30,
        }}
      >
        ✏️ Редактирование теста
      </h1>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Название теста"
        style={input}
      />

      <input
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Тема"
        style={input}
      />

      <input
        type="number"
        value={timeLimit}
        onChange={(e) => setTimeLimit(Number(e.target.value))}
        placeholder="Время"
        style={input}
      />

      <button
        onClick={save}
        style={button}
      >
        💾 Сохранить изменения
      </button>
    </DashboardLayout>
  );
}

const input = {
  width: "100%",
  padding: "12px",
  marginBottom: "18px",
  borderRadius: "10px",
  border: "1px solid #ccc",
  fontSize: "16px",
};

const button = {
  background: "#198754",
  color: "white",
  border: "none",
  borderRadius: "10px",
  padding: "14px 24px",
  cursor: "pointer",
  fontSize: "16px",
};