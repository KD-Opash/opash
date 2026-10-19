"use client";

import React, { useEffect, useRef, useState } from "react";

export interface FrameBorderProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  color?: string; // Primary accent color (hex or rgb)
  secondaryColor?: string; // Secondary blend color
  radius?: number; // Corner radius in px (default: 20)
  lineWidth?: number; // Border stroke width in px (default: 1.5)
  glow?: number; // Inner glow strength 0..1 (default: 0.65)
  glowWidth?: number; // Reach of inward glow in px (default: 48)
  noise?: number; // Flowing noise turbulence (default: 0.6)
  flowSpeed?: number; // Flow movement speed (default: 1.0)
  pulseSpeed?: number; // Traveling pulse speed (default: 1.0)
  idlePulses?: number; // Soft swells of light (default: 2)
  intensity?: number; // Overall brightness multiplier (default: 1.0)
  interactive?: boolean; // Mouse acceleration / hover glow
  fill?: string; // Card interior background fill
  width?: string | number;
  height?: string | number;
}

// Helper to convert hex to vec3 [r, g, b] (0..1)
function hexToRgb(hex: string): [number, number, number] {
  let clean = hex.replace("#", "").trim();
  if (clean.length === 3) {
    clean = clean.split("").map((c) => c + c).join("");
  }
  const num = parseInt(clean, 16);
  if (isNaN(num)) return [0.55, 0.35, 0.95]; // Default purple
  return [
    ((num >> 16) & 255) / 255,
    ((num >> 8) & 255) / 255,
    (num & 255) / 255,
  ];
}

const VERTEX_SHADER = `#version 300 es
in vec2 position;
out vec2 vUv;
void main() {
  vUv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAGMENT_SHADER = `#version 300 es
precision highp float;

in vec2 vUv;
out vec4 fragColor;

uniform vec2 uResolution;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform float uRadius;
uniform float uLineWidth;
uniform float uGlow;
uniform float uGlowWidth;
uniform float uNoise;
uniform float uFlowSpeed;
uniform float uTime;
uniform float uIntensity;
uniform float uHover;
uniform vec2 uMouse;

// Fast 2D Simplex Noise for volumetric smoke
vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                     -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
        + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy),
                          dot(x12.zw, x12.zw)), 0.0);
  m = m * m;
  m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

// 4-Octave Fractional Brownian Motion (FBM) with rotation
float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  mat2 rot = mat2(0.80, -0.60, 0.60, 0.80);
  for (int i = 0; i < 4; i++) {
    v += a * snoise(p);
    p = rot * p * 2.08 + vec2(17.4, 31.7);
    a *= 0.48;
  }
  return v;
}

// True Fluid Smoke Domain Warping: fbm(p + fbm(p + fbm(p)))
float domainWarpSmoke(vec2 p, float t, out vec2 q, out vec2 r) {
  vec2 flow1 = vec2(t * 0.22, -t * 0.18);
  vec2 flow2 = vec2(-t * 0.16, t * 0.24);

  q = vec2(fbm(p + flow1),
           fbm(p + vec2(5.2, 1.3) + flow2));

  vec2 flow3 = vec2(t * 0.32, t * 0.14);
  vec2 flow4 = vec2(-t * 0.26, -t * 0.28);

  r = vec2(fbm(p + 3.4 * q + vec2(1.7, 9.2) + flow3),
           fbm(p + 3.4 * q + vec2(8.3, 2.8) + flow4));

  return fbm(p + 3.8 * r + vec2(t * 0.42, -t * 0.35));
}

// Signed distance to a 2D rounded rectangle
float sdRoundedBox(vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + r;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}

