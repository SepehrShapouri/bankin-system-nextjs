"use client"

import React, { useEffect, useState } from 'react';

import { Progress } from "@/components/ui/progress"

export default function Loading() {
      const [progress, setProgress] = useState(0);
    
      useEffect(() => {
        const timer = setInterval(() => {
          setProgress(prevProgress => {
            if (prevProgress >= 100) {
              clearInterval(timer);
              return 100;
            }
            return prevProgress + 20;
          });
        }, 500);
    
        return () => clearInterval(timer);
      }, []);
    
  return(
    <div>
         <Progress value={progress} className="w-full" />
    </div>
  )
}
