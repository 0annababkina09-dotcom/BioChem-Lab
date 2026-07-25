import Header from "./Header";
import Sidebar from "./Sidebar";

type Props = {
  children: React.ReactNode;
};

export default function DashboardLayout({
  children,
}: Props) {
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
        }}
      >
        <Header />

        <div
          style={{
            padding: "40px",
          }}
        >
          {children}
        </div>
      </main>
    </div>
  );
}