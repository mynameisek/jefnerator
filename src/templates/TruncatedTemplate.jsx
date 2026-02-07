import RedactBar from './RedactBar';
import { FONTS } from '../data/locations';

export default function TruncatedTemplate({ data }) {
  const redact = Math.random() > 0.4;
  return (
    <div style={{ fontFamily: FONTS.sans, fontSize: "15px", lineHeight: "1.6", color: "#000", backgroundColor: "#fff", padding: "30px 35px" }}>
      <div style={{ marginBottom: "18px" }}>
        <div>From: Jeffrey E. [mailto:{data.trollEmail}]</div>
        <div>Sent: {data.date}</div>
        <div>To: {data.name} &lt;{redact ? <RedactBar width={180} /> : data.email}&gt;</div>
        <div>Subject: {data.subject}</div>
      </div>
      {data.messages.map((msg, i) => {
        const words = msg.text.split(" ");
        const hlStart = Math.floor(Math.random() * Math.max(1, words.length - 4));
        const hlEnd = hlStart + 2 + Math.floor(Math.random() * 3);
        return (
          <p key={i} style={{ margin: i > 0 ? "12px 0 0" : "0" }}>
            {words.map((w, wi) => (
              <span key={wi}>
                {wi > 0 && " "}
                {wi >= hlStart && wi < hlEnd && Math.random() > 0.7
                  ? <span style={{ textDecoration: "underline", textDecorationColor: "red", textUnderlineOffset: "2px" }}>{w}</span>
                  : w}
              </span>
            ))}
          </p>
        );
      })}
    </div>
  );
}
