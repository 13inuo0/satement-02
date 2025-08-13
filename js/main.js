window.addEventListener("load" , function(){
    // 모바일 메뉴 토글
    const menuBtn = this.document.querySelector(".menu-btn")
    const menu = this.document.querySelector(".menu")
    menuBtn.addEventListener("click" , function(){
        // 클래스리스트라 앞에 .을 따로 작성하지 않아도 됨.
        // menu.classList.add("open")
        // contains 특정 문자열이 포함되어있는지 확인하는 함수
        // 메뉴버튼을눌렀을 때 없으면 생기게하고 있으면 없애게 하는 명령어
        // 있으면
        if(menu.classList.contains("open")){
            menu.classList.remove("open")
        }
        // 클래스 추가
        // 없으면
        else(menu.classList.add("open"))
    })
})