import { useState, useRef, useCallback, useEffect } from 'react';
import EmailPreview from '../templates/EmailPreview';
import DownloadButton from './DownloadButton';

export default function GallerySwipe({ conversations, onClose }) {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const touchStart = useRef(null);
  const touchEnd = useRef(null);
  const emailRef = useRef(null);

  const total = conversations.length;

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const goTo = useCallback((idx) => {
    setCurrent(Math.max(0, Math.min(idx, total - 1)));
  }, [total]);

  const prev = useCallback(() => goTo(current - 1), [current, goTo]);
  const next = useCallback(() => goTo(current + 1), [current, goTo]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
      else if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [prev, next, onClose]);

  // Touch swipe handling
  const onTouchStart = (e) => {
    touchEnd.current = null;
    touchStart.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    const distance = touchStart.current - touchEnd.current;
    const minSwipe = 50;
    if (Math.abs(distance) >= minSwipe) {
      if (distance > 0) next();
      else prev();
    }
  };

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      backgroundColor: "rgba(0,0,0,0.95)",
      zIndex: 1000,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "env(safe-area-inset-top, 20px) env(safe-area-inset-right, 20px) env(safe-area-inset-bottom, 20px) env(safe-area-inset-left, 20px)",
    }}>
      {/* Top bar */}
      <div style={{
        position: "absolute",
        top: "env(safe-area-inset-top, 0px)",
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 20px",
        zIndex: 1001,
      }}>
        <span style={{ fontSize: "11px", color: "#ff3333", letterSpacing: "2px", fontFamily: "'Courier New', monospace" }}>
          DOC {String(current + 1).padStart(3, "0")} / {String(total).padStart(3, "0")}
        </span>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <DownloadButton
            targetRef={emailRef}
            filename={`jefnerator_leak_${String(current + 1).padStart(3, "0")}.png`}
          />
          <button
            onClick={onClose}
            style={{
              padding: "4px 12px",
              backgroundColor: "transparent",
              border: "1px solid #333",
              color: "#666",
              fontFamily: "'Courier New', monospace",
              fontSize: "12px",
              cursor: "pointer",
            }}
          >
            ESC
          </button>
        </div>
      </div>

      {/* Email content */}
      <div
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{
          maxWidth: "750px",
          width: "100%",
          maxHeight: "calc(100vh - 140px)",
          overflowY: "auto",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div ref={emailRef} style={{ borderRadius: "2px", overflow: "hidden", border: "1px solid #333" }}>
          <EmailPreview data={conversations[current]} />
        </div>
      </div>

      {/* Navigation arrows (desktop) */}
      <button
        onClick={prev}
        disabled={current === 0}
        style={{
          position: "absolute",
          left: "20px",
          top: "50%",
          transform: "translateY(-50%)",
          padding: "15px 12px",
          backgroundColor: "transparent",
          border: "1px solid #333",
          color: current === 0 ? "#222" : "#666",
          fontFamily: "'Courier New', monospace",
          fontSize: "20px",
          cursor: current === 0 ? "default" : "pointer",
          display: isMobile ? "none" : "block",
        }}
      >
        {"\u25C0"}
      </button>
      <button
        onClick={next}
        disabled={current === total - 1}
        style={{
          position: "absolute",
          right: "20px",
          top: "50%",
          transform: "translateY(-50%)",
          padding: "15px 12px",
          backgroundColor: "transparent",
          border: "1px solid #333",
          color: current === total - 1 ? "#222" : "#666",
          fontFamily: "'Courier New', monospace",
          fontSize: "20px",
          cursor: current === total - 1 ? "default" : "pointer",
          display: isMobile ? "none" : "block",
        }}
      >
        {"\u25B6"}
      </button>

      {/* Dots indicator */}
      <div style={{
        position: "absolute",
        bottom: "max(env(safe-area-inset-bottom, 15px), 15px)",
        display: "flex",
        gap: "8px",
        justifyContent: "center",
      }}>
        {conversations.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{
              width: i === current ? "20px" : "8px",
              height: "8px",
              borderRadius: "4px",
              backgroundColor: i === current ? "#ff3333" : "#333",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "all 0.2s",
            }}
          />
        ))}
      </div>
    </div>
  );
}
