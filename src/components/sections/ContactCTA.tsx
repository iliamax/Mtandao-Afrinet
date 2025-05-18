
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactCTA = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="glass-card p-10 md:p-16 purple-gradient text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Connected?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers enjoying fast and reliable internet across Nakuru and Nyahururu.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-naku-500 hover:bg-white/90" >
              Get Connected
            </Button>
            <Button variant="outline" size="lg" className="bg-white text-naku-500 hover:bg-white/90 text-lg px-8">
              Contact Sales <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
