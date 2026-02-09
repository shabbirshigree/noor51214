'use client';
import React, { useState, useEffect } from 'react';

export default function HomePage() {
  const [currentImg, setCurrentImg] = useState(0);
  const [videoModal, setVideoModal] = useState<string | null>(null);
  const [showScroll, setShowScroll] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // --- ہیڈر تصاویر (پرانے پیج والی) ---
  const headerImages = [
    "https://res.cloudinary.com/dtqrziupt/image/upload/v1768104581/2_sn9tyl.png",
    "https://res.cloudinary.com/dtqrziupt/image/upload/v1768104581/4_xaylj9.png",
    "https://res.cloudinary.com/dtqrziupt/image/upload/v1768104581/1_shgdib.png",
    "https://res.cloudinary.com/dtqrziupt/image/upload/v1768104581/3_fm3ja9.png",
    "https://res.cloudinary.com/dtqrziupt/image/upload/v1768104581/5_s7hgrb.png",
    "https://res.cloudinary.com/dtqrziupt/image/upload/v1768104582/6_oqageq.png",
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

  return (
    <div className="main-wrapper">
      
      {/* 1. روحانی ہیڈر */}
      <div className="spiritual-overlay">
         <p className="ayat-text">مَا شَآءَ اللّٰهُۙ - لَا قُوَّةَ اِلَّا بِاللّٰهِۚ</p>
      </div>

      {/* 2. مین ہیڈر امیج */}
      <div className="header-wrapper">
        {headerImages.map((img, index) => (
          <img 
            key={index} src={img} alt="Header" 
            className={`header-img ${index === currentImg ? 'active' : ''}`}
          />
        ))}
      </div>

      {/* 3. نیویگیشن بار (پرانے پیج جیسا) */}
      <nav className="navbar">
        <div className="menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>☰</div>
        <ul className={`nav-list ${mobileMenuOpen ? 'show-mobile' : ''}`}>
           <li><a href="/" className="nav-link special-gold">Home</a></li>
           <li><a href="/project" className="nav-link">Noor-ul-Quran</a></li>
           <li><a href="/about" className="nav-link">About Me</a></li>
           <li><a href="/channels" className="nav-link">Channels</a></li>
           <li><a href="/gallery" className="nav-link">Gallery</a></li>
           <li><a href="/library" className="nav-link">Library</a></li>
           <li><a href="/articles" className="nav-link">Articles</a></li>
           <li><a href="/services" className="nav-link">Services</a></li>
           <li><a href="/contact" className="nav-link">Contact</a></li>
        </ul>
      </nav>

      {/* 4. ٹائٹل سٹرپ */}
      <div className="main-title-area">
         <h1 className="main-name">Haji Shabbir Ahmed Shigri</h1>
         <p className="designation">Senior Journalist | Cultural Expert | Founder Noor-ul-Quran</p>
      </div>

      {/* 5. نیوز ٹکر */}
      <div className="news-ticker-container">
         <div className="ticker-text-wrapper">
            <div className="ticker-text">
               ★ "ONE MAN ARMY" of Media Industry ★ FIRST TIME IN THE WORLD: Visual Quran Project ★ Representative of Astan Quds Razavi ★ Founder of Noor Productions ★
            </div>
         </div>
      </div>

      {/* 6. ویلکم کارڈ */}
      <div className="container">
         <div className="welcome-card">
            <div className="bismillah">﷽</div>
            <p className="welcome-text">
               السلام علیکم! میں آپ کو اپنے آفیشل ویب سائیٹ پر خوش آمدید کہتا ہوں۔ یہ ویب سائٹ میری 45 سالہ صحافتی، ثقافتی، سماجی اور دینی خدمات کا ایک عاجزانہ عکس ہے۔ میرا عزم دین خدا اور مخلوق خدا کی خدمت، محبت، امن، اور آشتی کا فروغ ہے۔ امید ہے آپ ان کاوشوں کے بارے میں اپنی تجاویز سے حوصلہ افزائی فرمائیں گے۔
            </p>
            <span className="founder-name">حاجی شبیر احمد شگری</span>
         </div>
      </div>

      {/* 7. کوئیک نیویگیشن (پرانے لنکس) */}
      <div className="container">
         <div className="founder-grid">
            <a href="/project" className="founder-item">
               <div className="f-icon">📖</div>
               <div className="f-title">نور القرآن</div>
            </a>
            <a href="/channels" className="founder-item">
               <div className="f-icon">🎥</div>
               <div className="f-title">نور پروڈکشنز</div>
            </a>
            <a href="/gallery?cat=friendship" className="founder-item">
               <div className="f-icon">🤝</div>
               <div className="f-title">پاک ایران دوستی</div>
            </a>
            <a href="https://pakiiranassociation.wixsite.com/pira" target="_blank" className="founder-item">
               <div className="f-icon">💻</div>
               <div className="f-title">ویب سائٹ</div>
            </a>
            <a href="/gallery?cat=diplomacy" className="founder-item">
               <div className="f-icon">🌍</div>
               <div className="f-title">ٹریڈ اینڈ کلچر</div>
            </a>
            <a href="/gallery?cat=diplomacy" className="founder-item">
               <div className="f-icon">🚌</div>
               <div className="f-title">سیاحت</div>
            </a>
            <a href="https://www.youtube.com/@TiflaneNoor" target="_blank" className="founder-item">
               <div className="f-icon">👶</div>
               <div className="f-title">طفلانِ نور</div>
            </a>
            <a href="/contact" className="founder-item">
               <div className="f-icon">📞</div>
               <div className="f-title">رابطہ</div>
            </a>
         </div>
      </div>

      {/* 8. نور القرآن ہائی لائٹ */}
      <div className="container">
         <div className="mission-card">
            <div className="mission-text">
               <span className="badge">WORLD'S FIRST</span>
               <h3>📖 Noor-ul-Quran Project</h3>
               <p className="urdu-line">نورالقرآن ویژول کا مقصد قرآن مجید کو سن کر اور دیکھ کر قرآنی آیات کو سمجھنا ہے۔ ان شاء اللہ</p>
               <a href="/project" className="card-btn">پروجیکٹ دیکھیں</a>
            </div>
            <img src="https://res.cloudinary.com/dtqrziupt/image/upload/v1766843381/quran_logo.jpg_ie9iqz.png" className="quran-img" />
         </div>
      </div>

      {/* 9. اعزازات (موبائل پر 2 برابر لائنیں) */}
      <div className="container">
         <h2 className="section-title">Distinguished Honors</h2>
         <div className="honors-grid">
            <div className="honor-card-gold" onClick={() => window.location.href='/gallery?cat=reza'}>
               <h3>🟢 Khadim-e-Imam Reza</h3>
               <p>Mashhad, Iran</p>
            </div>
            <div className="honor-card-gold" onClick={() => window.location.href='/gallery?cat=abbas'}>
               <h3>🔴 Khadim-e-Ghazi Abbas</h3>
               <p>Karbala, Iraq</p>
            </div>
         </div>
         
         <div className="awards-grid">
            <div className="award-item"><div className="aw-icon">🥇</div><div className="aw-text"><strong>Gold Medalist:</strong><br/>Cultural Services</div></div>
            <div className="award-item"><div className="aw-icon">🤝</div><div className="aw-text"><strong>Founder President:</strong><br/>Pak-Iran Friendship</div></div>
            <div className="award-item"><div className="aw-icon">🕌</div><div className="aw-text"><strong>Sada-e-Ghazi:</strong><br/>Services at Shrine</div></div>
            <div className="award-item"><div className="aw-icon">🏆</div><div className="aw-text"><strong>Media Excellence:</strong><br/>2025 (Lahore)</div></div>
         </div>
      </div>

      {/* 10. پیشہ ورانہ سفر (موبائل پر 2 کالم) */}
      <div className="container bg-white-sec">
         <h2 className="section-title">پیشہ ورانہ سفر (Journey)</h2>
         <div className="journey-grid">
            <a href="/gallery" className="j-card"><div className="j-head">🎙️ Radio Pakistan</div><p>Golden Voice of GB</p></a>
            <a href="/articles" className="j-card"><div className="j-head">📰 Journalism</div><p>45 Years Experience</p></a>
            <a href="/channels" className="j-card"><div className="j-head">📺 TV Talk Shows</div><p>Host & Guest</p></a>
            <a href="/gallery" className="j-card"><div className="j-head">🤝 Diplomacy</div><p>Ex-PRO Khana Farhang</p></a>
            <a href="/project" className="j-card"><div className="j-head">🎥 Noor Productions</div><p>Founder & CEO</p></a>
            <a href="/books" className="j-card"><div className="j-head">🚌 Tourism</div><p>Pioneer of Ziarat</p></a>
            <a href="/library" className="j-card"><div className="j-head">📚 Author</div><p>9+ Books Written</p></a>
            <a href="/gallery" className="j-card"><div className="j-head">📸 Photo Gallery</div><p>Visual Archive</p></a>
         </div>
      </div>

      {/* 11. لیجنڈز (سلائیڈر) */}
      <div className="container">
         <h2 className="section-title">Legends About Shigri</h2>
         <div className="slider-area">
            <div className="slide-track">
               {[
                 {n:"علامہ اقبالؒ", v:"https://res.cloudinary.com/dtqrziupt/video/upload/v1767715324/Abdulghfar_roparhi_m5ifhn.mp4", i:"https://upload.wikimedia.org/wikipedia/commons/c/c2/Allama_Iqbal.jpg"},
                 {n:"قائداعظمؒ", v:"https://res.cloudinary.com/dtqrziupt/video/upload/v1767525505/1.Mian_Manzoor_Ahmed_Watoo_evn2nm.mp4", i:"https://upload.wikimedia.org/wikipedia/commons/6/6d/Jinnah_1945.jpg"},
                 {n:"امام خمینیؒ", v:"", i:"https://upload.wikimedia.org/wikipedia/commons/2/22/Ruhollah_Khomeini.jpg"},
                 {n:"آیت اللہ خامنہ ای", v:"", i:"https://upload.wikimedia.org/wikipedia/commons/e/e3/Ali_Khamenei_2017.jpg"},
                 {n:"پیر عثمان شاہ", v:"", i:"https://res.cloudinary.com/dtqrziupt/video/upload/v1767525557/4.Pir_Usman_Shah_Noori_kz9ieb.jpg"},
                 {n:"علامہ اقبالؒ", v:"https://res.cloudinary.com/dtqrziupt/video/upload/v1767715324/Abdulghfar_roparhi_m5ifhn.mp4", i:"https://upload.wikimedia.org/wikipedia/commons/c/c2/Allama_Iqbal.jpg"},
               ].map((l, i) => (
                  <div key={i} className="slide-card" onClick={() => setVideoModal(l.v)}>
                     <div className="v-thumb"><img src={l.i} /><div className="play-icon">▶</div></div>
                     <div className="s-info">{l.n}</div>
                  </div>
               ))}
            </div>
         </div>
      </div>

      {/* 12. کتب (سلائیڈر) */}
      <div className="container">
         <h2 className="section-title">Featured Books</h2>
         <div className="slider-area">
            <div className="book-track">
               {[
                 {t:"سکون کی تلاش", i:"https://res.cloudinary.com/dtqrziupt/image/upload/v1768016596/sakoon.ki.talash_nmlugh.png"},
                 {t:"بوئے بہشت", i:"https://res.cloudinary.com/dtqrziupt/image/upload/v1768063213/Booy-e-Bahisht_iv282m.png"},
                 {t:"روح کی معراج", i:"https://res.cloudinary.com/dtqrziupt/image/upload/v1768062537/front_page_jce6fj.png"},
                 {t:"کنجی بہشت", i:"https://res.cloudinary.com/dtqrziupt/image/upload/v1768074750/Kunji-e-Bahisht_book_Dua_ukkrrm.png"},
                 {t:"سیاحت ایران", i:"https://res.cloudinary.com/dtqrziupt/image/upload/v1768016582/Siahat-e-Iran.book_orgj2d.png"},
                 {t:"سکون کی تلاش", i:"https://res.cloudinary.com/dtqrziupt/image/upload/v1768016596/sakoon.ki.talash_nmlugh.png"},
               ].map((b, i) => (
                  <a key={i} href="/library" className="book-mini">
                     <img src={b.i} alt={b.t} />
                     <p>{b.t}</p>
                  </a>
               ))}
            </div>
         </div>
      </div>

      {/* 13. بٹن */}
      <div style={{textAlign:'center', margin:'30px 0'}}>
         <a href="/about" className="read-more-btn">میرے بارے میں مزید جانیں</a>
      </div>

      {/* 14. فوٹر (پرانا سٹائل) */}
      <footer>
         <div className="footer-grid">
            <div className="f-col">
               <h3>ہمارے بارے میں</h3>
               <p>نور پروڈکشنز اور حاجی شبیر احمد شگری کا مقصد جدید میڈیا کے ذریعے اسلامی تعلیمات اور ثقافتی ورثے کو محفوظ کرنا ہے۔</p>
            </div>
            <div className="f-col">
               <h3>کوئیک لنکس</h3>
               <ul>
                  <li><a href="/">ہوم پیج</a></li>
                  <li><a href="/project">نور القرآن</a></li>
                  <li><a href="/contact">رابطہ</a></li>
               </ul>
            </div>
            <div className="f-col">
               <h3>سوشل میڈیا</h3>
               <div className="social-icons">
                  <a href="https://youtube.com/@shabbirshigri">📺</a>
                  <a href="https://facebook.com/shabbirshigri">📘</a>
                  <a href="https://twitter.com/shabbirshigri">🐦</a>
               </div>
            </div>
         </div>
         <div className="copyright">All Rights Reserved © 2026 - Haji Shabbir Ahmed Shigri</div>
      </footer>

      {/* ویڈیو ماڈل */}
      {videoModal && (
        <div className="video-modal" onClick={() => setVideoModal(null)}>
           <span className="close-modal">×</span>
           <video src={videoModal} controls autoPlay className="modal-vid" onClick={e => e.stopPropagation()}></video>
        </div>
      )}

      {/* فلوٹنگ بٹن */}
      <a href="https://wa.me/923334491715" target="_blank" className="float-wa"><i className="fab fa-whatsapp"></i>💬</a>
      {showScroll && <button onClick={() => window.scrollTo({top:0, behavior:'smooth'})} className="float-top">⬆</button>}

      {/* --- CSS STYLES --- */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Noto+Naskh+Arabic:wght@400;700&family=Cinzel:wght@400;700&family=Noto+Nastaliq+Urdu:wght@400;700&display=swap');
        
        :root { --royal: #0f4c75; --gold: #b8860b; --light-gold: #ffd700; --bg: #f4f7f6; }
        
        body { margin: 0; padding: 0; background: var(--bg); font-family: 'Poppins', 'Noto Nastaliq Urdu', serif; overflow-x: hidden; }
        
        /* HEADER */
        .header-wrapper { width: 100%; position: relative; overflow: hidden; border-bottom: 4px solid var(--gold); }
        .header-img { width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left: 0; opacity: 0; transition: opacity 1s; }
        .header-img.active { opacity: 1; }
        
        @media (min-width: 769px) { .header-wrapper { height: 400px; } }
        @media (max-width: 768px) { .header-wrapper { height: 180px; } } /* موبائل ہیڈر سائز فکس */

        .spiritual-overlay { background: var(--royal); color: var(--light-gold); text-align: center; padding: 5px; font-family: 'Noto Naskh Arabic'; font-size: 0.9rem; }

        /* NAVBAR */
        .navbar { background: var(--royal); position: sticky; top: 0; z-index: 1000; box-shadow: 0 4px 10px rgba(0,0,0,0.3); border-bottom: 3px solid var(--gold); }
        .nav-list { list-style: none; margin: 0; padding: 0; display: flex; justify-content: center; }
        .nav-link { color: white; text-decoration: none; padding: 12px 15px; display: block; font-weight: bold; font-size: 0.9rem; transition: 0.3s; }
        .nav-link:hover, .special-gold { background: var(--gold); color: black; }
        .menu-toggle { display: none; color: white; font-size: 1.5rem; padding: 10px; cursor: pointer; }

        @media (max-width: 768px) {
           .nav-list { display: none; flex-direction: column; background: var(--royal); }
           .nav-list.show-mobile { display: flex; }
           .menu-toggle { display: block; }
           .nav-link { border-bottom: 1px solid rgba(255,255,255,0.1); }
        }

        /* TITLE SECTION */
        .main-title-area { text-align: center; padding: 15px; background: var(--royal); color: white; border-bottom: 3px solid var(--gold); }
        .main-name { 
            font-family: 'Cinzel', serif; color: var(--light-gold); margin: 0; font-weight: 700; text-transform: uppercase; 
            font-size: 2.2rem; 
        }
        .designation { margin: 5px 0 0; font-size: 0.9rem; color: #ddd; }
        
        @media (max-width: 768px) {
            .main-name { font-size: 1.3rem; line-height: 1.3; } /* نام کا فونٹ چھوٹا */
            .designation { font-size: 0.7rem; }
        }

        /* TICKER */
        .news-ticker-container { background: linear-gradient(45deg, #b8860b, #ffd700); padding: 5px; overflow: hidden; white-space: nowrap; border-bottom: 1px solid white; }
        .ticker-text { display: inline-block; animation: scrollLeft 20s linear infinite; font-weight: bold; color: black; }

        /* WELCOME CARD */
        .container { max-width: 1100px; margin: 20px auto; padding: 0 15px; }
        .welcome-card { background: white; border: 2px solid var(--gold); padding: 25px; text-align: center; border-radius: 15px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); }
        .bismillah { font-family: 'Noto Naskh Arabic'; font-size: 1.5rem; color: var(--royal); margin-bottom: 10px; }
        .welcome-text { font-family: 'Noto Nastaliq Urdu'; font-size: 1.1rem; line-height: 2.2; text-align: justify; direction: rtl; }
        .founder-name { display: block; margin-top: 15px; font-weight: bold; color: var(--royal); font-size: 1.2rem; }

        /* FOUNDER GRID (QUICK LINKS) */
        .founder-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); gap: 10px; }
        .founder-item { background: var(--royal); color: white; padding: 10px; border-radius: 8px; text-align: center; text-decoration: none; border: 1px solid var(--gold); display: flex; flex-direction: column; align-items: center; transition: 0.3s; }
        .founder-item:hover { background: var(--gold); color: black; transform: translateY(-3px); }
        .f-icon { font-size: 1.5rem; margin-bottom: 5px; }
        .f-title { font-size: 0.8rem; font-weight: bold; }

        /* MISSION CARD */
        .mission-card { background: white; border: 1px solid var(--gold); padding: 20px; display: flex; align-items: center; gap: 20px; border-radius: 10px; flex-wrap: wrap; text-align: center; justify-content: center; }
        .badge { background: var(--royal); color: white; padding: 3px 8px; border-radius: 4px; font-size: 0.7rem; font-weight: bold; }
        .urdu-line { font-family: 'Noto Nastaliq Urdu'; font-weight: bold; color: var(--gold); font-size: 1.1rem; margin: 10px 0; }
        .card-btn { background: linear-gradient(to right, #ffe259, #ffa751); color: black; padding: 8px 20px; border-radius: 50px; text-decoration: none; font-weight: bold; display: inline-block; }
        .quran-img { width: 120px; border-radius: 10px; border: 3px solid var(--gold); }

        /* HONORS (2 Lines on Mobile) */
        .honors-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-bottom: 15px; }
        .honor-card-gold { background: linear-gradient(135deg, #b8860b, #a0720b); color: white; padding: 15px; border-radius: 10px; text-align: center; border: 2px solid var(--light-gold); cursor: pointer; }
        .honor-card-gold h3 { margin: 0; font-size: 0.9rem; text-shadow: 1px 1px 0 rgba(0,0,0,0.3); }
        .honor-card-gold p { margin: 2px 0 0; font-size: 0.7rem; }

        /* AWARDS GRID (Mobile 2 cols) */
        .awards-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; }
        .award-item { background: white; border: 1px solid #ddd; padding: 10px; display: flex; align-items: center; gap: 10px; border-radius: 8px; }
        .aw-icon { font-size: 1.5rem; color: var(--gold); }
        .aw-text { font-size: 0.8rem; line-height: 1.2; }
        
        @media (max-width: 768px) {
            .awards-grid { grid-template-columns: 1fr 1fr; } /* 2 لائنوں میں برابر */
            .award-item { flex-direction: column; text-align: center; font-size: 0.7rem; }
        }

        /* JOURNEY GRID (Mobile 2 cols) */
        .journey-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 10px; }
        .j-card { background: white; border: 1px solid #eee; border-radius: 8px; overflow: hidden; text-decoration: none; color: black; display: block; transition: 0.3s; }
        .j-card:hover { transform: translateY(-3px); border-color: var(--gold); }
        .j-head { background: linear-gradient(45deg, #b8860b, #e0aa3e); padding: 8px; font-weight: bold; font-size: 0.85rem; color: black; }
        .j-card p { padding: 10px; font-size: 0.75rem; margin: 0; color: #555; }

        @media (max-width: 768px) {
            .journey-grid { grid-template-columns: 1fr 1fr; } /* 2 کالم موبائل پر */
        }

        /* SLIDERS */
        .slider-area { overflow: hidden; padding: 10px 0; }
        .slide-track, .book-track { display: flex; gap: 15px; width: max-content; animation: scroll 30s linear infinite; }
        .slide-card { width: 180px; background: white; border: 1px solid #ddd; border-radius: 8px; cursor: pointer; }
        .v-thumb { position: relative; height: 100px; }
        .v-thumb img { width: 100%; height: 100%; object-fit: cover; }
        .play-icon { position: absolute; bottom: 5px; right: 5px; color: white; font-size: 1.2rem; text-shadow: 0 0 5px black; }
        .s-info { padding: 5px; text-align: center; font-size: 0.8rem; font-weight: bold; background: var(--gold); }
        
        .book-mini { width: 120px; text-align: center; text-decoration: none; color: black; background: white; padding: 5px; border: 1px solid #ddd; border-radius: 5px; }
        .book-mini img { width: 100%; height: 140px; object-fit: contain; }
        .book-mini p { margin: 5px 0 0; font-size: 0.8rem; font-family: 'Noto Nastaliq Urdu'; }

        /* BUTTONS */
        .read-more-btn { background: var(--gold); color: black; padding: 10px 30px; border-radius: 50px; text-decoration: none; font-weight: bold; }

        /* FOOTER */
        footer { background: var(--royal); color: white; padding: 30px 15px 10px; border-top: 5px solid var(--gold); text-align: center; margin-top: 40px; }
        .footer-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; max-width: 1000px; margin: 0 auto; text-align: right; direction: rtl; }
        .f-col h3 { color: var(--light-gold); border-bottom: 1px solid var(--gold); padding-bottom: 5px; font-size: 1.1rem; }
        .f-col ul { list-style: none; padding: 0; }
        .f-col a { color: #ccc; text-decoration: none; font-size: 0.9rem; }
        .social-icons a { font-size: 1.5rem; margin: 0 5px; text-decoration: none; }
        .copyright { margin-top: 20px;