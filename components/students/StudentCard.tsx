type StudentCardProps = {
    name: string;
    grade: string;
    email: string;
    progress: number;
  };
  
  export default function StudentCard({
    name,
    grade,
    email,
    progress,
  }: StudentCardProps) {
    return (
      <div
        style={{
          background: "white",
          borderRadius: 20,
          padding: 24,
          boxShadow: "0 10px 25px rgba(0,0,0,.08)",
          marginBottom: 20,
        }}
      >
        <h2>{name}</h2>
  
        <p>🎓 {grade}</p>
  
        <p>📧 {email}</p>
  
        <p style={{ marginTop: 15 }}>
          📈 Прогресс: <strong>{progress}%</strong>
        </p>
  
        <div
          style={{
            marginTop: 10,
            height: 10,
            background: "#e9ecef",
            borderRadius: 8,
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
  
        <button
          style={{
            marginTop: 20,
            background: "#0B5ED7",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: 10,
            cursor: "pointer",
          }}
        >
          Открыть профиль
        </button>
      </div>
    );
  }