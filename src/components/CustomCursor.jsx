import React, { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRingRef = useRef(null);
  const cursorDotRef = useRef(null);

  // We use refs instead of state so the animation runs at 60FPS without lagging React
  const mouse = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const scrollVelocity = useRef(0);
  const lastScrollY = useRef(0);
  const isHovering = useRef(false);

  useEffect(() => {
    // 1. Update Mouse Position
    const onMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      // Check if hovering over a link, button, or clickable element
      const target = e.target;
      isHovering.current = !!(
        target.closest("a") ||
        target.closest("button") ||
        getComputedStyle(target).cursor === "pointer"
      );
    };

    // 2. Track Scrolling to create "Stretch" physics
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const speed = currentScrollY - lastScrollY.current;
      scrollVelocity.current = speed * 0.15; // Capture the speed of the scroll
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("scroll", onScroll, { passive: true });

    // 3. The 60FPS Animation Loop
    let frame;
    const render = () => {
      // Lerp (Smoothly interpolate) the ring to follow the mouse
      current.current.x += (mouse.current.x - current.current.x) * 0.15;
      current.current.y += (mouse.current.y - current.current.y) * 0.15;

      // Friction: slowly reduce scroll stretch back to normal
      scrollVelocity.current *= 0.85;

      if (cursorRingRef.current && cursorDotRef.current) {
        // Apply Hover Scale
        const scale = isHovering.current ? 2 : 1;
        
        // Apply Scroll Stretch (Stretches vertically, squeezes horizontally based on speed)
        const stretchY = 1 + Math.abs(scrollVelocity.current) * 0.1;
        const squeezeX = Math.max(1 - Math.abs(scrollVelocity.current) * 0.03, 0.5);

        // Update the tiny dot (Instant follow)
        cursorDotRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0)`;
        
        // Update the outer ring (Smooth follow + Scale + Stretch Physics)
        cursorRingRef.current.style.transform = `
          translate3d(${current.current.x}px, ${current.current.y}px, 0) 
          scale(${scale}) 
          scaleX(${squeezeX}) 
          scaleY(${stretchY})
        `;

        // Change styles when hovering
        if (isHovering.current) {
          cursorRingRef.current.style.backgroundColor = "rgba(249, 141, 61, 0.15)";
          cursorRingRef.current.style.borderColor = "transparent";
          cursorDotRef.current.style.opacity = "0"; // Hide dot when hovering
        } else {
          cursorRingRef.current.style.backgroundColor = "transparent";
          cursorRingRef.current.style.borderColor = "#1C2A43";
          cursorDotRef.current.style.opacity = "1";
        }
      }

      frame = requestAnimationFrame(render);
    };
    frame = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      {/* This utterly hides the default Windows/Mac mouse cursor on desktops, 
        leaving only our custom animated one!
      */}
      <style>
        {`
          @media (min-width: 1024px) {
            * { cursor: none !important; }
          }
        `}
      </style>

      {/* THE INNER DOT (Solid Orange) */}
      <div
        ref={cursorDotRef}
        className="hidden lg:block fixed top-0 left-0 w-2 h-2 bg-[#f98d3d] rounded-full pointer-events-none z-[9999] -ml-1 -mt-1 transition-opacity duration-200 will-change-transform"
      />

      {/* THE OUTER RING (Dark Blue, stretches and scales) */}
      <div
        ref={cursorRingRef}
        className="hidden lg:flex fixed top-0 left-0 w-8 h-8 border-[2px] border-[#1C2A43] rounded-full pointer-events-none z-[9998] -ml-4 -mt-4 transition-colors duration-300 will-change-transform"
      />
    </>
  );
}