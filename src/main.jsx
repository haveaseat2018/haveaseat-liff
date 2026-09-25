import React, { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { ChevronDown, MapPin, MessageCircle, Phone } from 'lucide-react'
import './styles.css'

const orderingLinks = { line: '', phone: '' }

function BrandMark() {
  return (
    <a className="bento-brand" href="#top" aria-label="食習 Bento 回到頁首">
      <strong>食習</strong><span>have a s’EAT</span>
    </a>
  )
}

function OrderButton({ type, children }) {
  const href = orderingLinks[type]
  const Icon = type === 'line' ? MessageCircle : Phone
  const handleClick = (event) => {
    if (href) return
    event.preventDefault()
    window.alert('正式訂購資訊準備中，請先向食習北車店現場人員洽詢。')
  }
  return (
    <a className={`order-button ${type}`} href={href || '#order'} onClick={handleClick} aria-label={`${children}（正式資訊準備中）`}>
      <Icon aria-hidden="true" size={20} strokeWidth={1.8} />{children}
    </a>
  )
}

function Product({ tone, image, eyebrow, title, description }) {
  return (
    <section className={`product-panel ${tone}`}>
      <div className="product-copy reveal">
        <p className="section-kicker">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="product-meta"><strong>NT$220</strong><span>附季節湯品</span></div>
      </div>
      <figure className="product-image-wrap reveal">
        <img src={image} alt={`${title}，售價 NT$220，附季節湯品`} />
      </figure>
    </section>
  )
}

function BentoPage() {
  useEffect(() => {
    document.title = '食習 Bento｜江戶川鰻魚飯'
  }, [])

  return (
    <main className="bento-page" id="top">
      <nav className="bento-nav" aria-label="食習 Bento 導覽">
        <BrandMark /><a className="nav-order" href="#order">詢問訂購</a>
      </nav>

      <section className="bento-hero">
        <img src="/bento/hero.jpg" alt="兩款食習江戶川鰻魚飯與季節湯品" />
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-copy reveal">
          <p>TAIPEI STATION · TAKE OUT</p>
          <h1>江戶川鰻魚飯</h1>
          <span>職人鰻魚料理，融入台灣四季風土。</span>
        </div>
        <a className="scroll-cue" href="#products" aria-label="往下查看商品"><ChevronDown aria-hidden="true" size={24} /></a>
      </section>

      <section className="statement" id="products">
        <p className="section-kicker reveal">HAVE A sEAT × EDOGAWA</p>
        <h2 className="reveal">一尾鰻魚，<br />兩種台灣風味。</h2>
        <p className="reveal">北車限定外帶，為忙碌的一天留一頓好飯。</p>
      </section>

      <Product tone="charcoal" image="/bento/sausage-eel.jpg" eyebrow="01 · SAVORY" title="臘味江戶風鰻魚飯" description="香嫩鰻魚與台灣臘味相遇，鹹甜交織，層次飽滿。" />
      <Product tone="indigo" image="/bento/bamboo-eel.jpg" eyebrow="02 · SEASONAL" title="筍香江戶風鰻魚飯" description="清甜鮮筍襯托炙燒鰻魚，爽脆、醬香，豐腴而不膩。" />

      <section className="craft-panel craft-fire">
        <img src="/bento/fire.jpg" alt="炭火上炙燒的鰻魚" />
        <div className="craft-shade" aria-hidden="true" />
        <div className="craft-copy reveal"><p>THE SAUCE</p><h2>七十餘年的<br />秘方醬汁。</h2><span>原始醬汁不斷添補，讓鹹甜滋味隨歲月沉澱。</span></div>
      </section>

      <section className="craft-panel craft-hand">
        <img src="/bento/craft.jpg" alt="鰻魚職人以竹籤細心串魚" />
        <div className="craft-shade" aria-hidden="true" />
        <div className="craft-copy reveal"><p>THE CRAFT</p><h2>串魚三年，<br />剖魚八年，<br />烘烤一生。</h2><span>逐尾處理、細心烘烤，把一尾鰻魚的美味發揮到極致。</span></div>
      </section>

      <section className="order-panel" id="order">
        <div className="order-heading reveal"><p className="section-kicker">ORDER INFORMATION</p><h2>今天預訂，<br />留給那天的重要一餐。</h2></div>
        <div className="order-grid reveal">
          <article><strong>18:00</strong><span>最晚前天預訂</span></article>
          <article><strong>10+</strong><span>份・5 公里內幫你送</span></article>
        </div>
        <div className="pickup-note reveal"><MapPin aria-hidden="true" size={19} strokeWidth={1.8} /><div><strong>食習｜台北車站 Atre 店</strong><span>台北市中正區忠孝西路一段 49 號 B1</span></div></div>
        <div className="order-actions reveal"><OrderButton type="line">LINE 詢問訂購</OrderButton><OrderButton type="phone">電話洽詢</OrderButton></div>
        <p className="order-fineprint reveal">未滿 10 份可於北車店自取；實際供應、取餐及配送時間，以門市確認為準。</p>
      </section>

      <footer className="bento-footer"><BrandMark /><span>食習 Bento · 台北車站限定</span></footer>
    </main>
  )
}

function EntryPage() {
  const goMaji = (event) => { event.preventDefault(); window.alert('神農生活入口 Demo 尚未串接正式頁面') }
  return (
    <main className="entry-page"><section className="entry-shell">
      <header className="entry-head"><p className="eyebrow">SELECT YOUR DESTINATION</p><h1>選擇您要前往的品牌</h1><p className="lead">探索神農生活，或進入食習會員服務。</p></header>
      <div className="brand-options">
        <a className="brand-card maji-card" href="#maji" onClick={goMaji}><div className="brand-mark maji-mark">神農生活</div><div className="brand-en">MAJI TREATS</div><p>台灣選物・風土文化・生活提案</p><span>進入神農生活 →</span></a>
        <a className="brand-card seat-card" href="/demo.html"><div className="brand-mark seat-mark">食習</div><div className="brand-en">have a sEAT</div><p>會員優惠・專屬好券・門市活動</p><span>進入食習會員 Demo →</span></a>
      </div><footer>MAJI TREATS × have a sEAT</footer>
    </section></main>
  )
}

const normalizedPath = window.location.pathname.replace(/\/+$/, '') || '/'
const App = ['/bento', '/bento.html'].includes(normalizedPath) ? BentoPage : EntryPage
createRoot(document.getElementById('root')).render(<App />)
