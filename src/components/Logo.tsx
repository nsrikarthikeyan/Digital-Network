import React from "react";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export default function Logo({ className = "", iconOnly = false }: LogoProps) {
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
    <div className={`relative select-none ${className}`} style={{ width: "155px", height: "75px" }}>
      <img
        src="/logo.png"
        alt="Digital Network Logo"
        width={155}
        height={75}
        className="w-full h-full object-contain"
      />
    </div>
  );
}