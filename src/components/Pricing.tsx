import React from 'react';
import { Check, Star } from 'lucide-react';

const Pricing: React.FC = () => {
  const handleWhatsApp = (packageName: string) => {
    const message = `Halo, saya tertarik dengan paket ${packageName} dari Jasa Website UMKM. Mohon informasi lebih lanjut.`;
    window.open(`https://wa.me/6283119226089?text=${encodeURIComponent(message)}`, '_blank');
  };

  const pricingPlans = [
    {
      name: 'Starter',
      price: '1',
      priceSuffix: 'Juta',
      description: 'Cocok untuk UMKM yang baru memulai digitalisasi',
      popular: false,
      features: [
        'Desain Modern & Profesional',
        'Maksimal 5 Halaman',
        'Responsif (Mobile, Tablet, Desktop)',
        'Katalog Produk (max 20 produk)',
        'Formulir Kontak',
        'Integrasi WhatsApp',
        'SEO Dasar',
        'Hosting 1 Tahun',
        'Domain .com/.id (1 tahun)',
        'SSL Certificate',
        'Support 3 Bulan'
      ]
    },
    {
      name: 'Professional',
      price: '2.5',
      priceSuffix: 'Juta',
      description: 'Untuk UMKM yang ingin tumbuh lebih serius',
      popular: true,
      features: [
        'Semua fitur Paket Starter',
        'Maksimal 10 Halaman',
        'Katalog Produk (max 50 produk)',
        'Multi Bahasa (Opsional)',
        'Galeri Foto & Video',
        'Blog/Artikel',
        'Testimoni Pelanggan',
        'Google Maps Integration',
        'SEO Advanced',
        'Email Profesional (5 akun)',
        'Support 6 Bulan',
        'Gratis Revisi Minor'
      ]
    },
    {
      name: 'Enterprise',
      price: '5',
      priceSuffix: 'Juta',
      description: 'Solusi lengkap untuk bisnis yang siap berskala besar',
      popular: false,
      features: [
        'Semua fitur Paket Professional',
        'Halaman Unlimited',
        'Katalog Produk Unlimited',
        'Fitur E-Commerce Dasar',
        'Payment Gateway (Opsional)',
        'Dashboard Admin',
        'Advanced Analytics',
        'Live Chat Feature',
        'Email Profesional (10 akun)',
        'Priority Support 1 Tahun',
        'Free Maintenance 3 Bulan',
        'Training Penggunaan Website'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Paket Harga Fleksibel, <span className="text-blue-600">Mulai dari 1 Juta</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Pilih paket yang paling sesuai dengan kebutuhan dan anggaran bisnis UMKM Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl shadow-lg ${
                plan.popular
                  ? 'bg-gradient-to-b from-blue-600 to-blue-700 text-white transform lg:scale-105 border-4 border-blue-500'
                  : 'bg-white text-gray-900 border border-gray-200'
              } overflow-hidden hover:shadow-2xl transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-yellow-400 text-blue-900 px-4 py-1 rounded-bl-lg font-bold text-sm flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current" />
                  POPULER
                </div>
              )}
              
              <div className="p-6 sm:p-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className={`text-3xl sm:text-4xl font-bold ${plan.popular ? 'text-white' : 'text-blue-600'}`}>
                      Rp
                    </span>
                    <span className={`text-4xl sm:text-5xl font-bold ${plan.popular ? 'text-white' : 'text-blue-600'}`}>
                      {plan.price}
                    </span>
                    <span className={`text-2xl ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                      {plan.priceSuffix}
                    </span>
                  </div>
                  <p className={`text-sm mt-1 ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                    Pembayaran satu kali
                  </p>
                </div>

                <button
                  onClick={() => handleWhatsApp(plan.name)}
                  className={`w-full py-4 px-6 rounded-lg font-bold text-lg mb-6 transform hover:scale-105 transition-all duration-200 ${
                    plan.popular
                      ? 'bg-yellow-400 hover:bg-yellow-500 text-blue-900 shadow-lg hover:shadow-xl'
                      : 'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg'
                  }`}
                >
                  Pilih Paket Ini
                </button>

                <div className="space-y-3">
                  <p className={`font-semibold mb-3 text-sm ${plan.popular ? 'text-blue-100' : 'text-gray-700'}`}>
                    Fitur yang didapatkan:
                  </p>
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-yellow-300' : 'text-green-500'}`} />
                      <span className={`text-sm ${plan.popular ? 'text-white' : 'text-gray-700'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Butuh paket custom sesuai kebutuhan unik bisnis Anda?
          </p>
          <button
            onClick={() => handleWhatsApp('Custom')}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Hubungi Kami untuk Paket Custom
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
