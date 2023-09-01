$(function() {


    $('#point_all').change(function() {
        if ($(this).prop('checked')) {
          const usablePoint = parseInt($('#usable_point').text());
          const inputValue = usablePoint >= 0 ? usablePoint : 0;  /*삼항 연산자 */
          $('#point_input').val(inputValue);
        } else {
            $('#point_input').val('');
        }
    });

    updateRadio();

  $('input[name=address_option]').on('change', updateRadio);    /**"address_option"라는 이름을 가진 모든 라디오 버튼에 대해 change 이벤트가 발생할 때 updateRadio 함수를 호출하는 구문 */

  function updateRadio() {
    if ($('input[name=address_option]:checked').val() === 'option1') {
      $('.first_radio').show();
      $('.second_radio').hide();
    } else {
      $('.first_radio').hide();
      $('.second_radio').show();
    }
  }
    //prop메서드는 요소의 속성값을 가져오거자 설정하는데 사용 요소의 property값을 조작하거나 검사할 때 사용. 
    //체크박스의 체크여부, 라디오 버튼의 선택여부, 입력필드의 비활성화 등.
    $("#check_all").click(function() {
        if ($("#check_all").is(":checked")) $("input[name=check]").prop("checked", true);
        else $("input[name=check]").prop("checked", false);
    });

    $("input[name=check]").click(function() {
        var total = $("input[name=check]").length;  //length는 jquery 객체의 요소 개수, size도 요소의 개수를 반환 하지만 1.8버전부터 제외됨.
        var checked = $("input[name=check]:checked").length;

        if (total !== checked) $("#check_all").prop("checked", false);
        else $("#check_all").prop("checked", true); 
    });
});
