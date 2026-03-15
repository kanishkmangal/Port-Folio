'use client'

import { useEffect, useRef } from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// Interactive Canvas Dot Background
// Renders an evenly spaced dotted grid that reacts to the mouse cursor.
// ─────────────────────────────────────────────────────────────────────────────

export default function InteractiveDotBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Configuration
        const DOT_SPACING = 35;       // Spacing between dots
        const BASE_RADIUS = 1.5;      // Normal dot radius
        const HOVER_RADIUS_MAX = 3; // Max radius when hovered
        const EFFECT_RADIUS = 150;    // How far the mouse affects the dots
        
        // Colors
        const BASE_ALPHA = 0.2;
        const HOVER_ALPHA = 0.8;
        // Slate-500 equivalent approx: "100, 116, 139" or a soft purple/blue like "139, 92, 246" (purple-500)
        // We'll use a soft slate/blue color
        const RGB_COLOR = '100, 116, 139'; 

        let animationFrameId: number;
        
        // Tracks current mouse position
        const mouse = { x: -1000, y: -1000 };
        // Target mouse position (for smooth easing if desired, though immediate feels great too)
        const targetMouse = { x: -1000, y: -1000 };

        // Handle resize
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        // Handle mouse events
        const onMouseMove = (e: MouseEvent) => {
            targetMouse.x = e.clientX;
            targetMouse.y = e.clientY;
        };
        const onMouseLeave = () => {
            targetMouse.x = -1000;
            targetMouse.y = -1000;
        };
        
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseout', onMouseLeave);

        // Animation loop
        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Smooth out mouse movement slightly for the effect
            mouse.x += (targetMouse.x - mouse.x) * 0.2;
            mouse.y += (targetMouse.y - mouse.y) * 0.2;

            const cols = Math.floor(canvas.width / DOT_SPACING) + 1;
            const rows = Math.floor(canvas.height / DOT_SPACING) + 1;

            for (let i = 0; i <= cols; i++) {
                for (let j = 0; j <= rows; j++) {
                    const x = i * DOT_SPACING;
                    const y = j * DOT_SPACING;

                    const dx = mouse.x - x;
                    const dy = mouse.y - y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    let radius = BASE_RADIUS;
                    let alpha = BASE_ALPHA;
                    
                    // If within effect radius, scale up and glow
                    if (distance < EFFECT_RADIUS) {
                        const intensity = 1 - (distance / EFFECT_RADIUS);
                        // Ease out quad for smoother falloff
                        const easedIntensity = intensity * (2 - intensity);
                        
                        radius = BASE_RADIUS + (HOVER_RADIUS_MAX - BASE_RADIUS) * easedIntensity;
                        alpha = BASE_ALPHA + (HOVER_ALPHA - BASE_ALPHA) * easedIntensity;
                    }

                    ctx.beginPath();
                    ctx.arc(x, y, radius, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(${RGB_COLOR}, ${alpha})`;
                    ctx.fill();
                    ctx.closePath();
                }
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseout', onMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none -z-10"
            aria-hidden="true"
        />
    );
}
