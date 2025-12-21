'use client';

import React from 'react';

interface GridBackgroundProps {
  className?: string;
}

export default function GridBackground({ className = '' }: GridBackgroundProps) {
  // Section heights - used to position horizontal lines at section transitions
  // These are approximate viewport heights where sections transition
  const sectionBreaks = [0, 100, 200, 300, 400, 500, 600, 700, 800]; // vh percentages converted to positions

  return (
    <>
      {/* Fixed vertical lines - only far left and right edges */}
      <div
        className={`fixed inset-0 pointer-events-none ${className}`}
        style={{ zIndex: 0 }}
      >
        <div className="absolute inset-0 flex justify-center">
          {/* Wide container for far-side lines */}
          <div className="w-full max-w-[1400px] h-full relative">
            {/* Left vertical line - far left edge */}
            <div
              className="absolute left-0 top-0 bottom-0 w-px"
              style={{ backgroundColor: 'var(--grid-line)' }}
            />

            {/* Right vertical line - far right edge */}
            <div
              className="absolute right-0 top-0 bottom-0 w-px"
              style={{ backgroundColor: 'var(--grid-line)' }}
            />
          </div>
        </div>
      </div>

      {/* Horizontal lines at section transitions with "+" markers */}
      <div
        className={`fixed inset-0 pointer-events-none overflow-hidden ${className}`}
        style={{ zIndex: 0 }}
      >
        <div className="absolute inset-0 flex justify-center">
          <div className="w-full max-w-[1400px] h-full relative">
            {/* Generate horizontal lines at section breaks */}
            {sectionBreaks.map((vh, index) => {
              const topPosition = `${vh}vh`;
              return (
                <React.Fragment key={index}>
                  {/* Horizontal line spanning full width */}
                  <div
                    className="absolute left-0 right-0 h-px"
                    style={{
                      top: topPosition,
                      backgroundColor: 'var(--grid-line)'
                    }}
                  />

                  {/* "+" at left intersection */}
                  <PlusMarker
                    style={{
                      top: topPosition,
                      left: '0',
                      transform: 'translate(-50%, -50%)'
                    }}
                  />

                  {/* "+" at right intersection */}
                  <PlusMarker
                    style={{
                      top: topPosition,
                      right: '0',
                      transform: 'translate(50%, -50%)'
                    }}
                  />
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

interface PlusMarkerProps {
  style?: React.CSSProperties;
  className?: string;
}

function PlusMarker({ style, className = '' }: PlusMarkerProps) {
  return (
    <div
      className={`absolute ${className}`}
      style={style}
    >
      <span
        className="select-none font-light"
        style={{
          color: 'var(--grid-plus)',
          fontSize: '14px',
          lineHeight: 1
        }}
      >
        +
      </span>
    </div>
  );
}
