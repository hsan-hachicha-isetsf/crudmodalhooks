import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import ArticlesApp from './components/articles/ArticlesApp';
import CategoriesApp from './components/categories/CategoriesApp';
import ScategoriesApp from './components/scategories/ScategoriesApp';
import Navscroll from './components/Navscroll';

function App() {
  return (
    <Router>
      <Navscroll/>
      <Routes>
        <Route path="/articles" element={<ArticlesApp/>}/>
        <Route path="/categories" element={<CategoriesApp/>}/>
        <Route path="/scategories" element={<ScategoriesApp/>}/>

      </Routes>

    </Router>
    
  );
}

export default App;
