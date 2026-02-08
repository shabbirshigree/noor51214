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

  useEffect(() => {
    const timer = setInterval(() => {
      if (homeData.headerImages && homeData.headerImages.length > 0) {
        setCurrentImg((prev) => (prev + 1) % homeData.headerImages.length);
      }
    }, 5000);

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

  return (
    <div className="main-container">
      
      {/* 1. روحانی حفاظتی پٹی */}
      <div className="spiritual-bar">
        <span>ماشآءَ اللَّهُ لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ</span>
      </div>

      {/* 2. ہیڈر (موبائل پر چھوٹا کر دیا گیا ہے) */}
      <header className="hero-header">
        {homeData.headerImages && homeData.headerImages.map((img, index) => (
          <img 
            key={index} src={img} alt="Header" 
            className={`header-bg ${index === currentImg ? 'active' : ''}`}
          />
        ))}
      </header>

      {/* 3. مینیو بار (موبائل پر 2 لائنوں میں فٹ) */}
      <nav className="sticky-nav">
        <div className="nav-container">
           {homeData.navItems && homeData.navItems.map((item, index) => (
             <a key={index} href={item.link} className="nav-link-classic nori-font">
               {item.label}
             </a>
           ))}
        </div>
      </nav>

      {/* 4. نام اور عہدہ (گولڈن عہدہ) */}
      <div className="title-section">
        <div className="title-box">
           <h1 className="main-name">Haji Shabbir Ahmed Shigri</h1>
           <div className="gold-divider"></div>
           <p className="designation">Senior Journalist | Cultural Expert | Founder Noor-ul-Quran Project</p>
        </div>
      </div>

      {/* 5. نیوز ٹکر (یہی گولڈن کلر اب پوری سائٹ پر ہے) */}
      <div className="news-ticker">
        <div className="ticker-content">
          <p>★ "ONE MAN ARMY" of Media Industry ★ FIRST TIME IN THE WORLD: Visual Quran Project ★ Representative of Astan Quds Razavi ★ Founder of Noor Productions ★</p>
        </div>
      </div>

      {/* 6. ویلکم سیکشن */}
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
        <div className="honors-grid">
          {homeData.specialHonors && homeData.specialHonors.map((honor, index) => (
            <div key={index} className="honor-card-gold">
               <h3 className="nori-font honor-title">{honor.title}</h3>
               <p className="nori-font honor-sub">{honor.shrine}</p>
            </div>
          ))}
        </div>
        
        <div className="awards-grid-inline">
           {homeData.awards && homeData.awards.map((aw, i) => (
             <div key={i} className="award-item-gold">
               <span className="award-icon">{aw.icon}</span>
               <div>
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
        <div className="journey-grid">
          {homeData.journey && homeData.journey.map((j, i) => (
             <a key={i} href={j.link} className="journey-box">
                <div className="j-icon">{j.icon}</div>
                <h4 className="j-title">{j.title}</h4>
                <p className="j-sub">{j.sub}</p>
             </a>
          ))}
        </div>
      </section>

      {/* 12. لیجنڈز (سائز چھوٹا کر دیا گیا) */}
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
                {/* اب یہ باکس چھوٹا ہوگا */}
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
               <h3 className="nori-font">ہمارے بارے میں</h3>
               <p className="nori-font footer-text">نور پروڈکشنز اور حاجی شبیر احمد شگری کا مقصد جدید میڈیا کے ذریعے اسلامی تعلیمات کو عام کرنا ہے۔</p>
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
           <p className="nori-font">© 2026 نور پروڈکشنز | جملہ حقوق محفوظ ہیں</p>
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
        
        /* یہاں ہم نے 'گولڈ' کا رنگ بدل کر ٹکر والا گولڈن (#aa862e) کر دیا ہے۔
           پہلے یہ #d4af37 تھا۔
        */
        :root { 
            --royal: #002B5B; 
            --gold: #aa862e; /* نیا ٹکر والا گولڈن */
            --light-gold: #fcf6ba; 
            --dark-gold: #8a6d20; 
        }
        
        html, body { margin: 0; padding: 0; background: #fdfdfd; font-family: 'Jameel Noori Nastaleeq', 'Gulzar', serif; direction: rtl; overflow-x: hidden; width: 100%; }
        
        .spiritual-bar { background: var(--royal); color: #ffd700; text-align: center; padding: 4px; font-family: 'Amiri', serif; font-size: 0.9rem; border-bottom: 2px solid var(--gold); }
        
        /* ہیڈر: موبائل پر سائز چھوٹا کرنے کے لیے CSS */
        .hero-header { height: 300px; position: relative; overflow: hidden; border-bottom: 4px solid var(--gold); }
        .header-bg { position: absolute; width: 100%; height: 100%; object-fit: cover; opacity: 0; transition: opacity 1.5s; }
        .header-bg.active { opacity: 1; }

        .sticky-nav { position: sticky; top: 0; background: var(--royal); z-index: 1000; box-shadow: 0 4px 10px rgba(0,0,0,0.3); border-bottom: 3px solid var(--gold); padding: 0; }
        .nav-container { display: flex; justify-content: center; flex-wrap: wrap; gap: 0; }
        .nav-link-classic { color: #fff; padding: 10px 20px; text-decoration: none; font-weight: bold; font-family: 'Jameel Noori Nastaleeq', serif; font-size: 1.1rem; border-left: 1px solid rgba(255,255,255,0.1); transition: 0.3s; display: inline-block; }
        .nav-link-classic:hover { background: var(--gold); color: white; } /* Hover par text white taake dark gold par nazar aaye */
        .nav-link-classic:last-child { border-left: none; }

        .title-section { text-align: center; padding: 25px 15px; background: #fff; }
        .title-box { display: inline-block; padding: 10px 30px; border-top: 1px solid #ddd; border-bottom: 1px solid #ddd; }
        .main-name { font-size: 2.2rem; color: var(--royal); margin: 0; text-transform: uppercase; letter-spacing: 2px; font-family: 'Times New Roman', serif; }
        .gold-divider { height: 3px; background: var(--gold); width: 100px; margin: 5px auto; }
        
        /* عہدہ کا رنگ گولڈن کر دیا گیا ہے */
        .designation { color: var(--gold); margin: 8px 0 0; font-family: sans-serif; font-weight: 700; font-size: 0.9rem; letter-spacing: 1px; }

        .news-ticker { background: var(--gold); height: 30px; overflow: hidden; display: flex; align-items: center; }
        .ticker-content { width: 100%; overflow: hidden; }
        .ticker-content p { white-space: nowrap; animation: scrollLeft 40s linear infinite; color: white; font-weight: bold; margin: 0; font-family: sans-serif; font-size: 0.9rem; }
        
        .section-container { max-width: 1000px; margin: 30px auto; padding: 0 15px; width: 100%; box-sizing: border-box; }
        .welcome-card { background: white; padding: 25px; text-align: center; position: relative; background-image: radial-gradient(#d4af37 0.5px, transparent 0.5px); background-size: 20px 20px; }
        .royal-border { border: 4px double var(--gold); outline: 1px solid var(--royal); outline-offset: -6px; border-radius: 8px; }
        .bismillah-small { font-family: 'Amiri'; font-size: 1.5rem; color: var(--royal); margin-bottom: 10px; }
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

        .honors-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 15px; }
        .honor-card-gold { background: linear-gradient(45deg, var(--gold), #fcf6ba); border-radius: 10px; padding: 20px; text-align: center; border: 1px solid var(--dark-gold); box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
        .honor-title { color: var(--royal); margin: 0; font-size: 1.3rem; }
        .honor-sub { color: #333; margin: 5px 0 0; font-size: 0.9rem; }
        .awards-grid-inline { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 10px; margin-top: 20px; }
        .award-item-gold { background: var(--light-gold); border: 1px solid var(--gold); padding: 10px; display: flex; align-items: center; gap: 8px; border-radius: 8px; transition: 0.3s; }
        .award-item-gold:hover { background: var(--royal); border-color: white; color: white; }
        .award-item-gold:hover .award-title, .award-item-gold:hover .award-sub { color: white; }
        .award-title { color: var(--royal); font-size: 0.9rem; }
        .award-sub { font-size: 0.7rem; color: #666; }

        .journey-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 10px; }
        .journey-box { background: var(--light-gold); color: var(--royal); padding: 15px; border-radius: 10px; text-align: center; text-decoration: none; transition: 0.3s; border: 1px solid var(--gold); display: block; }
        .journey-box:hover { background: var(--royal); color: white; border-color: var(--gold); transform: translateY(-5px); }
        .journey-box:hover .j-title, .journey-box:hover .j-sub { color: white; }
        .j-icon { font-size: 1.5rem; margin-bottom: 5px; }
        .j-title { margin: 0; font-weight: bold; font-family: sans-serif; font-size: 0.85rem; }
        .j-sub { font-size: 0.65rem; opacity: 0.8; margin: 0; font-family: sans-serif; }

        .section-heading { text-align: center; color: var(--royal); font-size: 1.6rem; margin-bottom: 15px; }
        .slider-track-container { width: 100%; overflow: hidden; padding: 10px 0; }
        .slider-track { display: flex; gap: 20px; width: max-content; animation: scroll 60s linear infinite; }
        .slider-track:hover { animation-play-state: paused; }
        .legend-card { width: 200px; flex-shrink: 0; background: white; border-radius: 10px; overflow: hidden; border: 1px solid #ddd; }
        .legend-img { position: relative; height: 130px; }
        .legend-img img { width: 100%; height: 100%; object-fit: cover; }
        .play-icon-small { font-size: 1.5rem; color: white; }
        
        /* لیجنڈز: سائز آدھا کرنے کے لیے پیڈنگ کم کر دی */
        .legend-info { padding: 5px; text-align: center; background: var(--light-gold); border-top: 2px solid var(--gold); }
        .legend-name { margin: 0; font-size: 0.9rem; color: var(--royal); }
        .designation-text { font-size: 0.7rem; margin: 2px 0; }

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
        .social-btn-original { 
            width: 28px; height: 28px; flex-shrink: 0; 
            display: flex; align-items: center; justify-content: center; 
            background: white; border: 1px solid var(--gold); 
            border-radius: 50%; transition: 0.3s; padding: 3px; 
        }
        .social-btn-original img { width: 100%; height: 100%; object-fit: contain; }
        .social-btn-original:hover { transform: translateY(-2px); box-shadow: 0 0 8px rgba(255, 255, 255, 0.5); }
        
        .newsletter-box { display: flex; margin-top: 5px; }
        .newsletter-box input { padding: 5px; border-radius: 0 4px 4px 0; border: none; width: 70%; }
        .newsletter-box button { padding: 5px 10px; border-radius: 4px 0 0 4px; border: none; background: var(--gold); font-weight: bold; cursor: pointer; }

        .footer-bottom { text-align: center; margin-top: 20px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px; font-size: 0.8rem; }

        .float-whatsapp { position: fixed; bottom: 20px; left: 20px; width: 50px; height: 50px; z-index: 9999; }
        .float-scroll { position: fixed; bottom: 20px; right: 20px; width: 45px; height: 45px; background: var(--gold); color: white; border: none; border-radius: 50%; cursor: pointer; z-index: 9999; font-size: 1.2rem; }
        
        /* موبائل کے لیے خاص سیٹنگز */
        @media (max-width: 768px) {
            .hero-header { height: 180px; } /* ہیڈر چھوٹا کر دیا */
            .project-highlight-white { text-align: center; }
            .nav-container { justify-content: center; }
            /* مینیو کو 3 لائنوں سے بچانے کے لیے */
            .nav-link-classic { 
                font-size: 0.9rem; 
                padding: 8px 10px; 
                border-left: none; 
                background: rgba(0,0,0,0.1); 
                margin: 2px; 
                border-radius: 4px; 
            }
            .main-name { font-size: 1.5rem; }
            .awards-grid-inline { grid-template-columns: repeat(2, 1fr); }
            .footer-content { text-align: center; }
            .social-icons-grid { justify-content: center; }
        }
        @keyframes scrollLeft { from { transform: translateX(100%); } to { transform: translateX(-100%); } }
        @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(50%); } }
        @keyframes scrollReverse { from { transform: translateX(50%); } to { transform: translateX(0); } }
      `}</style>
    </div>
  );
}