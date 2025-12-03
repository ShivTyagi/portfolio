"use client";
import React from "react";
import "./Button.css";

export default function Button({ 
  children,      // text + icon
  variant = "primary",  // "primary" | "outline"
  onClick,
  type = "button"
}) {
  return (
    <button 
      type={type}
      onClick={onClick}
      className={`btn ${variant}`}
    >
      {children}
    </button>
  );
}
