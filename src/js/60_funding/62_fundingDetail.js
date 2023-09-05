$(document).ready(function() {
    // 각 하트 아이콘의 초기 상태를 저장하는 객체
    var heartStates = {};

    // 각 하트 아이콘 초기 상태 설정 (빈 하트)
    $(".likeempty").each(function() {
        var id = $(this).data("id");
        heartStates[id] = false;
        $(this).find(".fas").hide(); // 가득 찬 하트 숨김
        $(this).find(".far").show(); // 빈 하트 표시
    });

    // 하트 아이콘 클릭 이벤트 처리
    $(".likeempty").click(function(event) {
        event.preventDefault(); // 기본 클릭 동작 막기

        var id = $(this).data("id");
        var $regularIcon = $(this).find(".far");
        var $solidIcon = $(this).find(".fas");

        if (heartStates[id]) {
            $solidIcon.hide(); // 가득 찬 하트 숨김
            $regularIcon.show(); // 빈 하트 표시
        } else {
            $regularIcon.hide(); // 빈 하트 숨김
            $solidIcon.show(); // 가득 찬 하트 표시
        }

        // 상태 토글
        heartStates[id] = !heartStates[id];
    });
});