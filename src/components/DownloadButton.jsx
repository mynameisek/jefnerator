import { toPng } from 'html-to-image';
import { useCallback, useState } from 'react';

export default function DownloadButton({ targetRef, index, filename = "jefnerator_leak.png" }) {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = useCallback(async () => {
    const el = index != null ? targetRef.current[index] : targetRef?.current;
    if (!el) return;
    setDownloading(true);
    try {
      const dataUrl = await toPng(el, {
        backgroundColor: '#ffffff',
        pixelRatio: 2,
      });
      const link = document.createElement('a');
      link.download = filename;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Screenshot failed:', err);
    } finally {
      setDownloading(false);
    }
  }, [targetRef, index, filename]);

  return (
    <button
      onClick={handleDownload}
      disabled={downloading}
      style={{
        padding: "4px 10px",
        backgroundColor: "transparent",
        border: "1px solid #333",
        color: "#666",
        fontFamily: "'Courier New', monospace",
        fontSize: "10px",
        cursor: downloading ? "wait" : "pointer",
        letterSpacing: "1px",
        transition: "border-color 0.2s, color 0.2s",
      }}
      onMouseEnter={(e) => { e.target.style.borderColor = "#ff3333"; e.target.style.color = "#ff3333"; }}
      onMouseLeave={(e) => { e.target.style.borderColor = "#333"; e.target.style.color = "#666"; }}
    >
      {downloading ? "..." : "\u{1F4F8} PNG"}
    </button>
  );
}

export function DownloadAllButton({ refs, count }) {
  const [downloading, setDownloading] = useState(false);

  const handleDownloadAll = useCallback(async () => {
    setDownloading(true);
    try {
      for (let i = 0; i < count; i++) {
        const el = refs.current[i];
        if (!el) continue;
        const dataUrl = await toPng(el, {
          backgroundColor: '#ffffff',
          pixelRatio: 2,
        });
        const link = document.createElement('a');
        link.download = `jefnerator_leak_${String(i + 1).padStart(3, "0")}.png`;
        link.href = dataUrl;
        link.click();
        // Small delay between downloads to avoid browser throttling
        await new Promise(r => setTimeout(r, 300));
      }
    } catch (err) {
      console.error('Download all failed:', err);
    } finally {
      setDownloading(false);
    }
  }, [refs, count]);

  return (
    <button
      onClick={handleDownloadAll}
      disabled={downloading}
      style={{
        padding: "10px 30px",
        backgroundColor: "transparent",
        border: "1px solid #333",
        color: "#666",
        fontFamily: "'Courier New', monospace",
        fontSize: "12px",
        cursor: downloading ? "wait" : "pointer",
        letterSpacing: "2px",
        transition: "border-color 0.2s, color 0.2s",
      }}
      onMouseEnter={(e) => { e.target.style.borderColor = "#ff3333"; e.target.style.color = "#ff3333"; }}
      onMouseLeave={(e) => { e.target.style.borderColor = "#333"; e.target.style.color = "#666"; }}
    >
      {downloading ? "\u{2B07}\uFE0F DOWNLOADING..." : "\u{1F4E5} DOWNLOAD ALL PNG"}
    </button>
  );
}
