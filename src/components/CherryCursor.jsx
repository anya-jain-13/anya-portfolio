
import { useEffect, useRef } from "react";
import "./CherryCursor.css";

function CherryCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    if (!cursor) return;

    const finePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    let frameId = null;
    let latestX = -100;
    let latestY = -100;

    const updatePosition = () => {
      cursor.style.left = `${latestX}px`;
      cursor.style.top = `${latestY}px`;
      frameId = null;
    };

    const handlePointerMove = (event) => {
      if (!finePointer.matches) return;

      latestX = event.clientX;
      latestY = event.clientY;

      cursor.classList.add("cherry-cursor-visible");

      const target = event.target;

      const interactive =
        target instanceof Element &&
        target.closest(
          "a, button, input, textarea, select, [role='button']"
        );

      cursor.classList.toggle(
        "cherry-cursor-hover",
        Boolean(interactive)
      );

      if (frameId === null) {
        frameId = requestAnimationFrame(updatePosition);
      }
    };

    const handlePointerOut = (event) => {
      if (!event.relatedTarget) {
        cursor.classList.remove("cherry-cursor-visible");
      }
    };

    const handleWindowBlur = () => {
      cursor.classList.remove("cherry-cursor-visible");
    };

    const handlePointerDown = () => {
      cursor.classList.add("cherry-cursor-click");
    };

    const handlePointerUp = () => {
      cursor.classList.remove("cherry-cursor-click");
    };

    const handlePointerChange = () => {
      if (!finePointer.matches) {
        cursor.classList.remove("cherry-cursor-visible");
      }
    };

    window.addEventListener(
      "pointermove",
      handlePointerMove,
      { passive: true }
    );

    document.addEventListener(
      "pointerout",
      handlePointerOut
    );

    window.addEventListener("blur", handleWindowBlur);
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);

    finePointer.addEventListener(
      "change",
      handlePointerChange
    );

    return () => {
      window.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      document.removeEventListener(
        "pointerout",
        handlePointerOut
      );

      window.removeEventListener(
        "blur",
        handleWindowBlur
      );

      window.removeEventListener(
        "pointerdown",
        handlePointerDown
      );

      window.removeEventListener(
        "pointerup",
        handlePointerUp
      );

      finePointer.removeEventListener(
        "change",
        handlePointerChange
      );

      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="cherry-cursor"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 110"
        xmlns="http://www.w3.org/2000/svg"
        shapeRendering="geometricPrecision"
        focusable="false"
      >
        <defs>
          <radialGradient
            id="cherry-left-gradient"
            cx="32%"
            cy="25%"
            r="78%"
          >
            <stop offset="0%" stopColor="#F35C70" />
            <stop offset="35%" stopColor="#D22B4A" />
            <stop offset="78%" stopColor="#A71939" />
            <stop offset="100%" stopColor="#75102C" />
          </radialGradient>

          <radialGradient
            id="cherry-right-gradient"
            cx="30%"
            cy="22%"
            r="80%"
          >
            <stop offset="0%" stopColor="#F66D7D" />
            <stop offset="38%" stopColor="#D82D4D" />
            <stop offset="80%" stopColor="#A61A3B" />
            <stop offset="100%" stopColor="#77102C" />
          </radialGradient>

          <linearGradient
            id="cherry-leaf-gradient"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop offset="0%" stopColor="#89AB65" />
            <stop offset="100%" stopColor="#365C39" />
          </linearGradient>
        </defs>

        {/* STEMS */}
        <path
          d="M36 77 C35 50 46 29 63 16"
          fill="none"
          stroke="#365C39"
          strokeWidth="3.8"
          strokeLinecap="round"
        />

        <path
          d="M73 80 C78 53 76 30 63 16"
          fill="none"
          stroke="#365C39"
          strokeWidth="3.8"
          strokeLinecap="round"
        />

        {/* LEAVES */}
        <path
          d="M63 16 C43 2 29 12 34 29 C47 29 57 23 63 16Z"
          fill="url(#cherry-leaf-gradient)"
        />

        <path
          d="M63 16 C80 3 94 9 91 24 C78 27 69 21 63 16Z"
          fill="url(#cherry-leaf-gradient)"
        />

        {/* LEFT CHERRY */}
        <circle
          cx="35"
          cy="78"
          r="22"
          fill="url(#cherry-left-gradient)"
        />

        {/* RIGHT CHERRY */}
        <circle
          cx="73"
          cy="80"
          r="22"
          fill="url(#cherry-right-gradient)"
        />

        {/* GLOSSY REFLECTIONS */}
        <ellipse
          cx="27"
          cy="68"
          rx="5"
          ry="8"
          fill="#FFE5DE"
          opacity="0.85"
          transform="rotate(30 27 68)"
        />

        <ellipse
          cx="65"
          cy="70"
          rx="5"
          ry="8"
          fill="#FFE5DE"
          opacity="0.8"
          transform="rotate(30 65 70)"
        />

        {/* TINY GOLD SPARKLE */}
        <g className="cherry-sparkle">
          <path
            d="M91 34 L94 42 L100 45 L94 48 L91 56 L88 48 L82 45 L88 42Z"
            fill="#E2BD78"
          />
        </g>
      </svg>
    </div>
  );
}

export default CherryCursor;
