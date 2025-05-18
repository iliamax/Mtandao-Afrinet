
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Mwangi',
      role: 'Small Business Owner',
      image: 'mtandao/customer.jpg',
      text: 'NakuNet transformed how my business operates. The reliable connection means we can process online orders without interruptions. Their customer service is also top-notch!'
    },
    {
      name: 'David Kamau',
      role: 'Remote Worker',
      image: 'mtandao/customer.jpg',
      text: 'As someone who works from home, having stable internet is crucial. NakuNet has never let me down, even during heavy rain. I highly recommend them to all remote workers in Nakuru.'
    },
    {
      name: 'Grace Wanjiku',
      role: 'School Administrator',
      image: 'mtandao/customer.jpg',
      text: 'Our school needed reliable internet for digital learning. NakuNet provided a custom solution that serves our entire campus. The students and teachers are extremely happy with the service.'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 px-4 purple-gradient text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about Mtandao Afrinet.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Large quote icon */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-20">
            <Quote size={80} />
          </div>
          
          <div className="glass-card p-8 md:p-12">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-white">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <p className="text-lg md:text-xl italic text-center mb-6">
                "{testimonials[activeIndex].text}"
              </p>
              
              <div className="text-center">
                <h4 className="text-xl font-bold">{testimonials[activeIndex].name}</h4>
                <p className="text-white/80">{testimonials[activeIndex].role}</p>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-4">
              <button 
                onClick={prevTestimonial} 
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextTestimonial} 
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
          
          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button 
                key={index} 
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full ${index === activeIndex ? 'bg-white' : 'bg-white/30'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
