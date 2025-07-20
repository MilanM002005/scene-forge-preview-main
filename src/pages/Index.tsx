import { Hero } from '@/components/Hero';
import { ScriptToVideo } from '@/components/ScriptToVideo';
import { ThreeDGenerator } from '@/components/ThreeDGenerator';
import { VideoPreview } from '@/components/VideoPreview';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Film,
  Users,
  DollarSign,
  Clock,
  Check,
  Star,
  Quote,
} from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Revolutionary Filmmaking Tools
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform bridges the gap between script and screen, giving
              filmmakers powerful tools to visualize and communicate their ideas
              before cameras roll.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gradient-card border-0 shadow-card hover:shadow-cinematic transition-all duration-300">
              <CardHeader className="text-center">
                <Film className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>AI Video Previews</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Transform scripts into visual previews that help actors
                  understand mood, expressions, and scene flow.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-card hover:shadow-cinematic transition-all duration-300">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Team Alignment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Align actors, directors, and crew with shared visual
                  understanding before production begins.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-card hover:shadow-cinematic transition-all duration-300">
              <CardHeader className="text-center">
                <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Cost Reduction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Avoid expensive reshoots and miscommunication with clear
                  visual planning and previsualization.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-card hover:shadow-cinematic transition-all duration-300">
              <CardHeader className="text-center">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Faster Production</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Streamline pre-production with instant visual feedback and
                  rapid iteration capabilities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            {/* <Badge variant="secondary" className="mb-4">
              Interactive Demo
            </Badge> */}
            <h2 className="text-4xl font-bold mb-4">
              Experience the Future of Filmmaking
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Try our AI-powered tools and see how they can transform your
              creative process. Generate video previews from scripts and create
              3D environments in minutes.
            </p>
          </div>

          {/* Script to Video Demo */}
          <div className="mb-20">
            <ScriptToVideo />
          </div>

          {/* Video Preview Demo */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                Video Preview
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                See how your script transforms into a visual preview with our
                AI-powered video generation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <VideoPreview
                title="Sample Video Preview"
                description="Example of AI-generated video preview from script"
                thumbnail="/placeholder.svg"
                videoSrc="/src/assets/sample-video-1.mp4"
                isDemo={true}
              />
            </div>
          </div>

          {/* 3D Environment Demo */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                3D Environment Creation
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Create detailed virtual sets for camera planning, lighting
                design, and pitch presentations. Perfect for directors who want
                to experiment with angles and compositions.
              </p>
            </div>
            <ThreeDGenerator />
          </div>
        </div>
      </section>

      {/* Testimonials */}

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Zova.AI
            </h3>
            <p className="text-muted-foreground mb-6">
              Empowering filmmakers with AI-driven visualization tools
            </p>
            {/* <div className="text-sm text-muted-foreground">
              © 2024 AI. All rights reserved.
            </div> */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
