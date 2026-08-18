import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);
  // 모바일 메뉴 열림/닫힘 상태 상태 관리 추가
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // md에서 lg로 변경 (폴드, 태블릿 대응)
  const isMenuLinkActive = (basePath, exactPath) => 
    location.pathname === exactPath || (basePath !== '/' && location.pathname.startsWith(basePath)) 
      ? "text-emerald-800 font-black lg:border-b-2 lg:border-emerald-800 pb-1" 
      : "text-stone-600 font-bold hover:text-emerald-700";

  const menuItems = [
    { name: "HOME", path: "/", basePath: "/", subMenu: [] },
    { name: "기관소개", path: "/about/intro", basePath: "/about", subMenu: [
      { name: "센터 소개", path: "/about/intro" },
      { name: "센터장 인사말", path: "/about/greeting" },
      { name: "찾아오는 길", path: "/about/map" }
    ] },
    { name: "서비스안내", path: "/service/welfare", basePath: "/service", subMenu: [
      { name: "재가복지서비스", path: "/service/welfare" },
      { name: "제공 서비스", path: "/service/services" },
      { name: "절차・지원안내", path: "/service/guide" }
    ] },
    { name: "공지사항", path: "/notice", basePath: "/notice", subMenu: [] }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur border-b border-stone-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-24 flex items-center justify-between gap-4">
        
        <Link to="/" className="flex items-center gap-2 flex-shrink-0 cursor-pointer z-50">
          <img src="/images/logo-symbol-silhouette.png" alt="느티나무 심볼" className="h-12 w-auto object-contain" />
          <img src="/images/logo-text-green.png" alt="느티나무재가복지센터" className="h-8 w-auto object-contain ml-0.5" />
        </Link>

        {/* hidden md:flex에서 hidden lg:flex로 변경 */}
        <nav className="hidden lg:flex items-center justify-center gap-10 flex-1 mx-2 h-full">
          {menuItems.map((menu) => (
            <div 
              key={menu.name} 
              className="relative h-full flex items-center"
              onMouseEnter={() => setActiveDropdown(menu.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link to={menu.path} className={`text-base whitespace-nowrap transition-colors py-2 ${isMenuLinkActive(menu.basePath, menu.path)}`} >
                {menu.name}
              </Link>

              {menu.subMenu.length > 0 && activeDropdown === menu.name && (
                <div className="absolute top-[76px] left-0 w-36 bg-white border border-stone-200 rounded-xl shadow-xl py-1.5 flex flex-col z-50">
                  <div className="absolute -top-1.5 left-6 w-3 h-3 bg-white border-t border-l border-stone-200 rotate-45"></div>
                  {menu.subMenu.map((sub) => (
                    <Link 
                      key={sub.name} 
                      to={sub.path} 
                      onClick={() => setActiveDropdown(null)}
                      className="px-3 py-2 text-sm text-stone-600 font-medium hover:bg-emerald-50 hover:text-emerald-800 transition-colors whitespace-nowrap text-left"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* gap-3에서 gap-5으로 늘려 간격 확보 */}
        <div className="flex items-center gap-5 flex-shrink-0 z-50">
          {/* md:hidden에서 lg:hidden으로 변경 (Z폴드 펼쳐도 전화버튼이 잘 보이도록 보완) */}
          {/* 패딩(px-5 py-2.5)과 글자 크기(text-sm)를 키워 어르신들이 누르기 쉽게 수정 */}
          <a href="tel:031-912-9217" className="lg:hidden bg-emerald-700 text-white px-5 py-2.5 rounded-xl text-sm font-black hover:bg-emerald-800 transition-all shadow-md flex items-center gap-1.5 whitespace-nowrap">
            📞 <span>전화상담</span>
          </a>

          {/* flex md:hidden에서 flex lg:hidden으로 변경 */}
          {/* 버튼 내부 여백(p-1)을 조정하고 svg 크기를 w-7/h-7에서 w-9/h-9로 대폭 확대 */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex lg:hidden p-1 text-stone-600 hover:text-emerald-700 focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
            ) : (
              <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
            )}
          </button>
        </div>

      </div>

      {/* md:hidden에서 lg:hidden으로 변경 */}
      <div className={`lg:hidden fixed top-24 left-0 w-full bg-white border-b border-stone-200 shadow-xl transition-all duration-300 ease-in-out overflow-hidden z-40 ${isMobileMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}>
        <div className="px-5 py-4 flex flex-col gap-4 max-h-[70vh] overflow-y-auto">
          {menuItems.map((menu) => (
            <div key={menu.name} className="flex flex-col border-b border-stone-100 pb-3 last:border-none last:pb-0">
              {/* 어르신들이 터치하기 편하도록 세로 패딩 py-1.5에서 py-2.5로 확대 및 글자 크기 text-lg로 확대 */}
              <Link
                to={menu.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg py-2.5 block ${isMenuLinkActive(menu.basePath, menu.path)}`}
              >
                {menu.name}
              </Link>
              {menu.subMenu.length > 0 && (
                /* 서브메뉴 줄간격 gap-2에서 gap-3으로 확대 */
                <div className="flex flex-col gap-3 mt-2 pl-3 border-l-2 border-stone-200">
                  {menu.subMenu.map((sub) => (
                    /* 서브메뉴 터치 영역 py-1에서 py-2로 확대 및 글자 크기 text-base로 확대 */
                    <Link
                      key={sub.name}
                      to={sub.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-base py-2 block ${location.pathname === sub.path ? "text-emerald-700 font-bold" : "text-stone-500 font-medium"}`}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </header>
  );
}
