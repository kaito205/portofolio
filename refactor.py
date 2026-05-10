import re

def update_file(filepath, replacements):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    for old, new in replacements:
        content = content.replace(old, new)
        
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

app_replacements = [
    # Music Player removal
    ('<MusicPlayer />', '{/* Music Player Removed */}'),
    
    # Preloader
    ('Preparing the Heist', 'Initializing System'),
    ('"It\'s Showtime!"', '"Welcome to the Portfolio"'),
    
    # Nav Links
    ("{ name: 'Showtime', href: '#home' }", "{ name: 'Home', href: '#home' }"),
    ("{ name: 'Phantom', href: '#phantom' }", "{ name: 'About', href: '#phantom' }"),
    ("{ name: 'Identity', href: '#identity' }", "{ name: 'Profile', href: '#identity' }"),
    ("{ name: 'Journey', href: '#roadmap' }", "{ name: 'Experience', href: '#roadmap' }"),
    ("{ name: 'Treasures', href: '#projects' }", "{ name: 'Projects', href: '#projects' }"),
    ("{ name: 'Contracts', href: '#services' }", "{ name: 'Services', href: '#services' }"),
    ("{ name: 'Tricks', href: '#skills' }", "{ name: 'Skills', href: '#skills' }"),
    
    # Cards Symbol
    ('symbol: i % 3 === 0 ? "A" : i % 3 === 1 ? "K" : "Q"', 'symbol: i % 3 === 0 ? "</>" : i % 3 === 1 ? "{}" : "[]"'),
    
    # Hero Section
    ('The Phantom Developer', 'Full-Stack Developer'),
    ("It's <br />\n              <span className=\"kaito-gradient-text\">Showtime!</span>", "Building Digital <br />\n              <span className=\"kaito-gradient-text\">Experiences</span>"),
    ("sedikit sentuhan <span className=\"text-white font-medium underline decoration-blue-500/50 decoration-2 underline-offset-4\">magic</span>", "fokus pada <span className=\"text-white font-medium underline decoration-blue-500/50 decoration-2 underline-offset-4\">inovasi dan presisi</span>"),
    ("Behold My Work", "View Portfolio"),
    ("The Heist<ChevronRight", "Contact Me<ChevronRight"),
    
    # Hero Cards images and text
    ('src="/assets/4.png"', 'src="/assets/profile.png"'),
    ('alt="Kaito Kid Front"', 'alt="Profile Front"'),
    ('src="/assets/3.png"', 'src="/assets/profile.png"'),
    ('alt="Kaito Kid Back"', 'alt="Profile Back"'),
    ('Tap to Flip', 'View Profile'),
    
    # About Section
    ('Biography — Tentang Saya', 'Professional Summary'),
    ('Mastering the Art of <span className="kaito-gradient-text">Invisible Code</span>.', 'Mastering the Art of <span className="kaito-gradient-text">Clean Code</span>.'),
    ('Layaknya seorang pencuri bayangan yang tidak meninggalkan jejak, saya membangun arsitektur yang mulus, efisien, dan memiliki kekuatan yang misterius. Fokus saya adalah menciptakan pengalaman digital yang terasa seperti keajaiban bagi pengguna, namun tetap kokoh dan profesional di balik layar.', 'Sebagai seorang pengembang yang berdedikasi, saya membangun arsitektur yang mulus, efisien, dan memiliki struktur yang solid. Fokus saya adalah menciptakan pengalaman digital yang intuitif bagi pengguna, dan tetap kokoh serta profesional di balik layar.'),
    
    # Identity Section
    ('Decoded Dossier', 'Professional Dossier'),
    ('Behind the <span className="kaito-gradient-text">Identity</span>.', 'Professional <span className="kaito-gradient-text">Profile</span>.'),
    ('Perjalanan saya di dunia teknologi dimulai dengan rasa penasaran yang mendalam tentang bagaimana keajaiban digital diciptakan. Seperti seorang pesulap yang mempelajari rahasia di balik trik, saya mendedikasikan waktu saya untuk memahami arsitektur kode dan estetika desain.', 'Perjalanan saya di dunia teknologi dimulai dengan rasa penasaran yang mendalam tentang bagaimana solusi digital diciptakan. Seperti seorang arsitek yang merancang struktur, saya mendedikasikan waktu saya untuk memahami arsitektur kode dan estetika desain.'),
    ('Saya percaya bahwa setiap baris kode harus memiliki tujuan, dan setiap piksel harus memberikan dampak emosional. Fokus saya bukan hanya membangun fungsionalitas, tapi menciptakan pengalaman yang tak terlupakan bagi setiap pengguna.', 'Saya percaya bahwa setiap baris kode harus memiliki tujuan, dan setiap antarmuka harus memberikan pengalaman yang optimal. Fokus saya bukan hanya membangun fungsionalitas, tapi memastikan keandalan untuk setiap pengguna.'),
    
    # Identity Cards
    ('src="/assets/kaito.png"', 'src="/assets/profile.png"'),
    ('alt="Kaito Kid Persona"', 'alt="Professional Persona"'),
    ('Tap to Reveal', 'View Details'),
    ('The Phantom', 'Developer'),
    ('?</div>', '!</div>'),
    
    # Roadmap Section
    ('The Heist Preparation', 'Educational Background'),
    ('The Grand <span className="kaito-gradient-text">Journey</span>', 'The Learning <span className="kaito-gradient-text">Journey</span>'),
    ('The First Act', 'Elementary Education'),
    ('Foundation of Mystery', 'Junior High School'),
    ("The Phantom's Ascent", 'Senior High School'),
    ('The Masterpiece', 'Higher Education'),
    ('Kini bertransformasi menjadi pengembang profesional di STMIK MARDIRA INDONESIA (Semester 5). Menguasai seni Full-Stack Development untuk menciptakan keajaiban digital.', 'Kini bertransformasi menjadi pengembang profesional di STMIK MARDIRA INDONESIA (Semester 5). Menguasai seni Full-Stack Development untuk menciptakan solusi digital yang optimal.'),
    
    # Projects Section
    ('The Heists', 'Portfolio'),
    ('Acquired <span className="kaito-gradient-text">Treasures</span>', 'Featured <span className="kaito-gradient-text">Projects</span>'),
    ('The Target', 'View Project'),
    ('View Dossier', 'View Details'),
    
    # Skills Section
    ('Secret Techniques', 'Technical Skills'),
    ('The <span className="kaito-gradient-text">Tricks</span>', 'Tech <span className="kaito-gradient-text">Stack</span>'),
    
    # Services Section
    ('Service Request', 'Available Services'),
    ('Planned <span className="kaito-gradient-text">Contracts</span>', 'What I <span className="kaito-gradient-text">Offer</span>'),
    ('Landing Page Heist', 'Landing Page Development'),
    ('Halaman pendarat berkonversi tinggi dengan desain yang memikat perhatian dalam hitungan detik.', 'Halaman pendarat berkonversi tinggi dengan desain yang modern dan profesional.'),
    ('Web App Infiltration', 'Web App Development'),
    ('E-Commerce Raid', 'E-Commerce Solutions'),
    ('Toko online modern yang menawarkan pengalaman berbelanja semulus keajaiban sulap.', 'Toko online modern yang menawarkan pengalaman berbelanja semulus mungkin.'),
    ('Send Call Card', 'Send Message'),
    
    # Testimonials
    ('Interrogation Room', 'Testimonials'),
    ('Witness <span className="kaito-gradient-text">Testimonies</span>', 'Client <span className="kaito-gradient-text">Feedback</span>'),
    ('Official Report', 'Client Review'),
    ('Incident Log', 'Academic Feedback'),
    ('Analysis Result', 'Peer Review'),
    
    # Contact Section
    ('Inquiry', 'Get in Touch'),
    ('Leave a <span className="kaito-gradient-text">Call Card</span>.', "Let's Work <span className=\"kaito-gradient-text\">Together</span>."),
    ('Saya saat ini menerima proyek baru dan tawaran kolaborasi. Tinggalkan pesan, dan saya akan muncul pada waktu yang telah ditentukan.', 'Saya saat ini menerima proyek baru dan tawaran kolaborasi. Tinggalkan pesan, dan saya akan segera membalasnya.'),
    ('MAGIC', 'HELLO'),
    
    # Footer
    ('Under the pale moonlight.', 'Crafted with passion and precision.')
]

update_file('d:/myproject/src/App.jsx', app_replacements)

css_replacements = [
    ('/* Custom Kaito Styles */', '/* Custom Theme Styles */'),
    ('--accent: #ffffff; /* Kaito\'s White */', '--accent: #ffffff; /* Primary White */'),
    ('--accent-blue: #2563eb; /* Detective Blue */', '--accent-blue: #2563eb; /* Primary Blue */')
]

update_file('d:/myproject/src/index.css', css_replacements)

print("Done")
