import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Loader2, FileText, Play, Download, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { VideoPreview } from './VideoPreview';
import sampleVideo1 from '@/assets/sample-video-1.mp4';
import sampleVideo2 from '@/assets/sample-video-2.jpg';

export function ScriptToVideo() {
  const [script, setScript] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);
  const { toast } = useToast();
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  if (generated && !videoUrl) {
    setVideoUrl(sampleVideo1);
  }
  const handleGenerate = async () => {
    if (!script.trim()) {
      toast({
        title: 'Script required',
        description: 'Please enter a script to generate video preview.',
        variant: 'destructive',
      });
      return;
    }

    setIsGenerating(true);
    setGenerated(false);

    await new Promise(resolve => setTimeout(resolve, 5000));

    setIsGenerating(false);
    setGenerated(true);

    toast({
      title: 'Video Preview Generated!',
      description: 'Your AI-powered scene preview is ready to view.',
    });
  };

  const sampleScript = `INT. COFFEE SHOP - MORNING
SARAH sits across from MIKE  at a small table. Steam rises from their cups.
SARAH
(leaning forward, passionate)
we need to change everything, everything!
MIKE
(Gently nudging his nose )
That's a bit much don't you think?`;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Script to Video Preview
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Transform your screenplay into visual previews. Our AI analyzes
          dialogue, action lines, and mood to create cinematic previews that
          help actors and crew understand the vision.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Script Input */}
        <Card className="bg-gradient-card border-0 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <FileText className="h-6 w-6 text-primary" />
              Script Input
            </CardTitle>
            <div className="flex gap-2">
              <Badge variant="secondary">Screenplay Format</Badge>
              <Badge variant="secondary">AI Analysis</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Enter Your Script
              </label>
              <Textarea
                placeholder="Paste your screenplay here..."
                value={script}
                onChange={e => setScript(e.target.value)}
                className="min-h-48 bg-background/50 border-border/50 font-mono text-sm"
              />
            </div>

            <div className="flex gap-3">
              <Button
                onClick={() => setScript(sampleScript)}
                variant="outline"
                size="sm"
              >
                Use Sample Script
              </Button>
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
                    Analyzing & Generating...
                  </>
                ) : (
                  <>
                    <Wand2 className="h-4 w-4" />
                    Generate Preview
                  </>
                )}
              </Button>
            </div>

            {isGenerating && (
              <div className="bg-muted/50 p-4 rounded-lg animate-fade-in">
                <h4 className="font-medium mb-2">AI Processing Steps:</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    Analyzing script structure and dialogue
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    Extracting mood and visual cues
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    Generating cinematic preview
                  </li>
                </ul>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Generated Preview */}
        <Card className="bg-gradient-card border-0 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Play className="h-6 w-6 text-primary" />
              Generated Preview
            </CardTitle>
          </CardHeader>
          <CardContent>
            {!generated && !isGenerating && (
              <div className="text-center py-12 text-muted-foreground">
                <FileText className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <p>
                  Enter a script and click "Generate Preview" to see your
                  cinematic preview
                </p>
              </div>
            )}

            {isGenerating && (
              <div className="text-center py-12">
                <Loader2 className="h-16 w-16 mx-auto mb-4 animate-spin text-primary" />
                <h3 className="text-lg font-semibold mb-2">
                  Creating Your Preview
                </h3>
                <p className="text-muted-foreground">
                  AI is analyzing your script and generating visuals...
                </p>
              </div>
            )}

            {generated && (
              <div className="space-y-4 animate-fade-in">
                <VideoPreview
                  title="Coffee Shop Confrontation"
                  description="Tense dialogue between Sarah and Mike in a morning coffee shop setting. Dramatic lighting emphasizes the conflict."
                  thumbnail={sampleVideo1}
                  videoSrc={sampleVideo1}
                />
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Download className="h-4 w-4" />
                    Export Video
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Wand2 className="h-4 w-4" />
                    Regenerate
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* AI Suggestions */}
      {generated && (
        <Card className="bg-gradient-card border-0 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Wand2 className="h-6 w-6 text-primary" />
              AI Suggestions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium">Dialogue Refinements</h4>
                <Textarea
                  placeholder="AI will suggest dialogue improvements..."
                  className="min-h-32 bg-background/50 border-border/50"
                />
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Scene Composition</h4>
                <Textarea
                  placeholder="AI will suggest scene composition ideas..."
                  className="min-h-32 bg-background/50 border-border/50"
                />
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Camera Angles</h4>
                <Textarea
                  placeholder="AI will suggest camera angles..."
                  className="min-h-32 bg-background/50 border-border/50"
                />
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" size="sm">
                Regenerate Suggestions
              </Button>
              <Button variant="cinematic" size="sm">
                Apply Selected
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Sample Gallery */}
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">Sample Video Previews</h3>
          <p className="text-muted-foreground">
            Explore examples of AI-generated previews from different script
            genres
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <VideoPreview
            title="Dramatic Confrontation Scene"
            description="AI-generated preview showing tension between characters with cinematic lighting and camera work."
            thumbnail={sampleVideo1}
            videoSrc={sampleVideo1}
            isDemo={true}
          />
          <VideoPreview
            title="Action Sequence Preview"
            description="High-energy scene with dynamic camera movements and intense pacing, perfect for stunt coordination."
            thumbnail={sampleVideo2}
            videoSrc={sampleVideo1}
            isDemo={true}
          />
        </div>
      </div>
    </div>
  );
}
