export default function Intro() {
  return (
    <div className="w-full bg-white rounded-2xl border border-stone-200 p-8 shadow-sm flex flex-col gap-6">
      <h3 className="text-xl font-bold text-stone-900 border-l-4 border-emerald-700 pl-2">설립 목적 및 운영 철학</h3>
      <p className="text-stone-600 leading-relaxed text-sm">
        국가 노인장기요양보험 지정 기관으로서 등급을 받으신 어르신들의 신체 활동 및 가사 활동을 지원합니다. 어르신들의 인간존엄성을 존중하고 최고 수준의 요양 서비스를 제공하는 것을 핵심 가치로 삼고 있습니다.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
        <div className="p-4 bg-stone-50 rounded-xl border border-stone-150">
          <h4 className="font-bold text-emerald-800 mb-1">🎯 미션</h4>
          <p className="text-stone-500 text-xs">어르신이 살던 정든 가정에서 편안한 노후를 보낼 수 있도록 통합 케어 마스터 인프라 제공</p>
        </div>
        <div className="p-4 bg-stone-50 rounded-xl border border-stone-150">
          <h4 className="font-bold text-emerald-800 mb-1">🌿 비전</h4>
          <p className="text-stone-500 text-xs">일산 서구 최고의 신뢰를 받는 프리미엄 재가 급여 요양보호 서비스 네트워크 구축</p>
        </div>
      </div>
    </div>
  );
}
