
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Services from '@/components/sections/Services';
import ContactCTA from '@/components/sections/ContactCTA';
import { Wifi, Server, Users, Building, Home, Settings } from 'lucide-react';

const ServicesPage = () => {
  const specializedServices = [
    {
      icon: <Home size={32} className="text-naku-500" />,
      title: 'Fiber-to-the-Home (FTTH)',
      description: 'Direct fiber connectivity to residential properties for the fastest possible internet experience.'
    },
    {
      icon: <Building size={32} className="text-naku-500" />,
      title: 'Business Connectivity',
      description: 'Tailored solutions for businesses of all sizes with dedicated bandwidth and priority support.'
    },
    {
      icon: <Wifi size={32} className="text-naku-500" />,
      title: 'Wi-Fi Installation',
      description: 'Professional setup of reliable wireless networks for homes and office spaces.'
    },
    {
      icon: <Server size={32} className="text-naku-500" />,
      title: 'Network Infrastructure',
      description: 'Design and implementation of complete network infrastructure for businesses and institutions.'
    },
    {
      icon: <Users size={32} className="text-naku-500" />,
      title: 'Community Wi-Fi',
      description: 'Shared internet solutions for apartments, estates, and community centers.'
    },
    {
      icon: <Settings size={32} className="text-naku-500" />,
      title: 'Technical Support',
      description: '24/7 technical assistance and network maintenance to ensure continuous connectivity.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 purple-gradient text-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-white/90">Comprehensive internet solutions tailored to your needs.</p>
          </div>
        </div>
      </section>
      
      <Services />
      
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-naku-800 mb-4">Specialized Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Beyond our standard packages, we offer specialized services to meet specific connectivity needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializedServices.map((service, index) => (
              <div key={index} className="glass-card p-6">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-naku-700 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="glass-card p-4">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80" 
                alt="NakuNet service" 
                className="rounded-lg"
              />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-naku-800 mb-6">Our Service Commitment</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-naku-500 mt-2 mr-2"></div>
                  <p className="text-lg text-gray-600">
                    <strong>Rapid Installation:</strong> Our team aims to complete installations within 48 hours of confirmed orders.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-naku-500 mt-2 mr-2"></div>
                  <p className="text-lg text-gray-600">
                    <strong>24/7 Support:</strong> Our technical team is available round the clock to assist with any connectivity issues.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-naku-500 mt-2 mr-2"></div>
                  <p className="text-lg text-gray-600">
                    <strong>Service Level Agreements:</strong> For business clients, we offer SLAs with guaranteed uptime and response times.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-naku-500 mt-2 mr-2"></div>
                  <p className="text-lg text-gray-600">
                    <strong>Transparent Billing:</strong> No hidden fees or surprise charges. What you see is what you pay.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-naku-500 mt-2 mr-2"></div>
                  <p className="text-lg text-gray-600">
                    <strong>Network Monitoring:</strong> We continuously monitor our network to preemptively address potential issues.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default ServicesPage;