void main() {
  vec2 p = (vUv - 0.5) * uResolution;
  vec2 b = (uResolution * 0.5);
  float r = min(uRadius, min(b.x, b.y) - 1.0);

  // Geometric distance to perimeter
  float d = sdRoundedBox(p, b, r);

  // Outer limit: let smoke softly dissipate up to 14px outside
  if (d > 14.0) {
    fragColor = vec4(0.0);
    return;
  }

  // Time & speed modulation (accelerates on hover)
  float effectiveSpeed = uFlowSpeed * (1.0 + uHover * 0.45);
  float t = uTime * effectiveSpeed * 0.85;

  // Smoke domain warping coordinates
  vec2 smokeCoord = p * (0.011 * uNoise);
  vec2 qWarp, rWarp;
  float smoke = domainWarpSmoke(smokeCoord, t, qWarp, rWarp);
  smoke = clamp(smoke * 0.5 + 0.5, 0.0, 1.0);

  // Micro-curl smoke turbulence layer
  float microCurl = snoise(p * 0.035 + vec2(-t * 0.6, t * 0.5)) * 0.5 + 0.5;

  // Polar angle along perimeter for traveling smoke pulse
  float angle = atan(p.y, p.x);
  float travelingPulse = sin(angle * 2.0 + t * 1.8 + smoke * 3.14) * 0.5 + 0.5;
  travelingPulse = pow(travelingPulse, 2.5);

  // Billowing smoke edge distortion
  // Smoke plume actively deforms the distance field!
  float plumeOffset = (smoke * 2.0 - 1.0) * 16.0 * uNoise + (microCurl - 0.5) * 6.0;
  float smokeD = d + plumeOffset;

  // Inward smoke volume (-uGlowWidth to 0)
  float smokeInward = smoothstep(-uGlowWidth, 2.0, smokeD);
  smokeInward = pow(smokeInward, 1.25) * uGlow;

  // Volumetric density: denser near edge, wispy plumes curling inward
  float wispyDensity = smokeInward * (0.35 + 0.65 * smoke) * (0.7 + 0.3 * microCurl);

  // Secondary outer smoke wisp (escaping outside the border like rising vapor)
  float outerSmokeWisp = 0.0;
  if (d > -2.0) {
    outerSmokeWisp = (1.0 - smoothstep(-2.0, 12.0, smokeD)) * smoke * 0.6;
  }

  // Crisp perimeter neon wireframe running through the smoke
  float wirelineWidth = uLineWidth;
  float edgeLine = 1.0 - smoothstep(0.0, wirelineWidth, abs(d));

  // Volumetric Smoke Color Blending:
  // Luminous pastel base with airy white vapor highlights
  vec3 smokeColor = mix(uColor1, uColor2, clamp(smoke * 0.8 + travelingPulse * 0.3, 0.0, 1.0));

  // Smoke plume crest highlights (gives 3D curling volume)
  float crestHighlight = pow(clamp(dot(qWarp, rWarp) * 0.5 + 0.5, 0.0, 1.0), 2.5);
  
  // Infuse luminous light vapor into the smoke so it feels bright and ethereal, not dark
  smokeColor = mix(smokeColor, vec3(0.96, 0.98, 1.0), 0.38 + 0.42 * crestHighlight);

  // Crisp glowing edge line core
  smokeColor += edgeLine * vec3(0.4, 0.4, 0.45);

  // Soft, airy smoke alpha (never thick or murky)
  float alpha = (wispyDensity * 0.78
                + outerSmokeWisp * 0.52
                + edgeLine * 1.1) * uIntensity;

  // Soft edge clip for extreme outer dissipation
  if (d > 0.0) {
    alpha *= (1.0 - smoothstep(0.0, 14.0, d));
  }

  // Hover boost
  alpha += uHover * wispyDensity * 0.4;

  alpha = clamp(alpha, 0.0, 1.0);
  fragColor = vec4(smokeColor * alpha, alpha);
}
`;

export function FrameBorder({
  children,
  className = "",
  style = {},
  color = "#8b5cf6", // Default vibrant purple from user preview
  secondaryColor = "#c084fc",
  radius = 20,
  lineWidth = 1.6,
  glow = 0.7,
  glowWidth = 46,
  noise = 0.65,
  flowSpeed = 1.0,
  pulseSpeed = 1.0,
  idlePulses = 2,
  intensity = 1.0,
  interactive = true,
  fill = "transparent",
  width = "100%",
  height = "auto",
}: FrameBorderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const gl = canvas.getContext("webgl2", {
      alpha: true,
      antialias: true,
      depth: false,
      premultipliedAlpha: true,
    });

    if (!gl) {
      console.warn("WebGL2 not supported, fallback border active");
      return;
    }

    // Compile Shaders
    function createShader(type: number, src: string) {
      if (!gl) return null;
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, src);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader error:", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vs = createShader(gl.VERTEX_SHADER, VERTEX_SHADER);
    const fs = createShader(gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Link error:", gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    // Quad geometry covering -1..1
    const quad = new Float32Array([
      -1, -1, 1, -1, -1, 1,
      -1, 1, 1, -1, 1, 1,
    ]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, quad, gl.STATIC_DRAW);

    const posLoc = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    // Uniform locations
    const uResLoc = gl.getUniformLocation(program, "uResolution");
    const uColor1Loc = gl.getUniformLocation(program, "uColor1");
    const uColor2Loc = gl.getUniformLocation(program, "uColor2");
    const uRadiusLoc = gl.getUniformLocation(program, "uRadius");
    const uLineWidthLoc = gl.getUniformLocation(program, "uLineWidth");
    const uGlowLoc = gl.getUniformLocation(program, "uGlow");
    const uGlowWidthLoc = gl.getUniformLocation(program, "uGlowWidth");
    const uNoiseLoc = gl.getUniformLocation(program, "uNoise");
    const uFlowSpeedLoc = gl.getUniformLocation(program, "uFlowSpeed");
    const uTimeLoc = gl.getUniformLocation(program, "uTime");
    const uIntensityLoc = gl.getUniformLocation(program, "uIntensity");
    const uHoverLoc = gl.getUniformLocation(program, "uHover");
    const uMouseLoc = gl.getUniformLocation(program, "uMouse");

    let animationId: number;
    let startTime = performance.now();
    let currentHover = 0;
    let targetHover = 0;

    const resize = () => {
      if (!canvas || !container) return;
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.round(rect.width * dpr);
      const h = Math.round(rect.height * dpr);

      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    resize();

    // Render loop
    const render = () => {
      if (!gl || !program) return;
      const now = performance.now();
      const elapsed = (now - startTime) / 1000;

      currentHover += (targetHover - currentHover) * 0.08;

      gl.useProgram(program);
      gl.uniform2f(uResLoc, canvas.width, canvas.height);

      const c1 = hexToRgb(color);
      const c2 = hexToRgb(secondaryColor);
      gl.uniform3f(uColor1Loc, c1[0], c1[1], c1[2]);
      gl.uniform3f(uColor2Loc, c2[0], c2[1], c2[2]);

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      gl.uniform1f(uRadiusLoc, radius * dpr);
      gl.uniform1f(uLineWidthLoc, lineWidth * dpr);
      gl.uniform1f(uGlowLoc, glow);
      gl.uniform1f(uGlowWidthLoc, glowWidth * dpr);
      gl.uniform1f(uNoiseLoc, noise);
      gl.uniform1f(uFlowSpeedLoc, flowSpeed);
      gl.uniform1f(uTimeLoc, elapsed);
      gl.uniform1f(uIntensityLoc, intensity);
      gl.uniform1f(uHoverLoc, currentHover);
      gl.uniform2f(uMouseLoc, 0, 0);

      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, 6);

      animationId = requestAnimationFrame(render);
    };

    render();

    const handlePointerEnter = () => {
      if (interactive) targetHover = 1.0;
    };
    const handlePointerLeave = () => {
      if (interactive) targetHover = 0.0;
    };

    container.addEventListener("pointerenter", handlePointerEnter);
    container.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      container.removeEventListener("pointerenter", handlePointerEnter);
      container.removeEventListener("pointerleave", handlePointerLeave);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
    };
  }, [
    color,
    secondaryColor,
    radius,
    lineWidth,
    glow,
    glowWidth,
    noise,
    flowSpeed,
    intensity,
    interactive,
  ]);

  return (
    <div
      ref={containerRef}
      className={`frame-border-container ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: `${radius}px`,
        width,
        height,
        background: fill,
        overflow: "hidden",
        ...style,
      }}
    >
      {/* Underlying WebGL Frame Border Canvas */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 1,
          borderRadius: `${radius}px`,
        }}
      />

      {/* Card Content layer above the animated border */}
      <div
        className="frame-border-content"
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default FrameBorder;
