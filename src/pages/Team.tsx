
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TeamSection from '@/components/sections/TeamSection';

const Team = () => {
  const teamMembers = [
    {
      name: 'Eric Samuel',
      role: 'Founder & CEO',
      department: 'Leadership',
      bio: 'Visionary behind Mtandao Afrinet, passionate about digital transformation in rural Kenya. With over 10 years of experience in telecommunications, Eric leads the company\'s strategic vision and expansion plans.',
      image: 'mtandao/eric.jpeg'
    },
    {
      name: 'Kennedy Nthuma',
      role: 'Co-founder & Manager',
      department: 'Leadership',
      bio: 'Expert in operations and customer service, ensuring seamless delivery and support. Kennedy oversees day-to-day operations and is committed to maintaining Mtandao Afrinet\'s high service standards.',
      image: 'mtandao/ken.jpeg'
    },
    
    {
      name: 'Steve Mutia',
      role: 'Customer Relations Manager',
      department: 'Customer Service',
      bio: 'Dedicated to ensuring client satisfaction through responsive support and proactive service. Steve leads our customer care team and implements service improvement initiatives.',
      image: 'mtandao/support.jpg'
    },
    {
      name: 'Wilton',
      role: 'Customer Support Exucutive',
      department: 'Customer Service',
      bio: 'Dedicated to  handling customer complaints, communicating via calls, email, chat etc., resolving their complaints, ensuring a positive experience, and building strong customer relationships.',
      image: 'mtandao/support.jpg'
    },
  ];

  // Group team members by department
  const departments = teamMembers.reduce((acc, member) => {
    if (!acc[member.department]) {
      acc[member.department] = [];
    }
    acc[member.department].push(member);
    return acc;
  }, {} as Record<string, typeof teamMembers>);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 purple-gradient text-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
            <p className="text-xl text-white/90">Meet the dedicated professionals behind Mtandao Afrinet's success.</p>
          </div>
        </div>
      </section>
      
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-naku-800 mb-4">Meet The People Who Make It Happen</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our diverse team of experts is committed to delivering exceptional internet service across Nakuru and Nyahururu.
            </p>
          </div>
          
          {Object.entries(departments).map(([department, members]) => (
            <div key={department} className="mb-16">
              <h3 className="text-2xl font-bold text-naku-700 mb-8 text-center">{department} Team</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {members.map((member, index) => (
                  <div key={index} className="glass-card p-6">
                    <div className="mb-6 overflow-hidden rounded-full w-32 h-32 mx-auto">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="text-center">
                      <h4 className="text-xl font-bold text-naku-700">{member.name}</h4>
                      <p className="text-naku-500 font-medium mb-3">{member.role}</p>
                      <p className="text-gray-600">{member.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          <div className="glass-card p-8 md:p-12 mt-16 text-center">
            <h3 className="text-2xl font-bold text-naku-800 mb-6">Join Our Team</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              We're always looking for talented individuals who are passionate about connectivity and customer service.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Send your resume to <a href="mailto:careers@nakunet.co.ke" className="text-naku-500 hover:underline">careers@nakunet.co.ke</a>
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Team;
