export default function Header() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F4FBFF",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "22px 60px",
          background: "#EAF8FF",
          borderBottom: "1px solid #D6EEF9",
        }}
      >
        <h2
          style={{
            color: "#4C8FB8",
            fontSize: "30px",
            fontWeight: 700,
            margin: 0,
          }}
        >
          🧪 BioChem Lab
        </h2>

        <nav
          style={{
            display: "flex",
            gap: "35px",
            alignItems: "center",
            fontSize: "18px",
          }}
        >
          <a href="/" style={link}>
            Главная
          </a>

          <a href="/cabinet" style={link}>
            Кабинет
          </a>

          <a href="/tests" style={link}>
            Тесты
          </a>

          <a href="/calendar" style={link}>
            Календарь
          </a>

          <a
            href="/login"
            style={{
              background: "#6FAFD6",
              color: "white",
              padding: "10px 22px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Войти
          </a>
        </nav>
      </header>

      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "120px 30px",
        }}
      >
        <h1
          style={{
            fontSize: "64px",
            color: "#4C8FB8",
            marginBottom: "20px",
          }}
        >
          🧪 BioChem Lab
        </h1>

        <p
          style={{
            maxWidth: "700px",
            fontSize: "24px",
            color: "#5D7A8C",
            lineHeight: 1.6,
            marginBottom: "45px",
          }}
        >
          Онлайн-платформа для изучения биологии и химии с видеоуроками,
          интерактивными тестами, рейтингом студентов и проверкой знаний.
        </p>

        <div
          style={{
            display: "flex",
            gap: "20px",
          }}
        >
          <a
            href="/register"
            style={{
              background: "#6FAFD6",
              color: "white",
              textDecoration: "none",
              padding: "16px 34px",
              borderRadius: "14px",
              fontSize: "18px",
              fontWeight: 600,
            }}
          >
            🚀 Начать обучение
          </a>

          <a
            href="/login"
            style={{
              background: "white",
              color: "#4C8FB8",
              textDecoration: "none",
              padding: "16px 34px",
              borderRadius: "14px",
              border: "2px solid #6FAFD6",
              fontSize: "18px",
              fontWeight: 600,
            }}
          >
            🔑 Войти
          </a>
        </div>
      </section>
    </div>
  );
}

const link = {
  color: "#4C8FB8",
  textDecoration: "none",
  fontWeight: 500,
};