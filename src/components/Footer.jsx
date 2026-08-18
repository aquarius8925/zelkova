import React from 'react';

export default function Footer() {
  return (
    // 🛠️ py-12(상하 여백 대폭 축소) -> py-7로 변경하여 세로 길이를 슬림하게 조율
    <footer className="w-full bg-stone-900 text-stone-400 py-7 border-t border-stone-800">
      {/* gap-4 -> gap-3으로 줄여 전체적인 문단 간격 컴팩트하게 압축 */}
      <div className="max-w-5xl mx-auto px-6 text-xs flex flex-col gap-3 text-center md:text-left leading-relaxed">
        
        {/* 센터 명칭 파트 */}
        <p className="text-sm font-bold text-white flex items-center justify-center md:justify-start gap-1">
          <span role="img" aria-label="건물 아이콘">🏢</span> 
          <span>느티나무재가복지센터</span>
        </p>
        
        {/* 사업자 기본 정보 문단 (한눈에 들어오도록 행간 조율) */}
        <div className="flex flex-col gap-0.5 text-stone-400">
          <p>기관기호: X-XXXXXXXX-X | 대표자: 김수진 | 사업자등록번호: 000-00-00000</p>
          <p>주소: 경기도 고양시 일산서구 일산동 1058 후곡마을 9단지 상가동 106호 | Tel: 031-912-9217 | Fax: 031-912-9218</p>
          <p>E-Mail: <a href="mailto:veronica7856@naver.com" className="hover:text-white transition-colors">veronica7856@naver.com</a></p>
        </div>
        
        {/* 🛠️ pt-4(상단 여백 축소) -> pt-2.5로 변경하여 카피라이터 바짝 밀착 */}
        <p className="border-t border-stone-800 pt-2.5 text-stone-500 text-[11px]">
          © 2026 느티나무재가복지센터. All rights reserved. Powered by High-End Serverless Technology.
        </p>
        
      </div>
    </footer>
  );
}
