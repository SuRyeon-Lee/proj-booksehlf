import { useState } from 'react';
import{BrowserRouter, Routes, Route} from "react-router-dom";
import GlobalStyle from "./style/GlobalStyle";
import Header from './components/Header';
import Main from "./pages/Main";
import AddBook from "./pages/AddBook";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Header/>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/addbook" element={<AddBook/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
