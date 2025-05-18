
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen purple-gradient overflow-hidden">
      {/* Background decoration circles */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-naku-400/20 filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-naku-300/20 filter blur-3xl animate-pulse"></div>
      
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-white mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Fast, Reliable Internet for Nakuru and Nyahururu
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Connecting Homes, Businesses & Communities
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-naku-500 hover:bg-white/90 text-lg px-8">
                Get Connected
              </Button>
              <Button variant="outline" size="lg" className="bg-white text-naku-500 hover:bg-white/90 text-lg px-8">
                Check Coverage <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="glass-card p-8 max-w-md animate-float">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80" 
                alt="NakuNet Internet Service" 
                className="rounded-lg shadow-lg"
              />
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold text-naku-800">Superfast Fiber Internet</h3>
                <p className="text-naku-700 mt-2">Unlimited data with speeds up to 100Mbps</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
