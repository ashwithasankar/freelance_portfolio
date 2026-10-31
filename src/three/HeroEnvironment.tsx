import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Eye, RotateCw } from 'lucide-react';

interface HeroEnvironmentProps {
  isDark?: boolean;
  reducedMotion?: boolean;
  scrollProgress?: number;
}

export function HeroEnvironment({
  isDark = true,
  reducedMotion = false,
}: HeroEnvironmentProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInteractive, setIsInteractive] = useState(false);
  const [webGLSupported, setWebGLSupported] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Verify WebGL support
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
    } catch {
      setWebGLSupported(false);
      return;
    }

    const scene = new THREE.Scene();

    // Responsive initial sizing
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(48, width / height, 0.1, 1000);
    // Adjusted camera distance so it is well-proportioned on both mobile/iframe and large displays
    const isSmallScreen = width < 768;
    camera.position.set(0, 0, isSmallScreen ? 20 : 16);

    const dpr = Math.min(window.devicePixelRatio, isSmallScreen ? 1.5 : 2);
    renderer.setSize(width, height);
    renderer.setPixelRatio(dpr);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = isDark ? 1.2 : 1.0;
    container.appendChild(renderer.domElement);

    // Color definitions
    const limeHex = isDark ? 0xB7F36B : 0x2E6B10;
    const monolithHex = isDark ? 0x16221A : 0xEEF3EB;
    const wireHex = isDark ? 0x283A2D : 0xBDCEBC;
    const fogHex = isDark ? 0x111713 : 0xF7F9F5;

    // Atmospheric Fog for depth
    scene.fog = new THREE.FogExp2(fogHex, isSmallScreen ? 0.02 : 0.024);

    // Master World Group
    const worldGroup = new THREE.Group();
    scene.add(worldGroup);

    // ==========================================
    // 1. FLOATING ARCHITECTURAL MONOLITHS
    // ==========================================
    const monolithGroup = new THREE.Group();
    worldGroup.add(monolithGroup);

    // A. Central Tower Monolith (Tiered faceted hexagonal obelisk)
    const centralGeo = new THREE.CylinderGeometry(1.8, 2.6, 6.2, 6, 1);
    const centralMat = new THREE.MeshStandardMaterial({
      color: monolithHex,
      roughness: 0.22,
      metalness: 0.82,
      flatShading: true,
    });
    const centralMonolith = new THREE.Mesh(centralGeo, centralMat);
    monolithGroup.add(centralMonolith);

    // Wireframe edges on Central Monolith
    const centralWireGeo = new THREE.WireframeGeometry(centralGeo);
    const centralWireMat = new THREE.LineBasicMaterial({
      color: wireHex,
      transparent: true,
      opacity: 0.55,
    });
    const centralWire = new THREE.LineSegments(centralWireGeo, centralWireMat);
    centralMonolith.add(centralWire);

    // Capstone pyramid with lime tip
    const capGeo = new THREE.ConeGeometry(1.8, 1.8, 6);
    const capMat = new THREE.MeshStandardMaterial({
      color: monolithHex,
      roughness: 0.2,
      metalness: 0.9,
      flatShading: true,
    });
    const capstone = new THREE.Mesh(capGeo, capMat);
    capstone.position.y = 4.0;
    centralMonolith.add(capstone);

    const capWire = new THREE.LineSegments(
      new THREE.WireframeGeometry(capGeo),
      new THREE.LineBasicMaterial({ color: limeHex, transparent: true, opacity: 0.75 })
    );
    capstone.add(capWire);

    // B. Flanking Satellite Architectural Monoliths (4 distinct hovering structures)
    const satelliteConfigs = [
      { geo: new THREE.BoxGeometry(1.2, 3.8, 1.2), pos: [-5.2, 1.8, -2.5], rot: [0.2, 0.4, -0.1] },
      { geo: new THREE.BoxGeometry(1.4, 4.4, 1.4), pos: [5.6, -1.2, -1.8], rot: [-0.1, 0.3, 0.15] },
      { geo: new THREE.OctahedronGeometry(1.4, 0), pos: [-4.2, -3.2, 1.8], rot: [0.4, -0.2, 0.3] },
      { geo: new THREE.OctahedronGeometry(1.6, 0), pos: [4.8, 3.4, 1.5], rot: [-0.3, 0.5, -0.2] },
    ];

    const satelliteMeshes: {
      mesh: THREE.Mesh;
      baseY: number;
      speed: number;
      rotSpeed: [number, number, number];
    }[] = [];

    satelliteConfigs.forEach((cfg, i) => {
      const satMat = new THREE.MeshStandardMaterial({
        color: monolithHex,
        roughness: 0.25,
        metalness: 0.85,
        flatShading: true,
      });
      const satMesh = new THREE.Mesh(cfg.geo, satMat);
      satMesh.position.set(cfg.pos[0], cfg.pos[1], cfg.pos[2]);
      satMesh.rotation.set(cfg.rot[0], cfg.rot[1], cfg.rot[2]);

      const satWire = new THREE.LineSegments(
        new THREE.WireframeGeometry(cfg.geo),
        new THREE.LineBasicMaterial({ color: i % 2 === 0 ? limeHex : wireHex, transparent: true, opacity: 0.5 })
      );
      satMesh.add(satWire);

      monolithGroup.add(satMesh);
      satelliteMeshes.push({
        mesh: satMesh,
        baseY: cfg.pos[1],
        speed: 0.8 + i * 0.3,
        rotSpeed: [0.003 * (i % 2 === 0 ? 1 : -1), 0.005, 0.002],
      });
    });

    // ==========================================
    // 2. LARGE 3D ORBITAL RINGS
    // ==========================================
    const ringGroup = new THREE.Group();
    worldGroup.add(ringGroup);

    const ringMatPrimary = new THREE.MeshStandardMaterial({
      color: limeHex,
      roughness: 0.3,
      metalness: 0.7,
      wireframe: true,
      transparent: true,
      opacity: 0.65,
    });

    const ringMatSecondary = new THREE.MeshStandardMaterial({
      color: wireHex,
      roughness: 0.4,
      metalness: 0.6,
      transparent: true,
      opacity: 0.45,
    });

    // Ring 1: Inner Inclined Orbital Ring
    const ring1Geo = new THREE.TorusGeometry(6.4, 0.05, 16, 100);
    const ring1 = new THREE.Mesh(ring1Geo, ringMatPrimary);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 8;
    ringGroup.add(ring1);

    // Ring 2: Middle Majestic Orbital Ring
    const ring2Geo = new THREE.TorusGeometry(8.8, 0.04, 16, 120);
    const ring2 = new THREE.Mesh(ring2Geo, ringMatSecondary);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.z = Math.PI / 6;
    ringGroup.add(ring2);

    // Ring 3: Outer Grand Ring with Satellites
    const ring3Geo = new THREE.TorusGeometry(11.2, 0.06, 16, 140);
    const ring3 = new THREE.Mesh(ring3Geo, ringMatPrimary);
    ring3.rotation.y = Math.PI / 2.2;
    ring3.rotation.z = Math.PI / 5;
    ringGroup.add(ring3);

    // Orbiting luminous beads along the rings
    const beadGeo = new THREE.SphereGeometry(0.18, 12, 12);
    const beadMat = new THREE.MeshBasicMaterial({ color: limeHex });
    const orbitBeads = [
      { mesh: new THREE.Mesh(beadGeo, beadMat), radius: 6.4, angle: 0, speed: 0.015, parent: ring1 },
      { mesh: new THREE.Mesh(beadGeo, beadMat), radius: 8.8, angle: 2.4, speed: -0.011, parent: ring2 },
      { mesh: new THREE.Mesh(beadGeo, beadMat), radius: 11.2, angle: 4.5, speed: 0.008, parent: ring3 },
    ];
    orbitBeads.forEach((b) => b.parent.add(b.mesh));

    // ==========================================
    // 3. SUBTLE MOVING DUST PARTICLES
    // ==========================================
    const particleCount = isSmallScreen ? 140 : 260;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 36;
      particlePositions[i + 1] = (Math.random() - 0.5) * 24;
      particlePositions[i + 2] = (Math.random() - 0.5) * 30;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: limeHex,
      size: isSmallScreen ? 0.09 : 0.12,
      transparent: true,
      opacity: isDark ? 0.5 : 0.3,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // ==========================================
    // 4. ATMOSPHERIC LIGHTING RIG
    // ==========================================
    const ambientLight = new THREE.AmbientLight(
      isDark ? 0x111713 : 0xffffff,
      isDark ? 1.6 : 2.2
    );
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(limeHex, isDark ? 2.8 : 2.2);
    keyLight.position.set(12, 18, 14);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(isDark ? 0x203527 : 0xC7DAC5, 2.0);
    fillLight.position.set(-14, -10, -8);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(limeHex, isDark ? 3.0 : 1.8, 35);
    rimLight.position.set(0, -4, 9);
    scene.add(rimLight);

    // ==========================================
    // 5. INTERACTION & CAMERA PARALLAX
    // ==========================================
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    let isDragging = false;
    let dragStartX = 0;
    let dragStartY = 0;
    let manualRotX = 0;
    let manualRotY = 0;

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      if (isDragging) {
        const deltaX = clientX - dragStartX;
        const deltaY = clientY - dragStartY;
        manualRotY += deltaX * 0.005;
        manualRotX += deltaY * 0.005;
        dragStartX = clientX;
        dragStartY = clientY;
      } else {
        const { innerWidth, innerHeight } = window;
        targetMouseX = (clientX / innerWidth - 0.5) * 2;
        targetMouseY = (clientY / innerHeight - 0.5) * 2;
      }
    };

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      dragStartX = clientX;
      dragStartY = clientY;
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('mouseup', handlePointerUp);
    window.addEventListener('touchend', handlePointerUp);

    // Scroll integration: dynamically adapt 3D camera to page scroll
    let scrollYOffset = 0;
    const handleScroll = () => {
      scrollYOffset = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight || 1);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // ==========================================
    // 6. ANIMATION LOOP & RESOURCE MANAGEMENT
    // ==========================================
    let animationFrameId: number;
    let isVisible = true;
    const clock = new THREE.Clock();

    const render = () => {
      if (!isVisible) return;

      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      if (!reducedMotion) {
        // Smooth pointer damping
        mouseX += (targetMouseX - mouseX) * 0.05;
        mouseY += (targetMouseY - mouseY) * 0.05;

        // Monolith rotations
        centralMonolith.rotation.y += 0.004;
        centralMonolith.rotation.x = Math.sin(time * 0.3) * 0.12;
        centralMonolith.position.y = Math.sin(time * 0.8) * 0.25;

        // Satellite monolith undulating physics
        satelliteMeshes.forEach((sat) => {
          sat.mesh.rotation.x += sat.rotSpeed[0];
          sat.mesh.rotation.y += sat.rotSpeed[1];
          sat.mesh.rotation.z += sat.rotSpeed[2];
          sat.mesh.position.y = sat.baseY + Math.sin(time * sat.speed) * 0.35;
        });

        // Orbital rings independent rotations
        ring1.rotation.z += 0.0025;
        ring2.rotation.x -= 0.002;
        ring3.rotation.y += 0.0018;

        // Animate orbit beads
        orbitBeads.forEach((b) => {
          b.angle += b.speed;
          b.mesh.position.x = Math.cos(b.angle) * b.radius;
          b.mesh.position.y = Math.sin(b.angle) * b.radius;
        });

        // Drifting particles
        particles.rotation.y = time * 0.015;
        particles.rotation.x = Math.sin(time * 0.01) * 0.05;

        // Apply interactive drag rotation or auto-parallaxes
        worldGroup.rotation.y = manualRotY;
        worldGroup.rotation.x = manualRotX;

        // Scroll-responsive camera elevation & subtle tilt
        const scrollCamY = -scrollYOffset * 4.0;
        const scrollCamZ = (isSmallScreen ? 20 : 16) - scrollYOffset * 2.0;

        camera.position.x = mouseX * 2.2;
        camera.position.y = -mouseY * 1.5 + scrollCamY;
        camera.position.z = scrollCamZ;
        camera.lookAt(0, scrollCamY * 0.5, 0);

        // Core light pulse
        rimLight.intensity = (isDark ? 2.6 : 1.8) + Math.sin(time * 1.5) * 0.6;
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(render);
    };

    // Pause rendering when canvas is out of viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible) {
            clock.start();
            cancelAnimationFrame(animationFrameId);
            animationFrameId = requestAnimationFrame(render);
          } else {
            cancelAnimationFrame(animationFrameId);
          }
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    animationFrameId = requestAnimationFrame(render);

    // Responsive Canvas Resize Observer
    const resizeObserver = new ResizeObserver(() => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      if (newWidth > 0 && newHeight > 0) {
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      }
    });
    resizeObserver.observe(container);

    // Cleanup resources
    return () => {
      observer.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('mouseup', handlePointerUp);
      window.removeEventListener('touchend', handlePointerUp);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);

      // Dispose Three.js objects
      centralGeo.dispose();
      centralMat.dispose();
      centralWireGeo.dispose();
      centralWireMat.dispose();
      capGeo.dispose();
      capMat.dispose();
      satelliteConfigs.forEach((c) => c.geo.dispose());
      ring1Geo.dispose();
      ring2Geo.dispose();
      ring3Geo.dispose();
      ringMatPrimary.dispose();
      ringMatSecondary.dispose();
      beadGeo.dispose();
      beadMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [isDark, reducedMotion]);

  if (!webGLSupported) {
    return null;
  }

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden select-none">
      {/* 3D WebGL Canvas Container */}
      <div
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing pointer-events-auto"
        aria-label="Interactive 3D Architectural Scene"
        role="region"
      />

      {/* Subtle Interactive 3D Indicator & Hint */}
      <div className="absolute bottom-6 right-6 z-20 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)]/80 backdrop-blur-md text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] pointer-events-none">
        <RotateCw className="w-3 h-3 text-[var(--accent-lime)] animate-spin-slow" />
        <span>3D WebGL &middot; Drag to rotate world</span>
      </div>
    </div>
  );
}
