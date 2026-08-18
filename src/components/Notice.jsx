import React, { useEffect, useState } from 'react';

export default function Notice() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // 현재 선택된 게시글
  // null이면 게시글 목록을 보여줌
  const [selectedPost, setSelectedPost] = useState(null);

  // 현재 게시판 페이지
  const [currentPage, setCurrentPage] = useState(1);

  // 한 페이지에 표시할 게시글 수
  const POSTS_PER_PAGE = 10;

  // 💡 Google Blogger 블로그 ID와 API Key
  const BLOG_ID = "8862678397536301499";
  const API_KEY = "AIzaSyAjKww9ohLyuFQV9UiaPTZ2rh4JvogRtvc";

  useEffect(() => {
    console.log("Blogger 게시글 불러오기 시작");

    fetch(
      `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}&maxResults=100`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Blogger API 오류: ${res.status}`);
        }

        return res.json();
      })
      .then((data) => {
        console.log("Blogger API 응답:", data);

        if (data.items) {
          setPosts(data.items);
        } else {
          setPosts([]);
        }

        setLoading(false);
      })
      .catch((error) => {
        console.error("Blogger 게시글을 불러오지 못했습니다.");
        console.error(error);

        setPosts([]);
        setLoading(false);
      });
  }, []);

  // 💡 관리자 글쓰기
  // 별도의 관리자 비밀번호를 사용하지 않고
  // Blogger의 Google 로그인/권한 시스템을 사용
  const handleAdminWrite = () => {
    window.open(
      `https://www.blogger.com/blog/posts/${BLOG_ID}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  // Blogger 게시글 본문에서 첫 번째 이미지 추출
  const extractFirstImageUrl = (content) => {
    if (!content) {
      return "/images/logo-symbol-full.png";
    }

    const imgRegex = /<img[^>]+src=["']([^"']+)["']/i;
    const match = content.match(imgRegex);

    return match
      ? match[1]
      : "/images/logo-symbol-full.png";
  };

  // 게시글 본문에서 HTML 태그 제거
  // 목록에서 간단한 내용 미리보기용
  const removeHtmlTags = (content) => {
    if (!content) {
      return "";
    }

    const cleanText = content
      .replace(/<[^>]*>?/gm, '')
      .replace(/&nbsp;/gi, ' ')
      .trim();

    return cleanText.length > 100
      ? cleanText.substring(0, 100) + "..."
      : cleanText;
  };

  // 게시글 상세보기
  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  // 목록으로 돌아가기
  const handleBackToList = () => {
    setSelectedPost(null);
  };

  // 현재 페이지에서 보여줄 게시글 계산
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;

  const currentPosts = posts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE
  );

  // 페이지 변경
  const handlePageChange = (page) => {
    setCurrentPage(page);

    // 페이지 변경 시 게시판 상단으로 이동
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // 게시글 번호 계산
  const getPostNumber = (index) => {
    return posts.length - startIndex - index;
  };

  return (
    <div className="w-full bg-stone-50/40 py-16 px-4 sm:px-6 min-h-[600px]">

      <div className="max-w-5xl mx-auto flex flex-col gap-8">

        {/* =====================================================
            상세보기
            ===================================================== */}
        {selectedPost ? (

          <>

            {/* 상세보기 제목 영역 */}
            <div className="border-b border-stone-200 pb-5">

              <div className="border-l-4 border-emerald-700 pl-3">

                <div className="flex items-center gap-2">

                  <h2 className="text-2xl font-black text-stone-900 tracking-tight">
                    센터 소식 및 공지
                  </h2>

                </div>

                <p className="text-stone-500 text-xs mt-1">
                  느티나무재가복지센터의 따뜻한 요양 일상과 핵심 안내사항을 전해드립니다.
                </p>

              </div>

            </div>

            {/* 상세 게시글 */}
            <article className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">

              {/* 게시글 헤더 */}
              <div className="p-6 sm:p-8 border-b border-stone-200">

                <h1 className="text-xl sm:text-2xl font-black text-stone-900 break-keep">
                  {selectedPost.title}
                </h1>

                <div className="flex items-center gap-2 mt-3 text-xs text-stone-400">

                  <span>
                    작성일
                  </span>

                  <span>
                    {new Date(selectedPost.published).toLocaleDateString(
                      "ko-KR"
                    )}
                  </span>

                </div>

              </div>

              {/* Blogger 본문 */}
              <div
                className="
                  p-6 sm:p-8
                  text-sm
                  text-stone-700
                  leading-8
                  break-words
                  [&_img]:max-w-full
                  [&_img]:h-auto
                  [&_img]:rounded-xl
                  [&_img]:mx-auto
                  [&_img]:my-6
                  [&_p]:mb-4
                  [&_a]:text-emerald-700
                  [&_a]:underline
                  [&_ul]:list-disc
                  [&_ul]:pl-6
                  [&_ol]:list-decimal
                  [&_ol]:pl-6
                  [&_h1]:font-bold
                  [&_h2]:font-bold
                  [&_h3]:font-bold
                "
                dangerouslySetInnerHTML={{
                  __html: selectedPost.content || "",
                }}
              />

            </article>

            {/* 목록으로 돌아가기 */}
            <div className="flex justify-center">

              <button
                type="button"
                onClick={handleBackToList}
                className="
                  px-6
                  py-3
                  rounded-xl
                  bg-stone-800
                  text-white
                  text-sm
                  font-bold
                  hover:bg-stone-700
                  transition-colors
                "
              >
                ← 목록으로 돌아가기
              </button>

            </div>

          </>

        ) : (

          /* =====================================================
             게시글 목록
             ===================================================== */
          <>

            {/* 타이틀 영역 */}
            <div className="flex items-end justify-between border-b border-stone-200 pb-5 gap-4">

              <div className="border-l-4 border-emerald-700 pl-3 flex items-center gap-2">

                <div>

                  <div className="flex items-center gap-2">

                    <h2 className="text-2xl font-black text-stone-900 tracking-tight">
                      센터 소식 및 공지
                    </h2>

                    {/* 💡 관리자 글쓰기 */}
                    {/* 실제 로그인/권한 확인은 Blogger가 담당 */}
                    <button
                      type="button"
                      onClick={handleAdminWrite}
                      className="
                        text-stone-300
                        hover:text-stone-500
                        transition-colors
                        cursor-pointer
                        select-none
                        text-sm
                        p-1
                        bg-transparent
                        border-none
                        outline-none
                        focus:outline-none
                      "
                      title="관리자 글쓰기"
                    >
                      ⚙️
                    </button>

                  </div>

                  <p className="text-stone-500 text-xs mt-1">
                    느티나무재가복지센터의 따뜻한 요양 일상과 핵심 안내사항을 전해드립니다.
                  </p>

                </div>

              </div>

            </div>

            {/* 로딩 */}
            {loading ? (

              <div className="w-full text-center py-32 text-stone-400 font-bold text-sm tracking-wide animate-pulse">
                센터 소식을 불러오는 중입니다...
              </div>

            ) : posts.length === 0 ? (

              /* 게시글 없음 */
              <div className="w-full text-center py-32 text-stone-400 font-medium text-sm">
                등록된 센터 소식이 아직 없습니다.
              </div>

            ) : (

              /* =====================================================
                 게시판
                 ===================================================== */
              <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">

                {/* 게시판 헤더 */}
                <div
                  className="
                    hidden
                    sm:grid
                    grid-cols-[70px_1fr_120px]
                    bg-stone-50
                    border-b
                    border-stone-200
                    px-5
                    py-3
                    text-xs
                    font-bold
                    text-stone-500
                  "
                >

                  <div className="text-center">
                    번호
                  </div>

                  <div>
                    제목
                  </div>

                  <div className="text-center">
                    작성일
                  </div>

                </div>

                {/* 게시글 목록 */}
                <div>

                  {currentPosts.map((post, index) => (

                    <div
                      key={post.id}
                      onClick={() => handlePostClick(post)}
                      className="
                        grid
                        grid-cols-1
                        sm:grid-cols-[70px_1fr_120px]
                        items-center
                        px-5
                        py-4
                        border-b
                        border-stone-100
                        cursor-pointer
                        hover:bg-stone-50
                        transition-colors
                        group
                      "
                    >

                      {/* 번호 */}
                      <div className="hidden sm:block text-center text-xs text-stone-400 font-mono">
                        {getPostNumber(index)}
                      </div>

                      {/* 제목 + 내용 */}
                      <div className="min-w-0">

                        <div className="flex items-center gap-2">

                          {/* 이미지가 있는 게시글 표시 */}
                          {post.content && extractFirstImageUrl(post.content) !== "/images/logo-symbol-full.png" && (
                            <span className="text-xs">
                              📷
                            </span>
                          )}

                          <h3
                            className="
                              font-bold
                              text-sm
                              text-stone-800
                              truncate
                              group-hover:text-emerald-700
                              transition-colors
                            "
                          >
                            {post.title}
                          </h3>

                        </div>

                        {/* 모바일에서 간단한 내용 표시 */}
                        <p
                          className="
                            sm:hidden
                            mt-1
                            text-xs
                            text-stone-400
                            truncate
                          "
                        >
                          {removeHtmlTags(post.content)}
                        </p>

                      </div>

                      {/* 작성일 */}
                      <div
                        className="
                          mt-2
                          sm:mt-0
                          text-left
                          sm:text-center
                          text-[11px]
                          text-stone-400
                          font-mono
                        "
                      >
                        {new Date(post.published).toLocaleDateString(
                          "ko-KR"
                        )}
                      </div>

                    </div>

                  ))}

                </div>

              </div>

            )}

            {/* =====================================================
               페이지네이션
               ===================================================== */}
            {!loading && posts.length > 0 && totalPages > 1 && (

              <div className="flex justify-center items-center gap-1 mt-2">

                {/* 이전 페이지 */}
                <button
                  type="button"
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                  className={`
                    w-9
                    h-9
                    rounded-lg
                    text-sm
                    font-bold
                    transition-colors
                    ${
                      currentPage === 1
                        ? "text-stone-300 cursor-not-allowed"
                        : "text-stone-600 hover:bg-stone-100"
                    }
                  `}
                >
                  ‹
                </button>

                {/* 페이지 번호 */}
                {Array.from(
                  { length: totalPages },
                  (_, index) => index + 1
                ).map((page) => (

                  <button
                    key={page}
                    type="button"
                    onClick={() => handlePageChange(page)}
                    className={`
                      w-9
                      h-9
                      rounded-lg
                      text-sm
                      font-bold
                      transition-colors
                      ${
                        currentPage === page
                          ? "bg-emerald-700 text-white"
                          : "text-stone-600 hover:bg-stone-100"
                      }
                    `}
                  >
                    {page}
                  </button>

                ))}

                {/* 다음 페이지 */}
                <button
                  type="button"
                  disabled={currentPage === totalPages}
                  onClick={() => handlePageChange(currentPage + 1)}
                  className={`
                    w-9
                    h-9
                    rounded-lg
                    text-sm
                    font-bold
                    transition-colors
                    ${
                      currentPage === totalPages
                        ? "text-stone-300 cursor-not-allowed"
                        : "text-stone-600 hover:bg-stone-100"
                    }
                  `}
                >
                  ›
                </button>

              </div>

            )}

          </>

        )}

      </div>

    </div>
  );
}