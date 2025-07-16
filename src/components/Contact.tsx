import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  Calendar,
  MessageCircle
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Mensaje enviado. Te contactaremos pronto.');
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      asunto: '',
      mensaje: ''
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Contacto
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estoy aquí para ayudarte. Agenda una consulta gratuita o 
            envíame un mensaje con tu consulta legal.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Envíame un mensaje
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tipo de consulta
                    </label>
                    <select
                      name="asunto"
                      value={formData.asunto}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      required
                    >
                      <option value="">Seleccionar...</option>
                      <option value="familiar">Derecho Familiar</option>
                      <option value="corporativo">Derecho Corporativo</option>
                      <option value="civil">Derecho Civil</option>
                      <option value="laboral">Derecho Laboral</option>
                      <option value="penal">Derecho Penal</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    placeholder="Describe tu situación legal..."
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-rose-500 text-white py-3 rounded-lg hover:bg-rose-600 transition-colors flex items-center justify-center space-x-2 group"
                >
                  <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  <span>Enviar mensaje</span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Información de contacto
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-rose-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Teléfono</h4>
                    <p className="text-gray-600">+52 55 1234 5678</p>
                    <p className="text-gray-600">+52 55 8765 4321</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-rose-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">paty@zepeda.com</p>
                    <p className="text-gray-600">contacto@zepeda.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-rose-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Dirección</h4>
                    <p className="text-gray-600">
                      Av. Insurgentes Sur 1234<br />
                      Col. Del Valle, CDMX<br />
                      CP 03100
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-rose-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Horarios</h4>
                    <p className="text-gray-600">
                      Lunes a Viernes: 9:00 - 18:00<br />
                      Sábado: 9:00 - 14:00<br />
                      Domingo: Cerrado
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <button className="bg-rose-500 text-white p-6 rounded-lg hover:bg-rose-600 transition-colors text-center group">
                <Calendar className="h-8 w-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <span className="font-medium">Agendar Cita</span>
              </button>
              <button className="bg-gray-100 text-gray-800 p-6 rounded-lg hover:bg-gray-200 transition-colors text-center group">
                <MessageCircle className="h-8 w-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <span className="font-medium">Chat WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;