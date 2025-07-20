import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Play, Loader2, Volume2 } from 'lucide-react';

interface VideoPreviewProps {
  title: string;
  description: string;
  thumbnail: string;
  videoSrc?: string;
  isDemo?: boolean;
}

export function VideoPreview({
  title,
  description,
  thumbnail,
  videoSrc,
  isDemo = false,
}: VideoPreviewProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (isPlaying && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
      return;
    }

    if (isDemo) {
      setIsPlaying(true);
      if (videoRef.current) {
        videoRef.current.play();
      }
      return;
    }

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsPlaying(true);
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 3000);
  };

  return (
    <Card className="overflow-hidden bg-gradient-card border-0 shadow-card hover:shadow-cinematic transition-all duration-500 hover:scale-105 group">
      <CardContent className="p-0">
        <div className="relative">
          {isPlaying && videoSrc ? (
            <video
              ref={videoRef}
              src={videoSrc}
              className="w-full h-48 object-cover"
              controls
              loop
            />
          ) : (
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-48 object-cover"
            />
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Button
              onClick={handlePlay}
              variant={isProcessing ? 'processing' : 'cinematic'}
              size="lg"
              className="h-16 w-16 rounded-full text-lg"
              disabled={isProcessing}
            >
              {isProcessing ? (
                <Loader2 className="h-6 w-6 animate-spin" />
              ) : isPlaying ? (
                <Volume2 className="h-6 w-6" />
              ) : (
                <Play className="h-6 w-6" />
              )}
            </Button>
          </div>

          {/* Processing Overlay */}
          {isProcessing && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="text-center text-white">
                <Loader2 className="h-8 w-8 animate-spin mx-auto mb-2" />
                <p className="text-sm">Generating preview...</p>
                <p className="text-xs opacity-75">
                  This may take a few moments
                </p>
              </div>
            </div>
          )}

          {/* Status Badge */}
          {isDemo && (
            <div className="absolute top-4 right-4">
              <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                Demo
              </span>
            </div>
          )}
        </div>

        <div className="p-6">
          <h3 className="font-semibold text-lg mb-2 text-foreground">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
