
import { Linkedin, Twitter } from 'lucide-react';

const TeamSection = () => {
  const team = [
    {
      name: 'Eric Samuel',
      role: 'Founder & CEO',
      bio: 'Visionary behind NakuNet, passionate about digital transformation in rural Kenya.',
      image: 'mtandao/eric.jpeg'
    },
    {
      name: 'Kennedy Nthuma',
      role: 'Co-founder & Manager',
      bio: 'Expert in operations and customer service, ensuring seamless delivery and support.',
      image: 'mtandao/ken.jpeg'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-naku-800 mb-4">Meet Our Leadership</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The team behind Mtandao Afrinet's mission to connect communities across Nakuru and Nyahururu.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8">
          {team.map((member, index) => (
            <div key={index} className="glass-card p-6 max-w-xs">
              <div className="mb-6 overflow-hidden rounded-full w-40 h-40 mx-auto">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold text-naku-700">{member.name}</h3>
                <p className="text-naku-500 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-naku-500 hover:text-naku-700 transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="text-naku-500 hover:text-naku-700 transition-colors">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
