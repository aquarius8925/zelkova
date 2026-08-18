import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Welfare from './components/Welfare';
import Notice from './components/Notice';

export default function App() {
  return (
    <BrowserRouter>
      {/* 🔴 중요: overflow-x-hidden을 추가하여 하위 요소가 우측으로 터지는 현상을 원천 방어합니다 */}
      <div className="w-full min-h-screen bg-white flex flex-col justify-between overflow-x-hidden">
        <Header />
        
        <div className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<Hero />} />
            
            <Route path="/about/intro" element={<About />} />
            <Route path="/about/greeting" element={<About />} />
            <Route path="/about/map" element={<About />} />
            
            <Route path="/service/welfare" element={<Welfare />} />
            <Route path="/service/services" element={<Welfare />} />
            <Route path="/service/guide" element={<Welfare />} />
            
            <Route path="/notice" element={<Notice />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
