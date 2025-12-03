"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  faBars,
  faTimes,
  faHome,
  faUser,
  faBriefcase,
  faEnvelope,
  faComments
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Sidebar.css";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [active, setActive] = useState(pathname);

  useEffect(() => {
    setActive(pathname);
  }, [pathname]);

  const links = [
    { href: "/", label: "Home", icon: faHome },
    { href: "/about", label: "About", icon: faUser },
    { href: "/portfolio", label: "Portfolio", icon: faBriefcase },
    { href: "/contact", label: "Contact", icon: faEnvelope },
    
  ];

  { /* href: "/blog", label: "Blog", icon: faComments */}

  return (
    <aside className={`floating-sidebar ${open ? "open" : ""}`}>
      {/* Toggle Button */}
      <button className="floating-btn" onClick={() => setOpen(!open)}>
        <FontAwesomeIcon icon={open ? faTimes : faBars} />
      </button>

      {/* Underline Indicator */}
      <div
        className="active-underline"
        style={{ top: `${links.findIndex(l => l.href === active) * 65 + 105}px` }}
      ></div>

      {/* Navigation */}
      <nav className="floating-nav">
        {links.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setActive(item.href)}
            className={`nav-item ${active === item.href ? "active" : ""}`}
          >
            <FontAwesomeIcon icon={item.icon} className="nav-icon" />
            
          </Link>
        ))}
      </nav>
    </aside>
  );
}
