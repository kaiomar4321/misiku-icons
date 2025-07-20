import React from 'react';
import { IconProps } from '../types'

export const SpinnerIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  duration = 1.5,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        animation: `spin ${duration}s linear infinite`,
      }}
    >
      <circle
        cx="50"
        cy="50"
        r="45"
        stroke={color}
        strokeWidth="10"
        strokeLinecap="round"
      />
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </svg>
  );
};
