import React from 'react';
import { Mail, Github, Linkedin, Globe, MapPin, Phone, Instagram } from 'lucide-react';

const CVDocument = () => {
  return (
    <div className="bg-white text-slate-800 p-6 md:p-16 w-full max-w-[210mm] mx-auto shadow-2xl font-['Outfit'] min-h-screen" id="cv-content">
      {/* Header */}
      <header className="border-b-4 border-blue-600 pb-6 md:pb-8 mb-8 md:mb-10 flex justify-between items-start gap-4">
        <div className="flex-1">
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-slate-900 uppercase leading-tight">Muhammad Jaja Maulana</h1>
          <h2 className="text-sm md:text-xl text-blue-600 font-semibold mt-1 md:mt-2">Full-Stack Developer & Innovation Specialist</h2>
          <div className="flex flex-col sm:flex-row flex-wrap gap-2 md:gap-4 mt-4 text-[10px] md:text-sm text-slate-500 font-medium">
            <span className="flex items-center gap-1"><Mail size={12} className="md:w-3.5 md:h-3.5" /> bochilandi85@gmail.com</span>
            <span className="flex items-center gap-1"><Phone size={12} className="md:w-3.5 md:h-3.5" /> +62 858-6193-0794</span>
            <span className="flex items-center gap-1"><MapPin size={12} className="md:w-3.5 md:h-3.5" /> Ciamis, Jawa Barat</span>
          </div>
        </div>
        <div className="flex-shrink-0">
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border-2 border-blue-100 p-0.5 md:p-1">
             <img src="/assets/avatar.png" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {/* Left Column */}
        <div className="space-y-8 md:space-y-10">
          <section>
            <h3 className="text-xs md:text-sm font-black uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-2 mb-4">Contact</h3>
            <ul className="space-y-3 text-xs md:text-sm">
              <li className="flex items-center gap-3">
                <Github size={16} className="text-blue-600" />
                <a href="https://github.com/kaito205" className="hover:text-blue-600 transition-colors truncate">github.com/kaito205</a>
              </li>
              <li className="flex items-center gap-3">
                <Linkedin size={16} className="text-blue-600" />
                <a href="https://linkedin.com/in/muhammad-jaja-maulana" className="hover:text-blue-600 transition-colors truncate">linkedin.com/in/majmu</a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram size={16} className="text-blue-600" />
                <span>@majmu.io</span>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xs md:text-sm font-black uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-2 mb-4">Core Skills</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'Laravel', 'PHP', 'Node.js', 'Tailwind CSS', 'MySQL', 'PostgreSQL', 'Java', 'Git'].map(skill => (
                <span key={skill} className="px-2 py-1 bg-slate-100 text-slate-700 text-[9px] md:text-[10px] font-bold rounded uppercase">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-xs md:text-sm font-black uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-2 mb-4">Education</h3>
            <div className="space-y-4">
              <div>
                <p className="font-bold text-slate-800 text-sm md:text-base">Informatics Engineering</p>
                <p className="text-[10px] md:text-xs text-slate-500 italic uppercase">STMIK MARDIRA INDONESIA</p>
                <p className="text-[10px] md:text-xs text-blue-600 font-bold mt-1">2023 — 2025 (Semester 5)</p>
              </div>
              <div>
                <p className="font-bold text-slate-800 text-sm md:text-base">Science Program</p>
                <p className="text-[10px] md:text-xs text-slate-500 italic uppercase">SMA ERHA Jatinagara</p>
                <p className="text-[10px] md:text-xs text-slate-400 font-bold mt-1">2020 — 2023</p>
              </div>
              <div>
                <p className="font-bold text-slate-800 text-sm md:text-base">Junior High School</p>
                <p className="text-[10px] md:text-xs text-slate-500 italic uppercase">MTs Riyadlul Hidayah Al-Munawarah</p>
                <p className="text-[10px] md:text-xs text-slate-400 font-bold mt-1">2017 — 2020</p>
              </div>
              <div>
                <p className="font-bold text-slate-800 text-sm md:text-base">Elementary School</p>
                <p className="text-[10px] md:text-xs text-slate-500 italic uppercase">SDN 1 Sukanagara</p>
                <p className="text-[10px] md:text-xs text-slate-400 font-bold mt-1">2011 — 2017</p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xs md:text-sm font-black uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-2 mb-4">Languages</h3>
            <ul className="space-y-2 text-xs md:text-sm">
              <li className="flex justify-between"><span>Indonesia</span> <span className="text-blue-600 font-bold">Native</span></li>
              <li className="flex justify-between"><span>English</span> <span className="text-slate-400">Professional</span></li>
            </ul>
          </section>
        </div>

        {/* Right Column */}
        <div className="md:col-span-2 space-y-8 md:space-y-10">
          <section>
            <h3 className="text-xs md:text-sm font-black uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-2 mb-4">Profile</h3>
            <p className="text-xs md:text-sm leading-relaxed text-slate-600">
              Seorang pengembang Full-Stack yang berdedikasi tinggi dengan fokus pada penciptaan pengalaman digital yang mulus dan efisien. Memiliki keahlian mendalam dalam ekosistem React dan Laravel, serta berpengalaman dalam membangun sistem manajemen data yang kompleks dan antarmuka pengguna yang memukau. Berkomitmen untuk terus belajar dan menerapkan teknologi terbaru guna memberikan solusi digital yang inovatif.
            </p>
          </section>

          <section>
            <h3 className="text-xs md:text-sm font-black uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-2 mb-4">Featured Projects</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-start mb-1 gap-2">
                  <h4 className="font-bold text-slate-800 uppercase text-sm md:text-base">Smart IoT Plant Watering</h4>
                  <span className="text-[8px] md:text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 font-bold rounded flex-shrink-0">ARDUINO ESP + LARAVEL</span>
                </div>
                <p className="text-[10px] md:text-xs text-slate-600 leading-relaxed">
                  Sistem penyiraman tanaman otomatis berbasis IoT menggunakan ESP32/ESP8266 yang terhubung dengan dashboard Laravel untuk monitoring kelembapan tanah secara real-time.
                </p>
              </div>
              <div>
                <div className="flex justify-between items-start mb-1 gap-2">
                  <h4 className="font-bold text-slate-800 uppercase text-sm md:text-base">PPDB Management System</h4>
                  <span className="text-[8px] md:text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 font-bold rounded flex-shrink-0">LARAVEL + REACT</span>
                </div>
                <p className="text-[10px] md:text-xs text-slate-600 leading-relaxed">
                  Mengembangkan sistem penerimaan siswa baru terintegrasi yang menangani pendaftaran, validasi dokumen, dan manajemen database secara real-time untuk SMA ERHA Jatinagara.
                </p>
              </div>
              <div>
                <div className="flex justify-between items-start mb-1 gap-2">
                  <h4 className="font-bold text-slate-800 uppercase text-sm md:text-base">Advanced HealthCare System</h4>
                  <span className="text-[8px] md:text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 font-bold rounded flex-shrink-0">LARAVEL + MYSQL</span>
                </div>
                <p className="text-[10px] md:text-xs text-slate-600 leading-relaxed">
                  Digitalisasi rekam medis dan manajemen janji temu dokter yang aman dan terenkripsi, mempermudah akses data pasien bagi tenaga medis.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xs md:text-sm font-black uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-2 mb-4">Work Philosophy</h3>
            <p className="text-xs md:text-sm italic leading-relaxed text-slate-500">
              "Mastering the Art of Invisible Code. Membangun arsitektur yang mulus, efisien, dan memiliki kekuatan yang misterius di balik layar demi pengalaman digital yang terasa seperti keajaiban."
            </p>
          </section>
        </div>
      </div>

      <footer className="mt-12 md:mt-16 pt-8 border-t border-slate-100 text-center text-slate-400 text-[8px] md:text-[10px] uppercase tracking-widest leading-loose">
        Generated via MAJMU Official Portfolio — 2025
      </footer>
    </div>
  );
};

export default CVDocument;
