import DashboardLayout from "@/components/layout/DashboardLayout";
import StudentCard from "@/components/students/StudentCard";
import { students } from "@/data/students";

export default function StudentsPage() {
  return (
    <DashboardLayout>
      <h1
        style={{
          fontSize: "34px",
          color: "#0B5ED7",
          marginBottom: "10px",
        }}
      >
        👨‍🎓 Ученики
      </h1>

      <p
        style={{
          color: "#666",
          marginBottom: "30px",
        }}
      >
        Управление учениками BioChemLab
      </p>

      <button
        style={{
          background: "#0B5ED7",
          color: "white",
          border: "none",
          borderRadius: "10px",
          padding: "12px 20px",
          fontSize: "16px",
          cursor: "pointer",
          marginBottom: "30px",
        }}
      >
        ➕ Добавить ученика
      </button>

      {students.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          grade={student.grade}
          email={student.email}
          progress={student.progress}
        />
      ))}
    </DashboardLayout>
  );
}