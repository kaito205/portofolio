import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Mail, 
  ChevronRight,
  Send,
  Zap,
  Sword,
  Sparkles,
  Gem,
  Moon,
  Library,
  Pocket, 
  Cpu,
  FileUser,
  CreditCard,
  Quote,
  Volume2,
  VolumeX,
  Code2,
  Database,
  Globe,
  Layers,
  Smartphone,
  Terminal,
  Monitor,
  Coffee,
  MessageCircle
} from 'lucide-react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef(null);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => console.log("Music play blocked by browser. Please interact with the page first."));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-10 right-10 z-[2000] flex items-center gap-4">
      <audio ref={audioRef} loop src="/assets/kaito-theme.mp3" />
      
      <AnimatePresence>
        {isPlaying && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="bg-white/5 backdrop-blur-md border kaito-border px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-400 flex items-center gap-2"
          >
            <div className="flex gap-1">
              {[1, 2, 3, 4].map(i => (
                <motion.div 
                  key={i}
                  animate={{ height: [4, 12, 4] }}
                  transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                  className="w-1 bg-blue-500 rounded-full"
                />
              ))}
            </div>
            Now Playing: Kaito's Theme
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleMusic}
        className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:bg-blue-600 hover:text-white transition-colors relative group"
      >
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
        <div className="absolute inset-0 rounded-full border-2 border-white/20 scale-125 animate-ping opacity-20 pointer-events-none"></div>
      </motion.button>
    </div>
  );
};

const Preloader = ({ finishLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      finishLoading();
    }, 3500);
    return () => clearTimeout(timer);
  }, [finishLoading]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-[#020617] flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.1)_0%,transparent_70%)]"></div>
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center"
      >
        <div className="relative w-24 h-36 mb-12 preserve-3d">
            <motion.div 
                animate={{ 
                    rotateY: [0, 180, 360, 540, 720],
                    y: [0, -20, 0]
                }}
                transition={{ 
                    duration: 3, 
                    ease: "easeInOut",
                    times: [0, 0.25, 0.5, 0.75, 1]
                }}
                className="w-full h-full border-2 border-white/20 rounded-[8px] bg-white/5 flex items-center justify-center backdrop-blur-md relative"
            >
                <div className="text-white/40 text-4xl font-serif">A</div>
                <div className="absolute inset-2 border border-white/10 rounded-[4px]"></div>
            </motion.div>
            <div className="absolute inset-0 bg-blue-500/20 blur-[40px] -z-10 animate-pulse"></div>
        </div>

        <div className="overflow-hidden">
            <motion.h2 
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "circOut" }}
                className="text-white font-black uppercase tracking-[1em] text-xs mb-4 ml-[1em]"
            >
                Preparing the Heist
            </motion.h2>
        </div>

        <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden">
            <motion.div 
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
            />
        </div>

        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ delay: 2.5, duration: 1 }}
            className="mt-8 font-serif italic text-2xl text-blue-400"
        >
            "It's Showtime!"
        </motion.div>
      </motion.div>
    </motion.div>
  );
};


