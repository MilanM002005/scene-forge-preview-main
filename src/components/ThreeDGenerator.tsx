import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Box, Camera, Settings, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import environmentImage from '@/assets/3d-environment.mp4';

export function ThreeDGenerator() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [sceneDescription, setSceneDescription] = useState('');
  const [cameraAngle, setCameraAngle] = useState('');
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!sceneDescription.trim()) {
      toast({
        title: 'Scene description required',
        description: 'Please describe the scene you want to create.',
        variant: 'destructive',
      });
      return;
    }

    setIsGenerating(true);
    setGenerated(false);

    // Simulate 3D generation process
    await new Promise(resolve => setTimeout(resolve, 4000));

    setIsGenerating(false);
    setGenerated(true);

    toast({
      title: '3D Environment Generated!',
      description: 'Your cinematic environment is ready for camera work.',
    });
  };

  const handleDownload = () => {
    toast({
      title: 'Downloading 3D Scene',
      description: 'Your environment files are being prepared...',
    });
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Controls */}
      <Card className="bg-gradient-card border-0 shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Box className="h-6 w-6 text-primary" />
            3D Environment Generator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Scene Description
            </label>
            <Textarea
              placeholder="Describe your scene: 'A futuristic cyberpunk alley with neon lights and rain, moody atmosphere, dark and atmospheric lighting...'"
              value={sceneDescription}
              onChange={e => setSceneDescription(e.target.value)}
              className="min-h-24 bg-background/50 border-border/50"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Camera Angle (Optional)
            </label>
            <Input
              placeholder="e.g., Low angle, Dutch tilt, Bird's eye view"
              value={cameraAngle}
              onChange={e => setCameraAngle(e.target.value)}
              className="bg-background/50 border-border/50"
            />
          </div>

          <div className="flex gap-3">
            <Button
              onClick={handleGenerate}
              variant={isGenerating ? 'processing' : 'cinematic'}
              size="lg"
              disabled={isGenerating}
              className="flex-1"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Generating 3D Scene...
                </>
              ) : (
                <>
                  <Settings className="h-4 w-4" />
                  Generate Environment
                </>
              )}
            </Button>
          </div>

          {generated && (
            <div className="animate-fade-in space-y-3">
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Camera className="h-4 w-4" />
                  Adjust Camera
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  onClick={handleDownload}
                >
                  <Download className="h-4 w-4" />
                  Export Scene
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Use the controls above to fine-tune your 3D environment
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Preview */}
      <Card className="bg-gradient-card border-0 shadow-card">
        <CardContent className="p-0">
          <div className="relative">
            <img
              src={environmentImage}
              alt="3D Environment Preview"
              className={`w-full h-80 object-cover transition-all duration-500 ${
                isGenerating ? 'filter blur-sm' : ''
              }`}
            />

            {/* Processing Overlay */}
            {isGenerating && (
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                <div className="text-center text-white animate-fade-in">
                  <Loader2 className="h-12 w-12 animate-spin mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">
                    Crafting Your 3D World
                  </h3>
                  <p className="text-sm opacity-90 mb-1">
                    Generating geometry and textures...
                  </p>
                  <p className="text-xs opacity-75">
                    This process can take 3-5 minutes
                  </p>
                  <div className="mt-4 w-32 mx-auto bg-white/20 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full animate-pulse w-3/4"></div>
                  </div>
                </div>
              </div>
            )}

            {/* Success Overlay */}
            {generated && !isGenerating && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
                <div className="p-6 text-white animate-slide-up">
                  <h3 className="text-lg font-semibold mb-1">
                    Environment Ready!
                  </h3>
                  <p className="text-sm opacity-90">
                    Your 3D scene has been generated
                  </p>
                </div>
              </div>
            )}

            {/* Status Badge */}
            {!isGenerating && !generated && (
              <div className="absolute top-4 right-4">
                <span className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs">
                  Ready to Generate
                </span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
