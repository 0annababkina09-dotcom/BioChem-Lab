import Link from "next/link";

export default function Sidebar() {
  return (
    <aside
      style={{
        width: "260px",
        background: "#EAF8FF",
        borderRight: "1px solid #CBEAF8",
        padding: "25px 20px",
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          fontSize: "28px",
          fontWeight: 700,
          color: "#4C8FB8",
          marginBottom: "6px",
        }}
      >
        🧪 BioChem Lab
      </div>

      <p
        style={{
          color: "#7AA8C5",
          fontSize: "14px",
          marginTop: 0,
          marginBottom: "35px",
          lineHeight: "20px",
        }}
      >
        Учитесь. Исследуйте. Побеждайте.
      </p>

      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Link href="/" style={link}>
          🏠 Главная
        </Link>

        <Link href="/cabinet" style={link}>
          👤 Кабинет
        </Link>

        <Link href="/tests" style={link}>
          🧪 Тесты
        </Link>

        <Link href="/lessons" style={link}>
          🎥 Видеоуроки
        </Link>

        <Link href="/calendar" style={link}>
          📅 Календарь
        </Link>

        <Link href="/progress" style={link}>
          📈 Прогресс
        </Link>

        <Link href="/rating" style={link}>
          🏆 Рейтинг
        </Link>

        <Link href="/settings" style={link}>
          ⚙️ Настройки
        </Link>
      </nav>
    </aside>
  );
}

const link = {
  color: "#4C8FB8",
  textDecoration: "none",
  fontSize: "17px",
  fontWeight: 500,
  padding: "12px 16px",
  borderRadius: "14px",
  background: "#F8FDFF",
  border: "1px solid #D7EEF9",
  transition: "0.2s",
};