const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Showtime', href: '#home' },
    { name: 'The Phantom', href: '#phantom' },
    { name: 'Treasures', href: '#projects' },
    { name: 'Contracts', href: '#services' },
    { name: 'Tricks', href: '#skills' },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/kaito205", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-jaja-maulana-2b7554310/", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/majmu.io", label: "Instagram" },
    { icon: Mail, href: "mailto:bochilandi85@gmail.com", label: "Email" }
  ];

  // Magical Background Elements - Memoized to prevent jumping on re-renders
  const cardData = useMemo(() => Array.from({ length: 15 }).map((_, i) => ({
    initialX: (i * (100 / 15)) + (Math.random() * 5 - 2.5) + "%",
    driftX: [(Math.random() * 100) + "%", (Math.random() * 100) + "%"],
    duration: 25 + Math.random() * 25,
    delay: i * 2,
    initialRotate: Math.random() * 360,
    targetRotate: [Math.random() * 360, Math.random() * 720],
    symbol: i % 3 === 0 ? "A" : i % 3 === 1 ? "K" : "Q"
  })), []);

  const particleData = useMemo(() => Array.from({ length: 40 }).map((_, i) => ({
    size: Math.random() * 4 + 2 + "px",
    initialX: Math.random() * 100 + "%",
    initialY: Math.random() * 100 + "%",
    driftX: [(Math.random() * -15 + 7.5) + "%", (Math.random() * 15 - 7.5) + "%"],
    duration: 10 + Math.random() * 15,
    delay: Math.random() * 10
  })), []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <Preloader key="loader" finishLoading={() => setIsLoading(false)} />
      ) : (
        <motion.div 
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-[#020617] text-[#f8fafc] font-['Outfit'] min-h-screen relative selection:bg-blue-500/30 overflow-x-hidden"
        >
          <MusicPlayer />
          {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="stars-container"></div>
        
        {/* Floating Cards - Distributed and Fixed */}
        {cardData.map((data, i) => (
          <motion.div
            key={i}
            className="floating-card-bg"
            initial={{ 
              x: data.initialX, 
              y: "110%", 
              rotate: data.initialRotate,
              opacity: 0 
            }}
            animate={{ 
              y: "-20%", 
              x: [data.initialX, ...data.driftX],
              rotate: [data.initialRotate, ...data.targetRotate],
              opacity: [0, 0.4, 0.4, 0]
            }}
            transition={{ 
              duration: data.duration, 
              repeat: Infinity, 
              delay: data.delay,
              ease: "linear" 
            }}
          >
            <div className="w-full h-full flex items-center justify-center text-white/20 text-xl font-serif uppercase tracking-tighter">
              {data.symbol}
            </div>
          </motion.div>
        ))}

        {/* Floating Feathers / Pigeons / Particles */}
        {particleData.map((data, i) => (
          <motion.div
            key={`p-${i}`}
            className="magic-particle rounded-full bg-blue-400"
            style={{
              width: data.size,
              height: data.size,
              boxShadow: "0 0 10px rgba(37, 99, 235, 0.8)"
            }}
            initial={{ 
              x: data.initialX, 
              y: data.initialY,
              scale: 0 
            }}
            animate={{ 
              y: ["-10%", "110%"],
              x: [data.initialX, ...data.driftX.map(d => `calc(${data.initialX} + ${d})`)],
              scale: [0, 1.8, 0],
              opacity: [0, 0.7, 0]
            }}
            transition={{ 
              duration: data.duration, 
              repeat: Infinity, 
              delay: data.delay,
              ease: "easeInOut" 
            }}
          />
        ))}
      </div>
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-[1000] border-b border-white/5 transition-all duration-500 ${isScrolled ? 'bg-[#020617]/90 backdrop-blur-2xl py-3' : 'py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.a 
            href="#" 
            className="text-3xl font-bold tracking-tighter"
            whileHover={{ scale: 1.05 }}
          >
            MAJMU<span className="text-blue-500">.</span>
          </motion.a>
          
          <ul className="hidden md:flex gap-12 items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-xs font-bold hover:text-blue-400 transition-colors uppercase tracking-[0.2em]">{link.name}</a>
              </li>
            ))}
            <li>
              <a href="/CV_Muhammad_Jaja_Maulana.pdf" download className="text-slate-400 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                <FileUser size={14} /> License
              </a>
            </li>
            <li>
              <a href="#contact" className="bg-white text-black hover:bg-blue-50 px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all hover:-translate-y-1 shadow-[0_0_20px_rgba(255,255,255,0.2)]">Connect</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center pt-32 overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#020617] to-transparent z-10"></div>
        
        {/* Moonlight Effect */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-20 items-center relative z-20">
          <motion.div 
            initial={{ opacity: 0, x: -100, filter: "blur(20px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: "circOut" }}
          >
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "48px" }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex items-center gap-3 mb-6"
            >
               <span className="h-[1px] bg-blue-500"></span>
               <span className="text-blue-500 font-black uppercase tracking-[0.3em] text-[10px] whitespace-nowrap">The Phantom Developer</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1.2 }}
              className="text-7xl md:text-9xl font-bold leading-[0.9] mb-8 tracking-tighter italic font-serif"
            >
              It's <br />
              <span className="kaito-gradient-text">Showtime!</span>
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1.2 }}
              className="text-2xl font-light text-slate-400 mb-10 max-w-md border-l-2 border-white/10 pl-6 leading-relaxed"
            >
              Muhammad Jaja Maulana: Mengorkestrasi pengalaman web performa tinggi dengan sedikit sentuhan <span className="text-white font-medium underline decoration-blue-500/50 decoration-2 underline-offset-4">magic</span>.
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1.2 }}
              className="flex flex-wrap gap-6 mt-10"
            >
              <motion.a 
                whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(255,255,255,0.3)" }}
                whileTap={{ scale: 0.95 }}
                href="#projects" 
                className="group flex items-center gap-3 bg-white text-black px-10 py-5 rounded-[2px] font-black uppercase tracking-widest text-xs transition-colors hover:bg-blue-600 hover:text-white"
              >
                Behold My Work
                  <Sparkles size={16} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                href="#contact" 
                className="group flex items-center gap-3 border border-white/20 px-10 py-5 rounded-[2px] text-xs font-black uppercase tracking-widest transition-all"
              >
               The Heist<ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 1.2 }}
                className="mt-8 flex items-center gap-4"
              >
                <div className="h-px w-12 bg-white/10"></div>
                <a 
                  href="/CV_Muhammad_Jaja_Maulana.pdf" 
                  download
                  className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 hover:text-blue-400 transition-colors flex items-center gap-3 group"
                >
                  <FileUser size={14} className="group-hover:rotate-12 transition-transform" />
                  Download The License (CV)
                </a>
              </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.5, rotate: -25, rotateX: 30, filter: "blur(40px)" }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              rotate: 12, 
              rotateX: 15,
              y: [0, -15, 0],
              filter: "blur(0px)" 
            }}
            transition={{ 
              opacity: { duration: 2 },
              rotate: { duration: 2 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              ease: [0.16, 1, 0.3, 1] 
            }}
            className="hidden lg:flex justify-center relative perspective-2000"
          >
            {/* Playing Card Flip Effect */}
            <motion.div 
              className="relative z-10 max-w-xs group cursor-pointer preserve-3d"
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="absolute -inset-8 bg-blue-500/10 rounded-full blur-[100px] group-hover:bg-blue-500/30 transition-all duration-1000"></div>
              
              {/* Front Face (4.png) */}
              <div className="backface-hidden relative border kaito-border p-3 bg-slate-900 shadow-2xl rounded-[8px]">
                 <img src="/assets/4.png" alt="Kaito Kid Front" className="w-full grayscale brightness-110 group-hover:grayscale-0 transition-all duration-700" />
                 <div className="absolute top-4 left-4 text-white/50 text-2xl font-serif">A</div>
                 <div className="absolute bottom-4 right-4 text-white/50 text-2xl font-serif rotate-180">A</div>
              </div>

              {/* Back Face (3.png) */}
              <div className="backface-hidden rotate-y-180 absolute inset-0 border kaito-border p-3 bg-slate-900 shadow-2xl rounded-[8px]">
                 <img src="/assets/3.png" alt="Kaito Kid Back" className="w-full grayscale brightness-110 group-hover:grayscale-0 transition-all duration-700" />
                 <div className="absolute top-4 left-4 text-blue-500/50 text-2xl font-serif">K</div>
                 <div className="absolute bottom-4 right-4 text-blue-500/50 text-2xl font-serif rotate-180">K</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Card UI Element */}
        <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute bottom-20 left-1/2 -translate-x-1/2 hidden md:block"
        >
            <div className="w-10 h-16 border kaito-border rounded-[4px] bg-white/5 backdrop-blur-sm flex items-center justify-center">
                <div className="w-1 h-1 bg-white rounded-full animate-bounce"></div>
            </div>
        </motion.div>
      </section>

      {/* About Section - The Phantom */}
      <section id="phantom" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
          <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
             {[
               { icon: <Gem size={32} />, label: "Precision", val: "99%" },
               { icon: <Moon size={32} />, label: "Agility", val: "High" },
               { icon: <Zap size={32} />, label: "Performance", val: "100ms" },
               { icon: <Sparkles size={32} />, label: "Innovation", val: "Lead" }
             ].map((item, idx) => (
                <motion.div 
                   key={idx} 
                   initial={{ opacity: 0, scale: 0.5, rotateY: 90, filter: "blur(20px)" }}
                   whileInView={{ opacity: 1, scale: 1, rotateY: 0, filter: "blur(0px)" }}
                   viewport={{ once: true, amount: 0.3 }}
                   transition={{ duration: 1.2, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
                   className="p-10 bg-white/5 kaito-border rounded-[2px] hover:bg-blue-600/10 transition-colors group"
                >
                   <div className="text-blue-500 mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                   <h3 className="text-2xl font-bold mb-1">{item.val}</h3>
                   <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black">{item.label}</p>
                </motion.div>
             ))}
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 100, skewY: 10, filter: "blur(30px)" }}
            whileInView={{ opacity: 1, y: 0, skewY: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 md:order-2"
          >
            <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Biography</span>
            <h2 className="text-6xl font-serif italic font-bold mb-10 leading-tight">Mastering the Art of <span className="kaito-gradient-text">Invisible Code</span>.</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8 font-light">
              Layaknya seorang pencuri bayangan yang tidak meninggalkan jejak, saya membangun arsitektur yang mulus, efisien, dan memiliki kekuatan yang misterius. Fokus saya adalah menciptakan pengalaman digital yang terasa seperti keajaiban bagi pengguna, namun tetap kokoh dan profesional di balik layar.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed font-light">
              Saya berspesialisasi dalam seni React, pengembangan Full-Stack, dan kerajinan halus untuk kesempurnaan UI/UX.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Treasures (Projects) */}
      <section id="projects" className="py-32 bg-white/[0.01] relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, x: -100, scale: 0.8, filter: "blur(40px)" }}
            whileInView={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-20"
          >
            <div>
              <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">The Heists</span>
              <h2 className="text-7xl font-serif italic font-bold tracking-tighter">Acquired <span className="kaito-gradient-text">Treasures</span></h2>
            </div>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em] md:max-w-xs mt-6 md:mt-0">Koleksi karya terpilih di mana performa bertemu dengan elegan.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.5 }
              }
            }}
            className="grid md:grid-cols-2 gap-16"
          >
            {[
              { 
                title: "PPDB Management System", 
                desc: "Sistem Penerimaan Peserta Didik Baru (PPDB) terintegrasi dengan manajemen data pendaftar dan validasi dokumen.", 
                tags: ["Laravel", "React", "MySQL"], 
                img: "/assets/ppdb.png",
                challenge: "Sistem manual yang lambat dan rentan inkonsistensi data.",
                solution: "Otomatisasi validasi dokumen & sinkronisasi database real-time."
              },
              { 
                title: "Luxurious Hotel Booking", 
                desc: "Platform pemesanan hotel mewah dengan sistem manajemen ketersediaan kamar dan reservasi instan yang elegan.", 
                tags: ["React", "Node.js", "Express"], 
                img: "/assets/hotelbooking.png",
                challenge: "Manajemen reservasi yang kompleks dan risiko overbooking.",
                solution: "Sinkronisasi database real-time untuk akurasi slot kamar 100%."
              },
              { 
                title: "Advanced HealthCare", 
                desc: "Sistem informasi kesehatan digital untuk manajemen rekam medis, janji temu dokter, dan konsultasi online.", 
                tags: ["Laravel", "MySQL", "Tailwind"], 
                img: "/assets/HealthCare.png",
                challenge: "Akses data pasien yang lambat dan birokrasi pendaftaran yang rumit.",
                solution: "Digitalisasi rekam medis terenkripsi untuk akses data instan dan aman."
              },
              { 
                title: "Phantom Cinema Portal", 
                desc: "Aplikasi streaming film modern dengan katalog dinamis dan antarmuka pengguna yang sangat responsif.", 
                tags: ["Next.js", "Tailwind", "API Integration"], 
                img: "/assets/Streaming.jpg",
                challenge: "Pemuatan katalog yang berat dan navigasi yang rumit.",
                solution: "Optimasi rendering sisi server (SSR) untuk akses konten instan."
              }
            ].map((p, i) => (
              <motion.div 
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 100, scale: 0.9, rotate: -2 },
                  show: { opacity: 1, y: 0, scale: 1, rotate: 0 }
                }}
                whileHover={{ 
                  y: -20, 
                  rotateZ: 0.5,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="group kaito-border bg-[#020617] p-4 kaito-card-shadow transition-all perspective-1000"
              >
                <div className="h-80 overflow-hidden relative border border-white/5 mb-8">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white text-black text-[10px] font-black uppercase tracking-widest translate-x-12 group-hover:translate-x-0 transition-transform duration-500">The Target</div>
                </div>
                <div className="px-4 pb-4">
                  <h3 className="text-3xl font-serif italic font-bold mb-4">{p.title}</h3>
                  <p className="text-slate-400 mb-6 font-light text-sm">{p.desc}</p>
                  
                  {/* Heist Plan Details */}
                  <div className="space-y-4 mb-8 border-l border-white/10 pl-4 py-2 opacity-40 group-hover:opacity-100 transition-opacity">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-blue-500 block mb-1">The Challenge</span>
                      <p className="text-xs text-slate-300 font-light italic">"{p.challenge}"</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-white block mb-1">The Solution</span>
                      <p className="text-xs text-slate-300 font-light italic">"{p.solution}"</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {p.tags.map(t => <span key={t} className="text-[10px] font-bold text-slate-500 border-b border-white/10 pb-1">{t}</span>)}
                  </div>
                  <a href="#" className="inline-flex items-center gap-4 text-xs font-black uppercase tracking-[0.2em] text-white hover:text-blue-400 transition-colors">
                    View Dossier <ChevronRight size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills / Tricks */}
      <section id="skills" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.5, rotateX: -45, filter: "blur(40px)" }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-24"
          >
            <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Secret Techniques</span>
            <h2 className="text-7xl font-serif italic font-bold">The <span className="kaito-gradient-text">Tricks</span></h2>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
            className="flex flex-wrap justify-center gap-4"
          >
            {[
              { icon: <Code2 size={24} />, label: "HTML" },
              { icon: <Layers size={24} />, label: "CSS" },
              { icon: <Terminal size={24} />, label: "JS" },
              { icon: <Globe size={24} />, label: "PHP" },
              { icon: <Zap size={24} />, label: "Laravel" },
              { icon: <Sparkles size={24} />, label: "React" },
              { icon: <Database size={24} />, label: "MySQL" },
              { icon: <Database size={24} />, label: "PostgreSQL" },
              { icon: <Layers size={24} />, label: "Bootstrap" },
              { icon: <Zap size={24} />, label: "Tailwind" },
              { icon: <Coffee size={24} />, label: "Java" }
            ].map((s, i) => (
              <motion.div 
                key={i}
                variants={{
                  hidden: { opacity: 0, scale: 0, y: 20 },
                  show: { opacity: 1, scale: 1, y: 0 }
                }}
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: "rgba(37, 99, 235, 0.1)",
                  boxShadow: "0 0 40px rgba(37, 99, 235, 0.2)"
                }}
                className="w-[140px] p-6 border kaito-border flex flex-col items-center gap-4 text-center group transition-colors rounded-[2px]"
              >
                <div className="text-white opacity-40 group-hover:opacity-100 group-hover:text-blue-500 transition-all">{s.icon}</div>
                <span className="text-[10px] font-black uppercase tracking-widest">{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="text-right mb-24"
          >
            <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Service Request</span>
            <h2 className="text-7xl font-serif italic font-bold">Planned <span className="kaito-gradient-text">Contracts</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Landing Page Heist",
                desc: "Halaman pendarat berkonversi tinggi dengan desain yang memikat perhatian dalam hitungan detik.",
                icon: <Monitor size={32} />,
                features: ["Responsive Design", "Fast Loading", "SEO Optimized"]
              },
              {
                title: "Web App Infiltration",
                desc: "Aplikasi web kustom yang dibangun dengan presisi untuk kebutuhan bisnis yang kompleks.",
                icon: <Cpu size={32} />,
                features: ["React/Laravel", "Scalable Architecture", "Secure Auth"]
              },
              {
                title: "E-Commerce Raid",
                desc: "Toko online modern yang menawarkan pengalaman berbelanja semulus keajaiban sulap.",
                icon: <Pocket size={32} />,
                features: ["Payment Gateway", "Inventory System", "User Dashboard"]
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 1 }}
                className="p-10 kaito-border bg-slate-900/50 hover:bg-blue-600/5 transition-all group relative overflow-hidden"
              >
                <div className="text-blue-500 mb-8 group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-serif italic font-bold mb-4">{service.title}</h3>
                <p className="text-slate-400 font-light text-sm leading-relaxed mb-8">{service.desc}</p>
                <ul className="space-y-3 mb-10">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-500">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      {f}
                    </li>
                  ))}
                </ul>
                <a 
                  href="https://wa.me/6285861930794" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center justify-center gap-2 border border-blue-500/30 bg-blue-500/5 hover:bg-blue-600 text-blue-400 hover:text-white text-[10px] font-black uppercase tracking-widest py-3 rounded-[2px] transition-all group/wa"
                >
                  <MessageCircle size={14} className="group-hover/wa:rotate-12 transition-transform" /> Send Call Card
                </a>
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 -rotate-45 translate-x-16 -translate-y-16 group-hover:translate-x-12 group-hover:-translate-y-12 transition-transform duration-700"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Witness Testimonies */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="mb-20"
          >
            <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px] mb-6 block text-center">Interrogation Room</span>
            <h2 className="text-7xl font-serif italic font-bold text-center tracking-tighter">Witness <span className="kaito-gradient-text">Testimonies</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: "H. Ahmad Sulaeman, S.IP.", 
                role: "Kepala Desa Sukanagara", 
                text: "Pelayanan digital yang dibangun Muhammad Jaja Maulana sangat membantu efisiensi birokrasi di desa kami. Benar-benar sebuah terobosan.",
                type: "Official Report"
              },
              { 
                name: "Drs. M. Taufik Hidayat, M.Si.", 
                role: "Kepala Sekolah SMA ERHA", 
                text: "Dedikasi dan keahliannya dalam membangun sistem PPDB sekolah kami sangat luar biasa. Hasilnya sangat rapi dan profesional.",
                type: "Incident Log"
              },
              { 
                name: "Adam Rifa", 
                role: "Mahasiswa Universitas Galuh (UNIGAL)", 
                text: "Kreativitasnya dalam coding selalu menginspirasi. Dia selalu punya cara 'ajaib' untuk menyelesaikan masalah teknis yang sulit.",
                type: "Analysis Result"
              }
            ].map((witness, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 1 }}
                whileHover={{ y: -10 }}
                className="p-8 kaito-border bg-white/[0.02] backdrop-blur-sm relative group"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                  <Quote size={40} className="text-blue-500" />
                </div>
                <div className="mb-6">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-600 border border-slate-800 px-2 py-1">{witness.type}</span>
                </div>
                <p className="text-slate-400 font-light italic text-lg leading-relaxed mb-8">
                  "{witness.text}"
                </p>
                <div>
                  <h4 className="font-bold text-white text-lg">{witness.name}</h4>
                  <p className="text-[10px] uppercase font-black tracking-widest text-blue-500">{witness.role}</p>
                </div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-white/10"></div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Background Decorative Element */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, filter: "blur(50px) brightness(2)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px) brightness(1)" }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
            className="kaito-border p-12 md:p-24 relative overflow-hidden bg-white/[0.01]"
          >
            <div className="grid lg:grid-cols-2 gap-24 relative z-10">
              <div>
                <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px] mb-8 block">Inquiry</span>
                <h2 className="text-7xl font-serif italic font-bold mb-10 leading-tight">Leave a <br/><span className="kaito-gradient-text">Call Card</span>.</h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-12 font-light">
                  Saya saat ini menerima proyek baru dan tawaran kolaborasi. Tinggalkan pesan, dan saya akan muncul pada waktu yang telah ditentukan.
                </p>
                <div className="flex gap-6">
                  {socialLinks.map((social, i) => (
                    <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors" title={social.label}>
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
              <form className="space-y-6">
                <div className="relative border-b border-white/10 group focus-within:border-blue-500 transition-colors">
                   <input type="text" placeholder="Name" className="w-full bg-transparent py-4 focus:outline-none placeholder:text-slate-600 text-white font-serif italic" />
                </div>
                <div className="relative border-b border-white/10 group focus-within:border-blue-500 transition-colors">
                   <input type="email" placeholder="Signal" className="w-full bg-transparent py-4 focus:outline-none placeholder:text-slate-600 text-white font-serif italic" />
                </div>
                <div className="relative border-b border-white/10 group focus-within:border-blue-500 transition-colors">
                   <textarea placeholder="Message" rows="4" className="w-full bg-transparent py-4 focus:outline-none placeholder:text-slate-600 text-white font-serif italic"></textarea>
                </div>
                <button className="flex items-center gap-4 bg-white text-black px-12 py-6 font-black uppercase tracking-widest text-[10px] hover:bg-blue-600 hover:text-white transition-all group">
                  Send Message <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
            {/* Background Accent */}
            <div className="absolute top-0 right-0 p-12 text-white/5 opacity-20 pointer-events-none italic font-serif text-9xl">
               MAGIC
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-20 text-center border-t border-white/5">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-600 mb-4">&copy; 2025 Muhammad Jaja Maulana. All rights reserved.</p>
        <p className="text-[10px] italic font-serif text-slate-700">Under the pale moonlight.</p>
      </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default App;
