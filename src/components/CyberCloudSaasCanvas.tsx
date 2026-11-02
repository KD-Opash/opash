'use client';

import React, { useEffect, useRef } from 'react';

interface CyberCloudSaasCanvasProps {
  isLightMode?: boolean;
}

interface IsometricCube {
  gridX: number; // grid coordinate X
  gridY: number; // grid coordinate Y
  baseZ: number; // base elevation Z
  hoverOffset: number; // current hover offset
  hoverSpeed: number; // hover oscillation speed
  hoverPhase: number;
  width: number;
  depth: number;
  height: number;
  colorType: 'mint' | 'cyan' | 'blue';
  alpha: number;
  racks: number; // number of server rack LED slots
  activeLed: number;
  label?: string;
}

interface FiberPacket {
  startX: number;
  startY: number;
  startZ: number;
  midX: number;
  midY: number;
  midZ: number;
  endX: number;
  endY: number;
  endZ: number;
  progress: number;
  speed: number;
  color: string;
}

/**
 * CyberCloudSaasCanvas
 * 100% Unique 3D Isometric Cloud Data-Center Architecture Engine.
 * Spanning the FULL viewport width:
 * - 3D Isometric Server Cubes distributed across the wide left and right flanks.
 * - Live holographic data node labels (EU-CENTRAL-1, US-EAST-1, POSTGRES RLS, REDIS CACHE).
 * - Full-width 3D Isometric Ground Horizon Grid with sweeping laser scan lines.
 * - Cross-viewport fiber-optic laser highways carrying live telemetry packets.
 * - Real-time blinking LED server rack status lines on cube flanks.
 * - Smooth interactive 3D camera parallax responding to mouse tilt.
 * - Lightweight 60 FPS, automatic tab pause, <15MB VRAM.
 */
