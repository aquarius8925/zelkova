export default function Services() {
  const serviceList = [
    { 
      title: "방문요양 서비스", 
      desc: "국가 자격증을 소지한 요양보호사가 어르신의 가정을 직접 방문하여 식사 수발, 세면 및 목욕 보조, 옷 갈아입히기 등 신체 활동 전반 및 청소, 빨래, 장보기 등 일상 생활 가사 노동을 든든하게 대행해 드립니다.", 
      icon: "🛌",
      tag: "국비지원 85%~100%"
    },
    { 
      title: "가족요양 서비스", 
      desc: "가족 중 요양보호사 자격증이 있으신 분이 직접 몸이 불편한 부모님이나 배우자를 정성껏 케어하시는 경우, 국가 노인장기요양보험 제도를 통해 합법적인 가사 요양 급여(급여비용 월급)를 받으실 수 있도록 완벽하게 지원합니다.", 
      icon: "❤️",
      tag: "가족 케어 보상"
    },
    { 
      title: "노인장기요양 등급신청 대행", 
      desc: "치매, 뇌졸중, 파킨슨 및 거동이 불편하신 65세 이상 어르신들을 위해 국민건강보험공단 등급 신청 서류 작성부터 공단 직원의 방문 조사 대응 팁까지 전 과정을 센터에서 100% 무료로 밀착 대행해 드립니다.", 
      icon: "📝",
      tag: "전액 무료 대행"
    },
    { 
      title: "복지용구 구입 및 대여 상담", 
      desc: "어르신의 안전한 재가 생활을 위해 필수적인 전동침대, 휠체어, 성인용 보행기, 미끄럼 방지 매트, 욕창 예방 매트리스 등 고가의 실버 복지용구를 연간 160만 원 한도 내에서 정부 보조금을 지원받아 저렴하게 이용하도록 안내합니다.", 
      icon: "🩼",
      tag: "정부 보조금 지원"
    }
  ];

  return (
    <div className="w-full bg-white rounded-2xl border border-stone-200 p-8 shadow-sm flex flex-col gap-6 animate-fade-in">
      
      {/* 🟢 섹션 타이틀 */}
      <div className="border-l-4 border-emerald-700 pl-3 mb-2">
        <h3 className="text-2xl font-black text-stone-900 tracking-tight">제공 서비스 안내</h3>
        <p className="text-stone-500 text-xs mt-1">느티나무재가복지센터는 어르신의 건강하고 편안한 가정 생활을 위해 정성을 다합니다.</p>
      </div>

      {/* 🟢 피드백 반영: 2x2 정밀 그리드 4대 서비스 카드 배열 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
        {serviceList.map((item, i) => (
          <div 
            key={i} 
            className="p-6 border border-stone-200 rounded-2xl bg-stone-50/50 hover:border-emerald-700 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between gap-4 group"
          >
            <div className="flex flex-col gap-3">
              {/* 아이콘 및 포인트 태그 */}
              <div className="flex items-center justify-between">
                <span className="text-3xl p-3 bg-white rounded-xl shadow-sm border border-stone-150 group-hover:bg-emerald-50 transition-colors">
                  {item.icon}
                </span>
                <span className="text-[10px] font-black tracking-wide text-emerald-800 bg-emerald-100/60 border border-emerald-200/50 px-2 py-0.5 rounded-md uppercase">
                  {item.tag}
                </span>
              </div>
              
              {/* 서비스 명칭 */}
              <h4 className="font-extrabold text-stone-900 text-lg group-hover:text-emerald-800 transition-colors">
                {item.title}
              </h4>
              
              {/* 상세 설명 (주무관용 정석 텍스트 가이드) */}
              <p className="text-stone-600 text-xs md:text-sm leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
            
            <div className="text-[11px] font-bold text-stone-400 border-t border-stone-200/60 pt-2 flex items-center gap-1">
              <span>📌 상세 이용 상담 가능</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
