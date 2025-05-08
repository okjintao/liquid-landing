import { useEffect } from 'react';

export default function LiquidModeWarning({ show, onClose }: { show: boolean; onClose: () => void }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 5000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;
  return (
    <div className="fixed bottom-6 right-6 z-50 bg-[#0ea5e9] text-white px-4 py-3 rounded-lg shadow-lg animate-fade-in flex items-center gap-2">
      <span className="font-bold">Liquid Mode:</span>
      Intense visuals enabled. Press <kbd className="px-1 bg-white/20 rounded">L</kbd> to toggle.
      <button onClick={onClose} className="ml-2 text-white/70 hover:text-white">
        &times;
      </button>
    </div>
  );
} 