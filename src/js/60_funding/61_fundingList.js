$(document).ready(function() {
  // 각 하트 아이콘의 상태를 저장하는 객체
  var heartStates = {};

  // 하트 아이콘 초기 상태 설정 (빈 하트)
  $(".product-item").each(function() {
      var id = $(this).find(".likeempty").data("id");
      heartStates[id] = false;
      $(this).find(".far").show();
      $(this).find(".fas").hide();
  });

  // 하트 아이콘 클릭 이벤트 처리
  $(".likeempty").click(function(event) {
      event.preventDefault(); // 링크 클릭 동작 중지

      var id = $(this).data("id");
      var $regularIcon = $(this).find(".far");
      var $solidIcon = $(this).find(".fas");

      if (heartStates[id]) {
          $regularIcon.show();
          $solidIcon.hide();
      } else {
          $regularIcon.hide();
          $solidIcon.show();
      }

      // 상태 반전
      heartStates[id] = !heartStates[id];
  });
});
