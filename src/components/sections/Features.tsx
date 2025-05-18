
import { Wifi, Zap, Clock, Shield } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Wifi size={32} className="text-naku-500" />,
      title: 'Wide Coverage',
      description: 'Serving the entire Nakuru and Nyahururu regions with reliable connectivity.'
    },
    {
      icon: <Zap size={32} className="text-naku-500" />,
      title: 'Blazing Fast',
      description: 'Experience high-speed fiber internet with minimal latency and maximum throughput.'
    },
    {
      icon: <Clock size={32} className="text-naku-500" />,
      title: '24/7 Support',
      description: 'Our dedicated team is always available to assist you with any connectivity issues.'
    },
    {
      icon: <Shield size={32} className="text-naku-500" />,
      title: 'Secure Connection',
      description: 'Advanced security features to protect your network and data at all times.'
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-naku-800 mb-4">Why Choose Mtandao Afrinet</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide the best internet experience in Nakuru and Nyahururu with our state-of-the-art infrastructure and customer-focused approach.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass-card p-6 text-center">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-naku-700 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
