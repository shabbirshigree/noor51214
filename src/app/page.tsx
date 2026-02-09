'use client';
import React, { useState, useEffect } from 'react';

export default function HomePage() {
  const [currentImg, setCurrentImg] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  // --- ہیڈر سلائیڈ شو ---
  const headerImages = [
    "https://res.cloudinary.com/dtqrziupt/image/upload/v1768104581/2_sn9tyl.png",
    "https://res.cloudinary.com/dtqrziupt/image/upload/v1768104581/4_xaylj9.png",
    "https://res.cloudinary.com/dtqrziupt/image/upload/v1768104581/1_shgdib.png",
    "https://res.cloudinary.com/dtqrziupt/image/upload/v1768104581/3_fm3ja9.png",
    "https://res.cloudinary.com/dtqrziupt/image/upload/v1768104581/5_s7hgrb.png"
  ];

  useEffect(() => {
    // سلائیڈر ٹائمر
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % headerImages.length);
    }, 5000);

    // سکرول بٹن لاجک
    const handleScroll = () => {
      if (window.scrollY > 300) setShowScrollBtn(true);
      else setShowScrollBtn(false);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // --- فنکشنز ---
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  
  const toggleMobileSub = (id: string) => {
    if (activeSubMenu === id) setActiveSubMenu(null);
    else setActiveSubMenu(id);
  };

  const playVideo = (link: string) => {
    setVideoSrc(link);
    setVideoModalOpen(true);
  };

  const closeVideo = () => {
    setVideoSrc("");
    setVideoModalOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="main-body">
      {/* --- External Fonts & Icons --- */}
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Noto+Naskh+Arabic:wght@400;700&family=Cinzel:wght@400;700&family=Noto+Nastaliq+Urdu:wght@400;700&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

      {/* --- Scroll To Top Button --- */}
      {showScrollBtn && (
        <button id="scrollToTopBtn" onClick={scrollToTop} title="Go to top">
          <i className="fa fa-arrow-up"></i>
        </button>
      )}

      {/* --- Header Slideshow --- */}
      <div className="header-wrapper">
        <div className="spiritual-overlay">
          <p className="ayat-text arabic-ayat">مَا شَآءَ اللّٰهُۙ - لَا قُوَّةَ اِلَّا بِاللّٰهِۚ</p>
        </div>
        {headerImages.map((img, index) => (
            <img 
              key={index}
              src={img} 
              alt="Header" 
              className="header-img"
              style={{ opacity: index === currentImg ? 1 : 0 }}
            />
        ))}
      </div>

      {/* --- Navbar --- */}
      <nav className="navbar">
        <div className="menu-toggle" onClick={toggleMobileMenu}>
            <i className="fa fa-bars"></i>
        </div>
        
        {/* Desktop Menu */}
        <ul className="nav-list">
          <li className="nav-item"><a href="/" className="nav-link special-link" style={{color:'var(--gold-text)'}}>Home</a></li>
          <li className="nav-item">
            <a href="#" className="nav-link"><i className="fa fa-globe"></i>&nbsp;Language</a>
            <div className="dropdown-menu" style={{minWidth: '120px'}}>
              <a href="/">اردو (Urdu)</a>
              <a href="#">فارسی (Persian)</a>
              <a href="#">English</a>
            </div>
          </li>
          <li className="nav-item"><a href="/project" className="nav-link">Noor-ul-Quran <i className="fa fa-caret-down"></i></a>
            <div className="dropdown-menu">
              <a href="/project">📖 Introduction</a>
              <a href="/project">🎥 Visual Quran</a>
              <a href="/project">🎧 Urdu Text Only</a>
            </div>
          </li>
          <li className="nav-item"><a href="/about" className="nav-link">About Me</a></li>
          <li className="nav-item"><a href="/channels" className="nav-link">Channels</a></li>
          <li className="nav-item"><a href="/gallery" className="nav-link">Gallery</a></li>
          <li className="nav-item"><a href="/library" className="nav-link">Library</a></li>
          <li className="nav-item"><a href="/articles" className="nav-link">Articles & Columns</a></li>
          <li className="nav-item"><a href="/services" className="nav-link">Services</a></li>
          <li className="nav-item"><a href="/contact" className="nav-link">Contact</a></li>
        </ul>
        
        {/* Mobile Menu */}
        <div className={`mobile-menu-container ${mobileMenuOpen ? 'active' : ''}`} id="mobileMenu">
          <a href="/" className="m-link">Home</a>
          <div className="m-link" onClick={() => toggleMobileSub('mob-quran')}>Noor-ul-Quran <i className="fa fa-chevron-down" style={{float:'right'}}></i></div>
          <div className={`m-sub-menu ${activeSubMenu === 'mob-quran' ? 'show' : ''}`} id="mob-quran"><a href="/project" className="m-sub-link">📖 Project</a></div>
          
          <div className="m-link" onClick={() => toggleMobileSub('mob-about')}>About Me <i className="fa fa-chevron-down" style={{float:'right'}}></i></div>
          <div className={`m-sub-menu ${activeSubMenu === 'mob-about' ? 'show' : ''}`} id="mob-about"><a href="/about" className="m-sub-link">📖 My Story</a></div>
          
          <div className="m-link" onClick={() => toggleMobileSub('mob-channel')}>Channels <i className="fa fa-chevron-down" style={{float:'right'}}></i></div>
          <div className={`m-sub-menu ${activeSubMenu === 'mob-channel' ? 'show' : ''}`} id="mob-channel"><a href="/channels" className="m-sub-link">📺 All Channels</a></div>
          
          <div className="m-link" onClick={() => toggleMobileSub('mob-gallery')}>Gallery <i className="fa fa-chevron-down" style={{float:'right'}}></i></div>
          <div className={`m-sub-menu ${activeSubMenu === 'mob-gallery' ? 'show' : ''}`} id="mob-gallery"><a href="/gallery" className="m-sub-link">📸 All Photos</a></div>
          
          <div className="m-link" onClick={() => toggleMobileSub('mob-lib')}>Library <i className="fa fa-chevron-down" style={{float:'right'}}></i></div>
          <div className={`m-sub-menu ${activeSubMenu === 'mob-lib' ? 'show' : ''}`} id="mob-lib"><a href="/library" className="m-sub-link">📚 Books</a><a href="/articles" className="m-sub-link">✍️ Articles</a></div>
          
          <a href="/articles" className="m-link">Articles & Columns</a>
          
          <div className="m-link" onClick={() => toggleMobileSub('mob-serv')}>Services <i className="fa fa-chevron-down" style={{float:'right'}}></i></div>
          <div className={`m-sub-menu ${activeSubMenu === 'mob-serv' ? 'show' : ''}`} id="mob-serv"><a href="/services" className="m-sub-link">🤝 All Services</a></div>
          
          <a href="/contact" className="m-link">Contact</a>
        </div>
      </nav>

      {/* --- Main Title Area --- */}
      <div className="main-title-area">
        <h1>Haji Shabbir Ahmed Shigri</h1>
        <p>Senior Journalist | Cultural Expert | Founder Noor-ul-Quran Project</p>
      </div>

      {/* --- News Ticker --- */}
      <div className="news-ticker-container">
        <div className="ticker-icons-wrapper">
          <a href="https://www.tiktok.com/@noorproductions786" target="_blank" className="ticker-social-icon"><i className="fab fa-tiktok"></i></a>
          <a href="https://x.com/shigri41215" target="_blank" className="ticker-social-icon"><i className="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com/shabbirahmedshigri" target="_blank" className="ticker-social-icon"><i className="fab fa-instagram"></i></a>
          <a href="https://t.me/Shabbirshigri" target="_blank" className="ticker-social-icon"><i className="fab fa-telegram"></i></a>
          <a href="https://www.facebook.com/share/1C37cizwfD/" target="_blank" className="ticker-social-icon"><i className="fab fa-facebook-f"></i></a>
          <a href="https://youtube.com/@shabbirahmed1103" target="_blank" className="ticker-social-icon"><i className="fab fa-youtube"></i></a>
          <a href="https://wa.me/923334491715" target="_blank" className="ticker-social-icon"><i className="fab fa-whatsapp"></i></a>
        </div>
        <div className="ticker-text-wrapper">
          <div className="ticker-text">
             ★ "ONE MAN ARMY" of Media Industry ★ FIRST TIME IN THE WORLD: Visual Quran Project ★ Representative of Astan Quds Razavi ★ Founder of Noor Productions ★
          </div>
        </div>
      </div>

      {/* --- Welcome Section --- */}
      <div className="welcome-section">
        <div className="welcome-card">
          <p className="welcome-text">
            السلام علیکم! میں آپ کو اپنے آفیشل ویب سائیٹ پر خوش آمدید کہتا ہوں۔ یہ ویب سائٹ میری 45 سالہ صحافتی، ثقافتی، سماجی اور دینی خدمات کا ایک عاجزانہ عکس ہے۔ یہاں آپ کو میرے 'نور القرآن ویژول' جیسے عظیم پروجیکٹ سے لے کر میرے صحافتی کیریئر، فرھنگی خدمات، سوشل مصروفیات، ادبی کتب، میڈیا اور دستاویزی فلموں کا آن لائن مجموعہ ملے گا۔ میرا عزم دین خدا اور مخلوق خدا کی خدمت، محبت، امن، اور آشتی کا فروغ ہے۔ میرا مقصد قلم، کیمرے اور سکرین کی طاقت کو دینِ اسلام اور انسانیت کی بھلائی کے لیے استعمال کرنا ہے۔ امید ہے اس ویب سائٹ کے ذریعے علم و آگہی کے چراغ روشن کیے جا سکیں گے۔ امید ہے آپ ان کاوشوں کے بارے میں اپنی تجاویز سے حوصلہ افزائی فرمائیں گے اور اپنی دعاؤں میں یاد رکھیں گے۔
          </p>
          <span className="founder-name">حاجی شبیر احمد شگری</span>
        </div>
      </div>

      {/* --- Founder / Quick Nav --- */}
      <div className="founder-section" style={{marginTop:0}}>
        <h2 className="section-heading-founder"><span>Quick Navigation</span></h2>
        <div className="founder-grid">
          <a href="/project" className="founder-item">
            <div className="f-icon"><i className="fa fa-book-open"></i></div>
            <div className="f-title">نور القرآن پراجیکٹ</div>
            <div className="f-desc">Visual Quran</div>
          </a>
          <a href="/channels" className="founder-item">
            <div className="f-icon"><i className="fab fa-youtube"></i></div>
            <div className="f-title">نور پروڈکشنز</div>
            <div className="f-desc">Media Network</div>
          </a>
          <a href="/gallery" className="founder-item"><div className="f-icon"><i className="fa fa-handshake"></i></div><div className="f-title">پاک ایران دوستی</div><div className="f-desc">Friendship</div></a>
          <a href="https://pakiiranassociation.wixsite.com/pira" target="_blank" className="founder-item">
            <div className="f-icon"><i className="fa fa-laptop-code"></i></div>
            <div className="f-title">ویب سائٹ</div>
            <div className="f-desc">Web Portal</div>
          </a>
          <a href="/gallery" className="founder-item"><div className="f-icon"><i className="fa fa-globe"></i></div><div className="f-title">ٹریڈ اینڈ کلچر</div><div className="f-desc">Federation</div></a>
          <a href="/gallery" className="founder-item"><div className="f-icon"><i className="fa fa-bus"></i></div><div className="f-title">سیاحت</div><div className="f-desc">Tourism</div></a>
          <a href="#" className="founder-item" style={{cursor:'default', opacity:0.7}}><div className="f-icon"><i className="fa fa-play-circle"></i></div><div className="f-title">آپارات چینل</div><div className="f-desc">Coming Soon</div></a>
          <a href="https://www.youtube.com/@TiflaneNoor" target="_blank" className="founder-item">
            <div className="f-icon"><i className="fa fa-child"></i></div>
            <div className="f-title">طفلانِ نور</div>
            <div className="f-desc">Kids Channel</div>
          </a>
        </div>
      </div>

      {/* --- Mission Card --- */}
      <div className="container">
        <div className="mission-card">
          <div style={{flexGrow: 1, textAlign: 'center'}}>
            <span style={{background: 'var(--primary-color)', color: '#fff', padding: '2px 8px', borderRadius: '5px', fontSize: '0.85em', fontWeight:600}}>WORLD'S FIRST</span>
            <h3 style={{marginTop: '8px', color: 'var(--primary-color)'}}>📖 Noor-ul-Quran Project</h3>
            <p>A historic milestone: The world's first verse-by-verse Visual Quran translation.</p>
            <p className="urdu-line urdu-text" style={{color: '#b8860b', fontWeight: 700}}>
              نورالقرآن ویژول کا مقصد قرآن مجید کو سن کر اور دیکھ کر قرآنی آیات کو سمجھنا ہے۔ ان شاء اللہ
            </p>
            <a href="/project" className="card-btn">Visit Project | <span className="urdu-text">پروجیکٹ دیکھیں</span></a>
          </div>
          <img src="https://res.cloudinary.com/dtqrziupt/image/upload/v1766843381/quran_logo.jpg_ie9iqz.png" style={{width: '140px', borderRadius: '8px'}} />
        </div>
      </div>

      {/* --- Honors --- */}
      <div id="honors" className="container" style={{marginBottom: '20px'}}>
        <h2 className="section-title">Distinguished Honors</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '15px'}}>
          <div className="honor-gold-card" onClick={() => window.location.href='/gallery'}>
            <h3>🟢 Khadim-e-Imam Reza (A.S)</h3>
            <p>Honorary Servant at<br/><strong>Holy Shrine of Imam Reza (A.S)</strong><br/>Mashhad, Iran</p>
          </div>
          <div className="honor-gold-card" onClick={() => window.location.href='/gallery'}>
            <h3>🔴 Khadim-e-Ghazi Abbas (A.S)</h3>
            <p>Honorary Servant at<br/><strong>Holy Shrine of Ghazi Abbas (A.S)</strong><br/>Karbala, Iraq</p>
          </div>
        </div>
        <div style={{marginTop: '15px'}}>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '15px'}}>
            <div className="award-grid-item" onClick={() => window.location.href='/gallery'}>
              <i className="fa fa-medal"></i>
              <span><strong>Gold Medalist:</strong> Cultural & Literary Services</span>
            </div>
            <div className="award-grid-item" onClick={() => window.location.href='/gallery'}>
              <i className="fa fa-handshake"></i>
              <span><strong>Founder President:</strong> Pak-Iran Friendship</span>
            </div>
            <div className="award-grid-item" onClick={() => window.location.href='/gallery'}>
              <i className="fa fa-trophy"></i>
              <span><strong>Sada-e-Ghazi Award:</strong> Services at Shrine</span>
            </div>
            <div className="award-grid-item" onClick={() => window.location.href='/gallery'}>
              <i className="fa fa-award"></i>
              <span><strong>Media Excellence Award:</strong> 2025 (Lahore)</span>
            </div>
          </div>
        </div>
      </div>

      {/* --- Journey --- */}
      <div id="journey" style={{background: '#fff', paddingBottom: '20px', paddingTop: '10px'}}>
        <div className="container">
          <h2 className="section-title">Professional Journey<br/><span className="urdu-text" style={{fontSize:'0.9em'}}>پیشہ ورانہ سفر</span></h2>
          <p style={{textAlign: 'center', marginBottom: '15px', color: '#777', fontSize: '1.1em'}}>A legacy spanning over 4 decades.</p>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '15px'}}>
            <div className="journey-card" onClick={() => window.location.href='/gallery'}>
              <div className="gold-header"><i className="fa fa-microphone"></i><h3>Radio Pakistan</h3></div>
              <div className="card-body"><p>Start of Career at Radio Pakistan Skardu. The "Golden Voice" of GB.</p><span className="card-tag">View Gallery ↗</span></div>
            </div>
            <div className="journey-card" onClick={() => window.location.href='/articles'}>
              <div className="gold-header"><i className="fa fa-newspaper"></i><h3>Journalism (45 Years)</h3></div>
              <div className="card-body"><p>Deputy Editor: Daily Havi, Akath & Prachar. 300+ Articles published.</p><span className="card-tag">View Articles ↗</span></div>
            </div>
            <div className="journey-card" onClick={() => window.location.href='/channels'}>
              <div className="gold-header"><i className="fa fa-tv"></i><h3>TV Talk Shows</h3></div>
              <div className="card-body"><p>Host & Guest on numerous National & International TV Talk Shows.</p><span className="card-tag">Watch Shows ↗</span></div>
            </div>
            <div className="journey-card" onClick={() => window.location.href='/gallery'}>
              <div className="gold-header"><i className="fa fa-handshake"></i><h3>Cultural Diplomacy</h3></div>
              <div className="card-body"><p>Ex-PRO & In-charge of Other Departments at Khana Farhang Iran.</p><span className="card-tag">View Photos ↗</span></div>
            </div>
            <div className="journey-card" onClick={() => window.location.href='/gallery'}>
              <div className="gold-header"><i className="fa fa-users"></i><h3>Leadership</h3></div>
              <div className="card-body"><p>Founding President: Pak-Iran Friendship. Rep: Astan Quds Razavi.</p><span className="card-tag">View Events ↗</span></div>
            </div>
            <div className="journey-card" onClick={() => window.location.href='/channels'}>
              <div className="gold-header"><i className="fa fa-video"></i><h3>Noor Productions</h3></div>
              <div className="card-body"><p>Founder of Noor-ul-Quran Visual Project. 2000+ Documentaries.</p><span className="card-tag">Watch Videos ↗</span></div>
            </div>
            <div className="journey-card" onClick={() => window.location.href='/library'}>
              <div className="gold-header"><i className="fa fa-plane"></i><h3>Tourism Pioneer</h3></div>
              <div className="card-body"><p>Launched First Cultural Tourism to Iran. Author of "Siahat-e-Iran".</p><span className="card-tag">View Books ↗</span></div>
            </div>
            <div className="journey-card" onClick={() => window.location.href='/library'}>
              <div className="gold-header"><i className="fa fa-book"></i><h3>Books & Author</h3></div>
              <div className="card-body"><p>Author of 9+ books including "Booy-e-Bahisht" and "Khorasan-e-Razavi".</p><span className="card-tag">Visit Library ↗</span></div>
            </div>
            <div className="journey-card" onClick={() => window.location.href='/gallery'}>
              <div className="gold-header"><i className="fa fa-images"></i><h3>Photo Gallery</h3></div>
              <div className="card-body"><p>A visual archive of 45 years of meetings, awards, and visits.</p><span className="card-tag">Open Gallery ↗</span></div>
            </div>
            <div className="journey-card" onClick={() => window.location.href='/gallery'}>
              <div className="gold-header"><i className="fa fa-film"></i><h3>Int'l Film Festivals</h3></div>
              <div className="card-body"><p>Organizer of multiple International Film Festivals & Cultural Programs.</p><span className="card-tag">View Highlights ↗</span></div>
            </div>
            <div className="journey-card" onClick={() => window.location.href='/gallery'}>
              <div className="gold-header"><i className="fa fa-globe"></i><h3>Int'l Delegations</h3></div>
              <div className="card-body"><p>Hosted and led numerous International Delegations (Wafood).</p><span className="card-tag">View Meetings ↗</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Legends Slider --- */}
      <div className="container">
        <h2 className="section-title">Legends About Shigri</h2>
        <div className="slider-area">
          <div className="slide-track">
            {/* Items */}
            {[
              {n:"Hafiz Abdulghfar Roparhi", v:"https://res.cloudinary.com/dtqrziupt/video/upload/v1767715324/Abdulghfar_roparhi_m5ifhn.mp4", i:"https://res.cloudinary.com/dtqrziupt/video/upload/v1767715324/Abdulghfar_roparhi_m5ifhn.jpg", r:"Head Jamia Ahle Hadith"},
              {n:"Mian Manzoor Ahmed Watoo", v:"https://res.cloudinary.com/dtqrziupt/video/upload/v1767525505/1.Mian_Manzoor_Ahmed_Watoo_evn2nm.mp4", i:"https://res.cloudinary.com/dtqrziupt/video/upload/v1767525505/1.Mian_Manzoor_Ahmed_Watoo_evn2nm.jpg", r:"Ex-Chief Minister"},
              {n:"Pir Ghullam Rasool Awesi", v:"https://res.cloudinary.com/dtqrziupt/video/upload/v1767525505/3.Pir_Ghullam_Rasool_Awesi_dnuxif.mp4", i:"https://res.cloudinary.com/dtqrziupt/video/upload/v1767525505/3.Pir_Ghullam_Rasool_Awesi_dnuxif.jpg", r:"Spiritual Leader"},
              {n:"Pir Usman Shah Noori", v:"https://res.cloudinary.com/dtqrziupt/video/upload/v1767525557/4.Pir_Usman_Shah_Noori_kz9ieb.mp4", i:"https://res.cloudinary.com/dtqrziupt/video/upload/v1767525557/4.Pir_Usman_Shah_Noori_kz9ieb.jpg", r:"Religious Scholar"},
              {n:"Pir Maoom Hussain Naqvi", v:"https://res.cloudinary.com/dtqrziupt/video/upload/v1767525593/6.Pir_Maoom_Hussain_Naqvi_nzxz0n.mp4", i:"https://res.cloudinary.com/dtqrziupt/video/upload/v1767525593/6.Pir_Maoom_Hussain_Naqvi_nzxz0n.jpg", r:"Senior Scholar"},
              {n:"Dr. Muhammad Sadaqat Ali", v:"https://res.cloudinary.com/dtqrziupt/video/upload/v1767525503/7.Dr._Muhammad_Sadaqat_Ali_Afridi_k6w0nh.mp4", i:"https://res.cloudinary.com/dtqrziupt/video/upload/v1767525503/7.Dr._Muhammad_Sadaqat_Ali_Afridi_k6w0nh.jpg", r:"Writer & Intellectual"},
              // Duplicate for loop
              {n:"Hafiz Abdulghfar Roparhi", v:"https://res.cloudinary.com/dtqrziupt/video/upload/v1767715324/Abdulghfar_roparhi_m5ifhn.mp4", i:"https://res.cloudinary.com/dtqrziupt/video/upload/v1767715324/Abdulghfar_roparhi_m5ifhn.jpg", r:"Head Jamia Ahle Hadith"},
              {n:"Mian Manzoor Ahmed Watoo", v:"https://res.cloudinary.com/dtqrziupt/video/upload/v1767525505/1.Mian_Manzoor_Ahmed_Watoo_evn2nm.mp4", i:"https://res.cloudinary.com/dtqrziupt/video/upload/v1767525505/1.Mian_Manzoor_Ahmed_Watoo_evn2nm.jpg", r:"Ex-Chief Minister"},
            ].map((item, index) => (
                <div key={index} className="slide-card" onClick={() => playVideo(item.v)}>
                    <div className="video-thumb"><img src={item.i} alt={item.n}/><div className="play-icon"><i className="fa fa-play"></i></div></div>
                    <div className="slide-info"><h4>{item.n}</h4><p>{item.r}</p></div>
                </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- Books Slider --- */}
      <div className="container" style={{marginBottom: '30px'}}>
        <h2 className="section-title">Featured Books</h2>
        <div className="slider-area">
          <div className="book-track">
            {[
              {t:"سکون کی تلاش", i:"https://res.cloudinary.com/dtqrziupt/image/upload/v1768016596/sakoon.ki.talash_nmlugh.png"},
              {t:"بوئے بہشت", i:"https://res.cloudinary.com/dtqrziupt/image/upload/v1768063213/Booy-e-Bahisht_iv282m.png"},
              {t:"روح کی معراج", i:"https://res.cloudinary.com/dtqrziupt/image/upload/v1768062537/front_page_jce6fj.png"},
              {t:"کنجی بہشت", i:"https://res.cloudinary.com/dtqrziupt/image/upload/v1768074750/Kunji-e-Bahisht_book_Dua_ukkrrm.png"},
              {t:"سیاحت ایران", i:"https://res.cloudinary.com/dtqrziupt/image/upload/v1768016582/Siahat-e-Iran.book_orgj2d.png"},
              {t:"خراسان رضوی", i:"https://res.cloudinary.com/dtqrziupt/image/upload/v1768016591/Book_Khorasan-e-Razavi_b9nqdb.bmp"},
              {t:"مجلہ فرھنگستان", i:"https://res.cloudinary.com/dtqrziupt/image/upload/v1768016581/Majala-Farhangistan_xdsc1a.png"},
              // Duplicates
              {t:"سکون کی تلاش", i:"https://res.cloudinary.com/dtqrziupt/image/upload/v1768016596/sakoon.ki.talash_nmlugh.png"},
              {t:"بوئے بہشت", i:"https://res.cloudinary.com/dtqrziupt/image/upload/v1768063213/Booy-e-Bahisht_iv282m.png"},
            ].map((book, index) => (
                <a key={index} href="/library" className="book-mini">
                    <img src={book.i} alt={book.t} />
                    <p>{book.t}</p>
                </a>
            ))}
          </div>
        </div>
      </div>

      <div style={{textAlign: 'center', margin: '30px 0'}}>
        <a href="/about" className="read-more-btn">
          <span className="urdu-text">میرے بارے میں مزید جانیں</span>
        </a>
      </div>

      {/* --- International Feature --- */}
      <div className="container" style={{marginBottom: '30px'}}>
        <h2 className="section-title">International Feature</h2>
        <div style={{background: '#000', border: '4px solid #ffd700', borderRadius: '12px', overflow: 'hidden', textAlign: 'center'}}>
          <div style={{padding: '10px', background: 'var(--gold-gradient)', color: '#000', fontWeight: 'bold', fontSize: '1.2em'}}>
            🎬 Iqbal: The Eastern Wisdom (Press TV)
          </div>
          <div style={{padding: '30px', color: '#fff'}}>
            <p style={{fontSize: '1.2em', fontFamily:'Poppins, sans-serif'}}>Produced by Press TV | Production Manager: <strong>Shabbir Ahmed Shigri</strong></p>
            <a href="https://www.presstv.ir/Detail/2023/08/04/708339/Iqbal-The-Eastern-Wisdom" target="_blank" className="read-more-btn" style={{border:'none', background:'red', color:'white', width:'60%', margin:'15px auto', display:'block'}}>Watch Documentary</a>
          </div>
        </div>
      </div>

      {/* --- Feedback Form --- */}
      <div className="feedback-container">
        <div className="fb-header">
          <h3 style={{margin: 0, color: '#ffd700', fontSize: '1.3em', fontWeight: 'normal', letterSpacing: '1px'}}>
            <i className="fa fa-envelope-open-text" style={{marginLeft:'8px'}}></i> رابطہ کریں / اپنی رائے دیں
          </h3>
          <div style={{display: 'flex', gap: '15px'}}>
            <span style={{color: '#fff', fontSize: '0.9em'}}><i className="fa fa-check-circle"></i> براہ راست رابطہ</span>
          </div>
        </div>
        <div className="fb-body">
          <form action="https://formsubmit.co/shigri41215@gmail.com" method="POST" className="royal-form">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Message from Shigri Website!" />
            <input type="hidden" name="_next" value="https://shigri.vercel.app/thanks.html" />
            
            <input type="text" name="name" placeholder="آپ کا نام..." className="fb-input" style={{flex: 1, minWidth: '150px'}} required />
            <input type="email" name="email" placeholder="آپ کی ای میل..." className="fb-input" style={{flex: 1, minWidth: '150px'}} required />
            <input type="text" name="message" placeholder="مختصر پیغام لکھیں..." className="fb-input" style={{flex: 2, minWidth: '250px'}} required />
            
            <button type="submit" className="submit-btn-fb">
              بھیجیں <i className="fa fa-paper-plane" style={{marginRight: '5px'}}></i>
            </button>
          </form>
        </div>
      </div>

      {/* --- Footer --- */}
      <footer>
        <div className="footer-grid">
          <div className="footer-col">
            <h3>ہمارے بارے میں</h3>
            <p>نور پروڈکشنز اور حاجی شبیر احمد شگری کا مقصد جدید میڈیا کے ذریعے اسلامی تعلیمات اور ثقافتی ورثے کو محفوظ کرنا ہے۔</p>
          </div>
          <div className="footer-col">
            <h3>کوئیک لنکس</h3>
            <ul>
              <li><a href="/">ہوم پیج</a></li>
              <li><a href="/project">نور القرآن</a></li>
              <li><a href="/library">لائبریری</a></li>
              <li><a href="/contact">رابطہ</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>سوشل میڈیا</h3>
            <p>تازہ ترین اپ ڈیٹس کے لیے ہمیں فالو کریں:</p>
            <div className="footer-socials" style={{marginTop: '15px', display: 'flex', gap: '10px', justifyContent: 'flex-end', flexWrap: 'wrap'}}>
              <a href="https://www.tiktok.com/@noorproductions786" target="_blank" className="f-icon-btn"><i className="fab fa-tiktok"></i></a>
              <a href="https://x.com/shigri41215" target="_blank" className="f-icon-btn"><i className="fab fa-twitter"></i></a>
              <a href="https://www.instagram.com/shabbirahmedshigri" target="_blank" className="f-icon-btn"><i className="fab fa-instagram"></i></a>
              <a href="https://t.me/Shabbirshigri" target="_blank" className="f-icon-btn"><i className="fab fa-telegram"></i></a>
              <a href="https://www.facebook.com/share/1C37cizwfD/" target="_blank" className="f-icon-btn"><i className="fab fa-facebook-f"></i></a>
              <a href="https://youtube.com/@shabbirahmed1103" target="_blank" className="f-icon-btn"><i className="fab fa-youtube"></i></a>
              <a href="https://wa.me/923334491715" target="_blank" className="f-icon-btn"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>
        </div>
        <div className="copyright">All Rights Reserved &copy; 2025 - Haji Shabbir Ahmed Shigri</div>
      </footer>

      {/* --- Floating Buttons --- */}
      <div id="floating-buttons" style={{zIndex: 999999}}>
        <a href="https://wa.me/923334491715" target="_blank" className="floating-wa">
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>

      {/* --- Video Modal --- */}
      {videoModalOpen && (
        <div id="videoModal" className="video-modal" onClick={closeVideo}>
          <span className="close-modal" onClick={closeVideo}>&times;</span>
          <video id="mainVideoPlayer" controls controlsList="nodownload" onClick={(e) => e.stopPropagation()} autoPlay>
              <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      )}

      {/* --- GLOBAL STYLES (Copied exactly from HTML) --- */}
      <style jsx global>{`
        /* --- GLOBAL SETTINGS --- */
        :root {
            --primary-color: #0f4c75;
            --dark-blue: #0a2e47;
            --accent-color: #c8a165;
            --gold-gradient: linear-gradient(45deg, #b8860b, #ffd700, #b8860b);
            --header-fade: linear-gradient(45deg, #eee3b5, #fffde7, #eee3b5);
            --bg-light: #f4f7f6;
            --white: #ffffff;
            --gold-text: #ffd700;
            --urdu-font: 'Jameel Noori Nastaleeq', 'Noto Nastaliq Urdu', serif;
            --arabic-font: 'Noto Naskh Arabic', serif;
            --simple-gold-gradient: linear-gradient(135deg, #bf953f, #fcf6ba, #b38728, #fbf5b7, #aa771c);
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        .main-body { 
            font-family: 'Poppins', sans-serif; 
            margin: 0; padding: 0; 
            background-color: var(--bg-light); 
            background-image: radial-gradient(#d4af37 0.5px, transparent 0.5px), radial-gradient(#d4af37 0.5px, var(--bg-light) 0.5px);
            background-size: 20px 20px;
            color: #333; 
            overflow-x: hidden; 
        }

        /* --- FONTS --- */
        .urdu-text, .ur, h1, h2, h3, h4, .ticker-text, .welcome-text, .founder-name, .comment-text, .section-title, .book-mini p, .gb-title, .page-intro-text, .f-title {
            font-family: var(--urdu-font) !important;
            line-height: 1.8;
            font-weight: normal;
        }
        .arabic-ayat { font-family: var(--arabic-font) !important; font-weight: 700; }

        /* --- NAVBAR --- */
        .navbar {
            background-color: var(--primary-color); padding: 0;
            box-shadow: 0 4px 10px rgba(0,0,0,0.2); position: sticky; top: 0; 
            z-index: 10000; border-bottom: 3px solid var(--accent-color);
            width: 100%; display: flex; justify-content: center; 
            height: 60px;
        }
        .nav-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: row; justify-content: center; align-items: center; width: 100%; height: 100%; }
        .nav-item { position: relative; margin: 0; height: 100%; display: flex; align-items: center; }
        .nav-link { 
            display: flex; align-items: center; color: var(--white); text-decoration: none; 
            padding: 0 10px; height: 100%; font-weight: 600; font-size: 0.82rem; 
            text-transform: uppercase; transition: all 0.3s ease; 
            border-right: 1px solid rgba(255,255,255,0.1); white-space: nowrap; cursor: pointer;
        }
        .nav-link:hover { background: var(--gold-gradient); color: #000; }
        .special-link { background: rgba(0,0,0,0.2); color: var(--gold-text); }
        .dropdown-menu { display: none; position: absolute; top: 100%; left: 0; background: #fff; min-width: 240px; border-top: 3px solid var(--accent-color); box-shadow: 0 5px 15px rgba(0,0,0,0.15); z-index: 10001; }
        .dropdown-menu a { display: block; padding: 10px 15px; color: #333; border-bottom: 1px solid #eee; transition: 0.3s; font-size: 0.95rem; text-decoration: none; }
        .nav-item:hover .dropdown-menu { display: block; }
        .menu-toggle { display: none; }
        .mobile-menu-container { display: none; }
        
        @media (max-width: 992px) {
            .navbar { justify-content: space-between; padding: 0 20px; align-items: center; height: 70px; }
            .nav-list { display: none; }
            .menu-toggle { display: block; font-size: 2.2em; color: #ffffff !important; cursor: pointer; padding: 5px 10px; border: 2px solid rgba(255,255,255,0.3); border-radius: 6px; }
            .mobile-menu-container { display: none; position: absolute; top: 70px; left: 0; width: 100%; background-color: #0a1f30; border-top: 3px solid var(--accent-color); box-shadow: 0 15px 30px rgba(0,0,0,0.9); z-index: 99999; height: 100vh; overflow-y: auto; padding-bottom: 80px; }
            .mobile-menu-container.active { display: block; }
            .m-link { display: block; padding: 15px 20px; color: white; text-decoration: none; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.1); font-size: 1.1em; cursor:pointer; }
            .m-sub-menu { display: none; background: #061523; padding-left: 20px; }
            .m-sub-menu.show { display: block; }
            .m-sub-link { display: block; padding: 12px 20px; color: #ccc; text-decoration: none; border-bottom: 1px solid rgba(255,255,255,0.05); font-size: 0.95em; }
        }

        /* --- HEADER SLIDESHOW --- */
        .header-wrapper {
            width: 100%; margin: 0; padding: 0; line-height: 0;
            background: var(--header-fade); overflow: hidden; position: relative;
        }
        .header-img { width: 100%; height: auto; display: block; transition: opacity 1.5s ease-in-out; position: absolute; top:0; left:0; }
        .header-wrapper img:first-of-type { position: relative; } /* Keeps height */
        
        /* Spiritual Overlay */
        .spiritual-overlay { 
            position: absolute; top: 0; left: 0; width: 100%;
            background: linear-gradient(to bottom, rgba(0,0,0,0.8), transparent);
            padding: 10px 0; text-align: center; z-index: 50;
        }
        .ayat-text {
            color: #ffd700; font-size: 1.2em; letter-spacing: 1px;
            text-shadow: 0 0 10px rgba(255,215,0,0.5); margin: 0;
        }

        /* TITLE STRIP */
        .main-title-area { text-align: center; padding: 15px 10px; background: var(--primary-color); color: #fff; border-bottom: 3px solid var(--accent-color); }
        .main-title-area h1 { color: var(--gold-text); margin: 0; font-size: 2.2em; text-transform: uppercase; text-shadow: 2px 2px 4px rgba(0,0,0,0.4); letter-spacing: 1px; font-weight: 700; font-family: 'Cinzel', serif; }
        .main-title-area p { font-size: 1.1em; color: #e0e0e0; margin-top: 2px; font-weight: 400; letter-spacing: 0.5px; font-family: var(--urdu-font); }

        /* TICKER */
        .news-ticker-container { background: var(--gold-gradient); height: 40px !important; display: flex; align-items: center; position: relative; z-index: 10; border-bottom: 1px solid #fff; overflow: hidden; margin-bottom: 0 !important; }
        .ticker-icons-wrapper { background: #a0720b; display: flex; align-items: center; padding: 0 10px; gap: 15px; z-index: 20; box-shadow: 4px 0 10px rgba(0,0,0,0.2); height: 40px !important; flex-shrink: 0; }
        .ticker-social-icon { color: #fff; font-size: 1.1em; transition: 0.3s; display: flex; align-items: center; justify-content: center; height: 100%; text-decoration: none !important; border: none !important; }
        .ticker-text-wrapper { flex-grow: 1; overflow: hidden; white-space: nowrap; display: flex; align-items: center; height: 40px !important; }
        .ticker-text { animation: scroll 60s linear infinite; display: inline-block; padding-left: 100%; font-weight: 600; color: #000; line-height: 40px; font-size: 0.95rem; }
        @keyframes scroll { 100% { transform: translateX(-100%); } 100% { transform: translateX(0%); } }

        /* --- WELCOME CARD --- */
        .welcome-section {
            max-width: 1000px; margin: 30px auto; padding: 10px 20px;
        }
        .welcome-card {
            background: #fff;
            border: 2px solid var(--accent-color);
            border-radius: 15px;
            padding: 30px;
            text-align: center;
            position: relative;
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
            background-image: url('https://www.transparenttextures.com/patterns/arabesque.png');
        }
        .welcome-card .bismillah {
            display: block; font-family: var(--arabic-font);
            font-size: 1.5em; color: var(--primary-color); margin-bottom: 15px;
        }
        .welcome-text {
            font-size: 1.25em; 
            color: #000 !important; 
            text-align: justify;
            text-align-last: center; 
            direction: rtl;
            font-weight: 700 !important; 
            text-shadow: 0 1px 0 rgba(255,255,255,0.8);
            line-height: 2.2 !important;
        }
        .founder-name {
            display: block; margin-top: 20px;
            font-size: 1.3em; color: var(--primary-color); font-weight: bold;
        }

        /* --- FOUNDER SECTION --- */
        .founder-section { 
            background: white; border-radius: 15px; padding: 20px; 
            margin: 20px auto; box-shadow: 0 10px 30px rgba(0,0,0,0.1); 
            border-top: 5px solid var(--accent-color); width: 100%; max-width: 1200px; 
        }
        .section-heading-founder { text-align: center; margin-bottom: 15px; font-weight: 700; font-size: 1.2em; color: var(--primary-color); text-transform: uppercase; letter-spacing: 1px; }
        .founder-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; }
        
        .founder-item { 
            background: linear-gradient(135deg, #0a1f30 0%, #1c3b57 100%); 
            border: 1px solid var(--accent-color); border-radius: 10px; padding: 12px; 
            text-align: center; transition: 0.3s; color: white; 
            box-shadow: 0 4px 10px rgba(0,0,0,0.15); 
            display: flex; flex-direction: column; align-items: center; text-decoration: none; 
            cursor: pointer;
        }
        .founder-item:hover { background: var(--simple-gold-gradient); border-color: #fff; transform: translateY(-3px); }
        .founder-item:hover .f-title, .founder-item:hover .f-desc { color: #0a1f30; }
        .founder-item:hover .f-icon { background: #0a1f30; color: #ffd700; border-color: #0a1f30; }
        
        .f-icon { width: 35px; height: 35px; background: rgba(255,255,255,0.1); color: #ffd700; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.1em; margin: 0 auto 8px; border: 1px solid #ffd700; }
        .f-title { font-size: 0.9em; font-weight: 700; color: #fff; margin-bottom: 2px; }
        .f-desc { font-size: 0.65em; color: #ccc; font-family: 'Poppins', sans-serif; }

        /* --- CARDS & GRID --- */
        .container { max-width: 1100px; margin: 0 auto; padding: 0 20px; }
        .section-title { text-align: center; color: var(--primary-color); font-size: 1.8em; font-weight: 700; text-transform: uppercase; margin: 40px 0 20px; position: relative; font-family: 'Cinzel', serif; }
        
        .mission-card { background: linear-gradient(135deg, #fffcf5 0%, #ffffff 100%); border: 1px solid var(--accent-color); padding: 20px; display: flex; align-items: center; border-radius: 10px; margin-bottom: 20px; box-shadow: 0 3px 15px rgba(0,0,0,0.03); gap: 20px; }
        .urdu-line { display: block; width: 100%; font-size: 1.1em !important; line-height: 1.8 !important; margin-top: 10px; margin-bottom: 10px; color: #b8860b; font-weight: 700; }
        .card-btn { display: block; width: 70%; margin: 12px auto 0 auto; text-align: center; background: linear-gradient(to right, #ffe259, #ffa751); padding: 8px 0; border-radius: 50px; text-decoration: none; color: #333; font-weight: 700; border: 1px solid #e0aa3e; transition: 0.3s; font-size: 1.1em; }

        .honor-gold-card { background: linear-gradient(135deg, #b8860b 0%, #a0720b 100%); color: #fff; padding: 15px; border-radius: 10px; text-align: center; border: 2px solid #ffd700; box-shadow: 0 5px 15px rgba(0,0,0,0.15); cursor: pointer; transition: 0.3s; }
        .award-grid-item { background: #fff; border: 1px solid #ddd; border-radius: 8px; padding: 10px; display: flex; align-items: center; gap: 10px; cursor: pointer; transition:0.3s; }
        
        .journey-card { background: #fff; border: 1px solid #eee; border-radius: 10px; overflow: hidden; box-shadow: 0 3px 10px rgba(0,0,0,0.03); cursor: pointer; transition: 0.3s; }
        .journey-card .gold-header { background: linear-gradient(45deg, #b8860b, #e0aa3e); color: #000; padding: 10px; display: flex; align-items: center; gap: 10px; border-bottom: 3px solid #ffd700; }
        .card-tag { background: #f8f9fa; padding: 3px 8px; border-radius: 4px; font-size: 0.8em; color: #666; border: 1px solid #eee; font-weight: 500; }

        /* SLIDERS */
        .slider-area { overflow: hidden; margin-bottom: 15px; padding: 5px 0; position: relative; }
        .slide-track { display: flex; width: max-content; animation: scrollLeft 40s linear infinite; }
        .slide-track:hover { animation-play-state: paused; }
        .slide-card { width: 260px; flex-shrink: 0; margin: 0 10px; background: #fff; border-radius: 8px; box-shadow: 0 3px 8px rgba(0,0,0,0.08); overflow: hidden; display: flex; flex-direction: column; height: 100%; border:1px solid #eee; }
        .video-thumb { width: 100%; height: 150px; position: relative; flex-shrink: 0; }
        .video-thumb img { width: 100%; height: 100%; object-fit: cover; }
        .play-icon { position: absolute; bottom: 8px; right: 8px; color: #fff; font-size: 1.8em; opacity: 0.9; background: rgba(0,0,0,0.5); border-radius: 50%; width: 35px; height: 35px; display: flex; align-items: center; justify-content: center; }
        .slide-info { padding: 8px; background: linear-gradient(to bottom, #ffd700, #ffc107); text-align: center; border-top: 2px solid #b8860b; flex-grow: 1; display: flex; flex-direction: column; justify-content: center; min-height: 75px; }
        .slide-info h4 { margin: 0; color: #000; font-size: 1em; font-weight: 700; line-height: 1.2; }
        .slide-info p { margin: 2px 0 0; font-size: 0.85em; color: #222; font-weight: 600; }
        
        .book-track { display: flex; width: max-content; animation: scrollRight 35s linear infinite; }
        .book-mini { width: 130px; flex-shrink: 0; margin: 0 10px; background: #fff; padding: 8px; border-radius: 8px; text-align: center; border: 1px solid #ddd; text-decoration: none; display: block; }
        .book-mini img { width: 100%; height: 140px; object-fit: contain; }
        .book-mini p { font-family: var(--urdu-font) !important; font-size: 0.9em !important; color: #000; margin-top:5px; }
        
        @keyframes scrollLeft { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes scrollRight { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }

        .read-more-btn {
            display: inline-block; background: var(--gold-gradient); color: #000 !important; padding: 8px 30px; 
            border-radius: 50px; margin-top: 20px; border: 1px solid #b8860b; transition: 0.3s; 
            font-size: 1.1em; text-decoration: none; box-shadow: 0 3px 8px rgba(0,0,0,0.15); 
            white-space: nowrap; font-weight: 700;
        }

        /* --- FEEDBACK STYLE --- */
        .feedback-container {
            width: 100%; max-width: 1000px; margin: 40px auto; 
            background: #fff; border: 2px solid #b8860b; border-radius: 12px; 
            box-shadow: 0 8px 20px rgba(0,0,0,0.1); overflow: hidden; 
            font-family: 'Jameel Noori Nastaleeq', serif; direction: rtl;
        }
        .fb-header {
            background: linear-gradient(90deg, #0a2e47, #0f4c75, #0a2e47); 
            padding: 10px 20px; display: flex; justify-content: space-between; 
            align-items: center; border-bottom: 3px solid #ffd700;
        }
        .fb-body {
            padding: 20px; background: linear-gradient(to bottom, #fffcf5, #fff); 
        }
        .royal-form {
            display: flex; gap: 10px; align-items: center; justify-content: center; flex-wrap: wrap;
        }
        .fb-input {
            padding: 12px 15px; border: 1px solid #c8a165; border-radius: 6px; 
            font-family: 'Jameel Noori Nastaleeq', serif; font-size: 1.1em;
            outline: none; background: #fff; transition: 0.3s;
        }
        .submit-btn-fb {
            background: linear-gradient(180deg, #ffd700, #b8860b); color: #000; 
            border: none; padding: 10px 30px; border-radius: 6px; 
            font-family: 'Jameel Noori Nastaleeq', serif; font-weight: bold; font-size: 1.1em;
            cursor: pointer; box-shadow: 0 4px 8px rgba(0,0,0,0.2); white-space: nowrap;
            transition: 0.3s;
        }

        /* --- FOOTER --- */
        footer { background: var(--dark-blue); color: #fff; padding: 50px 20px 20px; text-align: center; border-top: 5px solid var(--accent-color); margin-top: 60px; }
        .footer-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; max-width: 1200px; margin: 0 auto; text-align: right; direction: rtl; }
        .footer-col h3 { color: var(--gold-text); border-bottom: 2px solid var(--gold-text); display: inline-block; padding-bottom: 10px; margin-bottom: 20px; font-family: var(--urdu-font); font-size: 1.3em; }
        .footer-col p, .footer-col ul li a { color: #ddd; text-decoration: none; transition: 0.3s; font-family: var(--urdu-font); font-size: 1em; }
        .footer-col ul { list-style: none; padding: 0; }
        .footer-col ul li { margin-bottom: 10px; }
        .footer-col ul li a:hover { color: var(--gold-text); padding-right: 5px; }
        .f-icon-btn {
            width: 35px; height: 35px; 
            background: rgba(255,255,255,0.1); 
            border: 1px solid rgba(255,255,255,0.2); 
            border-radius: 50%; 
            display: flex; align-items: center; justify-content: center; 
            color: #fff !important; 
            text-decoration: none; transition: 0.3s;
        }
        .f-icon-btn:hover { background: #ffd700; color: #000 !important; border-color: #ffd700; transform: translateY(-3px); }
        .copyright { font-size: 0.8em; color: #aaa; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 20px; margin-top: 30px; text-align: center; }

        /* --- MOBILE FIXES --- */
        @media (max-width: 768px) {
            .ayat-text { font-size: 0.8em !important; }
            .founder-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
            .main-title-area { padding: 8px 5px !important; }
            .main-title-area h1 { font-size: 1.3em !important; line-height: 1.3; margin-bottom: 5px; }
            .welcome-card { padding: 20px 15px; }
            .welcome-text { line-height: 2.2 !important; font-size: 1.1em !important; }
            .mission-card { flex-direction: column; text-align: center; }
            .card-btn { width: 90%; }
            #scrollToTopBtn { bottom: 20px; right: 20px; padding: 12px; font-size: 16px; }
            .footer-grid { text-align: center; direction: ltr; }
            .fb-comment-card { padding: 15px; }
            .royal-form { flex-direction: column; width: 100%; }
            .fb-input { width: 100%; }
            .fb-header { flex-direction: column; gap: 10px; text-align: center; }
        }

        /* --- VIDEO MODAL --- */
        .video-modal { display: flex; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); justify-content: center; align-items: center; z-index: 2000; }
        .video-modal video { width: 90%; max-width: 900px; border: 2px solid var(--gold-text); border-radius: 8px; }
        .close-modal { position: absolute; top: 20px; right: 30px; color: #fff; font-size: 40px; cursor: pointer; }

        /* --- SCROLL TO TOP --- */
        #scrollToTopBtn {
            position: fixed; bottom: 30px; right: 30px; 
            z-index: 99999; border: none; outline: none; 
            background: linear-gradient(45deg, #d4af37, #b8860b); 
            color: white; cursor: pointer; padding: 15px; 
            border-radius: 50%; font-size: 18px; 
            box-shadow: 0 4px 10px rgba(0,0,0,0.3); transition: 0.3s;
        }

        /* --- Floating WhatsApp --- */
        .floating-wa {
            position: fixed; bottom: 20px; left: 20px;
            background-color: #25d366; color: white;
            width: 55px; height: 55px; border-radius: 50%;
            text-align: center; font-size: 30px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.3);
            display: flex; align-items: center; justify-content: center;
            text-decoration: none; transition: 0.3s; z-index: 999999;
        }
      `}</style>
    </div>
  );
}