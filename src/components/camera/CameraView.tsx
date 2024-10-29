'use client';

import React, { useRef, useCallback } from 'react';
import Webcam from 'react-webcam';

interface CameraViewProps {
  onCapture: (image: string | null) => void;
  onCameraReady: () => void;
  onCameraError: () => void;
}

const CameraView = ({ onCapture, onCameraReady, onCameraError }: CameraViewProps) => {
  const webcamRef = useRef<Webcam>(null);

  const videoConstraints = {
    width: { ideal: 1920 },
    height: { ideal: 1080 },
    facingMode: { ideal: 'environment' }, // Use back camera
    aspectRatio: 1
  };

  const capture = useCallback(() => {
    if (!webcamRef.current) return;
    const imageSrc = webcamRef.current.getScreenshot();
    onCapture(imageSrc);
  }, [onCapture]);

  return (
    <div className="relative h-full w-full">
      <Webcam
        ref={webcamRef}
        audio={false}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        onUserMedia={onCameraReady}
        onUserMediaError={onCameraError}
        className="h-full w-full object-cover"
        mirrored={false}
      />
      <div className="absolute inset-0" onClick={capture} />
    </div>
  );
};

export default CameraView; 