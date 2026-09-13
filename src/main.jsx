import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

function App(){return <main className="chooser"><div className="brand">have a s'Eat <small>食習</small></div><div className="intro"><span>LIFF UI REVIEW</span><h1>選擇要試用的版本</h1><p>兩個版本都可以完整點選操作。先比較使用邏輯，再決定最後合併方式。</p></div><div className="versions"><a href="/demo.html"><small>ORIGINAL UI</small><h2>舊版 UI</h2><p>原本 AppDeploy v80 的視覺與會員流程</p><b>進入舊版 →</b></a><a href="/first-ui/"><small>NEW UI CONCEPT</small><h2>新版 UI</h2><p>最開始製作的版本，含快速入口、分類菜單與門市詳情</p><b>進入新版 →</b></a></div><footer>食習會員 Demo · UI 比較入口</footer></main>}
createRoot(document.getElementById('root')).render(<App/>)
