import DashboardLayout from "@/components/layout/DashboardLayout";
import TestCard from "@/components/tests/TestCard";
import { courses } from "@/data/courses";

export default function TestsPage() {
  return (
    <DashboardLayout>
      <h1
        style={{
          color: "#0B5ED7",
          fontSize: "36px",
          marginBottom: "30px",
        }}
      >
        🧪 Мои тесты
      </h1>

      {courses.map((course) => (
        <TestCard
        key={course.id}
        title={course.title}
        status={course.status}
        progress={course.progress}
        lessons={course.lessons}
        button={
          course.status === "В процессе"
            ? "Продолжить"
            : course.status === "Не начат"
            ? "Начать"
            : "Посмотреть"
        }
      />
      ))}
    </DashboardLayout>
  );
}