import './App.css'
import TermCategory from './components/TermCategory';
import data from './data.json'; // 导入 data.json

function App() {
  return (
    <div className="App">
        <h1>AI 术语词典</h1>
      <div className="slogan-bar">
        <p className="slogan">一个很素的AI领域词典（自家用）| </p>
        <a
          href="https://github.com/tianyw0/ai-dictionary"
          target="_blank"
          style={{ color: '#666', textDecoration: 'none' }}
        >
          GitHub
        </a>
      </div>
      <div className="categories-container">
        {Object.entries(data).map(([categoryName, terms]) => (
          <TermCategory key={categoryName} categoryName={categoryName} terms={terms} />
        ))}
      </div>
    </div>
  );
}

export default App;
