import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyBloodyValentine from './MyBloodyValentine';
import CocteauTwins from './CocteauTwins';
import Slowdive from './Slowdive';
import ElliottSmith from './ElliottSmith';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyBloodyValentine/>} />
          <Route path="/cocteau-twins" element={<CocteauTwins/>} />
          <Route path="/slowdive" element={<Slowdive/>} />
          <Route path="/elliott-smith" element={<ElliottSmith/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
