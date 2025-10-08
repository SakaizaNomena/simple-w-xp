import React from 'react';
import { Mail, Phone, MessageSquare } from 'lucide-react';

const contactInfo = {
  email: 'sahazanomena@gmail.com',
  phone: '+261 33 62 281 13',
  whatsapp: '+261 33 62 281 13',
};

const Contact: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact</h2>
        <div className="max-w-lg mx-auto bg-gray-100 rounded-lg shadow-md p-8">
          <div className="flex flex-col items-start mb-2">
            <div className='flex flex-row items-center'>
              <Mail className="w-4 text-blue-600" />
              <h3 className="text-lg font-semibold">Email</h3>
            </div>
            <a href={`mailto:${contactInfo.email}`} className="text-gray-700 hover:text-blue-800">{contactInfo.email}</a>
          </div>
          <div className="flex flex-col items-start mb-2">
            <div className='flex flex-row items-center'>
              <Phone className="w-6 h-6 mr-4 text-green-600" />
              <h3 className="text-lg font-semibold">Téléphone</h3>
            </div>
            <p className="text-gray-700">{contactInfo.phone}</p>
          </div>
          <div className="flex flex-col items-start mb-2">
            <div className='flex flex-row items-center'>
              <MessageSquare className="w-6 h-6 mr-4 text-teal-600" />
              <h3 className="text-lg font-semibold">WhatsApp</h3>
            </div>
            <p className="text-gray-700">{contactInfo.whatsapp}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
