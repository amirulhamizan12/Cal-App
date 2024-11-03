'use client';

import React, { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

// Import CameraView with no SSR
const CameraView = dynamic(
  () => import('@/components/camera/CameraView'),
  { 
    ssr: false,
    loading: () => (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-pulse text-white">Loading camera...</div>
      </div>
    )
  }
);

export default function ScanPage() {
  const router = useRouter();
  const [isScanning, setIsScanning] = useState(false);
  const [isCameraReady, setCameraReady] = useState(false);

  const handleCapture = useCallback((image: string | null) => {
    if (!image) return;
    
    setIsScanning(true);
    // Here you would send the image to your AI service
    console.log('Image captured:', image.slice(0, 50) + '...');
    
    setTimeout(() => {
      setIsScanning(false);
    }, 1500);
  }, []);

  const handleCameraReady = useCallback(() => {
    setCameraReady(true);
  }, []);

  const handleCameraError = useCallback(() => {
    setCameraReady(false);
    console.error('Camera access error');
  }, []);

  return (
    <div className="min-h-screen bg-black dark:bg-dark-DEFAULT">
      {/* Camera Container */}
      <div className="relative h-screen">
        <CameraView
          onCapture={handleCapture}
          onCameraReady={handleCameraReady}
          onCameraError={handleCameraError}
        />

        {/* UI Overlay */}
        <div className="absolute inset-0 flex flex-col">
          {/* Top Bar */}
          <div className="p-4 flex justify-between items-center bg-black/20 dark:bg-dark-50/20">
            <button 
              onClick={() => router.back()}
              className="text-white p-2 rounded-full hover:bg-white/10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="text-white font-medium">Scan Food</div>
            <button className="text-white p-2 rounded-full hover:bg-white/10">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18v-6m0 0V6m0 6h6m-6 0H6" />
              </svg>
            </button>
          </div>

          {/* Scanning Frame */}
          <div className="flex-1 p-6 flex items-center justify-center">
            <div className="w-full aspect-square relative">
              {/* Scanning Frame Border */}
              <div className="absolute inset-0 border-2 border-white/30 rounded-3xl">
                {/* Corner Markers */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-500 rounded-tl-3xl" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-500 rounded-tr-3xl" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blue-500 rounded-bl-3xl" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-500 rounded-br-3xl" />
              </div>
              
              {/* Scanning Animation */}
              {isScanning && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black/50 px-4 py-2 rounded-full text-white text-sm">
                    Analyzing...
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Controls */}
          <div className="p-8 pb-24 bg-gradient-to-t from-dark-DEFAULT/80 to-transparent">
            {!isCameraReady ? (
              <div className="text-white text-center animate-pulse">
                Initializing camera...
              </div>
            ) : (
              <button 
                onClick={() => handleCapture(null)}
                disabled={isScanning}
                className="w-16 h-16 mx-auto bg-white dark:bg-dark-50 rounded-full flex items-center justify-center disabled:opacity-50"
              >
                <div className={`w-12 h-12 rounded-full transition-colors ${
                  isScanning ? 'bg-red-500 animate-pulse' : 'bg-black dark:bg-dark-DEFAULT'
                }`} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 