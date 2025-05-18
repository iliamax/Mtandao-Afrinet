
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Coverage from '@/components/sections/Coverage';

const CoveragePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 purple-gradient text-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Coverage Areas</h1>
            <p className="text-xl text-white/90">Check if NakuNet services are available in your location.</p>
          </div>
        </div>
      </section>
      
      <Coverage />
      
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-naku-800 mb-6">Expanding Our Network</h2>
              <p className="text-lg text-gray-600 mb-6">
                We are continuously expanding our coverage to reach more areas in and around Nakuru and Nyahururu. 
                Our goal is to connect even the most remote locations with reliable internet service.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our expansion is guided by community demand and strategic planning. If your area is not currently 
                covered, please register your interest through our coverage check form, and we'll prioritize areas 
                with high demand.
              </p>
              <p className="text-lg text-gray-600">
                For businesses and institutions outside our current coverage areas, we offer custom connectivity 
                solutions. Contact our sales team to discuss your specific needs.
              </p>
            </div>
            
            <div className="glass-card p-4">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80" 
                alt="NakuNet coverage expansion" 
                className="rounded-lg"
              />
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-naku-800 mb-6 text-center">Connection Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
              <div className="glass-card p-6 text-center relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-naku-500 text-white flex items-center justify-center font-bold">1</div>
                <h3 className="text-xl font-bold text-naku-700 mb-3">Check Availability</h3>
                <p className="text-gray-600">Submit your location details through our coverage check form.</p>
              </div>
              <div className="glass-card p-6 text-center relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-naku-500 text-white flex items-center justify-center font-bold">2</div>
                <h3 className="text-xl font-bold text-naku-700 mb-3">Site Survey</h3>
                <p className="text-gray-600">Our technicians will visit to assess installation requirements.</p>
              </div>
              <div className="glass-card p-6 text-center relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-naku-500 text-white flex items-center justify-center font-bold">3</div>
                <h3 className="text-xl font-bold text-naku-700 mb-3">Installation</h3>
                <p className="text-gray-600">We'll install all necessary equipment to get you connected.</p>
              </div>
              <div className="glass-card p-6 text-center relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-naku-500 text-white flex items-center justify-center font-bold">4</div>
                <h3 className="text-xl font-bold text-naku-700 mb-3">Activation</h3>
                <p className="text-gray-600">Your service is activated and you're ready to enjoy fast internet.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CoveragePage;
