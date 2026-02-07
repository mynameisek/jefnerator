import { useState } from 'react';

const btnStyle = {
  padding: "8px 16px",
  backgroundColor: "transparent",
  border: "1px solid #333",
  color: "#666",
  fontFamily: "'Courier New', monospace",
  fontSize: "11px",
  cursor: "pointer",
  letterSpacing: "1px",
  transition: "border-color 0.2s, color 0.2s",
};

export default function ShareButtons() {
  const [copied, setCopied] = useState(false);
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const text = "I just found CLASSIFIED leaked emails on JEFNERATOR... This is totally real and not satire at all.";

  const shareTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      '_blank',
      'width=550,height=420'
    );
  };

  const shareWhatsApp = () => {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(text + " " + url)}`,
      '_blank'
    );
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const input = document.createElement('input');
      input.value = url;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const nativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: 'JEFNERATOR LEAKS', text, url });
      } catch { /* user cancelled */ }
    }
  };

  return (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "center" }}>
      <button onClick={shareTwitter} style={btnStyle}
        onMouseEnter={(e) => { e.target.style.borderColor = "#1da1f2"; e.target.style.color = "#1da1f2"; }}
        onMouseLeave={(e) => { e.target.style.borderColor = "#333"; e.target.style.color = "#666"; }}
      >
        X / TWITTER
      </button>
      <button onClick={shareWhatsApp} style={btnStyle}
        onMouseEnter={(e) => { e.target.style.borderColor = "#25d366"; e.target.style.color = "#25d366"; }}
        onMouseLeave={(e) => { e.target.style.borderColor = "#333"; e.target.style.color = "#666"; }}
      >
        WHATSAPP
      </button>
      <button onClick={copyLink} style={btnStyle}
        onMouseEnter={(e) => { e.target.style.borderColor = "#ff3333"; e.target.style.color = "#ff3333"; }}
        onMouseLeave={(e) => { e.target.style.borderColor = "#333"; e.target.style.color = "#666"; }}
      >
        {copied ? "COPIED!" : "COPY LINK"}
      </button>
      {typeof navigator !== 'undefined' && navigator.share && (
        <button onClick={nativeShare} style={btnStyle}
          onMouseEnter={(e) => { e.target.style.borderColor = "#ff3333"; e.target.style.color = "#ff3333"; }}
          onMouseLeave={(e) => { e.target.style.borderColor = "#333"; e.target.style.color = "#666"; }}
        >
          SHARE...
        </button>
      )}
    </div>
  );
}
