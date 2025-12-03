"use client";
import "./PageTransition.css";

export default function PageTransition({ children, direction = "left" }) {
  return (
    <div className={`page-transition slide-${direction}`}>
      {children}
    </div>
  );
}
