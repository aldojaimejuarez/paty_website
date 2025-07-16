import React from 'react';
import { ShoppingCart, Star, Download, Book, FileText, Video } from 'lucide-react';

const Products: React.FC = () => {
  const products = [
    {
      id: 1,
      title: 'Guía Completa de Divorcios',
      description: 'Manual paso a paso para procesos de divorcio en México.',
      price: 299,
      originalPrice: 399,
      rating: 4.9,
      reviews: 127,
      image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      type: 'digital',
      icon: <Book className="h-5 w-5" />
    },
    {
      id: 2,
      title: 'Plantillas de Contratos Laborales',
      description: 'Pack de 20 plantillas editables para contratos de trabajo.',
      price: 199,
      originalPrice: 249,
      rating: 4.8,
      reviews: 89,
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      type: 'digital',
      icon: <FileText className="h-5 w-5" />
    },
    {
      id: 3,
      title: 'Curso: Constitución de Empresas',
      description: 'Video curso completo sobre cómo constituir una empresa.',
      price: 599,
      originalPrice: 799,
      rating: 4.9,
      reviews: 156,
      image: 'https://images.pexels.com/photos/7688340/pexels-photo-7688340.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      type: 'course',
      icon: <Video className="h-5 w-5" />
    },
    {
      id: 4,
      title: 'Testamento Fácil',
      description: 'Guía práctica para redactar testamentos válidos.',
      price: 149,
      originalPrice: 199,
      rating: 4.7,
      reviews: 73,
      image: 'https://images.pexels.com/photos/8111763/pexels-photo-8111763.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      type: 'digital',
      icon: <FileText className="h-5 w-5" />
    },
    {
      id: 5,
      title: 'Mediación Familiar Exitosa',
      description: 'Técnicas y estrategias para resolver conflictos familiares.',
      price: 399,
      originalPrice: 499,
      rating: 4.8,
      reviews: 94,
      image: 'https://images.pexels.com/photos/7688047/pexels-photo-7688047.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      type: 'course',
      icon: <Video className="h-5 w-5" />
    },
    {
      id: 6,
      title: 'Derechos Laborales MX',
      description: 'Todo lo que necesitas saber sobre derechos laborales.',
      price: 249,
      originalPrice: 299,
      rating: 4.9,
      reviews: 112,
      image: 'https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      type: 'digital',
      icon: <Book className="h-5 w-5" />
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Productos Digitales
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Accede a recursos legales especializados para resolver tus dudas 
            jurídicas de manera rápida y efectiva.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {product.type === 'digital' ? 'Digital' : 'Curso'}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-2">
                  {product.icon}
                  <span className="ml-2 text-sm text-gray-600 capitalize">
                    {product.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {product.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>
                
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">
                    {product.rating} ({product.reviews} reseñas)
                  </span>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-800">
                      ${product.price}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  </div>
                  <div className="bg-rose-100 text-rose-600 px-2 py-1 rounded text-sm font-medium">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </div>
                </div>
                
                <button className="w-full bg-rose-500 text-white py-3 rounded-lg hover:bg-rose-600 transition-colors flex items-center justify-center space-x-2 group">
                  <ShoppingCart className="h-4 w-4" />
                  <span>Comprar Ahora</span>
                  <Download className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-white rounded-lg p-6 shadow-sm inline-block">
            <p className="text-gray-600 mb-2">
              ¿Necesitas algo específico?
            </p>
            <button className="text-rose-500 hover:text-rose-600 font-medium">
              Solicitar producto personalizado
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;