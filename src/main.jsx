import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

function App(){
  const goMaji = (e) => {
    e.preventDefault()
    alert('神農生活入口 Demo 尚未串接正式頁面')
  }

  return (
    <main className="entry-page">
      <section className="entry-shell">
        <header className="entry-head">
          <p className="eyebrow">SELECT YOUR DESTINATION</p>
          <h1>選擇您要前往的品牌</h1>
          <p className="lead">探索神農生活，或進入食習會員服務。</p>
        </header>

        <div className="brand-options">
          <a className="brand-card maji-card" href="#maji" onClick={goMaji}>
            <div className="brand-mark maji-mark">神農生活</div>
            <div className="brand-en">MAJI TREATS</div>
            <p>台灣選物・風土文化・生活提案</p>
            <span>進入神農生活 →</span>
          </a>

          <a className="brand-card seat-card" href="/demo.html">
            <div className="brand-mark seat-mark">食習</div>
            <div className="brand-en">have a sEAT</div>
            <p>會員優惠・專屬好券・門市活動</p>
            <span>進入食習會員 Demo →</span>
          </a>
        </div>

        <footer>MAJI TREATS × have a sEAT</footer>
      </section>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App/>)
