import Excel from './pages/Main';
import ReceiptUploadPage from './pages/ReceiptUpdloadPage';
import ExpenseReadPage from './pages/ExpenseReadPage';
import Layout from './layouts/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InputPage from './pages/InputPage';
import InputExcel from './pages/InputExcel';
import InputExpense from './pages/InputExpense';
import SearchPage from './pages/SearchPage';
import Login from './pages/Login';
import Oauth from './pages/Oauth';
import MyPage from './pages/MyPage';

function App() {
  return (

    <BrowserRouter>
      <Routes path="/" element={<Layout/>}>
        <Route index element={<Layout/>}/>
        <Route path="excel" element={<Excel/>} />
        <Route path="receiptUpload" element={<ReceiptUploadPage/>} />
        <Route path="expenses" element={<ExpenseReadPage/>} />
        <Route path="input" element={<InputPage/>} />
        <Route path="input/excel" element={<InputExcel/>} />
        <Route path="input/expense" element={<InputExpense/>} />
        <Route path="search" element={<SearchPage/>} />        
        <Route path="expenses" element={<ExpenseReadPage/>} />
        <Route path="login" element={<Login/>} />
        <Route path="auth/kakao/callback" element={<Oauth/>} />
        <Route path="mypage" element={<MyPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
