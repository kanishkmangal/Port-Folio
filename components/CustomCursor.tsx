
'use client'

import { useEffect, useRef, useState } from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// CustomCursor — desktop only (hidden on touch devices).
//
// Two rings:
//   • dot        — snaps instantly to mouse position via requestAnimationFrame
//   • ring       — lags behind using linear interpolation (lerp) for a smooth
//                  trailing effect, calculated each frame at 60fps
//
// Hover state:
//   • Detected via mouseover on [data-cursor="pointer"] elements and all
//     <a>, <button> tags — the ring enlarges and glows.
// ─────────────────────────────────────────────────────────────────────────────

export default function CustomCursor() {
    const dotRef  = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);

    // Current raw mouse position
    const mouse  = useRef({ x: -100, y: -100 });
    // Smoothed (lagging) ring position
    const ring   = useRef({ x: -100, y: -100 });
    const isHovering = useRef(false);
    const rafId  = useRef<number>(0);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Only activate on non-touch devices
        if (window.matchMedia('(hover: none)').matches) return;

        setVisible(true);

        const onMouseMove = (e: MouseEvent) => {
            mouse.current = { x: e.clientX, y: e.clientY };
        };

        const onMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest('a, button, [data-cursor="pointer"]')) {
                isHovering.current = true;
            }
        };

        const onMouseOut = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest('a, button, [data-cursor="pointer"]')) {
                isHovering.current = false;
            }
        };

        // Animation loop: lerp the ring toward the mouse each frame
        const animate = () => {
            const lerp = 0.12; // lower = more lag (0.04 – 0.2 sweet spot)

            ring.current.x += (mouse.current.x - ring.current.x) * lerp;
            ring.current.y += (mouse.current.y - ring.current.y) * lerp;

            if (dotRef.current) {
                dotRef.current.style.transform =
                    `translate(${mouse.current.x}px, ${mouse.current.y}px)`;
            }

            if (ringRef.current) {
                const hovering = isHovering.current;
                ringRef.current.style.transform =
                    `translate(${ring.current.x}px, ${ring.current.y}px)`;
                ringRef.current.style.width  = hovering ? '48px' : '32px';
                ringRef.current.style.height = hovering ? '48px' : '32px';
                ringRef.current.style.borderColor = hovering
                    ? 'rgba(96,165,250,0.8)'   // blue-400
                    : 'rgba(148,163,184,0.5)';  // slate-400
                ringRef.current.style.boxShadow = hovering
                    ? '0 0 12px rgba(96,165,250,0.4)'
                    : 'none';
            }

            rafId.current = requestAnimationFrame(animate);
        };

        rafId.current = requestAnimationFrame(animate);

        window.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseover', onMouseOver);
        document.addEventListener('mouseout',  onMouseOut);

        return () => {
            cancelAnimationFrame(rafId.current);
            window.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseover', onMouseOver);
            document.removeEventListener('mouseout',  onMouseOut);
        };
    }, []);

    if (!visible) return null;

    return (
        <>
            {/* Dot — instant, always on top */}
            <div
                ref={dotRef}
                aria-hidden
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(96,165,250,0.95)',  // blue-400
                    pointerEvents: 'none',
                    zIndex: 9999,
                    transform: 'translate(-100px, -100px)',
                    // Offset so the center of the dot is at the cursor tip
                    marginLeft: '-4px',
                    marginTop: '-4px',
                    willChange: 'transform',
                }}
            />

            {/* Ring — lerp-lagged, expands on hover */}
            <div
                ref={ringRef}
                aria-hidden
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    border: '2px solid rgba(148,163,184,0.5)',
                    pointerEvents: 'none',
                    zIndex: 9998,
                    transform: 'translate(-100px, -100px)',
                    marginLeft: '-16px',
                    marginTop: '-16px',
                    transition: 'width 0.2s ease, height 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease',
                    willChange: 'transform, width, height',
                }}
            />
        </>
    );
}
