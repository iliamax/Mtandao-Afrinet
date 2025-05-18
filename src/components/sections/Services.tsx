
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const packages = [
    {
      title: 'Residential',
      speed: '5 Mbps',
      price: 'KSh 1,500',
      features: [
        'Unlimited data',
        'Suitable for 5-7 devices',
        'Free installation',
        '24/7 customer support'
      ],
      popular: false
    },
    {
      title: 'SME',
      speed: '20 Mbps',
      price: 'KSh 3,500',
      features: [
        'Unlimited data',
        'Suitable for 10-15 devices',
        'Free installation',
        'Priority customer support',
        'Static IP address'
      ],
      popular: true
    },
    {
      title: 'Enterprise',
      speed: '50 Mbps',
      price: 'KSh 7,000',
      features: [
        'Unlimited data',
        'Suitable for 20+ devices',
        'Free installation & setup',
        'Dedicated account manager',
        'Multiple static IPs',
        '99.9% uptime guarantee'
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-naku-800 mb-4">Our Internet Packages</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect package that suits your connectivity needs and budget.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`glass-card p-6 relative ${pkg.popular ? 'border-2 border-naku-500 transform -translate-y-2' : ''}`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-6 transform -translate-y-1/2 bg-naku-500 text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-naku-700">{pkg.title}</h3>
                <p className="text-gray-600">Plan</p>
              </div>
              
              <div className="text-center mb-6">
                <div className="flex items-center justify-center">
                  <span className="text-3xl font-bold text-naku-800">{pkg.price}</span>
                  <span className="text-gray-500 ml-2">/month</span>
                </div>
                <p className="text-naku-500 font-bold mt-2">{pkg.speed}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-naku-500 mr-2"></span>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full ${pkg.popular ? 'bg-naku-500 hover:bg-naku-600' : 'bg-gray-200 text-naku-700 hover:bg-gray-300'}`}
              >
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-naku-800 mb-4">Need a Custom Solution?</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            We offer tailored connectivity solutions for businesses with specific requirements.
          </p>
          <Button className="bg-naku-500 hover:bg-naku-600">
            Request a Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
