import React from 'react';
import { Scale, Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Scale className="h-8 w-8 text-rose-400" />
              <div>
                <h3 className="text-xl font-bold">Paty Zepeda</h3>
                <p className="text-gray-400">Abogada</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Comprometida con la excelencia legal y el servicio personalizado 
              para cada uno de mis clientes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-rose-400 transition-colors">Derecho Familiar</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Derecho Corporativo</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Derecho Civil</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Litigio</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Derecho Laboral</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Derecho Penal</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Productos</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-rose-400 transition-colors">Guías Legales</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Plantillas</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Cursos Online</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Consultorías</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+52 55 1234 5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>paty@zepeda.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span>
                  Av. Insurgentes Sur 1234<br />
                  Col. Del Valle, CDMX
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Paty Zepeda. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;