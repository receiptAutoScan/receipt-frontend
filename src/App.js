import Excel from './pages/Main';
import ReceiptUploadPage from './pages/ReceiptUpdloadPage';
import ExpenseReadPage from './pages/ExpenseReadPage';
import Layout from './layouts/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (

    <BrowserRouter>
      <Routes path="/" element={<Layout/>}>
        <Route index element={<Excel/>} />
        <Route path="receiptUpload" element={<ReceiptUploadPage/>} />
        <Route path="expenses" element={<ExpenseReadPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
