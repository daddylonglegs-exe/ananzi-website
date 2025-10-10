import { ChevronRight, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  if (pathnames.length === 0) return null;

  const formatBreadcrumb = (str: string) => {
    return str
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground py-4 px-6 container mx-auto">
      <Link to="/" className="hover:text-accent transition-colors flex items-center">
        <Home className="h-4 w-4" />
      </Link>
      
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        
        return (
          <div key={name} className="flex items-center space-x-2">
            <ChevronRight className="h-4 w-4" />
            {isLast ? (
              <span className="text-foreground font-medium">{formatBreadcrumb(name)}</span>
            ) : (
              <Link to={routeTo} className="hover:text-accent transition-colors">
                {formatBreadcrumb(name)}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
};