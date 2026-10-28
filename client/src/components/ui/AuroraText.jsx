"use client"

import React, { memo, useEffect, useState } from "react"

export const AuroraText = memo(({ children, className = "", colors, speed = 1 }) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handler = (event) => setPrefersReducedMotion(event.matches)
    mediaQuery.addEventListener("change", handler)
    return () => mediaQuery.removeEventListener("change", handler)
  }, [])

  const defaultColors = ["#2563eb", "#0ea5e9", "#06b6d4", "#22d3ee"]
  const colorArray = colors && colors.length > 0 ? colors : defaultColors

  const gradientStyle = {
    backgroundImage: `linear-gradient(135deg, ${colorArray.join(", ")}, ${colorArray[0]})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    animationDuration: prefersReducedMotion ? "0.01ms" : `${10 / speed}s`,
    animationPlayState: prefersReducedMotion ? "paused" : "running",
  }

  return (
    <span className={`relative inline-block ${className}`}>
      <span className="visually-hidden">{children}</span>
      <span
        className="animate-aurora"
        style={gradientStyle}
        aria-hidden="true"
      >
        {children}
      </span>
    </span>
  )
})

AuroraText.displayName = "AuroraText"