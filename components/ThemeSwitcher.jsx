"use client";

import { useState } from "react";
import { useTheme } from "@/app/context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

import { faGear } from "@fortawesome/free-solid-svg-icons";
import "./ThemeSwitcher.css";

const colors = [
  {color : "#1e90ff", overlay : "#0006207a"},
  {color : "#ff5252", overlay : "#2001017a"},
  {color : "#ffa726", overlay : "#0000007a"},
  {color : "#66bb6a", overlay : "#0012017a"},
  {color : "#ba68c8", overlay : "#17011c7a"},
  {color : "#fbc02d", overlay : "#0006207a"}
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
              key={c.color}
              className="color-circle"
              style={{ background: c.color }}
              onClick={() => applyTheme(c)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
