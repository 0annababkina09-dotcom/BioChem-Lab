type TestCardProps = {
    title: string;
    status: string;
    button: string;
    progress: number;
    lessons: number;
  };
  
  export default function TestCard({
    title,
    status,
    button,
    progress,
    lessons,
  }: TestCardProps) {
    const statusColor =
      status === "Завершён"
        ? "#28a745"
        : status === "В процессе"
        ? "#0B5ED7"
        : "#6c757d";
  
    return (
      <div
        style={{
          background: "white",
          borderRadius: 20,
          padding: 25,
          boxShadow: "0 10px 25px rgba(0,0,0,.08)",
          marginBottom: 20,
        }}
      >
        <h2>{title}</h2>
  
        <p
          style={{
            color: statusColor,
            fontWeight: "bold",
            marginTop: 10,
          }}
        >
          {status}
        </p>
  
        <p style={{ color: "#666" }}>
          📚 Уроков: {lessons}
        </p>
  
        <div
          style={{
            background: "#e9ecef",
            borderRadius: 8,
            height: 10,
            marginTop: 15,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              background: "#0B5ED7",
            }}
          />
        </div>
  
        <p
          style={{
            marginTop: 8,
            color: "#666",
          }}
        >
          Прогресс: {progress}%
        </p>
  
        <button
          style={{
            marginTop: 20,
            background: "#0B5ED7",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: 10,
            cursor: "pointer",
            fontSize: 16,
          }}
        >
          {button}
        </button>
      </div>
    );
  }