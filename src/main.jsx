import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Home, MapPin, CalendarDays, Ticket, UserRound, ChevronRight, Clock3, Navigation, Bell, QrCode, UtensilsCrossed, ArrowLeft, Phone, ExternalLink } from 'lucide-react'
import './styles.css'

const stores = [
  { id:'nanxi', name:'食習｜誠品南西店', short:'南西店', address:'台北市中山區南京西路 14 號 4 樓', hours:'週日至週四 11:00–22:00\n週五、六 11:00–22:30', tel:'02-2581-2022', tone:'terracotta', tag:'城市裡的台灣餐桌' },
  { id:'station', name:'食習｜台北車站店', short:'北車店', address:'台北市中正區北平西路 3 號', hours:'每日 11:00–21:00', tel:'—', tone:'indigo', tag:'旅途中，好好吃頓飯' },
  { id:'expo', name:'食習｜花博店', short:'花博店', address:'台北市中山區玉門街 1 號', hours:'營業時間依園區公告', tel:'—', tone:'olive', tag:'在老房子裡吃台灣味' }
]

const menus = [
  { cat:'食習經典', items:[['麻油雞套餐','Sesame Oil Chicken','NT$ 380'],['麻婆豆腐套餐','Mapo Tofu','NT$ 320'],['紅燒獅子頭套餐',"Lion’s Head",'NT$ 360']] },
  { cat:'麵食', items:[['蛤蜊雞湯麵','Clam Chicken Noodles','NT$ 300'],['家常牛肉麵','Taiwanese Beef Noodles','NT$ 320']] },
  { cat:'北車限定', items:[['鰻魚飯','Grilled Eel Rice','NT$ 220'],['鰻魚大滿足餐','Double Eel Set','NT$ 380']] }
]

const events = [
  {date:'09.18', type:'聯名', title:'食習 × 采源', text:'把熟悉的台灣味，換一種方式端上桌。南西店期間限定。'},
  {date:'每週', type:'店內活動', title:'一席台灣味', text:'跟著當季食材，重新認識家常料理。'},
  {date:'會員限定', type:'最新消息', title:'新會員入席禮', text:'完成會員加入，領取套餐茶飲招待券。'}
]

function BrandHeader({title, back}) {
  return <header className="topbar">{back ? <button className="icon-btn" onClick={back} aria-label="返回"><ArrowLeft size={22}/></button> : <div className="seal">食</div>}<div className="brand"><strong>{title || '食習'}</strong>{!title && <span>have a sEAT</span>}</div><button className="icon-btn" aria-label="通知"><Bell size={20}/></button></header>
}

function HomePage({setPage}){
  return <><BrandHeader/><main>
    <section className="member-card">
      <div className="card-top"><div><span className="eyebrow">HAVE A SEAT MEMBER</span><h1>Alan，歡迎入席</h1></div><div className="pig">福</div></div>
      <div className="card-row"><div><b>0</b><span>會員點數</span></div><div><b>2</b><span>可用優惠</span></div><button onClick={()=>setPage('me')}><QrCode size={18}/>會員條碼</button></div>
    </section>
    <section className="quick-grid"><button onClick={()=>setPage('stores')}><MapPin/><span>找門市</span></button><button onClick={()=>setPage('events')}><CalendarDays/><span>看活動</span></button><button onClick={()=>setPage('coupons')}><Ticket/><span>我的優惠</span></button><button onClick={()=>setPage('menu')}><UtensilsCrossed/><span>查看菜單</span></button></section>
    <section className="hero"><span>SEASONAL TABLE</span><h2>日常裡，<br/>好好吃一頓飯。</h2><p>以台灣土地的滋味，款待每一位入席的人。</p><button onClick={()=>setPage('menu')}>看看今日菜單 <ChevronRight size={17}/></button></section>
    <SectionTitle title="現在，食習發生的事" action={()=>setPage('events')}/>
    <article className="feature" onClick={()=>setPage('events')}><div className="feature-art"><span>食習 × 采源</span></div><div><small>南西店限定</small><h3>一場關於台灣味的相遇</h3><p>期間限定聯名套餐，邀你一起入席。</p></div></article>
  </main></>
}

function SectionTitle({title,action}){return <div className="section-title"><h2>{title}</h2>{action&&<button onClick={action}>查看全部 <ChevronRight size={15}/></button>}</div>}

function StoresPage({setDetail}){
 return <><BrandHeader title="門市"/><main><div className="page-intro"><span>OUR STORES</span><h1>找一間食習，<br/>坐下來吃頓飯。</h1></div><div className="store-list">{stores.map(s=><article key={s.id} className="store-card" onClick={()=>setDetail(s)}><div className={`store-art ${s.tone}`}><span>{s.short}</span></div><div className="store-info"><small>{s.tag}</small><h2>{s.name}</h2><p><MapPin size={15}/>{s.address}</p><p><Clock3 size={15}/>{s.hours.split('\n')[0]}</p><button>查看門市與菜單 <ChevronRight size={16}/></button></div></article>)}</div></main></>
}

