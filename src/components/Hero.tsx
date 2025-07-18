import React from 'react';
import { ArrowRight, Award, Users, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen bg-background flex items-center pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Imagen primero en móviles */}
          <div className="relative order-1 lg:order-none mb-8 lg:mb-0">
            <div className="bg-gradient-to-br from-accent to-secondary rounded-2xl p-4 transform rotate-3 shadow-xl w-64 h-96 sm:w-80 sm:h-[28rem] lg:w-[32rem] lg:h-[48rem] flex items-center justify-center mx-auto">
              <div className="bg-white rounded-xl p-2 transform -rotate-3 shadow-lg w-full h-full flex items-center justify-center">
                <img
                  src="./images/paty_zepeda.png"
                  alt="Paty Zepeda - Abogada"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
          {/* Texto debajo de la imagen en móviles */}
          <div className="space-y-8 order-2 lg:order-none">
            <div className="space-y-4">
              <h2 className="text-5xl lg:text-6xl font-bold text-text leading-tight animate-fade-in-up">Paty Zepeda</h2>
              <p className="text-xl text-secondary animate-fade-in-up delay-200">Abogada Especializada en Derecho Preventivo,con experiencia en Derecho Notarial, Civil, Mercantil, Patrimonial, American Law, Inteligencia Artificial y LegalTech.</p>
            </div>
            
            <p className="text-lg text-text leading-relaxed">
            Me dedico a traducir lo legal a un lenguaje claro, útil y directo, para que puedas proteger tu patrimonio, tus contratos y tus decisiones, sin complicarte con tecnicismos.
            </p>
            
            <p className="text-lg text-text leading-relaxed">
            Fundé Tecito Notarial para acercar el Derecho a quienes construyen el país desde la vida real: personas que compran, venden, emprenden, invierten, heredan o simplemente quieren hacer las cosas bien desde el día uno.
            </p>

            <p className="text-lg text-text leading-relaxed">
            Actualmente soy directora jurídica en la Notaría 16, una de las más influyentes de Querétaro, y asesoro a empresas nacionales e internacionales en operaciones legales clave.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#servicios" className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-secondary transition-colors flex items-center space-x-2 group">
                <span>Asesoría</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#productos" className="border border-primary text-primary px-8 py-3 rounded-lg hover:bg-accent transition-colors">
                Ver Productos
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-text">10+</p>
                  <p className="text-sm text-secondary">Años de Experiencia</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-text">500+</p>
                  <p className="text-sm text-secondary">Clientes Satisfechos</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;