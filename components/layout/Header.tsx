export default function Header() {
    return (
      <header
      style={{
        height: "75px",
        background: "#DFF4FF",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 35px",
        borderBottom: "1px solid #C7EAFB",
        boxShadow: "0 2px 10px rgba(126,200,227,0.15)",
      }}
      >
       <h2
  style={{
    color: "#4C8FB8",
    fontSize: "30px",
    fontWeight: 700,
    letterSpacing: "0.5px",
    margin: 0,
  }}
>
  🧪 BioChem Lab
</h2> 
  
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
          }}
        >
         <span style={{ fontSize: "22px" }}>🔔</span>

<span
  style={{
    background: "#FFFFFF",
    padding: "8px 16px",
    borderRadius: "20px",
    color: "#4C8FB8",
    fontWeight: 600,
  }}
>
  👩‍🏫 Преподаватель
</span>
        </div>
      </header>
    );
  }