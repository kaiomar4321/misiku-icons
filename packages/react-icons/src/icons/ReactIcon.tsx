import React from "react";

type ReactIconProps = {
  size?: number | string;
  hoverColor?: string;
};

export const ReactIcon: React.FC<ReactIconProps> = ({
  size = 150,
  hoverColor = "#ff6ad5",
}) => {
  const pxSize = typeof size === "number" ? `${size}px` : size;

  return (
    <svg
      width={pxSize}
      height={pxSize}
      viewBox="0 0 841.9 595.3"
      xmlns="http://www.w3.org/2000/svg"
      style={
        {
          "--hover-color": hoverColor,
          "--base-color": "#ffffff",
        } as React.CSSProperties
      }
      className="react-logo"
    >
      <style>
        {`
          .react-logo {
            cursor: pointer;
          }

          .react-center {
            stroke: var(--base-color);
            fill: var(--base-color);
            transition: stroke 0.3s ease, fill 0.3s ease;
          }

          .react-logo:hover .react-center {
            stroke: var(--hover-color);
            fill: var(--hover-color);
          }

          .react-group {
            stroke: var(--base-color);
            transition: stroke 0.3s ease, fill 0.3s ease;
            transform-origin: center;
          }

          .react-logo:hover .react-group {
            stroke: var(--hover-color);
            animation: rotateOnce 2s ease forwards;
          }

          @keyframes rotateOnce {
            0% {
              transform: rotate(0deg);
            }
            50% {
              transform: rotate(360deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>

      <g fill="none" strokeWidth="30" className="react-group">
        <ellipse rx="200" ry="80" cx="420" cy="300" />
        <ellipse
          rx="200"
          ry="80"
          cx="420"
          cy="300"
          transform="rotate(60 420 300)"
        />
        <ellipse
          rx="200"
          ry="80"
          cx="420"
          cy="300"
          transform="rotate(120 420 300)"
        />
      </g>
      <circle cx="420" cy="300" r="35" className="react-center" />
    </svg>
  );
};
