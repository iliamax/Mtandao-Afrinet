import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    toast({
      title: "Message Sent Successfully",
      description: "We'll get back to you as soon as possible.",
    });

    const { name, email, phone, subject, message } = formData;

    const mailtoLink = `mailto:info@mtandaoafrinet.co.ke?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Full Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
    )}`;

    // Open default email client
    window.location.href = mailtoLink;

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="text-naku-500" size={24} />,
      title: 'Phone',
      details: ['+254792721620 (Sales)', '+254 746 013 110 (Support)'],
      action: {
        text: 'Call Us',
        link: 'tel:+254792721620'
      }
    },
    {
      icon: <Mail className="text-naku-500" size={24} />,
      title: 'Email',
      details: ['info@mtandaoafrinet.co.ke', 'support@mtandaoafrinet.co.ke'],
      action: {
        text: 'Email Us',
        link: 'mailto:info@nakunet.co.ke'
      }
    },
    {
      icon: <MapPin className="text-naku-500" size={24} />,
      title: 'Visit Us',
      details: ['Nakuru Office: CBD Building, 3rd Floor', 'Nyahururu Office: Main Street, Shop 7'],
      action: {
        text: 'Get Directions',
        link: 'https://www.google.com/maps?q=Nakuru'
      }
    },
    {
      icon: <MessageSquare className="text-naku-500" size={24} />,
      title: 'Social & Chat',
      details: ['WhatsApp: +254792721620', 'Facebook, Twitter, Instagram: @mtandaoafrinet'],
      action: {
        text: 'WhatsApp Us',
        link: 'https://wa.me/254792721620?text=Thank%20you%20for%20contacting%20Mtandao%20Afrinet%20customer%20service.%20How%20can%20we%20help%20you%20today%3F'
      }
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 purple-gradient text-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-white/90">We're here to help with any questions about our internet services.</p>
          </div>
        </div>
      </section>
      
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="glass-card p-6">
                    <div className="flex items-center mb-4">
                      {item.icon}
                      <h3 className="text-xl font-bold text-naku-700 ml-3">{item.title}</h3>
                    </div>
                    <div className="space-y-2 mb-4">
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-gray-600">{detail}</p>
                      ))}
                    </div>
                    <a href={item.action.link} className="text-naku-500 font-medium hover:underline flex items-center">
                      {item.action.text}
                      <span className="ml-1">→</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-naku-800 mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      >
                        <option value="">Select a subject</option>
                        <option value="sales">Sales Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="billing">Billing Question</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                    />
                  </div>

                  <Button type="submit" className="bg-naku-500 hover:bg-naku-600">
                    Send Message
                  </Button>
                </form>
              </div>

              <div className="mt-8 glass-card p-1 h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127672.75772082225!2d36.031511287500005!3d-0.28904765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18298d5fff4cf0b1%3A0x9e0bd10a54a1895c!2sNakuru%2C%20Kenya!5e0!3m2!1sen!2sus!4v1712659411213!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: "0" }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="NakuNet Office Location"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-naku-800 mb-4">Business Hours</h2>
            <div className="glass-card p-6 max-w-xl mx-auto">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-right font-medium">Monday - Friday:</div>
                <div>8:00 AM - 6:00 PM</div>
                <div className="text-right font-medium">Saturday:</div>
                <div>9:00 AM - 3:00 PM</div>
                <div className="text-right font-medium">Sunday:</div>
                <div>Closed</div>
                <div className="text-right font-medium">Support Hours:</div>
                <div>24/7 Technical Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
