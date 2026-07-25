import DashboardLayout from "@/components/layout/DashboardLayout";
import DashboardCard from "@/components/cards/DashboardCard";

export default function TeacherPage() {
  return (
    <DashboardLayout>
      <h1
        style={{
          fontSize: "34px",
          color: "#0B5ED7",
          marginBottom: "10px",
        }}
      >
        👩‍🏫 Кабинет преподавателя
      </h1>

      <p
        style={{
          color: "#666",
          marginBottom: "30px",
        }}
      >
        Управление платформой BioChemLab
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "25px",
        }}
      >
        <DashboardCard
          icon="👨‍🎓"
          title="Ученики"
          value="24"
        />

        <DashboardCard
          icon="🧪"
          title="Тесты"
          value="18"
        />

        <DashboardCard
          icon="📚"
          title="Домашние задания"
          value="9"
        />

        <DashboardCard
          icon="🎥"
          title="Видеоуроки"
          value="35"
        />
      </div>
    </DashboardLayout>
  );
}