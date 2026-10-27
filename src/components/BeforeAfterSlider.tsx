import React, { useState, useRef, useCallback, useEffect } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  beforeLabel?: string;
  afterLabel?: string;
  aspectRatio?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt = 'Vor der Sanierung: Veraltetes Bad mit beschädigten Fliesen und verfärbten Fugen',
  afterAlt = 'Nach der Sanierung: Meisterhaft verlegte Großformatfliesen und moderne Walk-in-Dusche',
  beforeLabel = 'Vorher',
  afterLabel = 'Nachher',
  aspectRatio = '16/9',
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleStart = (clientX: number) => {
    isDragging.current = true;
    updatePosition(clientX);
  };

  useEffect(() => {
    const handleWindowMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging.current) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      updatePosition(clientX);
    };

    const handleWindowEnd = () => {
      isDragging.current = false;
    };

    window.addEventListener('mousemove', handleWindowMove);
    window.addEventListener('mouseup', handleWindowEnd);
    window.addEventListener('touchmove', handleWindowMove, { passive: false });
    window.addEventListener('touchend', handleWindowEnd);

    return () => {
      window.removeEventListener('mousemove', handleWindowMove);
      window.removeEventListener('mouseup', handleWindowEnd);
      window.removeEventListener('touchmove', handleWindowMove);
      window.removeEventListener('touchend', handleWindowEnd);
    };
  }, [updatePosition]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight') {
      setSliderPosition((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={(e) => handleStart(e.clientX)}
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      style={{ aspectRatio }}
      className="relative select-none overflow-hidden w-full rounded-2xl sm:rounded-3xl shadow-2xl border border-white/20 bg-[#2f2e2e] cursor-ew-resize touch-none"
    >
      {/* 1. AFTER Image (Base Layer, Full Size) */}
      <img
        src={afterImage}
        alt={afterAlt}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        loading="lazy"
        referrerPolicy="no-referrer"
      />

      {/* 2. BEFORE Image (Clipped Layer, Identical Full Size via CSS clipPath) */}
      <img
        src={beforeImage}
        alt={beforeAlt}
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          WebkitClipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
        }}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        loading="lazy"
        referrerPolicy="no-referrer"
      />

      {/* 3. Top-Left Badge (Dark Pill matching screenshot: "Para pastrimit" / "Vorher") */}
      <div className="absolute top-4 left-4 z-20 pointer-events-none select-none">
        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide bg-[#0a0f1d]/85 text-white backdrop-blur-md shadow-lg border border-white/10">
          {beforeLabel}
        </span>
      </div>

      {/* 4. Top-Right Badge (White Pill matching screenshot: "Pas pastrimit" / "Nachher") */}
      <div className="absolute top-4 right-4 z-20 pointer-events-none select-none">
        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide bg-white/95 text-[#0a0f1d] backdrop-blur-md shadow-lg border border-black/5">
          {afterLabel}
        </span>
      </div>

      {/* 5. Clean White Vertical Divider Line */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_12px_rgba(0,0,0,0.6)] pointer-events-none z-20 -translate-x-1/2"
        style={{ left: `${sliderPosition}%` }}
      />

      {/* 6. Drag Handle Button (Centered Circular Button with <-> Horizontal Arrow) */}
      <div
        tabIndex={0}
        role="slider"
        aria-valuenow={Math.round(sliderPosition)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Vergleichs-Schieberegler Vorher und Nachher"
        onKeyDown={handleKeyDown}
        className="absolute top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#0a0f1d]/90 text-white border-2 border-white shadow-2xl flex items-center justify-center cursor-ew-resize hover:scale-105 active:scale-95 transition-transform outline-none focus:ring-4 focus:ring-white/40"
        style={{ left: `${sliderPosition}%` }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 text-white"
          aria-hidden="true"
        >
          <path d="m8 8-4 4 4 4" />
          <path d="m16 8 4 4-4 4" />
          <path d="M4 12h16" />
        </svg>
      </div>
    </div>
  );
}
