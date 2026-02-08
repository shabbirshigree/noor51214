'use client';
import React, { useState, useEffect } from 'react';
import { homeData } from './homeData';

export default function HomePage() {
  const [currentImg, setCurrentImg] = useState(0);
  const [videoModal, setVideoModal] = useState<string | null>(null);
  const [showScroll, setShowScroll] = useState(false);
  
  // کمنٹس سٹیٹ
  const [comments, setComments] = useState([
    { name: "علی رضا", msg: "ماشاءاللہ! استاد جی بہت ہی شاندار کاوش ہے۔", likes: 12 },
    { name: "محمد اویس", msg: "ویب سائٹ کا ڈیزائن اور مواد دونوں بہترین ہیں۔ اللہ برکت دے۔", likes: 8 },
  ]);
  const [newComment, setNewComment] = useState("");
  const [newName, setNewName] = useState("");

  // --- ہیڈر سلائیڈ شو ---
  useEffect(() => {
    const timer = setInterval(() => {
      if (homeData.headerImages && homeData.headerImages.length > 0) {
        setCurrentImg((prev) => (prev + 1) % homeData.headerImages.length);
      }
    }, 4000); 

    const handleScroll = () => {
      if (window.scrollY > 300) setShowScroll(true); else setShowScroll(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => { clearInterval(timer); window.removeEventListener('scroll', handleScroll); };
  }, []);

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment && newName) {
      setComments([{ name: newName, msg: newComment, likes: 0 }, ...comments]);
      setNewComment(""); setNewName("");
    }
  };
  const handleLike = (index: number) => { const nc = [...comments]; nc[index].likes += 1; setComments(nc); };
  const handleDelete = (index: number) => { const nc = [...comments]; nc[index].splice(index, 1); setComments(nc); };

  // مینیو (خالص اردو)
  const menuItems = [
    { label: "زبانیں 🌍", link: "/languages" }, // الگ سے نمایاں
    { label: "ہوم", link: "/" },
    { label: "نور القرآن", link: "/project" },
    { label: "تعارف", link: "/about" }, // About Me
    { label: "چینلز", link: "/channels" },
    { label: "لائبریری", link: "/library" },
    { label: "گیلری", link: "/gallery" },
    { label: "خدمات", link: "/services" },
    { label: "رابطہ", link: "/contact" },
  ];

  return (
    <div className="main-container">
      
      {/* 1. روحانی حفاظتی پٹی */}
      <div className="spiritual-bar">
        <span>ماشآءَ اللَّهُ لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ</span>
      </div>

      {/* 2. ہیڈر */}
      <header className="hero-header">
        {homeData.headerImages && homeData.headerImages.map((img, index) => (
          <img 
            key={index} src={img} alt="Header" 
            className={`header-bg ${index === currentImg ? 'active' : ''}`}
          />
        ))}
      </header>

      {/* 3. مینیو بار (اردو) */}
      <nav className="sticky-nav">
        <div className="nav-container">
           {menuItems.map((item, index) => (
             <a key={index} href={item.link} className={`nav-link-royal nori-font ${index === 0 ? 'special-lang-btn' : ''}`}>
               {item.label}
             </a>
           ))}
        </div>
      </nav>

      {/* 4. نام (بہت بڑا اور بولڈ) */}
      <div className="title-section">
        <div className="title-box">
           {/* فونٹ انگلش لیکن بہت بولڈ */}
           <h1 className="main-name font-english">Haji Shabbir Ahmed Shigri</h1>
           {/* عہدہ چھوٹا */}
           <p className="designation">Senior Journalist | Cultural Expert | Founder Noor-ul-Quran</p>
        </div>
      </div>

      {/* 5. نیوز ٹکر */}
      <div className="news-ticker">
        <div className="ticker-content">
          <p>★ "ONE MAN ARMY" of Media Industry ★ FIRST TIME IN THE WORLD: Visual Quran Project ★ Representative of Astan Quds Razavi ★ Founder of Noor Productions ★</p>
        </div>
      </div>

      {/* 6. ویلکم سیکشن (بسم اللہ چھوٹی) */}
      <section className="section-container">
        <div className="welcome-card royal-border">
          <div className="bismillah-small">﷽</div>
          <p className="nori-font welcome-text">{homeData.welcome.text}</p>
          <div className="founder-signature nori-font">
             <span>{homeData.welcome.founder}</span>
          </div>
        </div>
      </section>

      {/* 7. کوئیک نیویگیشن */}
      <section className="section-container">
        <h2 className="nori-font section-heading">فوری روابط (Quick Links)</h2>
        <div className="nav-grid">
          {homeData.quickLinks && homeData.quickLinks.map((item, index) => (
            <a key={index} href={item.link} className="quick-nav-card">
              <div className="quick-icon">{item.icon}</div>
              <h3 className="nori-font">{item.title}</h3>
            </a>
          ))}
        </div>
      </section>

      {/* 8. نور القرآن پروجیکٹ */}
      <section className="section-container">
        <div className="project-highlight-white">
          <div className="project-info">
             <span className="badge-shine">WORLD'S FIRST</span>
             <h2 className="nori-font project-title">نور القرآن ویژول پروجیکٹ</h2>
             <p className="nori-font project-desc-bold">دنیا کا پہلا ایسا پروجیکٹ جس میں قرآن مجید کا ترجمہ ویڈیوز کی شکل میں پیش کیا گیا ہے۔ یہ ایک تاریخی سنگ میل ہے۔</p>
             <a href="/project" className="gold-btn-shiny">پروجیکٹ دیکھیں</a>
          </div>
          <div className="project-img-box">
             <img src="https://res.cloudinary.com/dtqrziupt/image/upload/v1766843381/quran_logo.jpg_ie9iqz.png" alt="Quran" className="quran-logo-large" />
          </div>
        </div>
      </section>

      {/* 9. اعزازات */}
      <section className="section-container">
        <h2 className="nori-font section-heading">اعزازاتِ مقدسہ</h2>
        <div className="honors-grid-controlled">
          {homeData.specialHonors && homeData.specialHonors.map((honor, index) => (
            <div key={index} className="honor-card-gold">
               <h3 className="nori-font honor-title">{honor.title}</h3>
               <p className="nori-font honor-sub">{honor.shrine}</p>
            </div>
          ))}
        </div>
        
        <div className="awards-grid-equal">
           {homeData.awards && homeData.awards.map((aw, i) => (
             <div key={i} className="award-item-gold">
               <span className="award-icon">{aw.icon}</span>
               <div className="award-text-area">
                 <strong className="award-title">{aw.title}</strong>
                 <br/><span className="award-sub">{aw.sub}</span>
               </div>
             </div>
           ))}
        </div>
      </section>

      {/* 11. پیشہ ورانہ سفر */}
      <section className="section-container">
        <h2 className="nori-font section-heading">پیشہ ورانہ سفر (Journey)</h2>
        <div className="journey-grid-compact">
          {homeData.journey && homeData.journey.map((j, i) => (
             <a key={i} href={j.link} className="journey-box">
                <div className="j-icon">{j.icon}</div>
                <h4 className="j-title">{j.title}</h4>
                <p className="j-sub">{j.sub}</p>
             </a>
          ))}
        </div>
      </section>

      {/* 12. لیجنڈز */}
      <section className="section-container">
        <h2 className="nori-font section-heading">اہم شخصیات (Legends)</h2>
        <div className="slider-track-container">
          <div className="slider-track">
            {homeData.legends && homeData.legends.map((legend, i) => (
              <div key={i} className="legend-card" onClick={() => setVideoModal(legend.video)}>
                <div className="legend-img">
                  <img src={legend.img} alt={legend.name} />
                  <div className="play-overlay"><span className="play-icon-small">▶</span></div>
                </div>
                <div className="legend-info">
                  <h3 className="nori-font legend-name">{legend.name}</h3>
                  <p className="nori-font designation-text">{legend.role}</p>
                </div>
              </div>
            ))}
             {homeData.legends && homeData.legends.map((legend, i) => (
              <div key={i+'d'} className="legend-card" onClick={() => setVideoModal(legend.video)}>
                <div className="legend-img"><img src={legend.img}/><div className="play-overlay"><span className="play-icon-small">▶</span></div></div>
                <div className="legend-info"><h3 className="nori-font legend-name">{legend.name}</h3><p className="nori-font designation-text">{legend.role}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. کتابیں */}
      <section className="section-container">
        <h2 className="nori-font section-heading">تصنیفات (Books)</h2>
        <div className="slider-track-container">
          <div className="slider-track reverse">
            {homeData.books && homeData.books.map((book, i) => (
              <div key={i} className="book-card-style">
                <img src={book.img} alt={book.title} />
              </div>
            ))}
            {homeData.books && homeData.books.map((book, i) => (
              <div key={i+'d'} className="book-card-style">
                <img src={book.img} alt={book.title} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. انٹرنیشنل فیچر */}
      <section className="section-container">
        <h2 className="nori-font section-heading">International Feature</h2>
        <div className="video-feature-box">
           <div className="video-label">🎬 Iqbal: The Eastern Wisdom (Press TV)</div>
           <div className="iframe-container">
             <iframe width="100%" height="350" src="https://www.youtube.com/embed/YOUR_VIDEO_ID" title="Press TV" frameBorder="0" allowFullScreen></iframe>
           </div>
        </div>
      </section>

      {/* 15. بٹن */}
      <div style={{textAlign: 'center', margin: '30px 0'}}>
        <a href="/about" className="know-more-btn nori-font">میرے بارے میں مزید جانیں</a>
      </div>

      {/* 16. گیسٹ بک */}
      <section className="section-container">
         <div className="guestbook-royal">
            <div className="gb-header">
                <h2 className="nori-font" style={{color:'#fff', margin:0}}>تأثرات (Guestbook)</h2>
            </div>
            <div className="gb-body">
                <div className="comments-list">
                  {comments.map((c, i) => (
                    <div key={i} className="royal-comment">
                      <div className="rc-header">
                        <strong>{c.name}</strong>
                        <button onClick={() => handleDelete(i)} className="delete-btn">×</button>
                      </div>
                      <p>{c.msg}</p>
                      <button onClick={() => handleLike(i)} className="like-btn">❤ {c.likes}</button>
                    </div>
                  ))}
                </div>
                <form className="royal-form" onSubmit={handleAddComment}>
                   <input type="text" placeholder="آپ کا نام..." value={newName} onChange={e => setNewName(e.target.value)} required />
                   <textarea placeholder="پیغام..." value={newComment} onChange={e => setNewComment(e.target.value)} required></textarea>
                   <button type="submit">بھیجیں</button>
                </form>
            </div>
         </div>
      </section>

      {/* 17. فوٹر */}
      <footer className="main-footer">
         <div className="footer-content">
            <div className="f-col">
               <h3 className="nori-font">حاجی شبیر احمد شگری</h3>
               <p className="nori-font footer-text">ہمارا مقصد جدید میڈیا کے ذریعے اسلامی تعلیمات، ثقافت اور امن کا پیغام دنیا بھر میں عام کرنا ہے۔</p>
            </div>
            
            <div className="f-col">
               <h3 className="nori-font">کوئیک لنکس</h3>
               <ul className="footer-links">
                 <li><a href="/">ہوم پیج</a></li>
                 <li><a href="/project">نور القرآن</a></li>
                 <li><a href="/contact">رابطہ</a></li>
               </ul>
            </div>

            <div className="f-col">
               <h3 className="nori-font">سوشل میڈیا</h3>
               <div className="social-icons-grid">
                 {homeData.socialLinks && homeData.socialLinks.map((social, i) => (
                   <a key={i} href={social.link} target="_blank" className="social-btn-original" title={social.name}>
                     <img src={social.icon} alt={social.name} />
                   </a>
                 ))}
               </div>

               <h3 className="nori-font" style={{marginTop:'15px'}}>نیوز لیٹر</h3>
               <div className="newsletter-box">
                 <input type="email" placeholder="Email لکھیں..." />
                 <button>OK</button>
               </div>
            </div>
         </div>
         <div className="footer-bottom">
           <p className="nori-font">© 2026 حاجی شبیر احمد شگری | جملہ حقوق محفوظ ہیں</p>
         </div>
      </footer>

      {/* --- فلوٹنگ بٹنز --- */}
      <a href="https://wa.me/923334491715" target="_blank" className="float-whatsapp">
         <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" />
      </a>
      {showScroll && (
        <button onClick={() => window.scrollTo({top:0, behavior:'smooth'})} className="float-scroll">⬆</button>
      )}
      {videoModal && (
        <div className="modal-overlay" onClick={() => setVideoModal(null)}>
           <div className="modal-content"><video src={videoModal} controls autoPlay className="modal-video"></video></div>
        </div>
      )}

      {/* --- CSS --- */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Gulzar&family=Amiri:wght@700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@900&display=swap');
        
        :root { 
            --royal: #002B5B; 
            --gold: #aa862e; 
            --light-gold: #fcf6ba; 
        }
        
        html, body { margin: 0; padding: 0; background: #fdfdfd; font-family: 'Jameel Noori Nastaleeq', 'Gulzar', serif; direction: rtl; overflow-x: hidden; width: 100%; }
        
        .font-english { font-family: 'Cinzel', serif; letter-spacing: 1px; }

        .spiritual-bar { background: var(--royal); color: #ffd700; text-align: center; padding: 4px; font-family: 'Amiri', serif; font-size: 0.9rem; border-bottom: 2px solid var(--gold); }
        
        .hero-header { height: 300px; width: 100%; position: relative; overflow: hidden; border-bottom: 4px solid var(--gold); }
        .header-bg { position: absolute; top:0; left:0; width: 100%; height: 100%; object-fit: cover; opacity: 0; transition: opacity 1s ease-in-out; z-index: 1; }
        .header-bg.active { opacity: 1; z-index: 2; }

        /* مینیو بار: اردو */
        .sticky-nav { position: sticky; top: 0; background: var(--royal); z-index: 1000; box-shadow: 0 4px 10px rgba(0,0,0,0.3); border-bottom: 3px solid var(--gold); padding: 0; }
        .nav-container { display: flex; justify-content: center; flex-wrap: wrap; gap: 0; padding: 5px; }
        
        /* مینیو بٹن */
        .nav-link-royal { 
            color: #fff; padding: 8px 15px; text-decoration: none; font-weight: bold; 
            font-size: 1.1rem; /* اردو کے لیے سائز تھوڑا بڑا */
            border: 1px solid rgba(255,255,255,0.2); transition: 0.3s; 
            margin: 2px; border-radius: 4px; 
            /* اردو فونٹ */
            font-family: 'Jameel Noori Nastaleeq', 'Gulzar', serif;
            line-height: 1.4;
        }
        .nav-link-royal:hover { background: var(--gold); color: white; border-color: white; }
        
        /* "زبانیں" بٹن کے لیے خاص اسٹائل */
        .special-lang-btn { background: rgba(255,215,0,0.2); border-color: #ffd700; }
        .special-lang-btn:hover { background: #ffd700; color: black; }

        .title-section { text-align: center; padding: 10px 15px 0px 15px; background: #fff; margin-bottom: 0; }
        .title-box { display: inline-block; padding: 5px 20px; border-top: 1px solid #ddd; border-bottom: 1px solid #ddd; }
        
        /* نام: بہت بولڈ اور بڑا */
        .main-name { 
            font-size: clamp(2.2rem, 6vw, 3.5rem); /* Responsive Size */
            color: #aa862e !important; margin: 0; 
            text-transform: uppercase; letter-spacing: 1px; 
            font-weight: 900; /* Extra Extra Bold */
            text-shadow: 2px 2px 0px rgba(0,0,0,0.1);
        }
        /* عہدہ: چھوٹا */
        .designation { color: var(--gold); margin: 5px 0 0; font-family: sans-serif; font-weight: 400; font-size: 0.8rem; letter-spacing: 1px; opacity: 0.9; }

        .news-ticker { background: var(--gold); height: 30px; overflow: hidden; display: flex; align-items: center; margin-top: 5px; }
        .ticker-content { width: 100%; overflow: hidden; }
        .ticker-content p { white-space: nowrap; animation: scrollLeft 40s linear infinite; color: white; font-weight: bold; margin: 0; font-family: sans-serif; font-size: 0.9rem; }
        
        .section-container { max-width: 1000px; margin: 20px auto; padding: 0 15px; width: 100%; box-sizing: border-box; }
        
        .honors-grid-controlled { display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin-bottom: 15px; max-width: 600px; margin: 0 auto; }
        .honor-card-gold { background: var(--gold); color: white; border-radius: 10px; padding: 10px; text-align: center; border: 2px solid #8a6d20; box-shadow: 0 4px 10px rgba(0,0,0,0.1); display: flex; flex-direction: column; justify-content: center; min-height: 80px; }
        .honor-title { color: white; margin: 0; font-size: 1rem; text-shadow: 1px 1px 0 rgba(0,0,0,0.3); }
        .honor-sub { color: #eee; margin: 3px 0 0; font-size: 0.8rem; }

        .awards-grid-equal { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px; margin-top: 20px; }
        .award-item-gold { background: var(--gold); color: white; border: 2px solid #8a6d20; padding: 15px; display: flex; align-items: center; gap: 10px; border-radius: 8px; transition: 0.3s; min-height: 80px; }
        .award-item-gold:hover { transform: translateY(-3px); background: var(--royal); border-color: white; }
        .award-text-area { text-align: right; }
        .award-title { color: white; font-size: 1rem; font-weight: bold; display: block; }
        .award-sub { font-size: 0.8rem; color: #eee; }

        .journey-grid-compact { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 10px; justify-content: center; }
        .journey-box { background: var(--gold); color: white; padding: 15px; border-radius: 10px; text-align: center; text-decoration: none; transition: 0.3s; border: 2px solid #8a6d20; display: flex; flex-direction: column; justify-content: center; align-items: center; min-height: 120px; }
        .journey-box:hover { background: var(--royal); color: white; border-color: white; transform: translateY(-5px); }
        .j-icon { font-size: 1.3rem; margin-bottom: 5px; color: white; }
        .j-title { font-size: 0.9rem; }

        .welcome-card { background: white; padding: 25px; text-align: center; position: relative; background-image: radial-gradient(#d4af37 0.5px, transparent 0.5px); background-size: 20px 20px; }
        .royal-border { border: 4px double var(--gold); outline: 1px solid var(--royal); outline-offset: -6px; border-radius: 8px; }
        
        /* بسم اللہ: چھوٹا سائز */
        .bismillah-small { font-family: 'Amiri'; font-size: 1.2rem; color: var(--royal); margin-bottom: 5px; opacity: 0.8; }
        
        .welcome-text { font-size: 1.1rem; line-height: 2; text-align: justify; color: #333; margin-bottom: 15px; }
        .founder-signature span { font-size: 1.4rem; color: var(--royal); border-bottom: 2px solid var(--gold); }

        .nav-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 15px; }
        .quick-nav-card { background: linear-gradient(to bottom, #fff, #fcf6ba); border-radius: 8px; padding: 15px; text-align: center; text-decoration: none; box-shadow: 0 2px 5px rgba(0,0,0,0.1); transition: 0.3s; border: 1px solid var(--gold); display: block; }
        .quick-nav-card h3 { margin: 0; font-size: 1rem; color: var(--royal); }
        .quick-nav-card:hover { transform: translateY(-3px); background: var(--royal); border-color: white; }
        .quick-nav-card:hover h3, .quick-nav-card:hover .quick-icon { color: white; }
        .quick-icon { font-size: 1.5rem; margin-bottom: 5px; color: var(--gold); }

        .project-highlight-white { display: flex; gap: 20px; border-radius: 15px; padding: 30px; align-items: center; border: 4px solid var(--gold); overflow: hidden; background: white; flex-wrap: wrap; justify-content: center; text-align: center; box-shadow: 0 5px 20px rgba(212, 175, 55, 0.2); position: relative; }
        .project-highlight-white::before { content: ""; position: absolute; inset: 0; background-image: url("https://www.transparenttextures.com/patterns/arabesque.png"); opacity: 0.1; z-index: 0; }
        .project-info { flex: 1; min-width: 250px; z-index: 1; }
        .quran-logo-large { width: 140px; border-radius: 50%; border: 4px solid var(--gold); box-shadow: 0 5px 15px rgba(0,0,0,0.1); z-index: 1; }
        .badge-shine { background: var(--royal); color: white; padding: 3px 8px; border-radius: 4px; font-size: 0.7rem; font-weight: bold; }
        .project-title { color: var(--royal); font-size: 1.8rem; margin: 10px 0; text-shadow: 1px 1px 0 #ddd; font-weight: bold; }
        .project-desc-bold { font-size: 1.2rem; color: #000; margin-bottom: 15px; font-weight: 800; text-shadow: 1px 1px 0px #fff; }
        .gold-btn-shiny { background: linear-gradient(45deg, #ffd700, #b8860b); color: black; padding: 10px 30px; border-radius: 50px; text-decoration: none; font-weight: bold; display: inline-block; margin-top: 10px; font-size: 1rem; box-shadow: 0 4px 10px rgba(0,0,0,0.2); }

        .section-heading { text-align: center; color: var(--royal); font-size: 1.6rem; margin-bottom: 10px; }
        .slider-track-container { width: 100%; overflow: hidden; padding: 5px 0; }
        .slider-track { display: flex; gap: 20px; width: max-content; animation: scroll 60s linear infinite; }
        .slider-track:hover { animation-play-state: paused; }
        .legend-card { width: 200px; flex-shrink: 0; background: white; border-radius: 10px; overflow: hidden; border: 1px solid #ddd; }
        .legend-img { position: relative; height: 130px; }
        .legend-img img { width: 100%; height: 100%; object-fit: cover; }
        .play-icon-small { font-size: 1.5rem; color: white; }
        .legend-info { padding: 5px; text-align: center; background: var(--gold); border-top: 1px solid white; color: white; }
        .legend-name { margin: 0; font-size: 0.9rem; color: white; font-weight: bold; }
        .designation-text { font-size: 0.7rem; margin: 2px 0; color: #eee; }

        .slider-track.reverse { animation: scrollReverse 60s linear infinite; }
        .book-card-style { width: 130px; flex-shrink: 0; text-align: center; border: 1px solid var(--gold); border-radius: 6px; padding: 4px; background: white; }
        .book-card-style img { width: 100%; height: auto; display: block; }

        .know-more-btn { background: var(--gold); color: black; padding: 10px 30px; border-radius: 50px; text-decoration: none; font-size: 1rem; font-weight: bold; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }

        .guestbook-royal { border: 2px solid var(--gold); border-radius: 10px; overflow: hidden; }
        .gb-header { background: var(--royal); padding: 10px; text-align: center; }
        .gb-body { padding: 15px; background: #fffcf5; }
        .comments-list { max-height: 250px; overflow-y: auto; margin-bottom: 15px; }
        .royal-comment { background: white; border: 1px solid var(--gold); padding: 10px; margin-bottom: 10px; border-radius: 6px; }
        .rc-header { display: flex; justify-content: space-between; color: var(--royal); font-size: 0.9rem; }
        .royal-form { display: flex; gap: 5px; flex-direction: column; }
        .royal-form input, .royal-form textarea { padding: 8px; border: 1px solid #ccc; border-radius: 4px; font-family: inherit; }
        .royal-form button { background: var(--gold); border: none; padding: 8px; cursor: pointer; font-weight: bold; border-radius: 4px; }

        .main-footer { background: var(--royal); color: white; padding: 30px 20px 10px; margin-top: 40px; border-top: 5px solid var(--gold); overflow: hidden; }
        .footer-content { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 30px; max-width: 1000px; margin: 0 auto; }
        .f-col h3 { font-size: 1.1rem; border-bottom: 1px solid var(--gold); margin-bottom: 10px; display: inline-block; color: var(--gold); }
        .footer-links { padding: 0; list-style: none; margin: 0; }
        .footer-links li { margin-bottom: 5px; }
        .footer-links a { color: #ccc; text-decoration: none; font-size: 0.9rem; }
        
        .social-icons-grid { display: flex; gap: 6px; flex-wrap: nowrap; margin-top: 5px; justify-content: flex-start; overflow-x: auto; }
        .social-btn-original { width: 28px; height: 28px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; background: white; border: 1px solid var(--gold); border-radius: 50%; transition: 0.3s; padding: 3px; }
        .social-btn-original img { width: 100%; height: 100%; object-fit: contain; }
        .social-btn-original:hover { transform: translateY(-2px); box-shadow: 0 0 8px rgba(255, 255, 255, 0.5); }
        
        .newsletter-box { display: flex; margin-top: 5px; }
        .newsletter-box input { padding: 5px; border-radius: 0 4px 4px 0; border: none; width: 70%; }
        .newsletter-box button { padding: 5px 10px; border-radius: 4px 0 0 4px; border: none; background: var(--gold); font-weight: bold; cursor: pointer; }

        .footer-bottom { text-align: center; margin-top: 20px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px; font-size: 0.8rem; }

        .float-whatsapp { position: fixed; bottom: 20px; left: 20px; width: 50px; height: 50px; z-index: 9999; }
        .float-scroll { position: fixed; bottom: 20px; right: 20px; width: 45px; height: 45px; background: var(--gold); color: white; border: none; border-radius: 50%; cursor: pointer; z-index: 9999; font-size: 1.2rem; }
        
        @media (max-width: 768px) {
            .hero-header { height: 150px; }
            .spiritual-bar { font-size: 0.7rem; padding: 2px; }
            .main-name { font-size: 4.5vw; white-space: nowrap; margin-top: 2px; } 
            .section-container { margin: 10px auto; }
            .section-heading { margin-bottom: 5px; } 
            
            /* مینیو موبائل پر */
            .nav-link-royal { 
                font-size: 0.9rem; /* موبائل پر سائز */
                padding: 6px 10px; margin: 2px; 
            }
            .honors-grid-controlled { grid-template-columns: repeat(2, 1fr); gap: 5px; } 
            .honor-card-gold { padding: 8px; min-height: 70px; } 
            .honor-title { font-size: 0.9rem; }
            .honor-sub { font-size: 0.65rem; }
            .awards-grid-equal { grid-template-columns: repeat(1, 1fr); } 
            .social-icons-grid { justify-content: center; }
        }
        @keyframes scrollLeft { from { transform: translateX(100%); } to { transform: translateX(-100%); } }
        @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(50%); } }
        @keyframes scrollReverse { from { transform: translateX(50%); } to { transform: translateX(0); } }
      `}</style>
    </div>
  );
}