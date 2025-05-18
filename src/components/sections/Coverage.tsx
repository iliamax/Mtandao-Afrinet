
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Coverage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Coverage Check Submitted",
      description: "We'll get back to you about availability in your area soon.",
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      location: '',
      message: ''
    });
  };

  const coverageAreas = [
    'Nakuru Town Center',
    'Milimani Estate',
    'Section 58',
    'London Estate',
    'Naka Estate',
    'Pipeline Estate',
    'Nyahururu Town Center',
    'Igwamiti',
    'Mairo Inya'
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-naku-800 mb-4">Coverage Areas</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Check if NakuNet's high-speed internet is available in your location.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-naku-700 mb-4">Current Coverage</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2">
                {coverageAreas.map((area, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle size={16} className="text-naku-500 mr-2" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <p className="text-gray-600 italic">
                  We're continuously expanding our coverage. If your area is not listed, 
                  please fill out the form and we'll let you know when service becomes available.
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold text-naku-700 mb-4">Coverage Map</h3>
              <div className="glass-card p-1 h-[300px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127672.75772082225!2d36.031511287500005!3d-0.28904765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18298d5fff4cf0b1%3A0x9e0bd10a54a1895c!2sNakuru%2C%20Kenya!5e0!3m2!1sen!2sus!4v1712659411213!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mtandao Afrinet Coverage Map"
                ></iframe>
              </div>
            </div>
          </div>
          
          <div>
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-naku-700 mb-4">Check Availability</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+254 7XX XXX XXX"
                  />
                </div>
                
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location/Address</label>
                  <Input
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    placeholder="Your precise location"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Any specific requirements or questions?"
                  />
                </div>
                
                <Button type="submit" className="w-full bg-naku-500 hover:bg-naku-600">
                  Check Availability
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;
