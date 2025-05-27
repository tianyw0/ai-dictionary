import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TermCategory from './components/TermCategory';
import data from './data.json'; // 导入 data.json

function App() {
  return (
    <div className="App">
      <h1>AI 术语词典</h1>
      <p className="slogan">探索人工智能的奥秘，掌握前沿技术词汇。</p>
      <div className="categories-container">
        {Object.entries(data).map(([categoryName, terms]) => (
          <TermCategory key={categoryName} categoryName={categoryName} terms={terms} />
        ))}
      </div>
    </div>
  );
}

export default App;
