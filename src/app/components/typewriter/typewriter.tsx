'use client'

import { useEffect, useState } from "react";

type Props  = {
  text: string;
  speed?: number; // Optional speed prop to control typing speed
}

export default function TypeWriter({text, speed=150}: Props) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayedText(() => text.slice(0, index));
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, index]);
  return (<h1>{displayedText}<span className={index >= text.length ? "font-bold text-cyan-400 animate-blink font" : "font-bold text-cyan-400" }>|</span></h1>);
}