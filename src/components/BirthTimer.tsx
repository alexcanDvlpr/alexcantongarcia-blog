"use client";
import { useEffect, useState } from 'react';

const BirthTimer = () => {
  const birthDate = new Date('1997-11-25T00:00:00Z');

  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = now.getTime() - birthDate.getTime();
      setElapsed(diff);
    }, 450);

    return () => clearInterval(interval);
  }, [birthDate]);

  return (
    <span className="whitespace-nowrap">
      <strong className="inline-block min-w-[11ch] font-mono">
        {elapsed.toLocaleString()}
      </strong>
    </span>
  );
};

export default BirthTimer;