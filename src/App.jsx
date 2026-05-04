import React, { useState, useEffect } from 'react';
import { Camera, Sparkles, Leaf, ChefHat, ArrowRight, Check, Clock, Heart, Users, Mail, Instagram, Twitter, ChevronDown, Zap, Recycle, Salad, Star, Wifi, Battery, Signal } from 'lucide-react';

export default function FridgetalksLanding() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [emailCount, setEmailCount] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [currentTime, setCurrentTime] = useState('');

  const colors = {
    bg: '#F2F2F2',
    olive: '#A0A603',
    yellow: '#D9D16A',
    darkOlive: '#73622F',
    terracotta: '#BF8069',
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(`${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const loadCount = async () => {

  useEffect(() => {
    const stored = localStorage.getItem('email_count');
    setEmailCount(stored ? parseInt(stored) : 247);
  }, []);

  const handleSubmit = async () => {
    if (!email || !email.includes('@')) return;
    // TODO: Aqu√≠ conectar√°s con Brevo/Mailchimp m√°s adelante
    // Por ahora guardamos en localStorage temporalmente
    const newCount = emailCount + 1;
    localStorage.setItem('email_count', String(newCount));
    setEmailCount(newCount);
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setEmail(''); }, 4000);
  };

  const Logo = ({ size = 32, accentColor }) => {
    const oliveColor = accentColor || colors.olive;
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <g transform="translate(50, 50)">
          {[0, 45, 90, 135].map((angle) => (
            <rect key={angle} x="-9" y="-44" width="18" height="88" rx="3" fill={oliveColor} transform={`rotate(${angle})`} />
          ))}
          <circle cx="0" cy="0" r="11" fill={oliveColor} />
        </g>
      </svg>
    );
  };

  const benefits = [
    { icon: Camera, title: 'Una foto y listo', desc: 'Abre la nevera, dispara, y deja que nuestra IA reconozca cada ingrediente. Tú no tienes que hacer nada más.', color: colors.olive },
    { icon: Sparkles, title: 'Recetas con lo tuyo', desc: 'Te proponemos cosas que puedes cocinar ahora mismo, no recetas que requieren ir al super primero.', color: colors.terracotta },
    { icon: Recycle, title: 'Menos basura, más euros', desc: 'Aprovecha lo que ya tienes en casa. El planeta y tu cuenta corriente te lo agradecerán.', color: colors.darkOlive },
    { icon: Zap, title: 'En 30 segundos sabes qué cenar', desc: 'Filtra por tiempo, dificultad o dieta. Adiós a "no sé qué cocinar" cuando llegas reventado del trabajo.', color: colors.yellow },
  ];

  const steps = [
    { num: '01', title: 'Haz una foto', desc: 'A tu nevera, a la encimera, a la despensa. Donde sea que tengas comida.', emoji: '??' },
    { num: '02', title: 'Esperamos un par de segundos', desc: 'La IA reconoce todo lo que ve. Tomate, queso, ese calabacín que llevas días esquivando...', emoji: '?' },
    { num: '03', title: 'Tú eliges', desc: 'Te enseñamos varias recetas posibles, ordenadas por la que mejor encaja con lo que tienes.', emoji: '??' },
    { num: '04', title: 'A la cocina', desc: 'Pasos claros, temporizadores, y sustituciones por si te falta algún ingrediente. Pan comido.', emoji: '??' },
  ];

  const stats = [
    { num: '1.300€', label: 'Lo que cada familia española tira a la basura cada año en comida', source: 'MAPA 2024' },
    { num: '31%', label: 'De toda la comida del mundo acaba en el cubo. No es broma', source: 'FAO' },
    { num: '7 de cada 10', label: 'Cocinamos a diario sin saber qué vamos a hacer hasta abrir la nevera', source: 'Nielsen' },
  ];

  const testimonials = [
    { name: 'Marta R.', role: 'Madre de dos, Barcelona', text: 'Llevo años intentando que en casa no se tire nada y siempre acabo igual. Esto es justo lo que necesitaba.', avatar: '??' },
    { name: 'Diego F.', role: 'Vive solo, Madrid', text: 'Los miércoles a las nueve de la noche es cuando más útil me va a ser esto. Cuento los días para probarla.', avatar: '??' },
    { name: 'Laura M.', role: 'Vegetariana, Valencia', text: 'Que adapte las recetas a mi dieta sin tener que filtrar mil cosas raras es un puntazo. Tengo muchas ganas.', avatar: '?????' },
  ];

  const faqs = [
    { q: '¿Para cuándo está la app?', a: 'Estamos en plena fase de validar la idea con futuros usuarios. La idea es lanzar a lo largo de 2026. Si te apuntas, serás de los primeros en probarla cuando esté lista.' },
    { q: '¿Funciona en iPhone y Android?', a: 'Sí, queremos lanzar en las dos. Cuando te apuntes a la lista podrás decirnos cuál usas para que te avisemos en cuanto haya versión para ti.' },
    { q: '¿Cuánto va a costar?', a: 'Habrá una versión gratis que ya te resuelve la papeleta. Y una premium con escaneos sin límite, planificación semanal y más cosas, por algo así como 3-5€ al mes. Nada loco.' },
    { q: '¿Cómo reconoce los ingredientes?', a: 'Con inteligencia artificial entrenada para reconocer comida. Cuanta más luz y mejor encuadre, mejor lo hace. Pero ya lo hemos probado con neveras hechas un desastre y funciona.' },
    { q: '¿Y mi privacidad?', a: 'Las fotos se procesan al momento y no se guardan. No vendemos datos ni nada parecido. Cumplimos con el RGPD europeo, como toca.' },
    { q: '¿Puedo ayudaros con feedback?', a: '¡Eso es justo lo que estamos buscando! Apúntate y marca la opción de "quiero ser tester". Nos pondremos en contacto contigo para charlar.' },
  ];

  const heroParallax = scrollY * 0.3;

  return (
    <div className="min-h-screen w-full" style={{ background: '#FAFAF7', color: colors.darkOlive }}>
      {/* === NAV === */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white bg-opacity-80 border-b" style={{ borderColor: 'rgba(115,98,47,0.1)' }}>
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Logo size={28} />
            <span className="text-lg md:text-xl font-bold">
              Fridge<span style={{ color: colors.olive }}>Talks</span>
            </span>
          </div>
          <button
            onClick={() => document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-4 md:px-5 py-2 rounded-full font-bold text-sm text-white shadow-md hover:shadow-lg transition-all"
            style={{ background: colors.terracotta }}
          >
            Quiero apuntarme
          </button>
        </div>
      </nav>

      {/* === HERO === */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute top-32 left-10 w-32 h-32 rounded-full opacity-20" style={{ background: colors.yellow, transform: `translateY(${heroParallax}px)` }}></div>
        <div className="absolute top-48 right-20 w-48 h-48 rounded-full opacity-15" style={{ background: colors.olive, transform: `translateY(${-heroParallax}px)` }}></div>
        <div className="absolute bottom-10 left-1/3 w-24 h-24 rounded-full opacity-20" style={{ background: colors.terracotta, transform: `translateY(${heroParallax * 0.5}px)` }}></div>

        <div className="max-w-6xl mx-auto px-4 md:px-8 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: 'white', border: `1.5px solid ${colors.yellow}` }}>
                <Sparkles size={14} style={{ color: colors.olive }} />
                <span className="text-xs font-bold">Aún no está lista, pero ya puedes apuntarte ??</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Abres la nevera<br />
                y no sabes qué hacer.<br />
                <span style={{ color: colors.olive }}>Te entendemos.</span>
              </h1>

              <p className="text-lg md:text-xl mb-8 leading-relaxed" style={{ opacity: 0.75 }}>
                Haz una foto, deja que la IA mire por ti, y en segundos tienes tres o cuatro recetas que puedes hacer <em>ahora mismo</em> con lo que ya tienes en casa. Sin ir al super, sin tirar comida, sin pensar.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <button
                  onClick={() => document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-7 py-4 rounded-2xl font-bold text-white shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                  style={{ background: colors.terracotta }}
                >
                  Avísame cuando esté lista <ArrowRight size={18} />
                </button>
                <button
                  onClick={() => document.getElementById('how')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-7 py-4 rounded-2xl font-bold border-2 hover:bg-white transition-all"
                  style={{ borderColor: colors.darkOlive, color: colors.darkOlive }}
                >
                  Cuéntame más
                </button>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <div className="flex -space-x-2">
                  {['??', '??', '?????', '??'].map((e, i) => (
                    <div key={i} className="w-9 h-9 rounded-full bg-white border-2 border-white flex items-center justify-center text-base shadow-sm">
                      {e}
                    </div>
                  ))}
                </div>
                <span style={{ opacity: 0.7 }}>
                  <strong>{emailCount.toLocaleString('es')}</strong> personas ya están esperando con nosotros
                </span>
              </div>
            </div>

            {/* Realistic phone mockup */}
            <div className="relative flex justify-center md:justify-end">
              <div className="relative">
                <RealisticPhone colors={colors} Logo={Logo} currentTime={currentTime} />

                {/* Floating badges */}
                <div className="absolute top-12 -left-12 bg-white rounded-2xl px-3 py-2 shadow-xl flex items-center gap-2 z-20" style={{ animation: 'float 3s ease-in-out infinite' }}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: colors.olive }}>
                    <Leaf size={14} color="white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold">Cero desperdicio</p>
                  </div>
                </div>
                <div className="absolute bottom-20 -right-10 bg-white rounded-2xl px-3 py-2 shadow-xl flex items-center gap-2 z-20" style={{ animation: 'float 3s ease-in-out infinite 1.5s' }}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: colors.terracotta }}>
                    <Sparkles size={14} color="white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold">Detección al vuelo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
        `}</style>
      </section>

      {/* === STATS === */}
      <section className="py-16 md:py-20" style={{ background: colors.darkOlive }}>
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-bold mb-2" style={{ color: colors.yellow }}>POR QUÉ ESTAMOS HACIENDO ESTO</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Tiramos comida cada semana<br />
              <span style={{ color: colors.yellow }}>sin darnos ni cuenta</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white bg-opacity-10 backdrop-blur rounded-3xl p-6 text-center border" style={{ borderColor: 'rgba(217,209,106,0.2)' }}>
                <p className="text-4xl md:text-5xl font-bold mb-2" style={{ color: colors.yellow }}>{stat.num}</p>
                <p className="text-white text-sm md:text-base mb-2 leading-relaxed">{stat.label}</p>
                <p className="text-xs font-bold opacity-60 text-white">Fuente: {stat.source}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-white opacity-70 mt-8 max-w-2xl mx-auto leading-relaxed">
            Y la culpa no es nuestra. Compramos rápido, vivimos rápido, y abrimos la nevera para descubrir media verdura que ya no tiene salvación. Por eso estamos haciendo Fridgetalks.
          </p>
        </div>
      </section>

      {/* === BENEFITS === */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-bold mb-2" style={{ color: colors.olive }}>QUÉ VAS A PODER HACER</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Cocinar sin pensar<br />
              <span style={{ color: colors.olive }}>nunca fue tan fácil</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ opacity: 0.7 }}>
              Se acabó eso de buscar recetas durante 20 minutos para acabar pidiendo pizza.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <div key={i} className="bg-white rounded-3xl p-7 hover:shadow-xl transition-all" style={{ border: `1.5px solid rgba(115,98,47,0.08)` }}>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4" style={{ background: b.color }}>
                    <Icon size={26} color={b.color === colors.yellow ? colors.darkOlive : 'white'} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{b.title}</h3>
                  <p className="leading-relaxed" style={{ opacity: 0.7 }}>{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === HOW IT WORKS === */}
      <section id="how" className="py-16 md:py-24" style={{ background: colors.bg }}>
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-bold mb-2" style={{ color: colors.olive }}>SE USA ASÍ DE FÁCIL</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Cuatro pasos y<br />
              <span style={{ color: colors.terracotta }}>la cena resuelta</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <div key={i} className="relative">
                <div className="bg-white rounded-3xl p-6 h-full">
                  <div className="text-5xl mb-3">{s.emoji}</div>
                  <p className="text-xs font-bold mb-2" style={{ color: colors.olive }}>{s.num}</p>
                  <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ opacity: 0.7 }}>{s.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight size={20} style={{ color: colors.olive }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === TESTIMONIALS === */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-bold mb-2" style={{ color: colors.terracotta }}>QUIÉN NOS ESTÁ ESPERANDO</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Personas como tú<br />
              <span style={{ color: colors.terracotta }}>que ya están dentro</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-3xl p-6 shadow-sm" style={{ border: `1.5px solid rgba(115,98,47,0.08)` }}>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} fill={colors.yellow} stroke={colors.yellow} />
                  ))}
                </div>
                <p className="mb-5 leading-relaxed italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center text-xl" style={{ background: colors.bg }}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-sm">{t.name}</p>
                    <p className="text-xs" style={{ opacity: 0.6 }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === SIGNUP === */}
      <section id="signup" className="py-16 md:py-28 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${colors.olive}, ${colors.darkOlive})` }}>
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full opacity-20" style={{ background: colors.yellow }}></div>
        <div className="absolute bottom-10 right-10 w-56 h-56 rounded-full opacity-15" style={{ background: colors.terracotta }}></div>

        <div className="max-w-3xl mx-auto px-4 md:px-8 relative">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-white bg-opacity-15 backdrop-blur">
              <Mail size={14} color="white" />
              <span className="text-xs font-bold text-white">SÉ DE LOS PRIMEROS EN PROBARLA</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Déjanos tu email<br />
              y te avisamos cuando esté
            </h2>
            <p className="text-base md:text-lg text-white opacity-90 max-w-xl mx-auto">
              Acceso anticipado, descuento de lanzamiento, y la posibilidad de decirnos qué te falta. Sin spam, prometido.
            </p>
          </div>

          {!submitted ? (
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl">
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                  placeholder="tu@email.com"
                  className="flex-1 px-5 py-4 rounded-2xl text-base focus:outline-none focus:ring-2 transition-all"
                  style={{ background: colors.bg, border: `2px solid transparent` }}
                />
                <button
                  onClick={handleSubmit}
                  disabled={!email || !email.includes('@')}
                  className="px-7 py-4 rounded-2xl font-bold text-white shadow-md hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ background: colors.terracotta }}
                >
                  Apuntarme
                </button>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center text-sm" style={{ color: colors.darkOlive, opacity: 0.7 }}>
                <span className="flex items-center gap-1.5">
                  <Check size={14} style={{ color: colors.olive }} /> Cero spam
                </span>
                <span className="flex items-center gap-1.5">
                  <Check size={14} style={{ color: colors.olive }} /> Te puedes ir cuando quieras
                </span>
                <span className="flex items-center gap-1.5">
                  <Check size={14} style={{ color: colors.olive }} /> Apuntarse es gratis
                </span>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-8 shadow-2xl text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: colors.olive }}>
                <Check size={32} color="white" strokeWidth={3} />
              </div>
              <h3 className="text-2xl font-bold mb-2">¡Ya estás dentro! ??</h3>
              <p style={{ opacity: 0.7 }}>Te avisamos cuando esté listo para probar. ¿Nos echas una mano y se lo cuentas a alguien?</p>
              <div className="flex justify-center gap-3 mt-5">
                <button className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: colors.bg }}>
                  <Instagram size={18} style={{ color: colors.darkOlive }} />
                </button>
                <button className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: colors.bg }}>
                  <Twitter size={18} style={{ color: colors.darkOlive }} />
                </button>
              </div>
            </div>
          )}

          <p className="text-center text-sm text-white opacity-70 mt-6">
            Ya somos <strong>{emailCount.toLocaleString('es')}</strong> esperando · Lanzamos en 2026
          </p>
        </div>
      </section>

      {/* === FAQ === */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-bold mb-2" style={{ color: colors.olive }}>LO QUE NOS PREGUNTÁIS</p>
            <h2 className="text-3xl md:text-5xl font-bold">¿Tienes alguna duda?</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden" style={{ border: `1.5px solid rgba(115,98,47,0.08)` }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left"
                >
                  <span className="font-bold">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className="transition-transform flex-shrink-0 ml-3"
                    style={{ color: colors.olive, transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0)' }}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 leading-relaxed" style={{ opacity: 0.75 }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm mb-3" style={{ opacity: 0.7 }}>¿Te queda alguna pregunta sin responder?</p>
            <a className="inline-flex items-center gap-2 font-bold cursor-pointer hover:underline" style={{ color: colors.terracotta }}>
              <Mail size={16} /> Escríbenos a hola@fridgetalks.app
            </a>
          </div>
        </div>
      </section>

      {/* === FOOTER === */}
      <footer className="py-10" style={{ background: colors.darkOlive }}>
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Logo size={24} accentColor={colors.yellow} />
              <span className="text-lg font-bold text-white">
                Fridge<span style={{ color: colors.yellow }}>Talks</span>
              </span>
            </div>
            <div className="flex gap-3">
              <a className="w-9 h-9 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition-all cursor-pointer">
                <Instagram size={16} color="white" />
              </a>
              <a className="w-9 h-9 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition-all cursor-pointer">
                <Twitter size={16} color="white" />
              </a>
              <a className="w-9 h-9 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition-all cursor-pointer">
                <Mail size={16} color="white" />
              </a>
            </div>
            <p className="text-xs text-white opacity-70">
              © 2026 Fridgetalks · Hecho con cariño en Barcelona ??
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ===== REALISTIC iPhone MOCKUP =====
function RealisticPhone({ colors, Logo, currentTime }) {
  return (
    <div className="relative" style={{ width: '300px', height: '610px' }}>
      {/* Outer frame with gradient (titanium effect) */}
      <div
        className="absolute inset-0 shadow-2xl"
        style={{
          background: 'linear-gradient(145deg, #2a2a2a 0%, #4a4a4a 50%, #1a1a1a 100%)',
          padding: '8px',
          borderRadius: '60px',
        }}
      >
        {/* Inner bezel */}
        <div
          className="w-full h-full overflow-hidden relative"
          style={{ background: '#000', borderRadius: '52px' }}
        >
          {/* Side buttons (volume + power, decorative) */}
          <div className="absolute left-[-10px] top-[110px] w-[3px] h-[28px] rounded-l-md" style={{ background: '#1a1a1a' }}></div>
          <div className="absolute left-[-10px] top-[160px] w-[3px] h-[55px] rounded-l-md" style={{ background: '#1a1a1a' }}></div>
          <div className="absolute left-[-10px] top-[230px] w-[3px] h-[55px] rounded-l-md" style={{ background: '#1a1a1a' }}></div>
          <div className="absolute right-[-10px] top-[180px] w-[3px] h-[80px] rounded-r-md" style={{ background: '#1a1a1a' }}></div>

          {/* Screen content */}
          <div className="w-full h-full relative" style={{ background: colors.bg }}>
            {/* Dynamic Island */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-30 w-[100px] h-[28px] rounded-full" style={{ background: '#000' }}></div>

            {/* Status bar */}
            <div className="absolute top-0 left-0 right-0 z-20 px-7 pt-3 pb-1 flex items-center justify-between">
              <span className="text-xs font-semibold" style={{ color: colors.darkOlive }}>{currentTime || '14:23'}</span>
              <div className="flex items-center gap-1">
                <Signal size={12} style={{ color: colors.darkOlive }} fill={colors.darkOlive} />
                <Wifi size={12} style={{ color: colors.darkOlive }} />
                <div className="flex items-center">
                  <div className="w-5 h-2.5 rounded-sm border" style={{ borderColor: colors.darkOlive }}>
                    <div className="w-[80%] h-full rounded-sm" style={{ background: colors.darkOlive }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* App content */}
            <div className="pt-12 h-full">
              <PhoneAppContent colors={colors} Logo={Logo} />
            </div>

            {/* Home indicator */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[100px] h-1 rounded-full bg-black opacity-30 z-30"></div>
          </div>
        </div>
      </div>

      {/* Glossy highlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 30%, transparent 70%, rgba(255,255,255,0.05) 100%)',
          borderRadius: '60px',
        }}
      ></div>
    </div>
  );
}

function PhoneAppContent({ colors, Logo }) {
  return (
    <div className="flex flex-col h-full" style={{ background: colors.bg }}>
      <div className="px-4 pt-3 pb-2">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Logo size={22} />
            <div>
              <p className="text-[9px] font-medium" style={{ color: colors.darkOlive, opacity: 0.7 }}>Hola, Valentino</p>
              <h1 className="text-base font-bold leading-tight" style={{ color: colors.darkOlive }}>
                Fridge<span style={{ color: colors.olive }}>Talks</span>
              </h1>
            </div>
          </div>
          <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: colors.yellow }}>
            <Heart size={12} style={{ color: colors.darkOlive }} />
          </div>
        </div>
      </div>

      <div className="px-4 mb-3">
        <div className="rounded-2xl p-3 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${colors.olive}, ${colors.darkOlive})` }}>
          <div className="absolute -right-3 -top-3 text-4xl opacity-20">??</div>
          <div className="relative">
            <p className="text-[8px] font-bold text-white opacity-90 mb-0.5">TU IMPACTO ESTA SEMANA</p>
            <p className="text-xl font-bold text-white">2,4 kg</p>
            <p className="text-[8px] text-white opacity-90">de comida salvada ??</p>
          </div>
        </div>
      </div>

      <div className="px-4 mb-3">
        <button className="w-full rounded-2xl p-3 flex items-center gap-2 shadow-sm" style={{ background: 'white', border: `1.5px solid ${colors.yellow}` }}>
          <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `linear-gradient(135deg, ${colors.olive}, ${colors.darkOlive})` }}>
            <Camera size={16} color="white" />
          </div>
          <div className="flex-1 text-left">
            <p className="font-bold text-xs" style={{ color: colors.darkOlive }}>Escanear nevera</p>
            <p className="text-[9px]" style={{ color: colors.darkOlive, opacity: 0.7 }}>¿Qué cocinamos hoy?</p>
          </div>
          <ArrowRight size={14} style={{ color: colors.darkOlive }} />
        </button>
      </div>

      <div className="px-4 mb-2 flex items-center justify-between">
        <p className="text-xs font-bold" style={{ color: colors.darkOlive }}>Sugerencias</p>
        <p className="text-[9px] font-bold" style={{ color: colors.olive }}>Ver todo</p>
      </div>

      <div className="px-4 flex gap-2 overflow-hidden mb-3">
        {[
          { emoji: '??', name: 'Shakshuka', time: '25 min', match: '95%', gradient: 'from-orange-300 to-red-400' },
          { emoji: '??', name: 'Tortilla', time: '20 min', match: '100%', gradient: 'from-yellow-300 to-green-400' },
          { emoji: '??', name: 'Pasta', time: '30 min', match: '75%', gradient: 'from-red-300 to-pink-400' },
        ].map((r, i) => (
          <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm flex-shrink-0" style={{ minWidth: '105px' }}>
            <div className={`h-16 bg-gradient-to-br ${r.gradient} relative flex items-center justify-center`}>
              <span className="text-3xl">{r.emoji}</span>
              <div className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded-full bg-white">
                <span className="text-[8px] font-bold" style={{ color: colors.olive }}>{r.match}</span>
              </div>
            </div>
            <div className="p-2">
              <p className="font-bold text-[10px]" style={{ color: colors.darkOlive }}>{r.name}</p>
              <p className="text-[9px]" style={{ color: colors.olive }}>? {r.time}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="px-4">
        <div className="rounded-2xl p-3 flex items-center gap-2" style={{ background: colors.terracotta }}>
          <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center text-base flex-shrink-0">??</div>
          <div className="flex-1">
            <p className="text-white font-bold text-[10px]">Consejo del día</p>
            <p className="text-white text-[9px] opacity-90">Aprovecha el calabacín maduro para cremas</p>
          </div>
        </div>
      </div>
    </div>
  );
}