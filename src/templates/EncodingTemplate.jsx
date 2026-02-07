import { randomChoice } from '../engine/utils';
import { FONTS } from '../data/locations';

export default function EncodingTemplate({ data }) {
  const addGlitch = (text) => {
    const glitches = ["=C2", "=A0", "=3D", "=20", "=0D", "=\n"];
    let r = text;
    for (let i = 0; i < 2 + Math.floor(Math.random() * 3); i++) {
      const pos = Math.floor(Math.random() * r.length);
      r = r.slice(0, pos) + randomChoice(glitches) + r.slice(pos);
    }
    return r;
  };

  return (
    <div style={{ fontFamily: FONTS.sans, fontSize: "13px", lineHeight: "1.7", color: "#000", backgroundColor: "#f8f8f8", padding: "30px 40px" }}>
      <div style={{ marginBottom: "15px", borderBottom: "1px solid #ddd", paddingBottom: "10px" }}>
        <div><b>From:</b>{"      "}Jeffrey E. &lt;{data.trollEmail}&gt;</div>
        <div><b>Sent:</b>{"      "}{data.date}</div>
        <div><b>To:</b>{"        "}{data.name}</div>
        <div><b>Subject:</b>{"  "}{data.subject}</div>
      </div>
      <div style={{ whiteSpace: "pre-wrap", fontFamily: FONTS.mono, fontSize: "12px" }}>
        {data.messages.map((msg, i) => (
          <div key={i} style={{ marginBottom: "15px" }}>
            {i > 0 && (
              <div style={{ marginBottom: "5px", fontSize: "11px" }}>
                On {msg.date} {msg.from === "trollozor" ? `Jeffrey E. <${data.trollEmail}>` : data.name} wrote:
              </div>
            )}
            <div>{addGlitch(msg.text)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
