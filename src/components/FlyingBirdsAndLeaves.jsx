import React, { useMemo, useRef, useEffect } from 'react';

export default function FlyingBirdsAndLeaves() {
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

    // Track scroll velocity to influence falling leaves
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollVelocity = Math.max(-5, Math.min(15, (currentScrollY - lastScrollY) * 0.4));
      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Track mouse to gently startle birds & swirl leaves
    let mouseX = -1000;
    let mouseY = -1000;
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // --- BIRDS SETUP (Graceful flocking / aerodynamic wing flaps) ---
    const birdCount = 6;
    const birds = Array.from({ length: birdCount }).map((_, i) => ({
      x: Math.random() * width,
      y: 60 + Math.random() * (height * 0.4),
      speedX: 1.2 + Math.random() * 1.6,
      speedY: (Math.random() - 0.5) * 0.4,
      wingCycle: Math.random() * Math.PI * 2,
      wingSpeed: 0.08 + Math.random() * 0.04,
      size: 14 + Math.random() * 8,
      altitudeTarget: 80 + Math.random() * 200,
    }));

    // --- FALLING LEAVES SETUP (Nature physics, tumble, flutter with scroll) ---
    const leafCount = 22;
    // Elegant soft nature/autumn shades fitting the slate & soft off-white palette
    const leafColors = [
      'rgba(180, 83, 9, 0.45)',   // amber
      'rgba(194, 65, 12, 0.40)',  // burnt orange
      'rgba(101, 163, 13, 0.40)', // olive green
      'rgba(148, 163, 184, 0.45)',// slate leaf
      'rgba(217, 119, 6, 0.35)',  // golden
    ];

    const leaves = Array.from({ length: leafCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: 8 + Math.random() * 10,
      fallSpeed: 0.6 + Math.random() * 1.2,
      swingAngle: Math.random() * Math.PI * 2,
      swingSpeed: 0.02 + Math.random() * 0.03,
      swingWidth: 1.5 + Math.random() * 2.5,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.04,
      color: leafColors[Math.floor(Math.random() * leafColors.length)],
      aspect: 0.45 + Math.random() * 0.3, // leaf elongation
    }));

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Dampen scroll velocity gradually
      scrollVelocity *= 0.94;

      // 1. DRAW & ANIMATE BIRDS (Gentle aerodynamic soaring)
      birds.forEach((bird) => {
        bird.x += bird.speedX;
        bird.y += bird.speedY;
        bird.wingCycle += bird.wingSpeed;

        // Hover slightly towards target altitude
        bird.y += (bird.altitudeTarget - bird.y) * 0.005;

        // Mouse avoidance (bird flies slightly away if cursor approaches)
        const dx = mouseX - bird.x;
        const dy = mouseY - bird.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          bird.y -= 1.5;
          bird.x += bird.speedX * 0.5;
        }

        // Wrap around screen horizontally
        if (bird.x > width + 50) {
          bird.x = -60;
          bird.y = 50 + Math.random() * (height * 0.35);
          bird.altitudeTarget = 80 + Math.random() * 220;
        }

        // Draw bird silhouette
        ctx.save();
        ctx.translate(bird.x, bird.y);

        // Gentle bank angle
        const bank = Math.sin(bird.wingCycle * 0.5) * 0.08;
        ctx.rotate(bank);

        ctx.strokeStyle = '#334155'; // 30% Slate gray bird silhouette
        ctx.fillStyle = '#334155';
        ctx.lineWidth = 1.6;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        const wingSpan = bird.size;
        const wingFlap = Math.sin(bird.wingCycle) * (wingSpan * 0.55);

        // Draw soaring wings
        ctx.beginPath();
        // Left wing tip -> body center -> right wing tip
        ctx.moveTo(-wingSpan, -wingFlap);
        ctx.quadraticCurveTo(-wingSpan * 0.4, 2, 0, 0);
        ctx.quadraticCurveTo(wingSpan * 0.4, 2, wingSpan, -wingFlap);
        ctx.stroke();

        // Subtle bird body center dot
        ctx.beginPath();
        ctx.arc(0, 0, 1.2, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      });

      // 2. DRAW & ANIMATE FALLING LEAVES (Flutter with scroll acceleration)
      leaves.forEach((leaf) => {
        leaf.swingAngle += leaf.swingSpeed;
        leaf.rotation += leaf.rotSpeed;

        // Downward fall speed accelerates when user scrolls
        const currentFall = leaf.fallSpeed + Math.max(0, scrollVelocity);
        leaf.y += currentFall;
        leaf.x += Math.sin(leaf.swingAngle) * leaf.swingWidth;

        // Mouse wind gust (push leaves gently)
        const dx = mouseX - leaf.x;
        const dy = mouseY - leaf.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          leaf.x -= (dx / dist) * 1.8;
          leaf.y += (dy / dist) * 0.5;
        }

        // Wrap around screen vertically
        if (leaf.y > height + 40) {
          leaf.y = -30;
          leaf.x = Math.random() * width;
        }

        // Draw realistic leaf contour
        ctx.save();
        ctx.translate(leaf.x, leaf.y);
        ctx.rotate(leaf.rotation);
        ctx.scale(1, leaf.aspect);

        ctx.fillStyle = leaf.color;
        ctx.beginPath();
        // Curving organic leaf shape
        ctx.moveTo(0, -leaf.size);
        ctx.quadraticCurveTo(leaf.size * 0.8, 0, 0, leaf.size);
        ctx.quadraticCurveTo(-leaf.size * 0.8, 0, 0, -leaf.size);
        ctx.fill();

        // Leaf central vein
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(0, -leaf.size * 0.8);
        ctx.lineTo(0, leaf.size * 0.8);
        ctx.stroke();

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
