import React from 'react';

export default function Hero() {
  // 💡 [사업자등록 완료 후 변경 플래그] 
  // 나중에 심사 통과 및 사업자등록 완료 시 true로 변경하시면 공식 마크가 화면에 노출됩니다.
  const isCareMarkApproved = false; 

  return (
    <section id="home" className="w-full bg-gradient-to-br from-emerald-50/80 via-green-50/60 to-emerald-100/70 text-slate-800 py-20 px-6 text-center relative overflow-hidden">
      {/* 초록색 감성을 더 진하게 살려줄 백그라운드 Radial 블러 광원 효과 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.18),transparent_55%)]"></div>
      
      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center gap-6">
        
        {/* 웅장한 풀컬러 느티나무 심볼 배치 */}
        <img 
          src="/images/logo-symbol-full.png" 
          alt="느티나무 공식 로고" 
          className="h-32 w-auto object-contain drop-shadow-md animate-fade-in"
        />

        {/* 1. 노인장기요양보험 지정기관 배지 및 공식마크 예약 공간 */}
        <div className="flex flex-col items-center gap-2">
          <span className="bg-emerald-100/90 text-emerald-800 border border-emerald-300/40 text-xs px-3 py-1 rounded-full font-bold tracking-wider uppercase shadow-sm">
            노인장기요양보험 지정기관
          </span>
          
          {/* 공식마크 추가 예약 공간 */}
          {isCareMarkApproved && (
            <div className="mt-1 animate-fade-in">
              <img 
                src="/images/longterm-care-official.png" 
                alt="노인장기요양보험 공식인증 마크" 
                className="h-10 w-auto object-contain"
              />
            </div>
          )}
        </div>
        
        {/* 2. 메인 타이틀 (데스크톱/모바일 각각 최적의 위치에서 반응형 줄바꿈 처리) */}
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-3xl md:text-5xl font-sans font-black tracking-tight leading-tight text-slate-900 break-keep">
            느티나무 그늘 
            {/* 📱 모바일 화면 전용 줄바꿈 (화면이 작을 때 3줄 레이아웃 유도) */}
            <br className="block md:hidden" /> 
            아래
            {/* 💻 데스크톱 웹 화면 전용 줄바꿈 (PC에서 '아래' 뒤에 정확히 줄바꿈 적용) */}
            <br className="hidden md:block" /> 
            편안한 쉼터가 되어드리겠습니다
          </h1>
        </div>
        
        {/* 3. 🛠️ [레이아웃 대폭 수정] 하얗게 뜨던 사각형 카드 박스를 통째로 걷어내고 배경에 투명하게 매립 */}
        <div className="text-slate-600 text-base md:text-lg max-w-2xl font-medium leading-relaxed break-keep flex flex-col gap-3 text-center mt-2 px-4">
          <p className="text-stone-600">
            오랜 세월 한결같이 자리를 지키는 느티나무처럼, 어르신과 보호자들이 안심하고 동행할 수 있는 신뢰받는 파트너가 되겠습니다.
          </p>
          {/* 배경이 사라진 대신 눈에 흐릿해지지 않도록 핵심 문구의 명도와 굵기를 단단하게 고정 */}
          <p className="font-extrabold text-slate-900 text-lg md:text-xl mt-1">
            어르신에게는 편안한 쉼터를, 가족에게는 든든한 안심을 드립니다
          </p>
        </div>
        
        {/* 버튼 그룹 */}
        <div className="flex gap-4 mt-6">
          <a 
            href="/service/welfare" 
            className="bg-emerald-600 text-white font-bold px-6 py-3 rounded-xl text-sm hover:bg-emerald-700 active:bg-emerald-800 transition-all shadow-md hover:shadow-lg block"
          >
            제공 서비스 보기
          </a>
          
          <a 
            href="/notice" 
            className="bg-white border-2 border-emerald-600 text-emerald-700 font-bold px-6 py-3 rounded-xl text-sm hover:bg-emerald-50 active:bg-emerald-100 transition-all shadow-sm hover:shadow-md block"
          >
            최신 공지 확인
          </a>
        </div>

      </div>
    </section>
  );
}
