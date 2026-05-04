import { useState, useEffect } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [emailCount, setEmailCount] = useState(247);
  const [submitted, setSubmitted] = useState(false);

  // Cargar contador de emails desde localStorage
  useEffect(() => {
    const stored = localStorage.getItem('email_count');
    setEmailCount(stored ? parseInt(stored) : 247);
  }, []);

  // Gestionar envío del formulario
  const handleSubmit = async () => {
    if (!email || !email.includes('@')) return;
    
    // TODO: Aquí conectarás con Brevo/Mailchimp más adelante
    // Por ahora guardamos en localStorage temporalmente
    const newCount = emailCount + 1;
    localStorage.setItem('email_count', String(newCount));
    setEmailCount(newCount);
    setSubmitted(true);
    
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          🍳 Fridgetalks
        </h1>
        <p className="text-gray-600 mb-6">
          Cocina con lo que tienes. Haz una foto de tu nevera y descubre qué cocinar.
        </p>
        
        <div className="mb-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
        
        <button
          onClick={handleSubmit}
          disabled={submitted}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors disabled:bg-gray-400"
        >
          {submitted ? '✓ ¡Gracias!' : 'Avísame cuando esté lista'}
        </button>
        
        <p className="text-sm text-gray-500 mt-4 text-center">
          Ya somos {emailCount} personas esperando 🎉
        </p>
      </div>
    </div>
  );
}

export default App;
