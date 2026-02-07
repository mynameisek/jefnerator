import RedactBar from './RedactBar';
import { FONTS } from '../data/locations';

export default function OutlookTemplate({ data }) {
  const redact = Math.random() > 0.5;
  return (
    <div style={{ fontFamily: FONTS.sans, fontSize: "14px", lineHeight: "1.6", color: "#000", backgroundColor: "#fff", padding: "30px 40px" }}>
      <div style={{ marginBottom: "20px" }}>
        <table style={{ fontSize: "14px" }}><tbody>
          <tr>
            <td style={{ fontWeight: "bold", paddingRight: "12px", verticalAlign: "top" }}>To:</td>
            <td>{data.trollEmail}[{data.trollEmail}]; Jeffrey Epstein[{data.trollEmail}]</td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold", paddingRight: "12px" }}>From:</td>
            <td>{redact ? <>{data.name.split(" ")[0]} <RedactBar width={140} /></> : data.name}</td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold", paddingRight: "12px" }}>Sent:</td>
            <td>{data.date}</td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold", paddingRight: "12px" }}>Subject:</td>
            <td>{data.subject}</td>
          </tr>
        </tbody></table>
      </div>

      <p style={{ margin: "0 0 15px" }}>{data.messages[0]?.text}</p>
      {data.device && <p style={{ margin: "10px 0", fontSize: "12px", color: "#666" }}>{data.device}</p>}

      {data.messages.length > 1 && (
        <div style={{ marginTop: "20px", paddingTop: "15px", borderTop: "1px solid #eee" }}>
          <div style={{ fontSize: "13px", marginBottom: "8px" }}>
            From: Jeffrey Epstein &lt;{data.trollEmail}&gt;<br />
            Date: {data.messages[1]?.date}<br />
            To: {redact ? <RedactBar width={150} /> : `<${data.email}>`}<br />
            Subject: {data.subject}
          </div>
          <p style={{ margin: "10px 0 0" }}>{data.messages[1]?.text}</p>
        </div>
      )}
    </div>
  );
}
