"use client";

import { useState } from "react";
import { useTheme } from "@/app/context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

import { faGear } from "@fortawesome/free-solid-svg-icons";
import "./ThemeSwitcher.css";

const colors = [
  "#1e90ff",
  "#ff5252",
  "#ffa726",
  "#66bb6a",
  "#ba68c8",
  "#fbc02d",
];

export default function ThemeSwitcher() {
  const { applyTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className={`switcher-container ${open ? "open" : ""}`}>
      {/* Toggle Button */}
      <button className="switcher-toggle" onClick={() => setOpen(!open)}>
        <FontAwesomeIcon icon={faCog} spin />

      </button>

      {/* Panel */}
      <div className="switcher-wrapper">
        <h4>STYLE SWITCHER</h4>

        <div className="color-grid">
          {colors.map((c) => (
            <span
              key={c}
              className="color-circle"
              style={{ background: c }}
              onClick={() => applyTheme(c)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
