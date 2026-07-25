import DashboardLayout from "@/components/layout/DashboardLayout";

export default function LessonsPage() {
  const lessons = [
    {
      title: "Строение белков",
      duration: "18 минут",
      teacher: "Нурсезим",
      status: "▶ Смотреть",
    },
    {
      title: "Ферменты",
      duration: "24 минуты",
      teacher: "Нурсезим",
      status: "Продолжить",
    },
    {
      title: "Углеводы",
      duration: "30 минут",
      teacher: "Нурсезим",
      status: "Завершено",
    },
  ];

  return (
    <DashboardLayout>
      <h1 style={{ fontSize: 40, color: "#0B5ED7", marginBottom: 30 }}>
        🎥 Видеоуроки
      </h1>

      <div
        style={{
          display: "grid",
          gap: 25,
        }}
      >
        {lessons.map((lesson) => (
          <div
            key={lesson.title}
            style={{
              background: "white",
              padding: 25,
              borderRadius: 20,
              boxShadow: "0 10px 25px rgba(0,0,0,.08)",
            }}
          >
            <h2>{lesson.title}</h2>

            <p>👨‍🏫 Преподаватель: {lesson.teacher}</p>

            <p>⏱ {lesson.duration}</p>

            <button
              style={{
                marginTop: 15,
                background: "#0B5ED7",
                color: "white",
                border: "none",
                padding: "12px 22px",
                borderRadius: 10,
                cursor: "pointer",
              }}
            >
              {lesson.status}
            </button>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}