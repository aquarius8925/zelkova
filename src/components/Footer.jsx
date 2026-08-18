import React from 'react';

export default function Footer() {
  return (
    // w-full과 overflow-hidden으로 푸터 자체의 가로 이탈을 완벽 차단
    <footer className="w-full bg-stone-900 text-stone-400 py-8 border-t border-stone-800 overflow-hidden">
      {/* 📱 px-4로 모바일 여백 최적화 / break-all과 break-keep으로 텍스트 터짐 원천 방지 */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-xs flex flex-col gap-4 text-center md:text-left leading-relaxed break-keep">
        
        {/* 센터 명칭 파트 */}
        <p className="text-sm font-bold text-white flex items-center justify-center md:justify-start gap-1">
          <span role="img" aria-label="건물 아이콘">🏢</span> 
          <span>느티나무재가복지센터</span>
        </p>
        
        {/* 📱 사업자 정보: 모바일에서는 자연스럽게 개행되도록 개별 p태그 분리 및 md 분기 처리 */}
        <div className="flex flex-col gap-1.5 text-stone-400 text-[11px] sm:text-xs">
          {/* 모바일 가로폭을 절대 넘지 않도록 중간에 공백이나 바(|)를 기준으로 줄바꿈 유도 */}
          <p className="block md:inline">
            기관기호: X-XXXXXXXX-X <span className="hidden md:inline">|</span><br className="block md:hidden" /> 
            대표자: 김수진 <span className="hidden md:inline">|</span><br className="block md:hidden" /> 
            사업자등록번호: 000-00-00000
          </p>
          
          <p className="break-all md:break-keep">
            주소: 경기도 고양시 일산서구 일산동 1058 후곡마을 9단지 상가동 106호
          </p>
          
          <p className="block md:inline">
            Tel: 031-912-9217 <span className="hidden md:inline">|</span><br className="block md:hidden" /> 
            Fax: 031-912-9218 <span className="hidden md:inline">|</span><br className="block md:hidden" /> 
            E-Mail: <a href="mailto:veronica7856@naver.com" className="hover:text-white transition-colors underline md:no-underline">veronica7856@naver.com</a>
          </p>
        </div>
        
        {/* 카피라이트 영역 */}
        <p className="border-t border-stone-800 pt-3 text-stone-500 text-[10px] sm:text-[11px] break-all md:break-keep">
          © 2026 느티나무재가복지센터. All rights reserved. <br className="block sm:hidden" />Powered by High-End Serverless Technology.
        </p>
        
      </div>
    </footer>
  );
}
