// 검색어 입력 후 엔터키를 감지하는 함수
function checkEnter(event, platform) {
    if (event.key === "Enter") {
        performSearch(platform);
    }
}

// 검색을 수행하는 함수
function performSearch(platform) {
    let query = "";
    let searchUrl = "";

    if (platform === "naver") {
        query = document.getElementById("naver-search").value;
        if (query) {
            searchUrl = `https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=${encodeURIComponent(query)}`;
        }
    } else if (platform === "google") {
        query = document.getElementById("google-search").value;
        if (query) {
            searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        }
    }

    // 검색어가 있을 때만 새 창 열기
    if (searchUrl) {
        window.open(searchUrl, '_blank');
    } else {
        alert("검색어를 입력하세요.");
    }
}