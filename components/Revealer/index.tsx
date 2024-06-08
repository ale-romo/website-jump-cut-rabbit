'use client'
import { useState, useEffect } from "react";

const Revealer = () => {
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setReveal(true);
    }, 300);
  }, [])

  return <div className={`fixed bg-background pointer-events-none top-0 left-0 right-0 bottom-0 z-10 ${reveal ? 'opacity-0' : 'opacity-100'} transition-opacity duration-1000`} />
}
export default Revealer;
