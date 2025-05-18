
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactCTA from '@/components/sections/ContactCTA';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 purple-gradient text-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Mtandao Afrinet</h1>
            <p className="text-xl text-white/90">Connecting communities across Nakuru and Nyahururu with fast, reliable internet.</p>
          </div>
        </div>
      </section>
      
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-naku-800 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Mtandao Afrinet, our mission is to bridge the digital divide by providing affordable, high-speed internet 
                access to both urban and rural areas in Nakuru and Nyahururu counties.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We believe that reliable connectivity is essential for education, business growth, and community 
                development in today's digital world.
              </p>
              <p className="text-lg text-gray-600">
                Through innovative technology solutions and exceptional customer service, we aim to empower 
                individuals, businesses, and institutions to thrive in the digital economy.
              </p>
            </div>
            
            <div className="glass-card p-4">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80" 
                alt="NakuNet mission" 
                className="rounded-lg"
              />
            </div>
          </div>
          
          <div className="mt-20">
            <div className="glass-card p-8 md:p-12 purple-gradient text-white">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white/10 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Reliability</h3>
                  <p>We understand that consistent connectivity is crucial. That's why we invest in redundant systems and continuous monitoring to ensure maximum uptime.</p>
                </div>
                <div className="bg-white/10 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Innovation</h3>
                  <p>We constantly explore new technologies and solutions to provide better service and overcome the unique challenges of our service areas.</p>
                </div>
                <div className="bg-white/10 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Community</h3>
                  <p>We're not just a service provider; we're part of the community. We actively participate in local initiatives and support digital literacy programs.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-naku-800 mb-6 text-center">Our Story</h2>
            <div className="glass-card p-8">
              <p className="text-lg text-gray-600 mb-6">
                Mtandao Afrinet was founded in 2018 by Eric Samuel, a tech entrepreneur who grew up in Nakuru and experienced 
                firsthand the limitations of poor internet connectivity in the region.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What started as a small operation serving a few dozen homes has now grown into a leading regional 
                internet service provider, connecting thousands of homes and businesses.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                In 2020, Kennedy Nthuma joined as a co-founder, bringing his expertise in operations and customer 
                service to help scale the business and improve service delivery.
              </p>
              <p className="text-lg text-gray-600">
                Today, Mtandao Afrinet continues to expand its coverage and enhance its service offerings, with plans to 
                reach even more communities in the coming years.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default About;
