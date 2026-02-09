'use client';
import React, { useState, useEffect } from 'react';

export default function HomePage() {
  const [currentImg, setCurrentImg] = useState(0);
  const [videoModal, setVideoModal] = useState<string | null>(null);
  const [showScroll, setShowScroll] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  const toggleSubMenu = (id: string) => {
    if (activeSubMenu === id) setActiveSubMenu(null);
    else setActiveSubMenu(id);
  };

  // --- ہیڈر تصاویر ---
  const headerImages = [
    "https://res.cloudinary.com/dtqrziupt/image/upload/v1768104581/2_sn9tyl.png",
    "https://res.cloudinary.com/dtqrziupt/image/upload/v1768104581/4_xaylj9.png",
    "https://res.cloudinary.com/dtqrziupt/image/upload/v1768104581/1_shgdib.png",
    "https://res.cloudinary.com/dtqrziupt/image/upload/v1768104581/3_fm3ja9.png",
    "https://res.cloudinary.com/dtqrziupt/image/upload/v1768104581/5_s7hgrb.png",
    "https://res.cloudinary.com/dtqrziupt/image/upload/v1768104582/6_oqageq.png"
  ];

  // --- سلائیڈر ٹائمر ---
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % headerImages.length);
    }, 4000); 
    const handleScroll = () => {
      if (window.scrollY > 300) setShowScroll(true); else setShowScroll(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => { clearInterval(timer); window.removeEventListener('scroll', handleScroll); };
  }, []);

  // --- ڈیٹا (سلائیڈرز کے لیے 4 بار کاپی کیا تاکہ گیپ نہ آئے) ---
  const originalLegends = [
    {n:"Hafiz Abdulghfar Roparhi", v:"https://res.cloudinary.com/dtqrziupt/video/upload/v1767715324/Abdulghfar_roparhi_m5ifhn.mp4", i:"https://res.cloudinary.com/dtqrziupt/video/upload/v1767715324/Abdulghfar_roparhi_m5ifhn.jpg"},
    {n:"Mian Manzoor Ahmed Watoo", v:"https://res.cloudinary.com/dtqrziupt/video/upload/v1767525505/1.Mian_Manzoor_Ahmed_Watoo_evn2nm.mp4", i:"https://res.cloudinary.com/dtqrziupt/video/upload/v1767525505/1.Mian_Manzoor_Ahmed_Watoo_evn2nm.jpg"},
    {n:"Pir Ghullam Rasool Awesi", v:"https://res.cloudinary.com/dtqrziupt/video/upload/v1767525505/3.Pir_Ghullam_Rasool_Awesi_dnuxif.mp4", i:"https://res.cloudinary.com/dtqrziupt/video/upload/v1767525505/3.Pir_Ghullam_Rasool_Awesi_dnuxif.jpg"},
    {n:"Pir Usman Shah Noori", v:"https://res.cloudinary.com/dtqrziupt/video/upload/v1767525557/4.Pir_Usman_Shah_Noori_kz9ieb.mp4", i:"https://res.cloudinary.com/dtqrziupt/video/upload/v1767525557/4.Pir_Usman_Shah_Noori_kz9ieb.jpg"},
    {n:"Pir Maoom Hussain Naqvi", v:"https://res.cloudinary.com/dtqrziupt/video/upload/v1767525593/6.Pir_Maoom_Hussain_Naqvi_nzxz0n.mp4", i:"https://res.cloudinary.com/dtqrziupt/video/upload/v1767525593/6.Pir_Maoom_Hussain_Naqvi_nzxz0n.jpg"},
    {n:"Dr. Muhammad Sadaqat Ali", v:"https://res.cloudinary.com/dtqrziupt/video/upload/v1767525503/7.Dr._Muhammad_Sadaqat_Ali_Afridi_k6w0nh.mp4", i:"https://res.cloudinary.com/dtqrziupt/video/upload/v1767525503/7.Dr._Muhammad_Sadaqat_Ali_Afridi_k6w0nh.jpg"},
  ];
  // 4 بار ریپیٹ
  const loopLegends = [...originalLegends, ...originalLegends, ...originalLegends, ...originalLegends];

  const originalBooks = [
    {t:"سکون کی تلاش", i:"https://res.cloudinary.com/dtqrziupt/image/upload/v1768016596/sakoon.ki.talash_nmlugh.png"},
    {t:"بوئے بہشت", i:"https://res.cloudinary.com/dtqrziupt/image/upload/v1768063213/Booy-e-Bahisht_iv282m.png"},
    {t:"روح کی معراج", i:"https://res.cloudinary.com/dtqrziupt/image/upload/v1768062537/front_page_jce6fj.png"},
    {t:"کنجی بہشت", i:"https://res.cloudinary.com/dtqrziupt/image/upload/v1768074750/Kunji-e-Bahisht_book_Dua_ukkrrm.png"},
    {t:"سیاحت ایران", i:"https://res.cloudinary.com/dtqrziupt/image/upload/v1768016582/Siahat-e-Iran.book_orgj2d.png"},
    {t:"خراسان رضوی", i:"https://res.cloudinary.com/dtqrziupt/image/upload/v1768016591/Book_Khorasan-e-Razavi_b9nqdb.bmp"},
  ];
  // 4 بار ریپیٹ
  const loopBooks = [...originalBooks, ...originalBooks, ...originalBooks, ...originalBooks];

  return (
    <div className="main-wrapper">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

      {/* 1. فلوٹنگ زبان بٹن (موبائل پر دائیں طرف) */}
      <div className="lang-float-btn">
         🌍 Lang
      </div>

      {/* 2. روحانی ہیڈر */}
      <div className="spiritual-overlay">
         <p className="ayat-text arabic-ayat">مَا شَآءَ اللّٰهُۙ - لَا قُوَّةَ اِلَّا بِاللّٰهِۚ</p>
      </div>

      {/* 3. ہیڈر امیج (سائز کنٹرولڈ) */}
      <div className="header-wrapper">
        {headerImages.map((img, index) => (
          <img 
            key={index} src={img} alt="Header" 
            className={`header-bg ${index === currentImg ? 'active' : ''}`}
          />
        ))}
      </div>

      {/* 4. نیویگیشن بار */}
      <nav className="navbar">
        <div className="menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <i className="fa fa-bars"></i>
        </div>
        
        {/* ڈیسک ٹاپ مینیو */}
        <ul className="nav-list">
          <li className="nav-item"><a href="/" className="nav-link special-link">Home</a></li>
          <li className="nav-item"><a href="/project" className="nav-link">Noor-ul-Quran</a></li>
          <li className="nav-item"><a href="/about" className="nav-link">About Me</a></li>
          <li className="nav-item"><a href="/channels" className="nav-link">Channels</a></li>
          <li className="nav-item"><a href="/gallery" className="nav-link">Gallery</a></li>
          <li className="nav-item"><a href="/library" className="nav-link">Library</a></li>
          <li className="nav-item"><a href="/articles" className="nav-link">Articles</a></li>
          <li className="nav-item"><a href="/services" className="nav-link">Services</a></li>
          <li className="nav-item"><a href="/contact" className="nav-link">Contact</a></li>
        </ul>

        {/* موبائل مینیو */}
        <div className={`mobile-menu-container ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="/" className="m-link">Home</a>
          <div className="m-link" onClick={() => toggleSubMenu('mob-quran')}>Noor-ul-Quran <i className="fa fa-chevron-down" style={{float:'right'}}></i></div>
          <div className={`m-sub-menu ${activeSubMenu === 'mob-quran' ? 'show' : ''}`}><a href="/project" className="m-sub-link">📖 Project</a></div>
          <a href="/about" className="m-link">About Me</a>
          <a href="/channels" className="m-link">Channels</a>
          <a href="/gallery" className="m-link">Gallery</a>
          <a href="/library" className="m-link">Library</a>
          <a href="/articles" className="m-link">Articles</a>
          <a href="/services" className="m-link">Services</a>
          <a href="/contact" className="m-link">Contact</a>
        </div>
      </nav>

      {/* 5. ٹائٹل (ایک لائن موبائل پر) */}
      <div className="main-title-area">
        <h1 className="main-name">Haji Shabbir Ahmed Shigri</h1>
        <p className="designation">Senior Journalist | Cultural Expert | Founder Noor-ul-Quran</p>
      </div>

      {/* 6. نیوز ٹکر (سلو اور لمبا) */}
      <div className="news-ticker-container">
        <div className="ticker-text-wrapper">
          <div className="ticker-text">
             ★ "ONE MAN ARMY" of Media Industry ★ FIRST TIME IN THE WORLD: Visual Quran Project ★ Representative of Astan Quds Razavi ★ Founder of Noor Productions ★ Voice of Peace & Harmony ★ Promoter of Pak-Iran Friendship ★ Senior Analyst & Writer ★ "ONE MAN ARMY" of Media Industry ★ FIRST TIME IN THE WORLD: Visual Quran Project ★
          </div>
        </div>
      </div>

      {/* 7. ویلکم (بسم اللہ موجود) */}
      <div className="welcome-section">
        <div className="welcome-card">
          <div className="bismillah">﷽</div>
          <p className="welcome-text">
            السلام علیکم! میں آپ کو اپنے آفیشل ویب سائیٹ پر خوش آمدید کہتا ہوں۔ یہ ویب سائٹ میری 45 سالہ صحافتی، ثقافتی، سماجی اور دینی خدمات کا ایک عاجزانہ عکس ہے۔ یہاں آپ کو میرے 'نور القرآن ویژول' جیسے عظیم پروجیکٹ سے لے کر میرے صحافتی کیریئر، فرھنگی خدمات، سوشل مصروفیات، ادبی کتب، میڈیا اور دستاویزی فلموں کا آن لائن مجموعہ ملے گا۔
          </p>
          <span className="founder-name">حاجی شبیر احمد شگری</span>
        </div>
      </div>

      {/* 8. کوئیک نیویگیشن */}
      <div className="founder-section" style={{marginTop:0}}>
        <h2 className="section-heading-founder"><span>Quick Navigation</span></h2>
        <div className="founder-grid">
          <a href="/project" className="founder-item"><div className="f-icon">📖</div><div className="f-title">نور القرآن</div><div className="f-desc">Visual Quran</div></a>
          <a href="/channels" className="founder-item"><div className="f-icon">🎥</div><div className="f-title">نور پروڈکشنز</div><div className="f-desc">Media Network</div></a>
          <a href="/gallery" className="founder-item"><div className="f-icon">🤝</div><div className="f-title">پاک ایران دوستی</div><div className="f-desc">Friendship</div></a>
          <a href="https://pakiiranassociation.wixsite.com/pira" target="_blank" className="founder-item"><div className="f-icon">💻</div><div className="f-title">ویب سائٹ</div><div className="f-desc">Web Portal</div></a>
          <a href="/gallery" className="founder-item"><div className="f-icon">🌍</div><div className="f-title">ٹریڈ اینڈ کلچر</div><div className="f-desc">Federation</div></a>
          <a href="/books" className="founder-item"><div className="f-icon">🚌</div><div className="f-title">سیاحت</div><div className="f-desc">Tourism</div></a>
          <a href="#" className="founder-item"><div className="f-icon">👶</div><div className="f-title">طفلانِ نور</div><div className="f-desc">Kids Channel</div></a>
          <a href="/contact" className="founder-item"><div className="f-icon">📞</div><div className="f-title">رابطہ</div><div className="f-desc">Contact</div></a>
        </div>
      </div>

      {/* 9. مشن کارڈ */}
      <div className="container">
        <div className="mission-card">
          <div style={{flexGrow: 1, textAlign: 'center'}}>
            <span className="badge">WORLD'S FIRST</span>
            <h3 style={{marginTop: '8px', color: 'var(--primary-color)'}}>📖 Noor-ul-Quran Project</h3>
            <p>A historic milestone: The world's first verse-by-verse Visual Quran translation.</p>
            <p className="urdu-line">نورالقرآن ویژول کا مقصد قرآن مجید کو سن کر اور دیکھ کر قرآنی آیات کو سمجھنا ہے۔ ان شاء اللہ</p>
            <a href="/project" className="card-btn">پروجیکٹ دیکھیں</a>
          </div>
          <img src="https://res.cloudinary.com/dtqrziupt/image/upload/v1766843381/quran_logo.jpg_ie9iqz.png" className="quran-img" />
        </div>
      </div>

      {/* 10. اعزازات (2 لائنیں موبائل پر) */}
      <div className="container" style={{marginBottom: '20px'}}>
        <h2 className="section-title">Distinguished Honors</h2>
        <div className="honors-grid">
          <div className="honor-gold-card"><h3>🟢 Khadim-e-Imam Reza</h3><p>Mashhad, Iran</p></div>
          <div className="honor-gold-card"><h3>🔴 Khadim-e-Ghazi Abbas</h3><p>Karbala, Iraq</p></div>
        </div>
        <div className="awards-grid">
            <div className="award-item"><i className="fa fa-medal"></i><span><strong>Gold Medalist:</strong><br/>Cultural Services</span></div>
            <div className="award-item"><i className="fa fa-handshake"></i><span><strong>Founder President:</strong><br/>Pak-Iran Friendship</span></div>
            <div className="award-item"><i className="fa fa-trophy"></i><span><strong>Sada-e-Ghazi:</strong><br/>Services at Shrine</span></div>
            <div className="award-item"><i className="fa fa-award"></i><span><strong>Media Excellence:</strong><br/>2025 (Lahore)</span></div>
        </div>
      </div>

      {/* 11. پیشہ ورانہ سفر */}
      <div className="container" style={{background: '#fff', paddingBottom: '20px'}}>
        <h2 className="section-title">Professional Journey</h2>
        <div className="journey-grid">
            <a href="/gallery" className="j-card"><div className="j-head">🎙️ Radio Pakistan</div><p>Start of Career at Radio Pakistan Skardu.</p></a>
            <a href="/articles" className="j-card"><div className="j-head">📰 Journalism</div><p>Deputy Editor: Daily Havi, Akath & Prachar.</p></a>
            <a href="/channels" className="j-card"><div className="j-head">📺 TV Talk Shows</div><p>Host & Guest on numerous TV Shows.</p></a>
            <a href="/gallery" className="j-card"><div className="j-head">🤝 Diplomacy</div><p>Ex-PRO & In-charge Khana Farhang Iran.</p></a>
            <a href="/gallery" className="j-card"><div className="j-head">🚩 Leadership</div><p>Founding President: Pak-Iran Friendship.</p></a>
            <a href="/project" className="j-card"><div className="j-head">🎥 Noor Productions</div><p>Founder of Noor-ul-Quran Visual Project.</p></a>
            <a href="/books" className="j-card"><div className="j-head">🚌 Tourism</div><p>Launched First Cultural Tourism to Iran.</p></a>
            <a href="/library" className="j-card"><div className="j-head">📚 Author</div><p>Author of 9+ books including "Booy-e-Bahisht".</p></a>
            <a href="/gallery" className="j-card"><div className="j-head">📸 Photo Gallery</div><p>A visual archive of 45 years.</p></a>
            <a href="/gallery" className="j-card"><div className="j-head">🎬 Film Festivals</div><p>Organizer of multiple Int'l Film Festivals.</p></a>
        </div>
      </div>

      {/* 12. لیجنڈز (پہلے سے بھرا ہوا) */}
      <div className="container">
        <h2 className="section-title">Legends About Shigri</h2>
        <div className="slider-area">
          <div className="slide-track">
            {loopLegends.map((l, i) => (
              <div key={i} className="slide-card" onClick={() => setVideoModal(l.v)}>
                <div className="video-thumb"><img src={l.i} /><div className="play-icon">▶</div></div>
                <div className="slide-info"><h4>{l.n}</h4></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 13. کتب (پہلے سے بھرا ہوا) */}
      <div className="container">
        <h2 className="section-title">Featured Books</h2>
        <div className="slider-area">
          <div className="book-track">
            {loopBooks.map((b, i) => (
              <a key={i} href="/library" className="book-mini">
                <img src={b.i} alt={b.t} />
                <p>{b.t}</p>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div style={{textAlign: 'center', margin: '30px 0'}}>
        <a href="/about" className="read-more-btn"><span className="urdu-text">میرے بارے میں مزید جانیں</span></a>
      </div>

      {/* 14. انٹرنیشنل فیچر (بٹن فکسڈ) */}
      <div className="container" style={{marginBottom: '30px'}}>
        <h2 className="section-title">International Feature</h2>
        <div style={{background: '#000', border: '4px solid #ffd700', borderRadius: '12px', overflow: 'hidden', textAlign: 'center'}}>
          <div style={{padding: '10px', background: 'var(--gold-gradient)', color: '#000', fontWeight: 'bold', fontSize: '1.2em'}}>
            🎬 Iqbal: The Eastern Wisdom (Press TV)
          </div>
          <div style={{padding: '30px', color: '#fff'}}>
            <p style={{fontSize: '1.2em'}}>Produced by Press TV | Production Manager: <strong>Shabbir Ahmed Shigri</strong></p>
            <a href="https://www.presstv.ir/Detail/2023/08/04/708339/Iqbal-The-Eastern-Wisdom" target="_blank" className="read-more-btn" style={{border:'none', background:'red', color:'white', width:'auto', minWidth:'200px', display:'inline-block', margin:'15px auto'}}>Watch Documentary</a>
          </div>
        </div>
      </div>

      {/* 15. فوٹر (وائٹ لنکس) */}
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
            <p>ہمیں فالو کریں:</p>
            <div className="footer-socials">
              <a href="https://youtube.com/@shabbirahmed1103" target="_blank" className="f-icon-btn"><i className="fab fa-youtube"></i></a>
              <a href="https://facebook.com/share/1C37cizwfD/" target="_blank" className="f-icon-btn"><i className="fab fa-facebook-f"></i></a>
              <a href="https://x.com/shigri41215" target="_blank" className="f-icon-btn"><i className="fab fa-twitter"></i></a>
              <a href="https://instagram.com/shabbirahmedshigri" target="_blank" className="f-icon-btn"><i className="fab fa-instagram"></i></a>
              <a href="https://tiktok.com/@noorproductions786" target="_blank" className="f-icon-btn"><i className="fab fa-tiktok"></i></a>
            </div>
          </div>
        </div>
        <div className="copyright">All Rights Reserved &copy; 2026 - Haji Shabbir Ahmed Shigri</div>
      </footer>

      {/* ماڈلز اور فلوٹنگ */}
      {videoModal && <div className="video-modal" onClick={() => setVideoModal(null)}><span className="close-modal">&times;</span><video src={videoModal} controls autoPlay className="modal-video" onClick={e => e.stopPropagation()}></video></div>}
      <a href="https://wa.me/923334491715" target="_blank" className="floating-whatsapp"><i className="fab fa-whatsapp"></i></a>
      {showScroll && <button id="scrollToTopBtn" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}><i className="fa fa-arrow-up"></i></button>}

      {/* --- CSS --- */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Noto+Naskh+Arabic:wght@400;700&family=Cinzel:wght@400;700&family=Noto+Nastaliq+Urdu:wght@400;700&display=swap');
        :root { --primary-color: #0f4c75; --dark-blue: #0a2e47; --accent-color: #c8a165; --gold-gradient: linear-gradient(45deg, #b8860b, #ffd700, #b8860b); --gold-text: #ffd700; --bg-light: #f4f7f6; }
        
        body { margin: 0; padding: 0; background-color: var(--bg-light); font-family: 'Poppins', sans-serif; overflow-x: hidden; }
        .urdu-text, h1, h2, h3, h4 { font-family: 'Noto Nastaliq Urdu', serif !important; line-height: 1.8; }
        .arabic-ayat { font-family: 'Noto Naskh Arabic', serif !important; font-weight: 700; }

        /* HEADER */
        .header-wrapper { width: 100%; position: relative; overflow: hidden; background: #eee; }
        .header-bg { width: 100%; height: 100%; object-fit: cover; object-position: top; position: absolute; top: 0; left: 0; opacity: 0; transition: opacity 1s; }
        .header-bg.active { opacity: 1; position: relative; }
        .spiritual-overlay { position: absolute; top: 0; left: 0; width: 100%; background: linear-gradient(to bottom, rgba(0,0,0,0.9), transparent); padding: 2px 0; text-align: center; z-index: 50; }
        .ayat-text { color: #ffd700; font-size: 0.75rem; margin: 0; letter-spacing: 1px; }

        @media (min-width: 769px) { .header-wrapper { height: 400px; } .ayat-text { font-size: 1rem; } }
        /* موبائل پر ہیڈر چھوٹا */
        @media (max-width: 768px) { .header-wrapper { height: 160px; } }

        /* NAVBAR */
        .navbar { background-color: var(--primary-color); position: sticky; top: 0; z-index: 1000; border-bottom: 2px solid var(--accent-color); width: 100%; height: 50px; display: flex; align-items: center; justify-content: center; } 
        .nav-list { list-style: none; margin: 0; padding: 0; display: flex; }
        .nav-link { color: white; text-decoration: none; padding: 0 12px; font-size: 0.9rem; font-weight: 600; text-transform: uppercase; border-right: 1px solid rgba(255,255,255,0.1); }
        .menu-toggle { display: none; color: white; font-size: 1.5rem; cursor: pointer; padding: 10px; position: absolute; left: 10px; }
        .mobile-menu-container { display: none; position: absolute; top: 50px; left: 0; width: 100%; background: #0a1f30; border-top: 2px solid var(--accent-color); height: 100vh; overflow-y: auto; padding-bottom: 100px; }
        .mobile-menu-container.active { display: block; }
        .m-link { display: block; padding: 12px 20px; color: white; border-bottom: 1px solid rgba(255,255,255,0.1); text-decoration: none; }
        .m-sub-menu { display: none; background: #061523; padding-left: 20px; }
        .m-sub-menu.show { display: block; }
        .m-sub-link { display: block; padding: 10px 20px; color: #ccc; border-bottom: 1px solid rgba(255,255,255,0.05); text-decoration: none; }

        @media (max-width: 992px) { .nav-list { display: none; } .menu-toggle { display: block; } }

        /* TITLE & TICKER */
        .main-title-area { text-align: center; padding: 10px; background: var(--primary-color); color: white; border-bottom: 3px solid var(--accent-color); }
        .main-name { color: var(--gold-text); margin: 0; font-family: 'Cinzel', serif; font-size: 2rem; font-weight: 700; text-transform: uppercase; }
        .designation { margin: 2px 0 0; font-size: 0.9rem; color: #ddd; }
        
        /* ٹکر: دائیں سے بائیں (Right to Left) */
        .news-ticker-container { background: var(--gold-gradient); height: 35px; overflow: hidden; white-space: nowrap; display: flex; align-items: center; }
        .ticker-text { display: inline-block; animation: scrollTicker 45s linear infinite; font-weight: bold; color: black; font-size: 0.9rem; padding-left: 100%; }
        /* یہ اینیمیشن دائیں سے بائیں چلتی ہے */
        @keyframes scrollTicker { 0% { transform: translateX(0); } 100% { transform: translateX(-100%); } }

        /* CONTENT */
        .welcome-section { max-width: 1000px; margin: 20px auto; padding: 0 15px; }
        .welcome-card { background: white; border: 2px solid var(--accent-color); border-radius: 10px; padding: 20px; text-align: center; box-shadow: 0 5px 15px rgba(0,0,0,0.05); }
        .bismillah { font-family: 'Noto Naskh Arabic'; font-size: 1.5rem; color: var(--primary-color); margin-bottom: 5px; }
        .welcome-text { font-size: 1.1rem; text-align: justify; text-align-last: center; direction: rtl; line-height: 2; font-family: 'Noto Nastaliq Urdu', serif; }
        .founder-name { display: block; margin-top: 15px; font-weight: bold; color: var(--primary-color); font-size: 1.2rem; }

        .founder-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); gap: 10px; margin: 20px 15px; }
        .founder-item { background: linear-gradient(135deg, #0a1f30, #1c3b57); color: white; padding: 10px; border-radius: 8px; text-align: center; text-decoration: none; border: 1px solid var(--accent-color); }
        .f-icon { font-size: 1.5rem; margin-bottom: 5px; }
        .f-title { font-size: 0.8rem; font-weight: bold; }

        .mission-card { background: white; border: 1px solid var(--accent-color); padding: 15px; margin: 20px 15px; border-radius: 10px; display: flex; align-items: center; gap: 15px; flex-wrap: wrap; justify-content: center; text-align: center; }
        .badge { background: var(--primary-color); color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.7rem; font-weight: bold; }
        .card-btn { background: linear-gradient(to right, #ffe259, #ffa751); color: black; padding: 8px 20px; border-radius: 50px; text-decoration: none; font-weight: bold; display: inline-block; margin-top: 10px; }
        .quran-img { width: 120px; border-radius: 8px; }

        /* GRIDS */
        .honors-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin: 0 15px 15px; }
        .honor-gold-card { background: linear-gradient(135deg, #b8860b, #a0720b); color: white; padding: 10px; border-radius: 8px; text-align: center; border: 2px solid #ffd700; font-size: 0.9rem; }
        
        .awards-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; margin: 0 15px; }
        .award-item { background: white; border: 1px solid #ddd; padding: 10px; display: flex; align-items: center; gap: 10px; border-radius: 8px; }
        
        .journey-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 10px; margin: 0 15px; }
        .j-card { background: white; border: 1px solid #eee; border-radius: 8px; overflow: hidden; text-decoration: none; color: black; display: block; }
        .j-head { background: linear-gradient(45deg, #b8860b, #e0aa3e); padding: 8px; font-weight: bold; font-size: 0.85rem; }
        .j-card p { padding: 10px; font-size: 0.75rem; margin: 0; }

        @media (max-width: 768px) {
            .awards-grid, .journey-grid { grid-template-columns: 1fr 1fr; } 
            .award-item { flex-direction: column; text-align: center; font-size: 0.75rem; }
            .main-name { font-size: 1.3rem; line-height: 1.2; margin-top: 5px; white-space: normal; } /* ایک لائن والا مسئلہ */
            .designation { margin-top: 0; font-size: 0.75rem; }
        }

        /* SLIDERS (LOOPING FIX) */
        .slider-area { overflow: hidden; padding: 10px 0; margin: 0 15px; position: relative; }
        /* Track needs to be wide enough for duplicated content */
        .slide-track, .book-track { display: flex; gap: 15px; width: max-content; animation: scrollSlider 60s linear infinite; }
        .slide-card { width: 180px; background: white; border: 1px solid #ddd; border-radius: 8px; cursor: pointer; flex-shrink: 0; }
        .book-mini { width: 120px; text-align: center; text-decoration: none; color: black; background: white; padding: 5px; border: 1px solid #ddd; border-radius: 5px; flex-shrink: 0; }
        .book-mini img { width: 100%; height: 140px; object-fit: contain; }
        
        @keyframes scrollSlider { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

        /* BUTTONS & FOOTER */
        .read-more-btn { background: var(--gold-gradient); color: black; padding: 10px 30px; border-radius: 50px; text-decoration: none; font-weight: bold; }
        
        /* لینگویج بٹن: رائٹ سائیڈ */
        .lang-float-btn { position: fixed; top: 15px; right: 15px; background: rgba(255,255,255,0.9); border: 2px solid var(--accent-color); padding: 5px 12px; border-radius: 30px; z-index: 10001; font-size: 0.8rem; font-weight: bold; color: var(--primary-color); cursor: pointer; }

        footer { background: var(--dark-blue); color: white; padding: 30px 15px 10px; border-top: 5px solid var(--accent-color); text-align: center; margin-top: 40px; }
        .footer-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; max-width: 1000px; margin: 0 auto; text-align: right; direction: rtl; }
        .f-col h3 { color: var(--gold-text); border-bottom: 1px solid var(--gold-text); font-size: 1rem; display: inline-block; padding-bottom: 5px; }
        .f-col ul { list-style: none; padding: 0; }
        /* وائٹ لنکس */
        .f-col a { color: white !important; text-decoration: none; font-size: 0.9rem; } 
        .footer-socials { display: flex; gap: 10px; justify-content: flex-end; margin-top: 10px; }
        .f-icon-btn { width: 30px; height: 30px; border: 1px solid rgba(255,255,255,0.3); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; text-decoration: none; }
        
        @media (max-width: 768px) { .footer-grid { text-align: center; direction: ltr; } .footer-socials { justify-content: center; } }

        .video-modal { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); display: flex; justify-content: center; align-items: center; z-index: 2000; }
        .modal-video { width: 90%; max-width: 800px; }
        .close-modal { position: absolute; top: 20px; right: 20px; color: white; font-size: 2rem; cursor: pointer; }
        .floating-whatsapp { position: fixed; bottom: 20px; left: 20px; background-color: #25d366; color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; z-index: 1000; }
        #scrollToTopBtn { position: fixed; bottom: 20px; right: 20px; background: var(--gold-gradient); color: white; border: none; width: 45px; height: 45px; border-radius: 50%; cursor: pointer; z-index: 1000; }
      `}</style>
    </div>
  );
}