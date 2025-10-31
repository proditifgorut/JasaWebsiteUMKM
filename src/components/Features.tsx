import React from 'react';
import { Smartphone, Search, Shield, Zap, Languages, HeadphonesIcon } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Responsif Mobile',
      description: 'Website tampil sempurna di semua perangkat - smartphone, tablet, dan desktop'
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: 'SEO Friendly',
      description: 'Dioptimalkan untuk mesin pencari agar mudah ditemukan calon pelanggan'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Keamanan Terjamin',
      description: 'SSL Certificate dan perlindungan data untuk kepercayaan pelanggan'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Loading Cepat',
      description: 'Performa optimal dengan waktu loading yang sangat cepat'
    },
    {
      icon: <Languages className="w-8 h-8" />,
      title: 'Multi Bahasa (Opsional)',
      description: 'Mendukung berbagai bahasa untuk menjangkau pasar lebih luas'
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8" />,
      title: 'Support Terbaik',
      description: 'Tim support kami siap membantu Anda kapan saja'
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Kenapa Memilih <span className="text-blue-600">Jasa Website UMKM?</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Kami menyediakan solusi lengkap dengan fitur-fitur terbaik untuk mendukung pertumbuhan bisnis Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-100"
            >
              <div className="bg-blue-100 text-blue-600 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
