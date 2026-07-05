import React from "react";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  width?: number;
  height?: number;
}

export default function Logo({ className = "", iconOnly = false, width = 120, height = 60 }: LogoProps) {
  if (iconOnly) {
    return (
      <div className={`relative overflow-hidden w-[38px] h-[38px] flex-shrink-0 select-none ${className}`}>
        <img
          src="/logo.png"
          alt="Digital Network Icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 max-w-none h-[38px] object-cover"
        />
      </div>
    );
  }

  return (
    <div className={`relative select-none ${className}`} style={{ width: "120px", height: "60px" }}>
      <img
        src="/logo.png"
        alt="Digital Network Logo"
        width={120}
        height={60}
        className="w-full h-full object-contain"
      />
    </div>
  );
}