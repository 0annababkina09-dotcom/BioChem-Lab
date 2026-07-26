"use client";

import { useRef, useState } from "react";
import { useParams } from "next/navigation";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { supabase } from "@/lib/supabase";

export default function QuestionsPage() {
  const { id } = useParams();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [question, setQuestion] = useState("");
  const [optionA, setOptionA] = useState("");
  const [optionB, setOptionB] = useState("");
  const [optionC, setOptionC] = useState("");
  const [optionD, setOptionD] = useState("");
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
      question,
      option_a: optionA,
      option_b: optionB,
      option_c: optionC,
      option_d: optionD,
      correct_answer: correct,
      image_url: imageUrl,
    });

    if (error) {
      console.error(error);
      alert("Ошибка сохранения");
      return;
    }

    alert("Вопрос добавлен!");

    setQuestion("");
    setOptionA("");
    setOptionB("");
    setOptionC("");
    setOptionD("");
    setCorrect("A");
    setImageUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  return (
    <DashboardLayout>
      <h1
        style={{
          color: "#0B5ED7",
          marginBottom: 30,
        }}
      >
        Добавление вопросов
      </h1>

      <div
        style={{
          background: "white",
          padding: 30,
          borderRadius: 20,
          display: "flex",
          flexDirection: "column",
          gap: 20,
          maxWidth: 700,
        }}
      >
        <textarea
          placeholder="Введите вопрос"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          style={{
            padding: 15,
            borderRadius: 10,
            border: "1px solid #ccc",
            minHeight: 90,
          }}
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
            }}
          />
        )}

        <input
          placeholder="Ответ A"
          value={optionA}
          onChange={(e) => setOptionA(e.target.value)}
          style={input}
        />

        <input
          placeholder="Ответ B"
          value={optionB}
          onChange={(e) => setOptionB(e.target.value)}
          style={input}
        />

        <input
          placeholder="Ответ C"
          value={optionC}
          onChange={(e) => setOptionC(e.target.value)}
          style={input}
        />

        <input
          placeholder="Ответ D"
          value={optionD}
          onChange={(e) => setOptionD(e.target.value)}
          style={input}
        />

        <select
          value={correct}
          onChange={(e) => setCorrect(e.target.value)}
          style={input}
        >
          <option>A</option>
          <option>B</option>
          <option>C</option>
          <option>D</option>
        </select>

        <button
          onClick={saveQuestion}
          style={{
            background: "#0B5ED7",
            color: "white",
            padding: 15,
            border: "none",
            borderRadius: 10,
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
