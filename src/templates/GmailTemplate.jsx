export default function GmailTemplate({ data }) {
  return (
    <div style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: "14px", lineHeight: "1.6", color: "#202124", backgroundColor: "#fff", padding: "20px 30px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
        <span style={{ fontSize: "18px", color: "#202124" }}>{data.subject || "(no subject)"}</span>
        <span style={{
          display: "inline-block", padding: "1px 8px", backgroundColor: "#e8eaed",
          borderRadius: "3px", fontSize: "11px", color: "#5f6368", fontWeight: "500",
        }}>DOJ {Math.floor(Math.random() * 20)}</span>
      </div>

      <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "15px" }}>
        <div style={{
          width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "#1a73e8",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "#fff", fontSize: "14px", fontWeight: "500", flexShrink: 0,
        }}>JE</div>
        <div style={{ flex: 1 }}>
          <div><b>Jeffrey Epstein</b> <span style={{ color: "#5f6368", fontSize: "12px" }}>&lt;{data.trollEmail}&gt;</span></div>
          <div style={{ fontSize: "12px", color: "#5f6368" }}>to {data.name.split(" ")[0].toLowerCase()}</div>
        </div>
        <div style={{ fontSize: "12px", color: "#5f6368", whiteSpace: "nowrap" }}>
          {data.date} <span style={{ marginLeft: "8px" }}>{"\u{1F517}"} {"\u2606"} {Math.floor(Math.random() * 20)}</span>
        </div>
      </div>

      <div style={{ paddingLeft: "42px" }}>
        {data.messages.map((msg, i) => (
          <p key={i} style={{ margin: "0 0 12px" }}>{msg.text}</p>
        ))}
      </div>
    </div>
  );
}
