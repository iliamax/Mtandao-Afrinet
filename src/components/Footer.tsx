
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-naku-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Mtandao Afrinet</h3>
            <p className="mb-4">Fast, reliable internet for Nakuru and Nyahururu. Connecting homes, businesses & communities.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-naku-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-naku-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-naku-300 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-naku-300 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-naku-300 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-naku-300 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-naku-300 transition-colors">Services</Link></li>
              <li><Link to="/team" className="hover:text-naku-300 transition-colors">Our Team</Link></li>
              <li><Link to="/coverage" className="hover:text-naku-300 transition-colors">Coverage</Link></li>
              <li><Link to="/contact" className="hover:text-naku-300 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail size={18} className="mr-2" />
                <span>info@nakunet.co.ke</span>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-2" />
                <span>+254 792 721 620</span>
              </div>
              <div className="flex items-center">
                <MapPin size={18} className="mr-2" />
                <span>Nakuru & Nyahururu, Kenya</span>
              </div>
            </div>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to receive updates on new services and special offers.</p>
            <div className="flex flex-col space-y-2">
              <Input 
                placeholder="Your email address" 
                className="bg-naku-800 border-naku-700 focus:border-naku-300"
              />
              <Button className="bg-naku-500 hover:bg-naku-400 w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-naku-800 mt-12 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} Mtandao Afrinet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
