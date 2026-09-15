"use client";

import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export function Lightbox({ images, currentIndex, isOpen, onClose, onNavigate }: LightboxProps) {
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
      if (e.key === "ArrowRight") onNavigate(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-cream/70 hover:text-cream transition-colors z-50 p-2"
        aria-label="Close lightbox"
      >
        <X size={32} strokeWidth={1} />
      </button>

      {/* Image Counter */}
      <div className="absolute top-8 left-8 text-cream/70 font-dm text-[11px] tracking-widest z-50">
        {String(currentIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
      </div>

      {/* Main Image Container */}
      <div className="relative w-full h-full flex items-center justify-center px-16 lg:px-32 py-16">
        {/* Navigation - Left */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
            }}
            className="absolute left-4 lg:left-12 text-cream/50 hover:text-cream transition-colors p-4"
          >
            <ChevronLeft size={48} strokeWidth={1} />
          </button>
        )}

        <img
          src={images[currentIndex]}
          alt={`Lightbox image ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain select-none"
        />

        {/* Navigation - Right */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
            }}
            className="absolute right-4 lg:right-12 text-cream/50 hover:text-cream transition-colors p-4"
          >
            <ChevronRight size={48} strokeWidth={1} />
          </button>
        )}
      </div>
    </div>
  );
}
