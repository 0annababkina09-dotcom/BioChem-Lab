type DashboardCardProps = {
    title: string;
    value: string;
    icon: string;
  };
  
  export default function DashboardCard({
    title,
    value,
    icon,
  }: DashboardCardProps) {
    return (
      <div
        style={{
          background: "#fff",
          borderRadius: "20px",
          padding: "24px",
          boxShadow: "0 10px 25px rgba(0,0,0,.08)",
          transition: "0.2s",
        }}
      >
        <div style={{ fontSize: "34px" }}>{icon}</div>
  
        <h3
          style={{
            marginTop: "16px",
            color: "#666",
            fontWeight: 500,
          }}
        >
          {title}
        </h3>
  
        <h2
          style={{
            color: "#0B5ED7",
            marginTop: "10px",
            fontSize: "30px",
          }}
        >
          {value}
        </h2>
      </div>
    );
  }