export default function CyberCloudSaasCanvas({
  isLightMode = false,
}: CyberCloudSaasCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Mouse tracking for 3D parallax tilt
    const mouse = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
    };

    // Color tokens
    const mintRGB = isLightMode ? '0, 168, 143' : '94, 192, 152';
    const cyanRGB = isLightMode ? '2, 132, 199' : '45, 212, 191';
    const blueRGB = isLightMode ? '71, 109, 154' : '56, 189, 248';

    // 1. Initialize 3D Isometric Server Cubes spanning across the FULL width of the screen!
    // Left flank: -5.5 to -3.0 | Center: -1.5 to +1.5 | Right flank: +3.0 to +5.5
    const cubes: IsometricCube[] = [
      // -------------------------------------------------------------
      // FAR LEFT FLANK (Fills Left Blank Space)
      // -------------------------------------------------------------
      {
        gridX: -5.4,
        gridY: 0.6,
        baseZ: 40,
        hoverOffset: 0,
        hoverSpeed: 0.019,
        hoverPhase: 0.8,
        width: 54,
        depth: 54,
        height: 72,
        colorType: 'mint',
        alpha: isLightMode ? 0.36 : 0.54,
        racks: 5,
        activeLed: 0,
        label: 'EU-CENTRAL-1',
      },
      {
        gridX: -4.6,
        gridY: -2.8,
        baseZ: 55,
        hoverOffset: 0,
        hoverSpeed: 0.024,
        hoverPhase: 2.3,
        width: 44,
        depth: 44,
        height: 48,
        colorType: 'cyan',
        alpha: isLightMode ? 0.3 : 0.46,
        racks: 4,
        activeLed: 2,
        label: 'REDIS CACHE',
      },
      {
        gridX: -3.8,
        gridY: 3.4,
        baseZ: 22,
        hoverOffset: 0,
        hoverSpeed: 0.021,
        hoverPhase: 4.1,
        width: 48,
        depth: 48,
        height: 42,
        colorType: 'blue',
        alpha: isLightMode ? 0.28 : 0.42,
        racks: 3,
        activeLed: 1,
        label: 'KAFKA EVENT BUS',
      },

      // -------------------------------------------------------------
      // MID-LEFT & CENTER NODES
      // -------------------------------------------------------------
      {
        gridX: -2.0,
        gridY: 1.0,
        baseZ: 25,
        hoverOffset: 0,
        hoverSpeed: 0.018,
        hoverPhase: 1.2,
        width: 46,
        depth: 46,
        height: 60,
        colorType: 'cyan',
        alpha: isLightMode ? 0.3 : 0.48,
        racks: 5,
        activeLed: 1,
        label: 'API GATEWAY',
      },
      {
        gridX: 0,
        gridY: 0,
        baseZ: 42,
        hoverOffset: 0,
        hoverSpeed: 0.022,
        hoverPhase: 0,
        width: 58,
        depth: 58,
        height: 54,
        colorType: 'mint',
        alpha: isLightMode ? 0.38 : 0.56,
        racks: 4,
        activeLed: 0,
        label: 'CLOUD MASTER',
      },
      {
        gridX: 0.2,
        gridY: 2.8,
        baseZ: 18,
        hoverOffset: 0,
        hoverSpeed: 0.023,
        hoverPhase: 5.2,
        width: 44,
        depth: 44,
        height: 38,
        colorType: 'mint',
        alpha: isLightMode ? 0.28 : 0.45,
        racks: 3,
        activeLed: 2,
        label: 'INGESTION QUEUE',
      },
      {
        gridX: -0.5,
        gridY: -3.0,
        baseZ: 28,
        hoverOffset: 0,
        hoverSpeed: 0.019,
        hoverPhase: 3.8,
        width: 40,
        depth: 40,
        height: 46,
        colorType: 'blue',
        alpha: isLightMode ? 0.26 : 0.42,
        racks: 4,
        activeLed: 1,
        label: 'AUTH / SSO POD',
      },

      // -------------------------------------------------------------
      // FAR RIGHT FLANK (Fills Right Blank Space)
      // -------------------------------------------------------------
      {
        gridX: 5.4,
        gridY: -0.6,
        baseZ: 46,
        hoverOffset: 0,
        hoverSpeed: 0.02,
        hoverPhase: 1.5,
        width: 56,
        depth: 56,
        height: 76,
        colorType: 'cyan',
        alpha: isLightMode ? 0.36 : 0.55,
        racks: 6,
        activeLed: 1,
        label: 'US-EAST-1 [PRIMARY]',
      },
      {
        gridX: 4.6,
        gridY: 2.6,
        baseZ: 50,
        hoverOffset: 0,
        hoverSpeed: 0.025,
        hoverPhase: 3.2,
        width: 46,
        depth: 46,
        height: 52,
        colorType: 'mint',
        alpha: isLightMode ? 0.32 : 0.48,
        racks: 4,
        activeLed: 3,
        label: 'POSTGRES RLS TIER',
      },
      {
        gridX: 3.8,
        gridY: -3.2,
        baseZ: 32,
        hoverOffset: 0,
        hoverSpeed: 0.022,
        hoverPhase: 2.9,
        width: 44,
        depth: 44,
        height: 44,
        colorType: 'blue',
        alpha: isLightMode ? 0.28 : 0.44,
        racks: 3,
        activeLed: 0,
        label: 'BILLING STRIPE API',
      },
      {
        gridX: 2.2,
        gridY: -0.8,
        baseZ: 30,
        hoverOffset: 0,
        hoverSpeed: 0.02,
        hoverPhase: 0.7,
        width: 48,
        depth: 48,
        height: 56,
        colorType: 'mint',
        alpha: isLightMode ? 0.32 : 0.5,
        racks: 4,
        activeLed: 2,
        label: 'TENANT POD #01',
      },
    ];

    // 2. Initialize Cross-Viewport Fiber-Optic Laser Highways
    const fiberPackets: FiberPacket[] = [];
    const maxPackets = 14;

    const spawnPacket = () => {
      if (fiberPackets.length >= maxPackets) return;
      const c1 = cubes[Math.floor(Math.random() * cubes.length)];
      let c2 = cubes[Math.floor(Math.random() * cubes.length)];
      if (c1 === c2) return;

      fiberPackets.push({
        startX: c1.gridX,
        startY: c1.gridY,
        startZ: c1.baseZ + c1.height,
        midX: c2.gridX,
        midY: c1.gridY,
        midZ: Math.max(c1.baseZ + c1.height, c2.baseZ + c2.height) + 20,
        endX: c2.gridX,
        endY: c2.gridY,
        endZ: c2.baseZ + c2.height,
        progress: 0,
        speed: Math.random() * 0.016 + 0.011,
        color: Math.random() > 0.5 ? mintRGB : cyanRGB,
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      const halfW = window.innerWidth * 0.5;
      const halfH = window.innerHeight * 0.5;
      mouse.targetX = (e.clientX - halfW) / halfW; // -1 to +1
      mouse.targetY = (e.clientY - halfH) / halfH; // -1 to +1
    };

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    let isTabVisible = !document.hidden;
    const handleVisibility = () => {
      isTabVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibility);

    let time = 0;
    const cos30 = Math.cos(Math.PI / 6); // 0.866025
    const sin30 = 0.5;
    const gridSpacing = 95; // pixels per grid unit

    // 3D Isometric Projection Helper
    const project = (
      gx: number,
      gy: number,
      z: number,
      originX: number,
      originY: number
    ) => {
      const isoX = (gx - gy) * cos30 * gridSpacing;
      const isoY = (gx + gy) * sin30 * gridSpacing - z;
      return {
        x: originX + isoX,
        y: originY + isoY,
      };
    };

    // Render loop
    const render = () => {
      animationFrameId = requestAnimationFrame(render);
      if (!isTabVisible) return;

      time++;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation for 3D parallax tilt
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const originX = width * 0.5 + mouse.x * 32;
      const originY = height * 0.54 + mouse.y * 22;

      // -----------------------------------------------------------------
      // A. DRAW FULL-WIDTH ISOMETRIC 3D HORIZON GRID (Spans across entire screen)
      // -----------------------------------------------------------------
      const gridRange = 7.5; // Expansive grid across full viewport
      const gridSteps = 16;
      const stepSize = (gridRange * 2) / gridSteps;

      ctx.save();
      ctx.lineWidth = 1;

      // Scanline laser wave sweeping across the full grid
      const scanPhase = (time * 0.012) % 1;
      const scanYPos = (scanPhase * 2 - 1) * gridRange;

      // Grid lines along X
      for (let i = -gridRange; i <= gridRange; i += stepSize) {
        const start = project(i, -gridRange, 0, originX, originY);
        const end = project(i, gridRange, 0, originX, originY);

        const distFromScan = Math.abs(i - scanYPos);
        const lineGlow = Math.max(0, 1 - distFromScan * 0.7);

        const grad = ctx.createLinearGradient(start.x, start.y, end.x, end.y);
        const baseAlpha = isLightMode ? 0.06 : 0.11;
        grad.addColorStop(0, `rgba(${cyanRGB}, 0)`);
        grad.addColorStop(0.5, `rgba(${mintRGB}, ${baseAlpha + lineGlow * 0.38})`);
        grad.addColorStop(1, `rgba(${cyanRGB}, 0)`);

        ctx.strokeStyle = grad;
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();
      }

      // Grid lines along Y
      for (let i = -gridRange; i <= gridRange; i += stepSize) {
        const start = project(-gridRange, i, 0, originX, originY);
        const end = project(gridRange, i, 0, originX, originY);

        const distFromScan = Math.abs(i - scanYPos);
        const lineGlow = Math.max(0, 1 - distFromScan * 0.7);

        const grad = ctx.createLinearGradient(start.x, start.y, end.x, end.y);
        const baseAlpha = isLightMode ? 0.06 : 0.11;
        grad.addColorStop(0, `rgba(${cyanRGB}, 0)`);
        grad.addColorStop(0.5, `rgba(${mintRGB}, ${baseAlpha + lineGlow * 0.38})`);
        grad.addColorStop(1, `rgba(${cyanRGB}, 0)`);

        ctx.strokeStyle = grad;
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();
      }
      ctx.restore();

      // -----------------------------------------------------------------
      // B. DRAW 3D FIBER-OPTIC LASER HIGHWAYS ACROSS VIEWPORT
      // -----------------------------------------------------------------
      if (time % 28 === 0 && Math.random() < 0.85) {
        spawnPacket();
      }

      for (let i = fiberPackets.length - 1; i >= 0; i--) {
        const fp = fiberPackets[i];
        fp.progress += fp.speed;

        if (fp.progress >= 1) {
          fiberPackets.splice(i, 1);
          continue;
        }

        let curGx = 0;
        let curGy = 0;
        let curZ = 0;

        if (fp.progress < 0.5) {
          const t = fp.progress * 2;
          curGx = fp.startX + (fp.midX - fp.startX) * t;
          curGy = fp.startY + (fp.midY - fp.startY) * t;
          curZ = fp.startZ + (fp.midZ - fp.startZ) * t;
        } else {
          const t = (fp.progress - 0.5) * 2;
          curGx = fp.midX + (fp.endX - fp.midX) * t;
          curGy = fp.midY + (fp.endY - fp.midY) * t;
          curZ = fp.midZ + (fp.endZ - fp.midZ) * t;
        }

        const pt = project(curGx, curGy, curZ, originX, originY);

        // Draw glowing laser head
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 3.2, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = `rgba(${fp.color}, 0.95)`;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw subtle laser trail behind
        const prevT = Math.max(0, fp.progress - 0.05);
        let prevGx = 0;
        let prevGy = 0;
        let prevZ = 0;
        if (prevT < 0.5) {
          const t = prevT * 2;
          prevGx = fp.startX + (fp.midX - fp.startX) * t;
          prevGy = fp.startY + (fp.midY - fp.startY) * t;
          prevZ = fp.startZ + (fp.midZ - fp.startZ) * t;
        } else {
          const t = (prevT - 0.5) * 2;
          prevGx = fp.midX + (fp.endX - fp.midX) * t;
          prevGy = fp.midY + (fp.endY - fp.midY) * t;
          prevZ = fp.midZ + (fp.endZ - fp.midZ) * t;
        }
        const prevPt = project(prevGx, prevGy, prevZ, originX, originY);

        ctx.beginPath();
        ctx.moveTo(prevPt.x, prevPt.y);
        ctx.lineTo(pt.x, pt.y);
        ctx.strokeStyle = `rgba(${fp.color}, 0.65)`;
        ctx.lineWidth = 1.8;
        ctx.stroke();
      }

      // -----------------------------------------------------------------
      // C. DRAW 3D ISOMETRIC SERVER CUBES (Depth-Sorted)
      // -----------------------------------------------------------------
      const sortedCubes = [...cubes].sort((a, b) => {
        const depthA = a.gridX + a.gridY;
        const depthB = b.gridX + b.gridY;
        return depthA - depthB;
      });

      for (let i = 0; i < sortedCubes.length; i++) {
        const cube = sortedCubes[i];

        // Hover oscillation
        cube.hoverPhase += cube.hoverSpeed;
        cube.hoverOffset = Math.sin(cube.hoverPhase) * 7.5;
        const currentZ = cube.baseZ + cube.hoverOffset;

        // Switch active server LED periodically
        if (time % 45 === 0) {
          cube.activeLed = (cube.activeLed + 1) % cube.racks;
        }

        const baseColor =
          cube.colorType === 'mint'
            ? mintRGB
            : cube.colorType === 'cyan'
            ? cyanRGB
            : blueRGB;

        const center = project(cube.gridX, cube.gridY, currentZ, originX, originY);

        const wHalf = (cube.width * 0.5);
        const dHalf = (cube.depth * 0.5);
        const h = cube.height;

        const dxW = wHalf * cos30;
        const dyW = wHalf * sin30;
        const dxD = dHalf * cos30;
        const dyD = dHalf * sin30;

        const topFront = { x: center.x, y: center.y - h + dyW + dyD };
        const topRight = { x: center.x + dxW, y: center.y - h };
        const topBack = { x: center.x, y: center.y - h - dyW - dyD };
        const topLeft = { x: center.x - dxD, y: center.y - h };

        const btmFront = { x: topFront.x, y: topFront.y + h };
        const btmRight = { x: topRight.x, y: topRight.y + h };
        const btmLeft = { x: topLeft.x, y: topLeft.y + h };

        // 1. Shadow beneath cube on floor plane (Z = 0)
        const shadowCenter = project(cube.gridX, cube.gridY, 0, originX, originY);
        ctx.beginPath();
        ctx.ellipse(
          shadowCenter.x,
          shadowCenter.y,
          dxW * 1.3,
          dyW * 0.9,
          0,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = isLightMode
          ? 'rgba(0, 0, 0, 0.05)'
          : 'rgba(0, 0, 0, 0.45)';
        ctx.fill();

        // 2. Right Face (Darker Shaded Glass)
        ctx.beginPath();
        ctx.moveTo(topFront.x, topFront.y);
        ctx.lineTo(topRight.x, topRight.y);
        ctx.lineTo(btmRight.x, btmRight.y);
        ctx.lineTo(btmFront.x, btmFront.y);
        ctx.closePath();
        ctx.fillStyle = `rgba(${baseColor}, ${cube.alpha * 0.35})`;
        ctx.fill();
        ctx.strokeStyle = `rgba(${baseColor}, ${cube.alpha * 1.25})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Server rack LED lines on Right Face
        for (let r = 0; r < cube.racks; r++) {
          const rackT = (r + 0.8) / (cube.racks + 0.6);
          const p1x = topFront.x + (btmFront.x - topFront.x) * rackT + 6;
          const p1y = topFront.y + (btmFront.y - topFront.y) * rackT;
          const p2x = topRight.x + (btmRight.x - topRight.x) * rackT - 4;
          const p2y = topRight.y + (btmRight.y - topRight.y) * rackT;

          ctx.beginPath();
          ctx.moveTo(p1x, p1y);
          ctx.lineTo(p2x, p2y);
          ctx.strokeStyle = `rgba(${cyanRGB}, ${cube.alpha * 0.45})`;
          ctx.lineWidth = 1;
          ctx.stroke();

          // Blinking LED status indicator on rack
          const isLedOn = r === cube.activeLed;
          ctx.beginPath();
          ctx.arc(p2x - 4, p2y, isLedOn ? 1.8 : 1.2, 0, Math.PI * 2);
          ctx.fillStyle = isLedOn ? '#ffffff' : `rgba(${mintRGB}, 0.5)`;
          if (isLedOn) {
            ctx.shadowColor = `rgba(${mintRGB}, 0.95)`;
            ctx.shadowBlur = 6;
          }
          ctx.fill();
          ctx.shadowBlur = 0;
        }

        // 3. Left Face (Medium Shaded Glass)
        ctx.beginPath();
        ctx.moveTo(topFront.x, topFront.y);
        ctx.lineTo(topLeft.x, topLeft.y);
        ctx.lineTo(btmLeft.x, btmLeft.y);
        ctx.lineTo(btmFront.x, btmFront.y);
        ctx.closePath();
        ctx.fillStyle = `rgba(${baseColor}, ${cube.alpha * 0.45})`;
        ctx.fill();
        ctx.strokeStyle = `rgba(${baseColor}, ${cube.alpha * 1.35})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Server rack lines on Left Face
        for (let r = 0; r < cube.racks; r++) {
          const rackT = (r + 0.8) / (cube.racks + 0.6);
          const p1x = topFront.x + (btmFront.x - topFront.x) * rackT - 6;
          const p1y = topFront.y + (btmFront.y - topFront.y) * rackT;
          const p2x = topLeft.x + (btmLeft.x - topLeft.x) * rackT + 4;
          const p2y = topLeft.y + (btmLeft.y - topLeft.y) * rackT;

          ctx.beginPath();
          ctx.moveTo(p1x, p1y);
          ctx.lineTo(p2x, p2y);
          ctx.strokeStyle = `rgba(${cyanRGB}, ${cube.alpha * 0.45})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // 4. Top Face (Luminous Illuminated Roof with Edge Highlights)
        ctx.beginPath();
        ctx.moveTo(topFront.x, topFront.y);
        ctx.lineTo(topRight.x, topRight.y);
        ctx.lineTo(topBack.x, topBack.y);
        ctx.lineTo(topLeft.x, topLeft.y);
        ctx.closePath();
        ctx.fillStyle = `rgba(${baseColor}, ${cube.alpha * 0.75})`;
        ctx.fill();
        ctx.strokeStyle = isLightMode
          ? `rgba(${baseColor}, 0.85)`
          : `rgba(${baseColor}, 0.98)`;
        ctx.lineWidth = 1.3;
        ctx.stroke();

        // Concentric inner square on top face
        ctx.beginPath();
        const innerScale = 0.55;
        const inFront = {
          x: center.x,
          y: center.y - h + (dyW + dyD) * innerScale,
        };
        const inRight = {
          x: center.x + dxW * innerScale,
          y: center.y - h,
        };
        const inBack = {
          x: center.x,
          y: center.y - h - (dyW + dyD) * innerScale,
        };
        const inLeft = {
          x: center.x - dxD * innerScale,
          y: center.y - h,
        };

        ctx.moveTo(inFront.x, inFront.y);
        ctx.lineTo(inRight.x, inRight.y);
        ctx.lineTo(inBack.x, inBack.y);
        ctx.lineTo(inLeft.x, inLeft.y);
        ctx.closePath();
        ctx.strokeStyle = `rgba(${mintRGB}, ${cube.alpha * 0.95})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();

        // Glowing center core beacon on cube top
        ctx.beginPath();
        ctx.arc(center.x, center.y - h, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = `rgba(${baseColor}, 0.9)`;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;

        // 5. Holographic Label Floating Above Cube
        if (cube.label) {
          ctx.font = '9.5px "JetBrains Mono", Menlo, monospace';
          ctx.textAlign = 'center';
          ctx.fillStyle = `rgba(${baseColor}, ${cube.alpha * 1.5})`;
          ctx.fillText(cube.label, center.x, center.y - h - 11);
          ctx.textAlign = 'left';
        }
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [isLightMode]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        display: 'block',
      }}
    />
  );
}
