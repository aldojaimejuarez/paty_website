import React from 'react';
import { 
  Heart, 
  Building, 
  FileText, 
  Gavel, 
  Users, 
  Shield,
  ArrowRight
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [

    {
      icon: <Building className="h-8 w-8 text-primary" />,
      title: 'Derecho Corporativo',
      description: 'Constitución de empresas, contratos comerciales y asesoría empresarial.',
      features: ['Constitución', 'Contratos', 'Fusiones', 'Compliance']
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: 'Derecho Civil',
      description: 'Contratos civiles, testamentos, sucesiones y propiedad.',
      features: ['Testamentos', 'Sucesiones', 'Contratos', 'Propiedad']
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: 'Derecho Penal',
      description: 'Defensa penal, amparos y asesoría en procesos penales.',
      features: ['Defensa', 'Amparos', 'Delitos', 'Procesos']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text mb-4">
            Servicios Especializados
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Ofrezco asesoría legal integral en diversas áreas del derecho, 
            siempre con un enfoque personalizado y profesional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-accent to-secondary rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="mb-6">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-black mb-3">
                {service.title}
              </h3>
              
              <p className="text-black mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-black">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="text-white hover:text-secondary font-medium flex items-center group-hover:translate-x-1 transition-transform">
                Más información
                <ArrowRight className="h-4 w-4 ml-2" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;