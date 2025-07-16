import React from 'react';
import { ShoppingCart, Star, Download, Book, FileText, Video } from 'lucide-react';

const Products: React.FC = () => {
  const products = [
    {
      id: 1,
      title: 'Tips Notariales para Agentes Inmobiliarios',
      description: `Lo que todo asesor debe saber para cerrar operaciones sin sorpresas\nEste eBook es una guía práctica, clara y directa que te explica lo que el notario sí revisa y lo que puede frenar una firma, para que no pierdas tiempo, comisiones ni clientes.\n¿Qué papeles sí o sí debes pedir antes de llevar a tu cliente a la notaría?\n¿Qué errores te pueden costar una firma cancelada?\n¿Qué trámites puedes prevenir desde la promesa o la oferta?\n¿Cómo comparar cotizaciones de distintas notarias?\nCon ejemplos, tips útiles y lenguaje sin enredos, este eBook se convertirá en tu manual de confianza para cada cierre.`,
      price: 299,
      originalPrice: 399,
      rating: 4.9,
      reviews: 127,
      image: './images/tips_notariales.jpg',
      type: 'digital',
      icon: <Book className="h-5 w-5" />
    },
    {
      id: 2,
      title: 'Checklist para vender tu propiedad (sin que el notario te regrese por papeles)',
      description: `La lista definitiva para llegar con todo a la notaría y evitar regresos innecesarios\nVas a vender tu propiedad y no sabes por dónde empezar...\nEste checklist práctico te dice exactamente qué documentos necesitas reunir, cómo deben estar y qué revisar antes de llevarlo a notaría.\nEs una guía directa, sin lenguaje complicado, hecha por quien ve todos los días cómo se frenan ventas por “papelitos” que nadie explicó.`,
      price: 199,
      originalPrice: 249,
      rating: 4.8,
      reviews: 89,
      image: './images/checklist_para_vender_tu_casa.jpg',
      type: 'digital',
      icon: <FileText className="h-5 w-5" />
    },
    {
      id: 3,
      title: 'Guia básica para comprar tu casa, depa o terreno habitacional',
      description: `Comprar una propiedad no debería ser un volado…\nEsta guía te explica, paso a paso, qué revisar, qué documentos pedir, y cómo proteger tu dinero desde la primera conversación hasta el cierre en notaría.`,
      price: 599,
      originalPrice: 799,
      rating: 4.9,
      reviews: 156,
      image: './images/guia_comprar_casa.jpg',
      type: 'course',
      icon: <Video className="h-5 w-5" />
    },
    {
      id: 4,
      title: 'GUIA PARA COMPARAR COTIZACIONES NOTARIALES',
      description: `Aprende a leer entre líneas, detectar trucos comunes y tomar una decisión con seguridad\nCuando pides cotizaciones en varias notarías, muchas veces no sabes qué incluyen, qué no, o por qué una parece más cara que otra. Esta guía te explica con peras y manzanas cómo leer cada rubro, qué debes preguntar sí o sí, y cómo evitar que te den gato por liebre.`,
      price: 149,
      originalPrice: 199,
      rating: 4.7,
      reviews: 73,
      image: './images/guia_cotizaciones.jpg',
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
    <section className="relative py-24 bg-gradient-to-br from-rose-50 via-pink-50 to-orange-100 overflow-hidden">
      {/* Blobs decorativos */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-rose-200 opacity-20 rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-200 opacity-20 rounded-full blur-3xl z-0" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4 tracking-tight drop-shadow-lg animate-fade-in-up">Productos Digitales</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Accede a recursos legales especializados para resolver tus dudas jurídicas de manera rápida y efectiva.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.slice(0, 4).map((product, idx) => (
            <div
              key={product.id}
              className="group bg-white/80 rounded-3xl shadow-2xl hover:shadow-rose-200 transition-all duration-300 hover:-translate-y-2 flex flex-col overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${0.1 * idx}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110 rounded-t-3xl border-b-4 border-rose-100"
                />
                <div className="absolute top-4 left-4 bg-rose-500 text-white px-4 py-1 rounded-full text-xs font-semibold shadow-lg uppercase tracking-wider">
                  {product.type === 'digital' ? 'Digital' : 'Curso'}
                </div>
              </div>
              <div className="flex-1 flex flex-col p-7">
                <h3 className="text-lg font-bold text-gray-800 mb-2 tracking-tight group-hover:text-rose-500 transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>
                <div className="flex items-center gap-2 mb-4 mt-auto">
                  <span className="text-2xl font-bold text-gray-800">${product.price}</span>
                  <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                  <span className="bg-rose-100 text-rose-600 px-2 py-1 rounded text-xs font-medium ml-auto">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </span>
                </div>
                {(idx === 0 || idx === 1) ? (
                  <a
                    href="https://hotmart.com/es/marketplace/productos/checklist-para-vender-tu-propiedad-sin-que-el-notario-te-regrese-por-papeles/K100575031I"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-rose-500 hover:bg-rose-600 text-white py-3 rounded-xl font-bold shadow-lg transition-all duration-300 flex items-center justify-center gap-2 mt-2 text-base group"
                  >
                    <span>Comprar Ahora</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </a>
                ) : idx === 2 ? (
                  <a
                    href="https://pay.hotmart.com/B100646364G?bid=1752645880721"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-rose-500 hover:bg-rose-600 text-white py-3 rounded-xl font-bold shadow-lg transition-all duration-300 flex items-center justify-center gap-2 mt-2 text-base group"
                  >
                    <span>Comprar Ahora</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </a>
                ) : (
                  <button className="w-full bg-rose-500 hover:bg-rose-600 text-white py-3 rounded-xl font-bold shadow-lg transition-all duration-300 flex items-center justify-center gap-2 mt-2 text-base group">
                    <span>Comprar Ahora</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
        .delay-200 { animation-delay: 0.2s; }
      `}</style>
    </section>
  );
};

export default Products;