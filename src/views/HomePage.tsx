"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const HomePage: React.FC = () => {
  const router = useRouter();

  const handleStart = () => {
    router.push('/select-design');
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-6 bg-gray-100">
      <div className="max-w-md w-full text-center">
        <h1 className="text-5xl font-normal mb-32">
          Touch to Start
        </h1>
        
        <div className="text-left">
          <h2 className="text-3xl font-normal mb-3">
            Want to try on Tattoos?
          </h2>
          <p className="text-gray-600">
            Our AI-powered Tattoo try-on Machine lets you visualize tattoos 
            on your skin in real time, giving you a true-to-life preview.
          </p>
        </div>
        
        <div 
          className="absolute inset-0 cursor-pointer"
          onClick={handleStart}
          aria-label="Touch to start"
        />
      </div>
    </div>
  );
};

export default HomePage; 