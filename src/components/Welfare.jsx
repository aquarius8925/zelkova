import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Guide from './Guide';

export default function Welfare() {
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

  // 서비스 데이터 리스트
  const serviceList = [
    { 
      title: "방문요양", 
      desc: "요양보호사가 가정을 방문하여 신체활동과 가사활동을 지원합니다.", 
      icon: "🛌",
      label: "침대 아이콘",
      tag: "방문 지원"
    },
    { 
      title: "가족요양", 
      desc: "장기요양등급을 받은 어르신을 가족이 요양보호사 자격으로 직접 돌보고, 그 돌봄에 대해 노인장기요양보험의 방문요양 급여를 받는 제도입니다.", 
      icon: "❤️",
      label: "하트 아이콘",
      tag: "가족 돌봄"
    },
    { 
      title: "장기요양등급신청", 
      desc: "65세 이상이거나 65세 미만이지만 노인성 질환(치매, 뇌혈관 질환, 파킨슨병 등)이 있는 사람이 국민건강보험공단 노인장기요양보험 운영센터에 방문, 우편, 팩스, 홈페이지에서 신청합니다.", 
      icon: "📝",
      label: "노트 아이콘",
      tag: "등급 대행"
    },
    { 
      title: "복지용구 상담", 
      desc: "장기요양보험 수급자의 신체상태와 주거환경을 확인하여, 일상생활과 안전에 필요한 복지용구를 안내하고 적절한 제품의 선택, 이용, 관리를 돕는 서비스입니다.", 
      icon: "🩼",
      label: "목발 아이콘",
      tag: "이용 지원"
    }
  ];

  return (
    <div className="w-full bg-stone-50/50 py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        
        {/* ========================================================================= */}
        {/* 1) 재가복지서비스란? 섹션 */}
        {/* ========================================================================= */}
        <section id="welfare" className="w-full bg-white rounded-2xl border border-stone-200 p-8 shadow-sm flex flex-col gap-4 animate-fade-in scroll-mt-28">
          <div className="border-l-4 border-emerald-700 pl-3">
            <h3 className="text-2xl font-black text-stone-900 tracking-tight">재가복지서비스란?</h3>
          </div>
          
          <p className="text-stone-600 text-sm md:text-base leading-relaxed break-keep mt-1 font-normal">
            몸이 불편하거나 혼자서 일상생활을 하기 힘든 노인이 자신이 살던 가정과 지역사회에서 계속 생활할 수 있도록, 필요한 돌봄과 건강관리, 일상생활 지원 등을 제공하는 사회복지 서비스입니다.
          </p>
        </section>

        <hr className="border-stone-200/60" />

        {/* ========================================================================= */}
        {/* 2) 제공 서비스 – 방문요양, 가족요양, 등급신청, 복지용구상담 */}
        {/* ========================================================================= */}
        <section id="services" className="w-full bg-white rounded-2xl border border-stone-200 p-8 shadow-sm flex flex-col gap-6 animate-fade-in scroll-mt-28">
          <div className="border-l-4 border-emerald-700 pl-3 mb-2">
            <h3 className="text-xl md:text-2xl font-black text-stone-900 tracking-tight">
              제공 서비스 <span className="text-base md:text-lg font-bold text-stone-500 block md:inline md:ml-1">— 방문요양, 가족요양, 등급신청, 복지용구상담</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-1">
            {serviceList.map((item, i) => (
              <div 
                key={i} 
                className="p-6 border border-stone-200 rounded-2xl bg-stone-50/50 hover:border-emerald-700 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between gap-4 group"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span 
                      role="img" 
                      aria-label={item.label}
                      className="text-3xl p-3 bg-white rounded-xl shadow-sm border border-stone-200 group-hover:bg-emerald-50 transition-colors"
                    >
                      {item.icon}
                    </span>
                    <span className="text-[10px] font-black tracking-wide text-emerald-800 bg-emerald-100/60 border border-emerald-200/50 px-2 py-0.5 rounded-md uppercase">
                      {item.tag}
                    </span>
                  </div>
                  
                  <h4 className="font-extrabold text-stone-900 text-lg group-hover:text-emerald-800 transition-colors">
                    {item.title}
                  </h4>
                  
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-normal break-keep">
                    {item.desc}
                  </p>
                </div>
                
                <div className="text-[11px] font-bold text-stone-400 border-t border-stone-200/60 pt-2 flex items-center gap-1">
                  <span>📌 상세 이용 상담 가능</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-stone-200/60" />

        {/* ========================================================================= */}
        {/* 3) 자주 묻는 질문 (FAQ) 하위 연동 (id="guide" 고정 및 절차 영역 완전 삭제) */}
        {/* ========================================================================= */}
        <section id="guide" className="scroll-mt-28 w-full">
          <Guide />
        </section>

      </div>
    </div>
  );
}
