import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Menu, X, Wifi } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Services', path: '/services' },
    { title: 'Team', path: '/team' },
    { title: 'Coverage', path: '/coverage' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-2' : 'bg-transparent py-4'}`}>
    <div className="container mx-auto px-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img src="mtandao/MA Logo.png" alt="NakuNet Logo"  style={{ width: '100px', height: '100px', objectFit: 'contain', }} className="h-8 w-8 object-contain" />
        
      </div>
  
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path} 
              className="text-foreground hover:text-naku-500 font-medium transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </div>
        
        <div className="hidden md:block">
          <Button className="bg-naku-500 hover:bg-naku-600">
            Check Coverage
          </Button>
        </div>
        
        <button
          className="md:hidden text-naku-500"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden glass absolute top-full left-0 w-full p-4">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-foreground hover:text-naku-500 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <Button className="bg-naku-500 hover:bg-naku-600">
              Check Coverage
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
