import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent"
        >
          Zova.AI
        </Link>

        <div className="flex items-center gap-4">
          <Link
            to="/ai-suggestions"
            className="text-sm font-medium transition-colors hover:text-primary"
          ></Link>

          <div className="flex gap-2">
            <Button variant="ghost" asChild>
              <Link to="/login">Sign In</Link>
            </Button>
            <Button variant="cinematic" asChild>
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
