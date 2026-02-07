import RedactBar, { ConfidentialityFooter } from './RedactBar';
import { randomChoice } from '../engine/utils';
import { DEVICES, FONTS } from '../data/locations';

export default function ReplyChainTemplate({ data }) {
  const redact = Math.random() > 0.3;
  return (
    <div style={{ fontFamily: FONTS.sans, fontSize: "14px", lineHeight: "1.6", color: "#000", backgroundColor: "#fff", padding: "30px 40px" }}>
      <div style={{ borderBottom: "1px solid #ccc", paddingBottom: "12px", marginBottom: "20px" }}>
        <div><b>From:</b> J &lt;{data.trollEmail}&gt;</div>
        <div style={{ paddingLeft: "20px" }}>
          <b>To:</b> {redact
            ? <>{data.name.split(" ")[0].toLowerCase()} &lt;<RedactBar width={180} />&gt;</>
            : `${data.name.toLowerCase()} <${data.email}>`
          }
        </div>
        <div><b>Subject:</b> {data.subject}</div>
        <div style={{ paddingLeft: "8px" }}><b>Date:</b> {data.date}</div>
      </div>

      <p style={{ margin: "0 0 20px" }}>{data.messages[0]?.text}</p>

      {data.messages.slice(1).map((msg, i) => (
        <div key={i} style={{ marginTop: "15px", paddingTop: i === 0 ? "10px" : "0", borderTop: i === 0 ? "1px solid #eee" : "none" }}>
          <p style={{ margin: "0 0 5px", fontSize: "13px" }}>
            On {msg.date}, {msg.from === "trollozor"
              ? `J <${data.trollEmail}>`
              : (redact
                ? <>{data.name.split(" ")[0].toLowerCase()} &lt;<RedactBar width={160} />&gt;</>
                : `${data.name.toLowerCase()} <${data.email}>`)
            } wrote:
          </p>
          <div style={{ paddingLeft: `${(i + 1) * 15}px` }}>
            <p style={{ margin: "5px 0" }}>{msg.text}</p>
            {Math.random() > 0.6 && (
              <p style={{ margin: "5px 0", fontSize: "12px", color: "#666" }}>{randomChoice(DEVICES)}</p>
            )}
          </div>
        </div>
      ))}

      {Math.random() > 0.5 && <ConfidentialityFooter email={data.trollEmail} />}
    </div>
  );
}
