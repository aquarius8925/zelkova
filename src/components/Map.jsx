import { useEffect, useRef } from 'react';

export default function Map() {
  const NAVER_CLIENT_ID = import.meta.env.VITE_NAVER_CLIENT_ID;

  const mapRef = useRef(null);
  const mapInitializedRef = useRef(false);

  useEffect(() => {
    if (mapInitializedRef.current) {
      return;
    }

    // 네이버 지도 API가 이미 로드되어 있는 경우
    if (window.naver && window.naver.maps) {
      initMap();
      return;
    }

    // 이미 네이버 지도 스크립트가 추가되어 있는 경우
    const existingScript = document.getElementById("naver-map-script");

    if (existingScript) {

      existingScript.addEventListener("load", handleScriptLoad);

      return () => {
        existingScript.removeEventListener("load", handleScriptLoad);
      };
    }

    const script = document.createElement('script');

    script.id = "naver-map-script";
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${NAVER_CLIENT_ID}`;
    script.async = true;

    document.head.appendChild(script);

    script.onload = handleScriptLoad;

    script.onerror = (error) => {
      console.error("네이버 지도 API 스크립트 로딩 실패");
      console.error(error);
    };

    function handleScriptLoad() {

      initMap();
    }

    return () => {
      // 탭 이동 시 컴포넌트가 사라져도
      // 네이버 지도 API 스크립트는 삭제하지 않음
      console.log("Map 컴포넌트 정리");
    };
  }, []);

  const initMap = () => {
    console.log("지도 초기화 시작");

    if (!window.naver || !window.naver.maps) {
      console.error("네이버 지도 API가 준비되지 않았습니다.");
      return;
    }

    const mapElement = document.getElementById("naver-map");

    if (!mapElement) {
      console.error("지도 영역(#naver-map)을 찾을 수 없습니다.");
      return;
    }

    // 이미 지도 초기화가 완료된 경우
    if (mapInitializedRef.current) {
      console.log("지도는 이미 초기화되어 있습니다.");
      return;
    }

    // 경기도 고양시 일산서구 일산로 558 후곡마을 9단지 상가동 106호 정밀 좌표
    const targetLatLng = new window.naver.maps.LatLng(37.678364, 126.763314);

    const mapOptions = {
      center: targetLatLng,
      zoom: 17,
      zoomControl: true,
      zoomControlOptions: {
        position: window.naver.maps.Position.TOP_RIGHT,
      },
    };

    const map = new window.naver.maps.Map('naver-map', mapOptions);

    const marker = new window.naver.maps.Marker({
      position: targetLatLng,
      map: map,
      animation: window.naver.maps.Animation.DROP
    });

    // 💡 네이버 길찾기 URL (출발지는 공백 처리하여 사용자가 직접 입력하도록 설정)
    const destinationName = encodeURIComponent("후곡마을LG롯데9단지아파트상가");
    const destinationLng = targetLatLng.lng();
    const destinationLat = targetLatLng.lat();

    const naverMapLink =
      `https://map.naver.com/p/directions/-/${destinationLng},${destinationLat},${destinationName}/-/transit`;

    const infoWindow = new window.naver.maps.InfoWindow({
      content: `
        <div style="padding:12px; min-width:220px; font-family:sans-serif; line-height:1.4;">
          <h4 style="margin:0 0 4px 0; font-size:14px; font-weight:bold; color:#047857;">
            느티나무재가복지센터
          </h4>
          <p style="margin:0 0 10px 0; font-size:11px; color:#64748b;">
            후곡마을 9단지 상가동 106호
          </p>
          <!-- 💡 길찾기 버튼 추가 -->
          <a href="${naverMapLink}" target="_blank" rel="noopener noreferrer"
             style="display:block; text-align:center; background-color:#03c75a; color:white; font-size:12px; font-weight:bold; padding:6px 0; border-radius:6px; text-decoration:none;">
             네이버 지도 길찾기 ↗
          </a>
        </div>
      `,
      borderWidth: 1,
      borderColor: '#e2e8f0',
      anchorSize: new window.naver.maps.Size(10, 10)
    });

    // 처음 로드될 때 정보창 열어두기
    infoWindow.open(map, marker);

    // 💡 마커 클릭 이벤트 추가 (정보창 토글)
    window.naver.maps.Event.addListener(marker, 'click', () => {
      if (infoWindow.getMap()) {
        infoWindow.close();
      } else {
        infoWindow.open(map, marker);
      }
    });

    mapRef.current = map;
    mapInitializedRef.current = true;

    console.log("지도 초기화 완료");
  };

  return (
    <section
      id="location"
      className="bg-white rounded-2xl border border-stone-200 p-8 shadow-sm"
    >

      <div
        className="relative z-10 flex items-center gap-2 border-b-2 border-blue-900 pb-3 mb-8"
      >
        <span className="text-xl">📍</span>
        <h2 className="text-lg font-bold text-stone-900">
          찾아오시는 길
        </h2>
      </div>

      <div
        id="naver-map-container"
        className="relative z-0 w-full"
      >
        <div
          id="naver-map"
          className="relative isolate w-full h-[600px] rounded-xl border border-stone-200 shadow-sm overflow-hidden"
        ></div>
      </div>

    </section>
  );
}
