import { Route, Routes } from 'react-router-dom';
import Netflix from './pages/Netflix';
import PageNotFound from './pages/PageNotFound';
import Signin from './pages/Signin';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Netflix/>} />
        <Route exact path="/signin" element={<Signin/>} />
        <Route path="/*" element={<PageNotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
