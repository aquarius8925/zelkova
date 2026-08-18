import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Greeting from '../components/Greeting';
import Map from '../components/Map';

export default function About() {
  const location = useLocation();

  useEffect(() => {
    const pathParts = location.pathname.split('/');
    const lastPart = pathParts[pathParts.length - 1];

    if (lastPart) {
      const timer = setTimeout(() => {
        const element = document.getElementById(lastPart);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return (
    <div className="w-full bg-stone-50/50 py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        
        <section id="intro" className="flex flex-col gap-6 scroll-mt-28">
          <div className="border-l-4 border-emerald-700 pl-3">
            <h2 className="text-xl font-bold text-stone-900">느티나무 재가복지센터 소개</h2>
          </div>
          
          <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm flex flex-col md:flex-row gap-8 items-center">
            <div className="text-4xl p-6 bg-stone-100 rounded-full flex-shrink-0 select-none">👵👴</div>
            <div className="flex-1 flex flex-col gap-3">
              <h3 className="text-lg font-bold text-stone-900">느티나무재가복지센터 홈페이지 방문을 진심으로 환영합니다.</h3>
              <p className="text-stone-600 text-sm leading-relaxed break-keep">
                느티나무 재가복지센터는 이용자 중심의 개별화된 서비스를 가장 중요한 원칙으로 생각합니다. 
                '세심한 관찰, 신속한 소통, 지속적인 관리'를 운영방향으로 삼고
                이용자의 인권과 자기결정권을 존중하고 종사자의 권익도 함께 보호하며 
                관련법령과 급여제공기준을 준수하는 투명하고 책임있는 운영을 통해 
                이용자와 보호자에게는 안심을, 종사자에게는 신뢰를 주는 기관으로 성장하겠습니다.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-stone-200/60" />

        <section id="greeting" className="scroll-mt-28">
          <div className="border-l-4 border-emerald-700 pl-3 mb-6">
            <h2 className="text-xl font-bold text-stone-900">센터장 인사말</h2>
          </div>
          <Greeting />
        </section>

        <hr className="border-stone-200/60" />

        <section id="map" className="scroll-mt-28">
          <div className="border-l-4 border-emerald-700 pl-3 mb-6">
            <h2 className="text-xl font-bold text-stone-900">찾아오는 길</h2>
          </div>
          <Map />
        </section>

      </div>
    </div>
  );
}
