import React from 'react';
import { Link } from 'react-router-dom';
// 🟢 네이버 아이콘 불러오기 (SiNaver)
import { SiNaver } from 'react-icons/si';

export default function Hero() {
  // 💡 [사업자등록 완료 후 변경 플래그] 
  // 나중에 심사 통과 및 사업자등록 완료 시 true로 변경하시면 공식 마크가 화면에 노출됩니다.
  const isCareMarkApproved = false; 
    // 🟢 [핵심 추가] 사용자의 디바이스가 모바일인지 검사하는 함수
  const getBlogUrl = () => {
  const blogId = "veronica7856"; // 클라이언트 네이버 ID
  
    // 브라우저의 userAgent 값에 'Mobi'(모바일 디바이스)가 포함되어 있는지 확인
    const isMobileDevice = /Mobi/i.test(window.navigator.userAgent);
    
    if (isMobileDevice) {
      // 📱 모바일 환경일 때는 m.blog 주소 반환
      return `https://m.blog.naver.com/${blogId}`;
    } else {
      // 💻 PC 환경일 때는 일반 blog 주소 반환
      return `https://blog.naver.com/${blogId}`;
    }
  };

  return (
    <section id="home" className="w-full bg-gradient-to-br from-emerald-50/80 via-green-50/60 to-emerald-100/70 text-slate-800 py-12 sm:py-20 px-4 sm:px-6 text-center relative overflow-hidden">
      {/* 초록색 감성을 더 진하게 살려줄 백그라운드 Radial 블러 광원 효과 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.18),transparent_55%)]"></div>
      
      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center gap-4 sm:gap-6 w-full">
        
        {/* 웅장한 풀컬러 느티나무 심볼 배치 (모바일 크기 최적화 및 강제 이탈 방지) */}
        <img 
          src="/images/logo-symbol-full.png" 
          alt="느티나무 공식 로고" 
          className="h-24 sm:h-32 w-auto object-contain drop-shadow-md animate-fade-in max-w-full"
        />

        {/* 1. 노인장기요양보험 지정기관 배지 및 공식마크 예약 공간 */}
        <div className="flex flex-col items-center gap-2 max-w-full">
          <span className="bg-emerald-100/90 text-emerald-800 border border-emerald-300/40 text-[11px] sm:text-xs px-3 py-1 rounded-full font-bold tracking-wider uppercase shadow-sm whitespace-nowrap">
            노인장기요양보험 지정기관
          </span>
          
          {/* 공식마크 추가 예약 공간 */}
          {isCareMarkApproved && (
            <div className="mt-1 animate-fade-in">
              <img 
                src="/images/longterm-care-official.png" 
                alt="노인장기요양보험 공식인증 마크" 
                className="h-8 sm:h-10 w-auto object-contain"
              />
            </div>
          )}
        </div>
        
        {/* 2. 메인 타이틀 (모바일에서 폰트 크기를 줄여 완벽한 2줄로 고정) */}
        <div className="flex flex-col items-center gap-3 max-w-full">
          {/* 📱 모바일 text-xl(또는 text-lg)로 축소하여 줄바꿈 튕김 방지 */}
          <h1 className="text-xl sm:text-3xl md:text-5xl font-sans font-black tracking-tight text-slate-900 break-keep px-4 text-center leading-[1.4] md:leading-tight">
            <span className="block md:inline">어르신에게는 편안한 하루를,</span>
            <span className="hidden md:inline"> </span>
            <br className="hidden md:block" />
            <span className="block md:inline">가족에게는 든든한 안심을</span>
          </h1>
        </div>
        
        {/* 3. 본문 텍스트 내 자잘한 여백 모바일 축소 세팅 */}
        <div className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl font-medium leading-relaxed break-keep flex flex-col gap-3 text-center mt-1 px-2 sm:px-4 w-full">
          <p className="text-stone-600">
            오랜 세월 한결같이 자리를 지키는 느티나무처럼, 어르신과 보호자들이 안심하고 동행할 수 있는 신뢰받는 파트너가 되겠습니다.
          </p>
        </div>
        
        {/* 📱 버튼 그룹: <Link> 태그와 to 속성으로 완벽 구현 */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-4 sm:mt-6 w-full px-4">
          <Link 
            to="/service/welfare" 
            className="bg-emerald-600 text-white font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm hover:bg-emerald-700 active:bg-emerald-800 transition-all shadow-md hover:shadow-lg block min-w-[140px] sm:min-w-0"
          >
            제공 서비스 보기
          </Link>
          
          <Link 
            to="/notice" 
            className="bg-white border-2 border-emerald-600 text-emerald-700 font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm hover:bg-emerald-50 active:bg-emerald-100 transition-all shadow-sm hover:shadow-md block min-w-[140px] sm:min-w-0"
          >
            최신 공지 확인
          </Link>
          {/* 🟢 [수정] 함수 실행 결과(정적 디바이스 맞춤 URL)를 href에 매핑 */}
          <a 
            href={getBlogUrl()} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#03C75A] text-white font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm hover:bg-[#02b34f] active:bg-[#029e46] transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 min-w-[140px] sm:min-w-0"
          >
            <SiNaver className="text-[10px] sm:text-xs" />
            <span>공식 블로그</span>
          </a>
        </div>

      </div>
    </section>
  );
}
