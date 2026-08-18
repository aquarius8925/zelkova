export default function Greeting() {
  return (
    <div className="w-full bg-white rounded-2xl border border-stone-200 p-8 shadow-sm flex flex-col md:flex-row gap-8 items-center">
      <div className="text-6xl p-8 bg-stone-100 rounded-full flex-shrink-0">👵</div>
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-black text-emerald-800">"느티나무 재가복지센터 홈페이지를 방문해 주셔서 감사합니다."</h3>
        <p className="text-stone-600 text-base leading-relaxed">
          넓고 튼튼한 그늘을 만드는 느티나무처럼, 어르신들의 평안하고 안전한 노후를 지켜드리는 따뜻한 센터로서 내 가족을 모시는 마음으로 어르신 한 분 한 분의 자립과 존엄성을 지키며, 개인별 맞춤형 방문요양 및 복지 서비스를 제공하겠습니다.
        </p>
        <p className="text-stone-800 font-bold mt-2 text-right">느티나무 재가복지센터 센터장 김수진 배상</p>
      </div>
    </div>
  );
}
