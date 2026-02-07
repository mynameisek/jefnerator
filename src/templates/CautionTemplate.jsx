import RedactBar, { ConfidentialityFooter, EftaTag } from './RedactBar';
import { randomChoice } from '../engine/utils';
import { VIP_NAMES } from '../data/vips';
import { COMPANIES_CAUTION, FONTS } from '../data/locations';

export default function CautionTemplate({ data }) {
  const vip = randomChoice(VIP_NAMES);
  return (
    <div style={{ fontFamily: FONTS.serif, fontSize: "14px", lineHeight: "1.5", color: "#000", backgroundColor: "#fff", padding: "30px 40px" }}>
      <div style={{ borderBottom: "1px solid #ccc", paddingBottom: "15px", marginBottom: "20px" }}>
        <div><b>From:</b> "{data.name}" &lt;<RedactBar width={200} />&gt;</div>
        <div style={{ paddingLeft: "20px" }}><b>To:</b> J &lt;{data.trollEmail}&gt;</div>
        <div><b>Subject:</b> RE: {data.subject}</div>
        <div style={{ paddingLeft: "12px" }}><b>Date:</b> {data.date}</div>
      </div>

      <div style={{ color: "#1a0dab" }}>
        <p style={{ margin: "0" }}>{data.messages[0]?.text}</p>
      </div>

      <div style={{ marginTop: "20px", paddingTop: "15px", borderTop: "1px solid #eee" }}>
        <p style={{ margin: "0", fontSize: "13px" }}><b>From:</b> J [mailto:{data.trollEmail}]</p>
        <p style={{ margin: "0", fontSize: "13px" }}><b>Sent:</b> {data.messages[1]?.date || data.date}</p>
        <p style={{ margin: "0", fontSize: "13px" }}>
          <b>To:</b> {data.name} &lt;<RedactBar width={180} />&gt;; {vip.name} &lt;<RedactBar width={120} />&gt;
        </p>
        <p style={{ margin: "0 0 10px", fontSize: "13px" }}><b>Subject:</b></p>

        <div style={{
          backgroundColor: "#ffff00", padding: "5px 10px", marginBottom: "15px",
          fontWeight: "bold", fontSize: "13px",
        }}>
          [CAUTION]<br />This email originated outside {randomChoice(COMPANIES_CAUTION)}.
        </div>

        <p style={{ margin: "0" }}>{data.messages[1]?.text || data.messages[0]?.text}</p>
      </div>

      {Math.random() > 0.4 && <ConfidentialityFooter email={data.trollEmail} />}
      <EftaTag />
    </div>
  );
}
