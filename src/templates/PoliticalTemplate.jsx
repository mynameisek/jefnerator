import RedactBar from './RedactBar';
import { FONTS } from '../data/locations';

export default function PoliticalTemplate({ data }) {
  const redact = Math.random() > 0.5;
  return (
    <div style={{ fontFamily: FONTS.sans, fontSize: "14px", lineHeight: "1.5", color: "#000", backgroundColor: "#fff", padding: "30px 35px" }}>
      <div style={{ marginBottom: "20px" }}>
        <div><b>From:</b> Jeffrey Epstein &lt;{data.trollEmail}&gt;</div>
        <div><b>Date:</b> {data.date}</div>
        <div><b>To:</b> {data.name.toUpperCase()}{redact ? <RedactBar width={120} /> : ` <${data.email}>`}</div>
        <div><b>Subject:</b></div>
      </div>

      <p style={{ margin: "0 0 20px" }}>{data.messages[0]?.text}</p>

      {data.messages.length > 1 && (
        <div style={{ borderTop: "1px solid #ddd", paddingTop: "15px", marginTop: "15px" }}>
          <div style={{ marginBottom: "10px", fontSize: "13px" }}>
            <div>From: {redact ? <RedactBar width={100} /> : data.name}</div>
            <div>To: Jeffrey Epstein[{data.trollEmail}]</div>
            <div>Sent: {data.messages[1]?.date}</div>
            <div>Subject: {data.subject}</div>
          </div>
          <p style={{ margin: "0" }}>{data.messages[1]?.text}</p>
          {data.device && <p style={{ margin: "10px 0 0", fontSize: "12px", color: "#666" }}>{data.device}</p>}
        </div>
      )}

      {data.messages.length > 2 && (
        <div style={{ borderTop: "1px solid #eee", paddingTop: "12px", marginTop: "12px" }}>
          <div style={{ fontSize: "13px", marginBottom: "5px" }}>
            From: Jeffrey Epstein &lt;{data.trollEmail}&gt;<br />
            Date: {data.messages[2]?.date}<br />
            To: {redact ? <RedactBar width={140} /> : data.name}
          </div>
          <p style={{ margin: "5px 0 0" }}>{data.messages[2]?.text}</p>
        </div>
      )}
    </div>
  );
}
