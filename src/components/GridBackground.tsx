'use client';

import React from 'react';

interface GridBackgroundProps {
  className?: string;
}

export default function GridBackground({ className = '' }: GridBackgroundProps) {
  return (
    <div
      className={`fixed inset-0 pointer-events-none ${className}`}
      style={{ zIndex: 10 }}
    >
      <div className="absolute inset-0 flex justify-center">
        {/* Container that matches section padding */}
        {/* Mobile: 24px (px-6), Desktop: matches max-width 1400px */}
        <div className="w-full max-w-[1400px] h-full relative px-6 md:px-0">
          {/* Left vertical line */}
          <div
            className="absolute left-3 md:left-0 top-0 bottom-0 w-px"
            style={{ backgroundColor: 'var(--grid-line)' }}
          />

          {/* Right vertical line */}
          <div
            className="absolute right-3 md:right-0 top-0 bottom-0 w-px"
            style={{ backgroundColor: 'var(--grid-line)' }}
          />
        </div>
      </div>
    </div>
  );
}
