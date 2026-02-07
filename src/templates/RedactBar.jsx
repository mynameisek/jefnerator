export default function RedactBar({ width = 120 }) {
  return (
    <span style={{
      display: "inline-block",
      width: `${width}px`,
      height: "14px",
      backgroundColor: "#000",
      verticalAlign: "middle",
      margin: "0 2px",
      borderRadius: "1px",
    }} />
  );
}

export function ConfidentialityFooter({ email = "jeevacation@gmail.com" }) {
  return (
    <div style={{
      marginTop: "25px",
      fontSize: "9px",
      color: "#888",
      lineHeight: "1.4",
      fontFamily: "'Helvetica Neue', Arial, sans-serif",
    }}>
      <p style={{ margin: "0" }}>--</p>
      <p style={{ margin: "5px 0 0" }}>please note</p>
      <p style={{ margin: "0" }}>The information contained in this communication is</p>
      <p style={{ margin: "0" }}>confidential, may be attorney-client privileged, may</p>
      <p style={{ margin: "0" }}>constitute inside information, and is intended only for</p>
      <p style={{ margin: "0" }}>the use of the addressee. It is the property of</p>
      <p style={{ margin: "0" }}>JEE</p>
      <p style={{ margin: "0" }}>Unauthorized use, disclosure or copying of this</p>
      <p style={{ margin: "0" }}>communication or any part thereof is strictly prohibited</p>
      <p style={{ margin: "0" }}>and may be unlawful. If you have received this</p>
      <p style={{ margin: "0" }}>communication in error, please notify us immediately by</p>
      <p style={{ margin: "0" }}>return e-mail or by e-mail to {email}, and</p>
    </div>
  );
}

export function EftaTag() {
  return (
    <div style={{
      marginTop: "15px",
      fontSize: "10px",
      color: "#999",
      textAlign: "right",
    }}>
      EFTA{String(Math.floor(Math.random() * 99999999)).padStart(8, "0")}
    </div>
  );
}
