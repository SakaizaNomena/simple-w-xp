import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [status, setStatus] = useState({
    submitting: false,
    succeeded: false,
    error: false,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ submitting: true, succeeded: false, error: false });

    fetch('https://formspree.io/f/mqaydyez', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: senderEmail, subject: subject, message: body }),
    })
    .then(response => {
      if (response.ok) {
        setStatus({ submitting: false, succeeded: true, error: false });
        setSenderEmail('');
        setSubject('');
        setBody('');
      } else {
        setStatus({ submitting: false, succeeded: false, error: true });
      }
    })
    .catch(() => {
      setStatus({ submitting: false, succeeded: false, error: true });
    });
  };

  if (status.succeeded) {
    return (
      <div className="text-center p-8">
        <h2 className="text-2xl font-bold mb-4">Merci !</h2>
        <p>Votre message a été envoyé avec succès.</p>
      </div>
    );
  }

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Me Contacter</h2>
        <div className="max-w-xl mx-auto bg-gray-100 rounded-lg shadow-md p-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Votre Email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">Sujet</label>
              <input 
                type="text" 
                id="subject" 
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea 
                id="message" 
                name="message"
                rows={6}
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button 
                type="submit"
                className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:bg-gray-400"
                disabled={status.submitting}
              >
                {status.submitting ? 'Envoi en cours...' : "Envoyer l'email"}
              </button>
            </div>
            {status.error && (
              <p className="text-red-500 text-center mt-4">Une erreur s'est produite. Veuillez réessayer.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
