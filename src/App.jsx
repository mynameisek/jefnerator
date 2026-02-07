import { useState, useRef, useCallback, useEffect } from 'react';
import { generateBatch, randomChoice } from './engine/generator';
import EmailPreview from './templates/EmailPreview';
import DownloadButton, { DownloadAllButton } from './components/DownloadButton';
import ShareButtons from './components/ShareButtons';
import GallerySwipe from './components/GallerySwipe';
import { VIP_NAMES } from './data/vips';

export default function App() {
  const params = new URLSearchParams(window.location.search);
  const validTopics = ["random","island","geopolitics","coconuts","deals","science","extortion","french","davos","aquarium","entremetteur","blackmail","generic"];
  const paramTopic = params.get("topic");
  const [name, setName] = useState(params.get("name") || "");
  const [email, setEmail] = useState(params.get("email") || "");
  const [topic, setTopic] = useState(validTopics.includes(paramTopic) ? paramTopic : "random");
  const [conversations, setConversations] = useState([]);
  const [generating, setGenerating] = useState(false);
  const [showVips, setShowVips] = useState(false);
  const [galleryMode, setGalleryMode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const previewRefs = useRef([]);

  // Sync state → URL
  useEffect(() => {
    const p = new URLSearchParams();
    if (name) p.set("name", name);
    if (email) p.set("email", email);
    if (topic && topic !== "random") p.set("topic", topic);
    const qs = p.toString();
    window.history.replaceState(null, "", qs ? `?${qs}` : window.location.pathname);
  }, [name, email, topic]);

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const generate = useCallback(() => {
    setGenerating(true);
    setTimeout(() => {
      const count = 3 + Math.floor(Math.random() * 4);
      const convos = generateBatch(name, email, topic, count);
      previewRefs.current = [];
      setConversations(convos);
      setGenerating(false);
      if (isMobile) setGalleryMode(true);
    }, 500);
  }, [name, email, topic, isMobile]);

  return (
    <div className="app-container" style={{ minHeight: "100vh", backgroundColor: "#0a0a0a", color: "#e0e0e0", fontFamily: "'Courier New', monospace" }}>
      {/* Gallery overlay */}
      {galleryMode && conversations.length > 0 && (
        <GallerySwipe
          conversations={conversations}
          onClose={() => setGalleryMode(false)}
          onRegenerate={generate}
        />
      )}

      {/* Header */}
      <header style={{
        background: "linear-gradient(135deg, #1a0000 0%, #0a0a0a 50%, #000a1a 100%)",
        borderBottom: "1px solid #222",
        padding: "30px 20px",
        textAlign: "center",
      }}>
        <h1 style={{
          fontSize: "clamp(22px, 5vw, 40px)",
          fontWeight: "900",
          margin: "0 0 2px",
          letterSpacing: "4px",
          background: "linear-gradient(90deg, #ff3333, #ff6600, #ff3333)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textTransform: "uppercase",
        }}>
          JEFNERATOR LEAKS
        </h1>
        <p style={{ fontSize: "clamp(10px, 2vw, 14px)", color: "#666", margin: "0 0 8px", letterSpacing: "2px", fontFamily: "'Courier New', monospace" }}>
          <span style={{ color: "#ff3333" }}>JE</span>
          <span style={{ color: "#444", fontSize: "0.85em" }}>(FFREYEPSTEI)</span>
          <span style={{ color: "#ff3333" }}>NERATOR</span>
        </p>
        <p style={{ fontSize: "11px", color: "#555", margin: "0 0 4px", letterSpacing: "5px", textTransform: "uppercase" }}>
          CLASSIFIED // DEPT. OF MEMES // TOP SECRET // DOJ RELEASE 2026
        </p>
        <p style={{ fontSize: "11px", color: "#333", margin: "0", fontStyle: "italic" }}>
          100% fake · 100% funny · 0% real — This is satire, you absolute walnut.
        </p>
        <p style={{ fontSize: "12px", color: "#666", margin: "12px 0 0", letterSpacing: "2px" }}>
          Crafted by <span style={{ color: "#ff6600", fontWeight: "bold" }}>3k1Tc80 KingOfTroll</span>
        </p>
      </header>

      {/* Generator */}
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "30px 20px" }}>
        <div style={{ backgroundColor: "#111", border: "1px solid #2a2a2a", borderRadius: "4px", padding: "25px" }}>
          <div style={{ fontSize: "11px", color: "#ff3333", letterSpacing: "3px", marginBottom: "20px", textTransform: "uppercase", borderBottom: "1px solid #222", paddingBottom: "10px" }}>
            {"\u2588"} JEFNERATOR v3.0.26 {"\u2588"}
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label style={labelStyle}>TARGET NAME</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Elon M." style={inputStyle} />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label style={labelStyle}>TARGET EMAIL</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="e.g. elon@spacex.com" style={inputStyle} />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={labelStyle}>COMPROMISING CATEGORY</label>
            <select value={topic} onChange={(e) => setTopic(e.target.value)} style={inputStyle}>
              <option value="random">Random Mix (all categories)</option>
              <option value="island">Island Invitations & Travel</option>
              <option value="geopolitics">Geopolitics & Power Brokering</option>
              <option value="coconuts">Young Coconuts & Coded Language</option>
              <option value="deals">Shady Deals & Finance</option>
              <option value="science">"Education" & Science Programs</option>
              <option value="extortion">Extortion & Threats</option>
              <option value="french">French Politics & DSK</option>
              <option value="davos">Davos / WEF / Global Architecture</option>
              <option value="aquarium">Aquarium & Marine Code</option>
              <option value="entremetteur">Matchmaking & Recruitment</option>
              <option value="blackmail">Drafts & Blackmail Memos</option>
              <option value="generic">Cryptic / Short Messages</option>
            </select>
          </div>

          <button
            className="generate-btn"
            onClick={generate}
            disabled={generating}
            style={{
              width: "100%", padding: "14px",
              backgroundColor: generating ? "#333" : "#cc0000",
              color: "#fff", border: "none",
              fontFamily: "'Courier New', monospace", fontSize: "14px",
              fontWeight: "bold", letterSpacing: "3px", textTransform: "uppercase",
              cursor: generating ? "wait" : "pointer", borderRadius: "2px",
            }}
          >
            <span className={generating ? "decrypting" : ""}>
              {generating ? "\u2588\u2593\u2592\u2591 DECRYPTING FILES... \u2591\u2592\u2593\u2588" : "GENERATE LEAKS"}
            </span>
          </button>

          <button
            onClick={() => setShowVips(!showVips)}
            style={{
              width: "100%", padding: "8px", marginTop: "10px",
              backgroundColor: "transparent", border: "1px solid #222",
              color: "#555", fontFamily: "'Courier New', monospace",
              fontSize: "11px", cursor: "pointer", letterSpacing: "1px",
            }}
          >
            {showVips ? "\u25B2 HIDE" : "\u25BC SHOW"} VIP NAMES ({VIP_NAMES.length} loaded — edit src/data/vips.js)
          </button>

          {showVips && (
            <div style={{
              marginTop: "10px", padding: "12px", backgroundColor: "#080808",
              border: "1px solid #1a1a1a", borderRadius: "2px",
              maxHeight: "200px", overflowY: "auto",
            }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
                {VIP_NAMES.map((v, i) => (
                  <span key={i} style={{
                    padding: "2px 8px", backgroundColor: "#1a1a1a",
                    borderRadius: "2px", fontSize: "10px",
                    color: v.tag === "inner" ? "#ff6666" : v.tag === "politics" ? "#6699ff" : v.tag === "finance" ? "#66ff99" : "#888",
                  }}>
                    {v.title ? `${v.title} ` : ""}{v.first ? `${v.first} ` : ""}{v.name}
                  </span>
                ))}
              </div>
              <p style={{ margin: "8px 0 0", fontSize: "10px", color: "#444" }}>
                red = inner circle · blue = politics · green = finance · grey = other
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Results */}
      {conversations.length > 0 && (
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 20px 60px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", flexWrap: "wrap", gap: "10px" }}>
            <span style={{ fontSize: "11px", color: "#ff3333", letterSpacing: "3px", textTransform: "uppercase" }}>
              {"\u2501\u2501\u2501"} {conversations.length} DOCUMENTS DECLASSIFIED {"\u2501\u2501\u2501"}
            </span>
            <div style={{ display: "flex", gap: "8px" }}>
              <button onClick={() => setGalleryMode(true)} className="download-btn"
                style={{ padding: "4px 12px", backgroundColor: "transparent", border: "1px solid #333", color: "#666", fontFamily: "'Courier New', monospace", fontSize: "10px", cursor: "pointer" }}
              >
                GALLERY MODE
              </button>
            </div>
          </div>

          {conversations.map((conv, i) => (
            <div key={i} className="email-card" style={{ marginBottom: "30px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                <span style={{ fontSize: "10px", color: "#555", letterSpacing: "2px" }}>
                  DOC {String(i + 1).padStart(3, "0")} / {conv.style.toUpperCase().replace("_", " ")}
                </span>
                <DownloadButton
                  targetRef={previewRefs}
                  index={i}
                  filename={`jefnerator_leak_${String(i + 1).padStart(3, "0")}.png`}
                />
              </div>
              <div ref={(el) => (previewRefs.current[i] = el)}
                style={{ borderRadius: "2px", overflow: "hidden", border: "1px solid #333", boxShadow: "0 4px 20px rgba(0,0,0,0.5)" }}>
                <EmailPreview data={conv} />
              </div>
            </div>
          ))}

          <div style={{ textAlign: "center", marginTop: "20px", display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={generate} className="download-btn"
              style={{ padding: "10px 30px", backgroundColor: "transparent", border: "1px solid #333", color: "#666", fontFamily: "'Courier New', monospace", fontSize: "12px", cursor: "pointer", letterSpacing: "2px" }}
            >
              REGENERATE
            </button>
            <DownloadAllButton refs={previewRefs} count={conversations.length} />
          </div>

          {/* Share */}
          <div style={{ marginTop: "30px", paddingTop: "20px", borderTop: "1px solid #1a1a1a", textAlign: "center" }}>
            <p style={{ fontSize: "10px", color: "#555", letterSpacing: "2px", marginBottom: "12px", textTransform: "uppercase" }}>
              SPREAD THE LEAKS
            </p>
            <ShareButtons />
          </div>
        </div>
      )}

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #1a1a1a", padding: "20px", textAlign: "center", fontSize: "10px", color: "#333", lineHeight: "1.6" }}>
        <p style={{ margin: "0" }}>JEFNERATOR LEAKS — A satirical meme generator. All content is entirely fictional and auto-generated.</p>
        <p style={{ margin: "3px 0 0" }}>No real emails were declassified. Any resemblance to actual documents is purely comedic.</p>
        <p style={{ margin: "3px 0 0" }}>The VIP names used are public figures whose names appeared in widely-reported public documents. This is satire protected under free speech.</p>
        <p style={{ margin: "8px 0 0", color: "#222" }}>v3.0.26 · Feb 2026 · Dept. of Memes · Created by EkiTcH</p>
        <p style={{ margin: "5px 0 0", color: "#444" }}>Ads: <a href="mailto:jefnerator@proton.me" style={{ color: "#666", textDecoration: "none", borderBottom: "1px solid #333" }}>jefnerator@proton.me</a></p>
      </footer>
    </div>
  );
}

const labelStyle = {
  display: "block",
  fontSize: "11px",
  color: "#888",
  marginBottom: "5px",
  letterSpacing: "1px",
};

const inputStyle = {
  width: "100%",
  padding: "10px 12px",
  backgroundColor: "#0a0a0a",
  border: "1px solid #333",
  color: "#fff",
  fontFamily: "'Courier New', monospace",
  fontSize: "14px",
  borderRadius: "2px",
  boxSizing: "border-box",
};
