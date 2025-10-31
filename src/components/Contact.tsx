import React from 'react';
import { MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/6283119226089?text=Halo,%20saya%20ingin%20berkonsultasi%20tentang%20pembuatan%20website%20untuk%20UMKM%20saya', '_blank');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:infojasaweb@unisgu.ac.id?subject=Konsultasi Jasa Website UMKM';
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Siap Mengembangkan <span className="text-blue-600">Bisnis Anda?</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Hubungi tim Jasa Website UMKM sekarang untuk konsultasi gratis dan dapatkan penawaran terbaik.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Hubungi Kami
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Tim kami siap membantu Anda dalam mewujudkan website profesional untuk bisnis UMKM Anda. Konsultasi gratis tanpa komitmen!
            </p>

            <div className="space-y-6">
              <button
                onClick={handleWhatsApp}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Chat via WhatsApp</span>
              </button>

              <button
                onClick={handleEmail}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-3"
              >
                <Mail className="w-6 h-6" />
                <span>Kirim Email</span>
              </button>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Telepon/WhatsApp</p>
                    <a href="tel:+6283119226089" className="text-blue-600 hover:text-blue-700">
                      +62 831-1922-6089
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a href="mailto:infojasaweb@unisgu.ac.id" className="text-blue-600 hover:text-blue-700">
                      infojasaweb@unisgu.ac.id
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Alamat</p>
                    <p className="text-gray-600">UNISGU, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-xl p-8 sm:p-10 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">
              Keuntungan Bekerja dengan Kami
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 rounded-lg p-2 flex-shrink-0">
                  <Check className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Konsultasi Gratis</h4>
                  <p className="text-blue-100">Diskusi kebutuhan website tanpa biaya di awal</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/20 rounded-lg p-2 flex-shrink-0">
                  <Check className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Garansi Revisi</h4>
                  <p className="text-blue-100">Revisi hingga Anda puas dengan hasilnya</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/20 rounded-lg p-2 flex-shrink-0">
                  <Check className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Pengerjaan Cepat</h4>
                  <p className="text-blue-100">Website selesai dalam 7-14 hari kerja</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/20 rounded-lg p-2 flex-shrink-0">
                  <Check className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Support Berkelanjutan</h4>
                  <p className="text-blue-100">Tim support siap membantu kapan saja</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/20 rounded-lg p-2 flex-shrink-0">
                  <Check className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Harga Transparan</h4>
                  <p className="text-blue-100">Tidak ada biaya tersembunyi</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/20 rounded-lg p-2 flex-shrink-0">
                  <Check className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Training Gratis</h4>
                  <p className="text-blue-100">Panduan lengkap cara mengelola website</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Check: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default Contact;
