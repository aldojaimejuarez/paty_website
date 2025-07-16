import React from 'react';
import { ArrowRight, Award, Users, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50 flex items-center pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Paty Zepeda
              </h2>
              <p className="text-xl text-gray-600">
                Abogada Especializada en Derecho Familiar y Corporativo
              </p>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Con más de 10 años de experiencia, ofrezco asesoría legal integral 
              con un enfoque personalizado y comprometido con la excelencia. 
              Tu tranquilidad legal es mi prioridad.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-rose-500 text-white px-8 py-3 rounded-lg hover:bg-rose-600 transition-colors flex items-center space-x-2 group">
                <span>Consulta Gratuita</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-rose-500 text-rose-500 px-8 py-3 rounded-lg hover:bg-rose-50 transition-colors">
                Ver Servicios
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <Award className="h-8 w-8 text-rose-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-800">10+</p>
                  <p className="text-sm text-gray-600">Años de Experiencia</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <Users className="h-8 w-8 text-rose-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-800">500+</p>
                  <p className="text-sm text-gray-600">Clientes Satisfechos</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <Clock className="h-8 w-8 text-rose-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-800">24/7</p>
                  <p className="text-sm text-gray-600">Disponibilidad</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-rose-200 to-orange-200 rounded-2xl p-8 transform rotate-3 shadow-xl">
              <div className="bg-white rounded-xl p-8 transform -rotate-3 shadow-lg">
                <img
                  src="https://images.pexels.com/photos/5668791/pexels-photo-5668791.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop"
                  alt="Paty Zepeda - Abogada"
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;