"use client";
import { useEffect, useState } from "react";
import Button from "@/components/UI/Button";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBriefcase } from "@fortawesome/free-solid-svg-icons";

import "./Hero.css";

export default function Hero() {
 const roles = [
  "ADITYA TYAGI",
  "A UI ARCHITECT",
  "A FULL-STACK DEV",
  "TECHNICAL LEAD",
  "UI/UX ENTHUSIAST"
];


  const [currentText, setCurrentText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    let typingSpeed = isDeleting ? 60 : 120;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // typing forward
        setCurrentText(currentRole.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        // reached full word → wait → delete
        if (charIndex + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        // deleting
        setCurrentText(currentRole.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex, roles]);

  return (
    <section className="hero">
      <div className="overlay"></div>

      <div className="hero-content">
        <p className="intro">HI THERE !</p>

        <h1 className="title">
          I'M <span className="highlight typing">{currentText}</span>
          <span className="cursor">|</span>
        </h1>

        <p className="hero-subtitle">
           I'm a Full-Stack Developer specializing in React, Next.js, Angular, Node.js, 
  and modern JavaScript. I build scalable web applications, design clean UI 
  architectures, and enjoy turning complex problems into simple, elegant solutions.

        </p>

        <div className="hero-buttons">
          <Link href="/about">

      <Button variant="primary"> <FontAwesomeIcon icon={faUser} />
 MORE ABOUT ME</Button> 
 </Link>
   <Link href="/portfolio">

    <Button variant="outline"> 
        <FontAwesomeIcon icon={faBriefcase} />

        PORTFOLIO</Button>
   </Link>
     
        </div>
      </div>
    </section>
  );
}
