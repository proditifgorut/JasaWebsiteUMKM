import React from 'react';
import { Globe, TrendingUp, ShoppingCart } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/6283119226089?text=Halo,%20saya%20tertarik%20dengan%20jasa%20pembuatan%20website%20UMKM', '_blank');
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptLTQgMjhjLTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDQgNC0xLjc5IDQtNC0xLjc5LTQtNC00em0xNi0yOGMtMi4yMSAwLTQgMS43OS00IDRzMS43OSA0IDQgNCA0LTEuNzkgNC00LTEuNzktNC00LTR6bTAgMjhjLTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDQgNC0xLjc5IDQtNC0xLjc5LTQtNC00ek0xNiAxNmMtMi4yMSAwLTQgMS43OS00IDRzMS43OSA0IDQgNCA0LTEuNzkgNC00LTEuNzktNC00LTR6bTAgMjhjLTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDQgNC0xLjc5IDQtNC0xLjc5LTQtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 inline-block">
              <Globe className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Jasa Website UMKM Profesional<br className="hidden sm:block" />
            <span className="text-yellow-300">Tingkatkan Bisnis Anda</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100 leading-relaxed">
            Dapatkan website modern, cepat, dan responsif untuk menjangkau lebih banyak pelanggan dan meningkatkan penjualan.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={scrollToPricing}
              className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Lihat Paket Harga
            </button>
            <button
              onClick={handleWhatsApp}
              className="w-full sm:w-auto bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Konsultasi Gratis
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transform hover:scale-105 transition-all">
              <Globe className="w-10 h-10 mx-auto mb-3 text-yellow-300" />
              <h3 className="font-bold text-lg mb-2">Jangkauan Luas</h3>
              <p className="text-blue-100 text-sm">Website yang dapat diakses dari mana saja</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transform hover:scale-105 transition-all">
              <TrendingUp className="w-10 h-10 mx-auto mb-3 text-yellow-300" />
              <h3 className="font-bold text-lg mb-2">Tingkatkan Penjualan</h3>
              <p className="text-blue-100 text-sm">Fitur yang mendukung konversi pembeli</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transform hover:scale-105 transition-all">
              <ShoppingCart className="w-10 h-10 mx-auto mb-3 text-yellow-300" />
              <h3 className="font-bold text-lg mb-2">Harga Terjangkau</h3>
              <p className="text-blue-100 text-sm">Mulai dari 1 juta dengan fitur lengkap</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path fill="#f8fafc" fillOpacity="1" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
