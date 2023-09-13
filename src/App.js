import Excel from './pages/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
      <Routes path="/">
        <Route index element={<Excel/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