function StoreDetail({store,back}){
 return <><BrandHeader title={store.short} back={back}/><main><div className={`detail-art ${store.tone}`}><span>have a sEAT</span><b>{store.tag}</b></div><section className="detail-copy"><small>STORE INFORMATION</small><h1>{store.name}</h1><div className="info-row"><MapPin/><div><b>地址</b><span>{store.address}</span></div></div><div className="info-row"><Clock3/><div><b>營業時間</b>{store.hours.split('\n').map(x=><span key={x}>{x}</span>)}</div></div><div className="info-row"><Phone/><div><b>電話</b><span>{store.tel}</span></div></div><div className="button-row"><button className="primary"><Navigation size={18}/>開啟導航</button><button onClick={()=>back('menu')}><UtensilsCrossed size={18}/>查看菜單</button></div></section></main></>
}

function EventsPage(){return <><BrandHeader title="活動"/><main><div className="page-intro"><span>WHAT'S ON</span><h1>一起發生，<br/>一起記得。</h1></div><div className="event-list">{events.map((e,i)=><article className="event-card" key={i}><div className={`event-art art-${i}`}><b>{e.date}</b><span>{e.type}</span></div><div><small>{e.type}</small><h2>{e.title}</h2><p>{e.text}</p><button>了解更多 <ChevronRight size={15}/></button></div></article>)}</div></main></>}

function CouponsPage(){return <><BrandHeader title="優惠"/><main><div className="page-intro"><span>MEMBER BENEFITS</span><h1>留一份款待，<br/>給每次相聚。</h1></div><div className="coupon-tabs"><button className="active">可使用 2</button><button>已使用</button><button>已失效</button></div><div className="coupon"><div className="coupon-main"><small>WELCOME GIFT</small><h2>套餐茶飲招待券</h2><p>點購套餐一份，即招待茶飲（冰／熱）一杯</p><span>使用期限 2026.10.31</span></div><div className="coupon-side"><Ticket/><b>使用</b></div></div><div className="coupon"><div className="coupon-main"><small>MEMBER ONLY</small><h2>當月壽星甜點券</h2><p>內用消費即招待本日甜點一份</p><span>使用期限 2026.09.30</span></div><div className="coupon-side"><Ticket/><b>使用</b></div></div><p className="fineprint">優惠內容依各門市現場公告為準，每張券限使用一次。</p></main></>}

function MenuPage(){const [tab,setTab]=useState('全部'); return <><BrandHeader title="菜單"/><main><div className="page-intro compact"><span>OUR MENU</span><h1>今天，想吃什麼？</h1></div><div className="menu-tabs">{['全部','南西店','北車店','花博店'].map(x=><button className={tab===x?'active':''} onClick={()=>setTab(x)} key={x}>{x}</button>)}</div>{menus.map(group=><section className="menu-group" key={group.cat}><h2>{group.cat}</h2>{group.items.map(item=><div className="menu-item" key={item[0]}><div><b>{item[0]}</b><span>{item[1]}</span></div><strong>{item[2]}</strong></div>)}</section>)}<p className="fineprint">示範菜單與售價，實際供應品項依各門市現場為準。</p></main></>}

function MePage(){return <><BrandHeader title="我的"/><main><section className="profile"><div className="avatar">A</div><h1>Alan</h1><span>一般會員 · MEMBER</span><div className="qr"><QrCode size={112}/><small>會員編號 2018 0913 001</small></div></section><div className="settings">{['會員資料','消費紀錄','點數紀錄','優惠券使用說明','常見問題與聯絡我們'].map(x=><button key={x}><span>{x}</span><ChevronRight size={18}/></button>)}<button><span>加入食習 LINE 官方帳號</span><ExternalLink size={18}/></button></div></main></>}

function Nav({page,setPage}){const links=[['home','首頁',Home],['stores','門市',MapPin],['events','活動',CalendarDays],['coupons','優惠',Ticket],['me','我的',UserRound]];return <nav className="bottom-nav">{links.map(([id,label,Icon])=><button key={id} className={page===id?'active':''} onClick={()=>setPage(id)}><Icon size={21}/><span>{label}</span></button>)}</nav>}

function App(){const [page,setPage]=useState('home');const [detail,setDetail]=useState(null);let content;if(detail)content=<StoreDetail store={detail} back={(target)=>{setDetail(null);if(target)setPage(target)}}/>;else if(page==='home')content=<HomePage setPage={setPage}/>;else if(page==='stores')content=<StoresPage setDetail={setDetail}/>;else if(page==='events')content=<EventsPage/>;else if(page==='coupons')content=<CouponsPage/>;else if(page==='menu')content=<MenuPage/>;else content=<MePage/>;return <div className="app-shell">{content}{!detail&&<Nav page={page} setPage={setPage}/>}</div>}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>)
