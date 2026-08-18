import { useState } from 'react';

export default function Guide() {
  // Q&A 열고 닫힘 상태 관리 (기본적으로 첫 번째 질문이 열려있게 설정)
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // 클라이언트 요구사항에 맞춘 전체 FAQ 리스트
  const faqList = [
    // ----------------------------------------------------
    // [SECTION 1] 방문요양센터 자주 묻는 질문(FAQ)
    // ----------------------------------------------------
    {
      id: 0,
      section: "방문요양센터 자주 묻는 질문(FAQ)",
      isSectionStart: true,
      q: "1. 서비스 신청 자격이 어떻게 되나요?",
      qSub: "질문: 저희 부모님도 방문요양 서비스를 받을 수 있나요?",
      a: [
        "만 65세 이상이거나 만 65세 미만 노인성 질병(치매, 중풍, 파킨슨 등)이 있어야 합니다.",
        "국민건강보험공단에서 노인장기요양등급(1~5등급 또는 등급외 치매환자)을 판정받아야 서비스를 이용할 수 있습니다.",
        "등급이 없다면 센터로 연락해 주시면 등급 신청 절차를 무료로 안내해 드립니다."
      ]
    },
    {
      id: 1,
      q: "2. 이용 절차가 어떻게 되나요?",
      qSub: "질문: 서비스를 시작하려면 어떤 순서로 진행해야 하나요?",
      a: [
        "장기요양등급 판정 (미보유 시 공단에 신청)",
        "방문요양센터 상담 및 신청 문의",
        "가정 방문 및 어르신 상태 상담 (욕구 조사)",
        "장기요양계약 체결",
        "맞춤형 요양보호사 파견 및 서비스 개시"
      ]
    },
    {
      id: 2,
      q: "3. 비용은 얼마나 드나요?",
      qSub: "질문: 이용 요금과 본인부담금은 얼마인가요?",
      a: [
        "국가 지원금(85~100%)을 제외하고 일반 대상자는 15%를 본인부담금으로 납부합니다.",
        "의료급여 수급권자나 경감 대상자는 6%~10% 또는 무료입니다.",
        "이용 시간과 횟수에 따라 월 비용이 다르며, 등급별 월 한도액 내에서 사용할 수 있습니다."
      ]
    },
    {
      id: 4,
      q: "4. 어떤 서비스를 제공하나요?",
      qSub: "질문: 요양보호사 선생님이 오시면 구체적으로 어떤 일을 해주시나요?",
      a: [
        "신체활동지원: 식사 보조, 세면, 입욕, 체위 변경, 이동 돕기 등",
        "가사활동지원: 식사 준비(취사), 청소 및 주변 정돈, 세탁 등",
        "일상활동지원: 장보기, 동행(병원, 관공서 등)",
        "주의: 어르신 본인을 위한 서비스만 제공하며, 가족을 위한 빨래나 요리 등은 원칙적으로 제외됩니다."
      ]
    },
    {
      id: 5,
      q: "5. 요양보호사 변경이 가능한가요?",
      qSub: "질문: 오시는 선생님과 잘 맞지 않으면 바꿀 수 있나요?",
      a: [
        "네, 가능합니다. 어르신과 요양보호사 간 성향 차이나 불편함이 발생할 경우 센터로 말씀해 주시면 조율 및 교체해 드립니다."
      ]
    },
    // ----------------------------------------------------
    // [SECTION 2] 치매 관련 자주 묻는 질문(FAQ)
    // ----------------------------------------------------
    {
      id: 6,
      section: "치매 관련 자주 묻는 질문(FAQ)",
      isSectionStart: true,
      q: "1. 치매 등급은 일반 등급과 무엇이 다른가요?",
      qSub: "질문: 치매가 있으면 몇 등급을 받게 되나요? 일반 등급과 차이가 있나요?",
      a: [
        "치매 어르신은 상태에 따라 1~5등급을 받으시거나, 신체 기능은 비교적 양호하지만 치매 증상이 있는 경우 5등급(치매특별등급) 또는 인지지원등급을 받으실 수 있습니다.",
        "5등급을 받으시면 일반 요양보호사가 아닌, 국민건강보험공단에서 지정한 치매전문교육을 이수한 요양보호사가 배치되어 맞춤형 인지 자극 활동 서비스를 제공합니다."
      ]
    },
    {
      id: 7,
      q: "2. 치매 어르신 전용 인지 프로그램은 어떻게 진행되나요?",
      qSub: "질문: 방문요양 시 치매 어르신을 위해 어떤 활동을 해주시나요?",
      a: [
        "치매 증상 완화와 기억력 유지를 위한 인지활동형 프로그램을 제공합니다.",
        "회상 요법(과거 기억 떠올리기), 인지 교구 활용(그림 그리기, 퍼즐 맞추기, 블록 쌓기), 가벼운 실내 운동 등을 어르신의 눈높이에 맞춰 매일 60분 이상 필수적으로 진행합니다."
      ]
    },
    {
      id: 8,
      q: "3. 폭력성이나 배회 증상이 심해도 이용할 수 있나요?",
      qSub: "질문: 치매 증상(폭언, 의심, 밖으로 나가려는 행동)이 심한데 방문요양이 가능할까요?",
      a: [
        "네, 가능합니다. 치매 어르신의 이상행동반응(BPSD)은 질환에 따른 자연스러운 증상입니다.",
        "저희 센터의 치매 전문 요양보호사는 어르신의 자극을 최소화하고, 공감하며, 시선을 돌리는 등의 전문적인 치매 케어 기술을 통해 안전하게 돌봐드립니다. 증상이 심해지시면 센터 사회복지사가 상시 모니터링하며 대처 방법을 함께 찾아갑니다."
      ]
    },
    // ----------------------------------------------------
    // [SECTION 3] 정부 지원 및 행정 대행 서비스 관련
    // ----------------------------------------------------
    {
      id: 9,
      section: "정부 지원 및 행정 대행 서비스 관련",
      isSectionStart: true,
      q: "1. 치매 약값 지원이나 실종방지 인식표 신청도 센터에서 도와주나요?",
      qSub: "질문: 정부에서 주는 치매 혜택이 많다는데, 복잡해서 신청하기 어렵습니다. 센터에서 대신 해줄 수 있나요?",
      a: [
        "네, 적극적으로 대행 및 지원해 드립니다.",
        "보호자분들이 생업으로 바쁘시거나 절차가 복잡해 놓치기 쉬운 정부 지원 사업 신청을 센터 전담 사회복지사가 전과정 밀착 지원합니다.",
        "센터에 말씀만 해주시면 필요 서류 안내부터 접수까지 원스톱으로 도와드리니 걱정하지 않으셔도 됩니다."
      ]
    },
    {
      id: 10,
      q: "2. 센터를 통해 대행이나 안내를 받을 수 있는 정부 지원 제도는 어떤 게 있나요?",
      qSub: "질문: 센터에서 구체적으로 어떤 제도를 신청 대행하거나 연계해 주나요?",
      a: [
        "답변: 대표적으로 어르신과 가족에게 꼭 필요한 4가지 핵심 서비스를 지원합니다.",
        "치매치료관리비 지원 (약값 보조): 치매안심센터 규정에 따라 조건 충족 시 월 최대 3만 원(연간 36만 원)까지 치매 약제비와 진료비를 환급받으실 수 있도록 신청을 대행합니다.",
        "배회가능 어르신 인식표 무료 발급: 실종 위험이 있는 어르신의 옷에 다리미로 부착하는 고유번호 인식표(80매)와 보호자용 카드를 무료로 발급받아 드립니다.",
        "GPS 배회감지기 대여 연계: 길 잃음이 우려되는 어르신을 위해 노인장기요양보험 급여를 통한 국민건강보험공단 복지용구 배회감지기(실시간 위치추적기) 대여 절차를 연결해 드립니다.",
        "지문 등 사전등록제 안내: 실종 시 신속하게 찾을 수 있도록 경찰청 시스템에 어르신의 지문과 사진, 보호자 연락처를 등록하는 방법을 친절하게 안내하고 도와드립니다."
      ]
    }
  ];

  // 🛠️ 클라이언트 요청: "3) 서비스 이용 절차・국가지원안내" 8단계 비주얼 데이터 배열
  const stepList = [
    "장기요양인정 신청",
    "공단방문조사",
    "의사소견서 제출 및 등급판정",
    "재가장기요양기관 선택",
    "초기상담 및 서비스 계획 수립",
    "이용계약 체결",
    "서비스 제공",
    "모니터링 및 서비스 조정"
  ];

  return (
    <div className="w-full bg-white rounded-2xl border border-stone-200 p-8 shadow-sm flex flex-col gap-8 text-sm animate-fade-in">
      
      {/* 🟢 [수정 완료] 상단 영역: 클라이언트 원문 문구 매칭 및 8단계 프로세스 박스 레이아웃 */}
      <div className="flex flex-col gap-5">
        <div className="border-l-4 border-emerald-700 pl-3 mb-1">
          <h3 className="text-xl font-black text-stone-900 tracking-tight">서비스 이용 절차・국가지원안내</h3>
          <p className="text-stone-500 text-xs mt-0.5">체계적이고 투명한 프로세스를 통해 최적의 서비스를 연계합니다.</p>
        </div>
        
        {/* 기존 3단계를 확장하여 8단계가 화면 크기에 맞게 배치되도록 격자 튜닝 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-center font-extrabold text-xs text-stone-600 mt-2">
          {stepList.map((stepText, idx) => (
            <div key={idx} className="flex items-center w-full gap-2 relative">
              <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 w-full shadow-sm hover:border-emerald-700 transition-colors flex flex-col items-center justify-center min-h-[84px]">
                <span className="text-emerald-800 text-[10px] block mb-1 tracking-wider">STEP 0{idx + 1}</span>
                <span className="text-stone-800 break-keep leading-snug px-1">{stepText}</span>
              </div>
              
              {/* 다음 단계 지시용 화살표 아이콘 제어 (각 행의 마지막 박스 뒤에는 미표출 처리) */}
              {idx < stepList.length - 1 && (
                <div className="text-stone-300 hidden md:block text-xs font-light absolute -right-2 z-20">▶</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 🟢 하단 영역: 자주 묻는 질문 (FAQ) 아코디언 섹션 */}
      <div className="flex flex-col gap-4 border-t border-stone-200 pt-6">
        <div className="flex flex-col gap-1 mt-1">
          {faqList.map((faq) => (
            <div key={faq.id} className="w-full flex flex-col">
              
              {/* 섹션별 중간 분류 타이틀 배치 */}
              {faq.isSectionStart && (
                <div className={`border-l-4 border-emerald-700 pl-3 mb-2.5 ${faq.id > 0 ? 'mt-4 pt-2' : ''}`}>
                  <h4 className="text-base md:text-lg font-black text-stone-900 tracking-tight">{faq.section}</h4>
                </div>
              )}

              {/* 개별 아코디언 박스 */}
              <div className="border border-stone-200 rounded-xl overflow-hidden bg-stone-50/30 transition-all mb-2 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                {/* 질문 클릭 헤더 바 */}
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={openIndex === faq.id}
                  className="w-full text-left px-5 py-3.5 font-bold text-stone-800 hover:text-emerald-800 bg-white hover:bg-stone-50/50 flex items-center justify-between transition-colors gap-4"
                >
                  <div className="flex items-center gap-2 text-sm md:text-base">
                    <span className="text-emerald-700 font-extrabold text-base">Q.</span>
                    <span>{faq.q}</span>
                  </div>
                  <span className={`text-stone-400 font-bold transition-transform duration-200 ${openIndex === faq.id ? 'rotate-180 text-emerald-800' : ''}`}>
                    ▼
                  </span>
                </button>

                {/* 최하위 답변 영역 (전부 블릿 점 리스트 고정) */}
                {openIndex === faq.id && (
                  <div className="px-6 py-4 bg-stone-50 border-t border-stone-200 text-stone-600 text-xs md:text-sm leading-relaxed font-normal animate-fade-in">
                    <div className="flex items-start gap-2">
                      <span className="text-orange-500 font-extrabold text-base flex-shrink-0">A.</span>
                      <div className="flex flex-col gap-3 w-full pt-0.5 pl-1">
                        
                        {/* 서브 부제목 질문 */}
                        <p className="font-semibold text-stone-800 text-sm md:text-base">
                          {faq.qSub}
                        </p>

                        {/* 하위 답변 블릿 점 리스트 적용 */}
                        <ul className="list-disc pl-5 flex flex-col gap-2 list-outside text-stone-700">
                          {faq.a.map((text, idx) => {
                            if (text.startsWith('답변:')) {
                              return <p key={idx} className="list-none -ml-5 mb-1 font-medium text-stone-800">{text}</p>;
                            }
                            return <li key={idx}>{text}</li>;
                          })}
                        </ul>

                      </div>
                    </div>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
