import Sidebar from "@/components/layout/Sidebar";
import DashboardCard from "@/components/cards/DashboardCard";
import Header from "@/components/layout/Header";

export default function Cabinet() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#f4f7fb",
      }}
    >
      <Sidebar />

      <main
        style={{
          flex: 1,
          padding: "40px",
        }}
      >
        <Header />

        <h1
          style={{
            fontSize: "36px",
            color: "#0B5ED7",
            marginTop: "20px",
          }}
        >
          Добро пожаловать! 👋
        </h1>

        <p
          style={{
            color: "#666",
            marginBottom: "35px",
          }}
        >
          Личный кабинет ученика
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "25px",
            gridAutoRows: "220px",
          }}
        >
          <DashboardCard
            icon="📅"
            title="Следующее занятие"
            value="Сегодня 18:00"
          />

          <DashboardCard
            icon="📈"
            title="Прогресс"
            value="82%"
          />

          <DashboardCard
            icon="🏆"
            title="Рейтинг"
            value="#7"
          />

          <DashboardCard
            icon="📝"
            title="Домашних заданий"
            value="2"
          />
        </div>
      </main>
    </div>
  );
}