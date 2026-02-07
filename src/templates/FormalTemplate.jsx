import RedactBar, { EftaTag } from './RedactBar';
import { FONTS } from '../data/locations';

export default function FormalTemplate({ data }) {
  const redact = Math.random() > 0.4;
  return (
    <div style={{ fontFamily: FONTS.serif, fontSize: "14px", lineHeight: "1.5", color: "#000", backgroundColor: "#fff", padding: "30px 40px" }}>
      <div style={{ borderBottom: "1px solid #ccc", paddingBottom: "15px", marginBottom: "20px" }}>
        <div>
          <b style={{ marginRight: "4px" }}>From:</b>
          {redact
            ? <>{`"${data.name.split(" ")[0].toLowerCase()}" <`}<RedactBar width={160} />{`>`}</>
            : `"${data.name}" <${data.email}>`
          }
        </div>
        <div style={{ paddingLeft: "28px" }}>
          <b>To:</b> {data.trollAlias}
        </div>
        <div><b style={{ marginRight: "4px" }}>Subject:</b> {data.subject}</div>
        <div style={{ paddingLeft: "12px" }}><b>Date:</b> {data.date}</div>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <p style={{ margin: "0 0 10px" }}>{data.messages[0]?.text}</p>
        {data.device && Math.random() > 0.5 && (
          <p style={{ margin: "5px 0", color: "#666", fontSize: "12px" }}>{data.device}</p>
        )}
      </div>

      {data.messages.length > 1 && (
        <div style={{ borderTop: "1px solid #eee", paddingTop: "15px" }}>
          <p style={{ margin: "0 0 5px", fontSize: "13px" }}>-----Original Message-----</p>
          <p style={{ margin: "0", fontSize: "13px" }}>From: Jeffrey Epstein &lt;{data.trollEmail}&gt;</p>
          <p style={{ margin: "0", fontSize: "13px" }}>Date: {data.messages[1]?.date}</p>
          <p style={{ margin: "0", fontSize: "13px" }}>
            To: {redact ? <RedactBar width={180} /> : `<${data.email}>`}
          </p>
          <p style={{ margin: "0 0 5px", fontSize: "13px" }}>Subject:</p>
          <p style={{ margin: "10px 0 0" }}>{data.messages[1]?.text}</p>
        </div>
      )}

      {data.messages.length > 2 && (
        <div style={{ borderTop: "1px solid #f0f0f0", paddingTop: "12px", marginTop: "12px" }}>
          <p style={{ margin: "0", fontSize: "12px", color: "#666" }}>
            On {data.messages[2]?.date}, {data.messages[2]?.from === "trollozor" ? `JE <${data.trollEmail}>` : data.name} wrote:
          </p>
          <p style={{ margin: "5px 0 0 15px" }}>{data.messages[2]?.text}</p>
        </div>
      )}

      {Math.random() > 0.6 && <EftaTag />}
    </div>
  );
}
