"use client";

import { useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { supabase } from "@/lib/supabase";

export default function CreateQuestionPage() {
  const { id } = useParams();
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [question, setQuestion] = useState("");
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [d, setD] = useState("");
  const [correct, setCorrect] = useState("A");

  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  async function handleImageSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);

    const fileName = `${Date.now()}_${file.name}`;

    const { error: uploadError } = await supabase.storage
      .from("question-images")
      .upload(fileName, file);

    if (uploadError) {
      console.error(uploadError);
      alert("Ошибка загрузки изображения");
      setUploading(false);
      return;
    }

    const { data } = supabase.storage
      .from("question-images")
      .getPublicUrl(fileName);

    setImageUrl(data.publicUrl);
    setUploading(false);
  }

  async function saveQuestion() {
    const { error } = await supabase.from("questions").insert({
      test_id: id,
      question: question,
      option_a: a,
      option_b: b,
      option_c: c,
      option_d: d,
      correct_answer: correct,
      image_url: imageUrl,
      points: 1,
    });

    if (error) {
      console.error(error);
      alert(JSON.stringify(error));
      return;
    }

    alert("Вопрос сохранён!");

    router.push(`/teacher/tests/${id}/questions`);
  }

  return (
    <DashboardLayout>
      <h1
        style={{
          color: "#0B5ED7",
          marginBottom: 30,
        }}
      >
        ➕ Новый вопрос
      </h1>

      <div
        style={{
          background: "white",
          padding: 30,
          borderRadius: 20,
          display: "flex",
          flexDirection: "column",
          gap: 15,
        }}
      >
        <textarea
          placeholder="Введите вопрос"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          style={input}
        />

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageSelect}
          style={{ display: "none" }}
        />

        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          disabled={uploading}
          style={{
            background: "#0B5ED7",
            color: "white",
            border: "none",
            borderRadius: 10,
            padding: "12px 18px",
            cursor: uploading ? "wait" : "pointer",
            fontSize: 16,
            alignSelf: "flex-start",
          }}
        >
          {uploading ? "⏳ Загрузка..." : "📷 Загрузить изображение"}
        </button>

        {imageUrl && (
          <img
            src={imageUrl}
            alt="Предпросмотр"
            style={{
              maxWidth: "100%",
              borderRadius: 12,
              marginBottom: 8,
            }}
          />
        )}

        <input
          placeholder="Ответ A"
          value={a}
          onChange={(e) => setA(e.target.value)}
          style={input}
        />

        <input
          placeholder="Ответ B"
          value={b}
          onChange={(e) => setB(e.target.value)}
          style={input}
        />

        <input
          placeholder="Ответ C"
          value={c}
          onChange={(e) => setC(e.target.value)}
          style={input}
        />

        <input
          placeholder="Ответ D"
          value={d}
          onChange={(e) => setD(e.target.value)}
          style={input}
        />

        <select
          value={correct}
          onChange={(e) => setCorrect(e.target.value)}
          style={input}
        >
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
        </select>

        <button
          onClick={saveQuestion}
          style={{
            background: "#198754",
            color: "white",
            border: "none",
            borderRadius: 10,
            padding: 15,
            cursor: "pointer",
            fontSize: 16,
          }}
        >
          💾 Сохранить вопрос
        </button>
      </div>
    </DashboardLayout>
  );
}

const input = {
  padding: "14px",
  borderRadius: "10px",
  border: "1px solid #ccc",
  fontSize: "16px",
};
