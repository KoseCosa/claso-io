'use client'

import { useEffect, useState } from "react";

type Props  = {
  text: string;
  speed?: number;
}

export default function TypeWriter({text, speed=100}: Props) {
  const [displayedText, setDisplayedText] = useState("");


  useEffect(() => {
    let index = 0;
    setDisplayedText("");
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayedText(() => text.slice(0, index));
        index ++;
      } else {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text]);

  return (<h1>{displayedText}<span aria-hidden="true" className={`font-bold text-cyan-500 ${displayedText.length >= text.length ? "animate-blink": ""}`}>|</span></h1>);
}