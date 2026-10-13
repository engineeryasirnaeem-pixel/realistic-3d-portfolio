import React, { useRef, useEffect } from 'react';

export default function FlyingPlanesAndScrollLeaves() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Scroll speed boost (extra velocity when scrolling, but base animation runs continuous!)
    let lastScrollY = window.scrollY;
    let scrollBoost = 0;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = Math.abs(currentScrollY - lastScrollY);
      scrollBoost = Math.min(8, delta * 0.35);
      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Track mouse for interactive avoidance
    let mouseX = -1000;
    let mouseY = -1000;
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // --- CONTINUOUS SUPERSONIC PLANES SETUP (Fly continuously across sky) ---
    const planes = [
      { x: -80, y: 110, baseSpeed: 2.4, size: 24, contrail: [], altitudeSpeed: 0.02, phase: 0 },
      { x: -320, y: 190, baseSpeed: 1.9, size: 18, contrail: [], altitudeSpeed: 0.015, phase: 2 },
      { x: -580, y: 70, baseSpeed: 2.8, size: 22, contrail: [], altitudeSpeed: 0.025, phase: 4 },
      { x: -820, y: 260, baseSpeed: 2.1, size: 20, contrail: [], altitudeSpeed: 0.018, phase: 1 },
    ];

    // --- CONTINUOUS FALLING LEAVES SETUP (Gently tumble & flutter all the time) ---
    const leafCount = 20;
    const leafColors = [
      'rgba(245, 158, 11, 0.65)',  // Safety Yellow
      'rgba(217, 119, 6, 0.55)',   // Deep Amber
      'rgba(15, 23, 42, 0.35)',    // Anodized Black tint
      'rgba(251, 191, 36, 0.60)',  // Bright Yellow
      'rgba(71, 85, 105, 0.40)',   // Titanium Slate
    ];

    const leaves = Array.from({ length: leafCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: 9 + Math.random() * 11,
      fallSpeed: 0.8 + Math.random() * 1.4, // continuous base fall speed
      swingAngle: Math.random() * Math.PI * 2,
      swingSpeed: 0.025 + Math.random() * 0.02,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.03,
      color: leafColors[Math.floor(Math.random() * leafColors.length)],
      aspect: 0.45 + Math.random() * 0.25,
    }));

    // Render loop - Continuous 60fps
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Dampen scroll boost
      scrollBoost *= 0.94;

      // 1. RENDER CONTINUOUS FLYING PLANES
      planes.forEach((plane) => {
        // Continuous movement + extra speed when scrolling
        const currentSpeed = plane.baseSpeed + scrollBoost * 0.4;
        plane.x += currentSpeed;
        plane.phase += plane.altitudeSpeed;
        plane.y += Math.sin(plane.phase) * 0.4;

        // Mouse avoidance (pushes plane slightly if cursor is near)
        const dx = mouseX - plane.x;
        const dy = mouseY - plane.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 110) {
          plane.y -= 1.2;
          plane.x += 0.8;
        }

        // Record contrail point
        plane.contrail.push({ x: plane.x, y: plane.y, alpha: 0.45 });

        // Draw jet contrails
        for (let i = plane.contrail.length - 1; i >= 0; i--) {
          const c = plane.contrail[i];
          c.alpha *= 0.96;
          if (c.alpha < 0.02) {
            plane.contrail.splice(i, 1);
          } else {
            ctx.fillStyle = `rgba(15, 23, 42, ${c.alpha * 0.35})`;
            ctx.beginPath();
            ctx.arc(c.x - plane.size * 0.8, c.y, 2.2, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        // Reset plane when offscreen
        if (plane.x > width + 150) {
          plane.x = -120;
          plane.y = 50 + Math.random() * 260;
          plane.contrail = [];
        }

        // Draw Anodized Black (#0F172A) Supersonic Jet Silhouette
        ctx.save();
        ctx.translate(plane.x, plane.y);
        ctx.fillStyle = '#0F172A';
        ctx.strokeStyle = '#0F172A';
        ctx.lineWidth = 1.5;

        const s = plane.size;
        ctx.beginPath();
        ctx.moveTo(s, 0); // nose tip
        ctx.lineTo(-s * 0.7, -s * 0.55); // right wing tip
        ctx.lineTo(-s * 0.45, -s * 0.12); // wing root
        ctx.lineTo(-s * 0.9, -s * 0.35); // right tail stabilizer
        ctx.lineTo(-s * 0.8, 0); // fuselage tail
        ctx.lineTo(-s * 0.9, s * 0.35); // left tail stabilizer
        ctx.lineTo(-s * 0.45, s * 0.12); // left wing root
        ctx.lineTo(-s * 0.7, s * 0.55); // left wing tip
        ctx.closePath();
        ctx.fill();

        // Safety yellow needle dot
        ctx.fillStyle = '#F59E0B';
        ctx.beginPath();
        ctx.arc(s * 0.4, 0, 1.6, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      });

      // 2. RENDER CONTINUOUS FALLING LEAVES
      leaves.forEach((leaf) => {
        // Continuous fall + scroll acceleration
        const currentFall = leaf.fallSpeed + scrollBoost * 0.5;
        leaf.y += currentFall;
        leaf.swingAngle += leaf.swingSpeed;
        leaf.rotation += leaf.rotSpeed;
        leaf.x += Math.sin(leaf.swingAngle) * 1.4;

        // Mouse wind gust
        const dx = mouseX - leaf.x;
        const dy = mouseY - leaf.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 90) {
          leaf.x -= (dx / dist) * 1.5;
          leaf.y += 0.5;
        }

        // Wrap around vertically
        if (leaf.y > height + 30) {
          leaf.y = -20;
          leaf.x = Math.random() * width;
        }

        ctx.save();
        ctx.translate(leaf.x, leaf.y);
        ctx.rotate(leaf.rotation);
        ctx.scale(1, leaf.aspect);

        ctx.fillStyle = leaf.color;
        ctx.beginPath();
        ctx.moveTo(0, -leaf.size);
        ctx.quadraticCurveTo(leaf.size * 0.75, 0, 0, leaf.size);
        ctx.quadraticCurveTo(-leaf.size * 0.75, 0, 0, -leaf.size);
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-20"
      style={{ opacity: 0.95 }}
    />
  );
}
