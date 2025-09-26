import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-8 px-6">
        <div className="space-y-4">
          <h1 className="text-9xl font-black text-accent">404</h1>
          <h2 className="text-section-title">Page Not Found</h2>
          <p className="text-large text-muted-foreground max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            to="/" 
            className="glass-button text-accent group px-8 py-4 text-lg font-semibold inline-flex items-center"
            style={{
              background: 'linear-gradient(135deg, hsl(var(--accent) / 0.15), hsl(var(--accent) / 0.25))',
              borderColor: 'hsl(var(--accent) / 0.3)'
            }}
          >
            <Home className="mr-2 h-5 w-5" />
            Go Home
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="glass-button text-foreground px-8 py-4 text-lg font-semibold inline-flex items-center"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
