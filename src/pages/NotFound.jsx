import { Link } from "react-router-dom";
import { Home, ArrowLeft, Search } from "lucide-react";

export const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
      
      <div className="relative z-10 text-center max-w-lg">
        {/* 404 Number */}
        <div className="mb-8">
          <span className="text-[120px] md:text-[180px] font-bold text-primary/20 leading-none">
            404
          </span>
        </div>
        
        {/* Error Message */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Page Not <span className="text-primary">Found</span>
          </h1>
          <p className="text-muted-foreground text-lg mb-6">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        {/* Search Suggestion */}
        <div className="mb-8 p-4 bg-card rounded-lg border border-border">
          <div className="flex items-center gap-2 text-muted-foreground mb-2">
            <Search size={18} />
            <span className="text-sm">Popular pages:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            <Link
              to="/#about"
              className="px-3 py-1 text-sm bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              About
            </Link>
            <Link
              to="/#skills"
              className="px-3 py-1 text-sm bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Skills
            </Link>
            <Link
              to="/#projects"
              className="px-3 py-1 text-sm bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Projects
            </Link>
            <Link
              to="/#contact"
              className="px-3 py-1 text-sm bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
          >
            <Home size={20} />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border rounded-full font-medium hover:bg-secondary transition-colors"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>
        
        {/* Decorative Elements */}
        <div className="mt-12 flex justify-center gap-8 text-muted-foreground/30">
          <span>🚀</span>
          <span>💻</span>
          <span>🌟</span>
          <span>⚡</span>
          <span>🎯</span>
        </div>
      </div>
    </div>
  );
};

