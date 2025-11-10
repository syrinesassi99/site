import React, { useState, useEffect } from 'react';
import { Factory, Brain, TrendingUp, Cpu, Database, Zap, ArrowRight, Menu, X } from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Programmazione PLC & SCADA",
      description: "Sviluppo logiche di automazione (Siemens S7-1200/1500, TIA Portal, Step7). HMI & SCADA con interfacce intuitive.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: "Machine Revamping & Retrofit",
      description: "Aggiornamento macchine con nuove logiche di controllo, commissioning e testing completi.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Robot Integration & AI",
      description: "Programmazione robot (KUKA, ABB, Fanuc). Simulazione offline con RobotStudio e Process Simulate.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "AI-Powered Machine Vision",
      description: "Computer vision, tracciabilità prodotto, analisi qualità e deep learning per manutenzione predittiva.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Production Optimization",
      description: "Scheduling intelligente, energy saving, OEE improvement e Digital Twin per replicare processi produttivi.",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const values = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "Valorizzazione dei Dati",
      description: "Trasformiamo i dati macchina in capitale strategico attraverso analisi, predizione e ottimizzazione continua."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Soluzioni Agili",
      description: "Sviluppiamo soluzioni personalizzate e scalabili che evolvono insieme alle esigenze dei nostri clienti."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Industria 4.0 & IA",
      description: "Integriamo progressivamente tecnologie avanzate per creare una differenziazione competitiva duratura."
    }
  ];

  const stats = [
    { number: "100%", label: "Soluzioni Su Misura" },
    { number: "24/7", label: "Supporto Tecnico" },
    { number: "4.0", label: "Industria 4.0 Ready" },
    { number: "∞", label: "Innovazione Continua" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/95 backdrop-blur-lg shadow-lg shadow-cyan-500/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <img 
                src="/awd-logo.png" 
                alt="AWD Engineering Logo" 
                className="h-32 w-auto"
                style={{filter: 'drop-shadow(0 0 20px rgba(6, 182, 212, 0.6))'}}
              />
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#chisiamo" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium">Chi Siamo</a>
              <a href="#servizi" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium">Servizi</a>
              <a href="#valori" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium">I Nostri Valori</a>
              <a href="#contatti" className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all font-semibold">
                Contattaci
              </a>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-cyan-400">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-950/95 backdrop-blur-lg border-t border-cyan-500/20">
            <div className="px-4 py-6 space-y-4">
              <a href="#chisiamo" className="block text-slate-300 hover:text-cyan-400 font-medium">Chi Siamo</a>
              <a href="#servizi" className="block text-slate-300 hover:text-cyan-400 font-medium">Servizi</a>
              <a href="#valori" className="block text-slate-300 hover:text-cyan-400 font-medium">I Nostri Valori</a>
              <a href="#contatti" className="block px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-center font-semibold">
                Contattaci
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Glowing orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="mb-8 inline-block">
            <span className="px-6 py-3 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold tracking-wide">
              ⚡ Trasformazione Digitale Industriale
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Acceleriamo la Vostra
            <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent" style={{
              textShadow: '0 0 80px rgba(6, 182, 212, 0.5)'
            }}>
              Industria 4.0
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Soluzioni di automazione industriale che trasformano i dati in valore. 
            Automazione avanzata e ottimizzazione per l'industria manifatturiera del futuro.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a href="#servizi" className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all flex items-center gap-2">
              Scopri i Nostri Servizi
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contatti" className="px-8 py-4 border-2 border-cyan-500/50 rounded-full text-lg font-semibold hover:border-cyan-400 hover:bg-cyan-500/10 transition-all">
              Richiedi Consulenza
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/20">
                <div className="text-4xl font-bold text-cyan-400 mb-2" style={{textShadow: '0 0 20px rgba(6, 182, 212, 0.5)'}}>
                  {stat.number}
                </div>
                <div className="text-slate-300 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chi Siamo Section */}
      <section id="chisiamo" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 via-slate-950 to-blue-950/30"></div>
        
        {/* Animated tech lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.3) 2px, transparent 2px),
                              linear-gradient(90deg, rgba(6, 182, 212, 0.3) 2px, transparent 2px)`,
            backgroundSize: '100px 100px',
            animation: 'slide 20s linear infinite'
          }}></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Chi Siamo
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-8"></div>
          </div>

          {/* Histoire inspirante */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-3xl p-12 border border-cyan-500/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
              
              <div className="relative">
                <div className="text-6xl text-cyan-400 mb-6 opacity-50">"</div>
                <p className="text-2xl md:text-3xl text-white leading-relaxed mb-6 font-light italic">
                  Siamo ingegneri e sognatori. Crediamo che i dati industriali siano un capitale dormiente.
                </p>
                <p className="text-2xl md:text-3xl text-cyan-400 leading-relaxed font-semibold italic">
                  La nostra missione è risvegliarlo.
                </p>
                <div className="text-6xl text-cyan-400 text-right opacity-50">"</div>
              </div>
            </div>
          </div>

          {/* Team cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform">
                  <span className="text-4xl">👨‍💼</span>
                </div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">CEO</h3>
                <p className="text-lg text-slate-300 mb-4">Programmatore PLC</p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Esperto in logiche di automazione e gestione strategica aziendale
                </p>
              </div>
            </div>

            <div className="group relative bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform">
                  <span className="text-4xl">⚙️</span>
                </div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">Ingegnere</h3>
                <p className="text-lg text-slate-300 mb-4">Automatismo</p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Specialista in sistemi di controllo e automazione industriale
                </p>
              </div>
            </div>

            <div className="group relative bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform">
                  <span className="text-4xl">💻</span>
                </div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">Ingegnere</h3>
                <p className="text-lg text-slate-300 mb-4">Digitalizzazione & Automazione</p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Esperto in trasformazione digitale e soluzioni Industry 4.0
                </p>
              </div>
            </div>
          </div>

          {/* Vision statement */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-slate-900/50 backdrop-blur-sm rounded-2xl px-8 py-6 border border-cyan-500/20">
              <p className="text-xl text-slate-300 leading-relaxed">
                <span className="text-cyan-400 font-semibold">Insieme</span>, trasformiamo la complessità industriale in 
                <span className="text-cyan-400 font-semibold"> opportunità digitali</span>
              </p>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes slide {
            0% { transform: translate(0, 0); }
            100% { transform: translate(100px, 100px); }
          }
        `}</style>
      </section>

      {/* Values Section */}
      <section id="valori" className="py-24 bg-slate-950/50 backdrop-blur-sm relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              La Nostra Visione
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Tre pilastri fondamentali guidano ogni nostra soluzione
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group relative bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-cyan-500/30">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-cyan-400">{value.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servizi" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/30 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              I Nostri Servizi
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Soluzioni complete per l'automazione e la trasformazione digitale
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                onMouseEnter={() => setActiveService(index)}
                className={`group relative bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 cursor-pointer ${
                  activeService === index 
                    ? 'border-cyan-500 shadow-2xl shadow-cyan-500/30 scale-105' 
                    : 'border-cyan-500/20 hover:border-cyan-500/40'
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`}></div>
                
                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform shadow-lg`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-300 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <div className="flex items-center text-cyan-400 font-semibold group-hover:gap-2 transition-all">
                    Scopri di più
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contatti" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-transparent to-blue-900/20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.2) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(6, 182, 212, 0.2) 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronti per la Trasformazione Digitale?
          </h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Contattateci per scoprire come possiamo ottimizzare i vostri processi produttivi 
            con soluzioni su misura di automazione, robotica e intelligenza artificiale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@awdengineering.it" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all">
              Richiedi Consulenza Gratuita
            </a>
            <a href="tel:+39123456789" className="px-8 py-4 border-2 border-cyan-500/50 rounded-full text-lg font-semibold hover:border-cyan-400 hover:bg-cyan-500/10 transition-all">
              Chiamaci Ora
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950/80 backdrop-blur-sm border-t border-cyan-500/20 py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img 
                src="/awd-logo.png" 
                alt="AWD Engineering Logo" 
                className="h-20 w-auto mb-4"
                style={{filter: 'drop-shadow(0 0 15px rgba(6, 182, 212, 0.5))'}}
              />
              <p className="text-slate-400 text-sm leading-relaxed">
                Automazione industriale con sede a Milano.

                Partner affidabile per la trasformazione digitale.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-cyan-400">Servizi</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Programmazione PLC</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Machine Revamping</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Robot Integration</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">AI & Machine Vision</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Production Optimization</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-cyan-400">Contatti</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>📍 Sede legale: Via G. Rossini 15, 20017, Rho (MI)</li>
                <li className="hover:text-cyan-400 transition-colors">✉️ info@awd-engineering.com</li>
                <li className="hover:text-cyan-400 transition-colors">📞 +39 123 456 789</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-cyan-500/20 pt-8 text-center text-sm text-slate-400">
            <p>&copy; 2025 AWD Engineering. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}