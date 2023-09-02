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
  // "전체 동의" 체크박스의 상태가 변경될 때
  $("#check_all").click(function() {
    // "전체 동의" 체크박스의 상태에 따라 개별 동의 체크박스들의 상태를 설정
    $("input[name=check]").prop("checked", $(this).is(":checked"));
    updatePayButtonState();
  });

  // 개별 동의 체크박스들의 상태가 변경될 때
  $("input[name=check]").click(function() {
    updatePayButtonState();
  });

  // "결제하기" 버튼 상태를 업데이트하는 함수
  function updatePayButtonState() {
    var total = $("input[name=check]").length;
    var checked = $("input[name=check]:checked").length;

    // 모든 개별 동의 체크박스가 선택되었을 때 "결제하기" 버튼을 활성화
    if (total === checked) {
     
      $("#check_all").prop("checked", true);
    } else {
      
      $("#check_all").prop("checked", false);
      
    }
  }

  // 초기 페이지 로드시 "결제하기" 버튼 상태를 업데이트
  updatePayButtonState();


  $("#pay_purchase_final").click(function(e) {
    if (!$("#check_all").is(":checked")) {
      e.preventDefault(); // 약관에 동의하지 않은 경우 클릭 이벤트 막기
  
      Swal.fire({
        icon: 'error',
        text: '약관 동의를 진행해 주세요.',
        confirmButtonColor: '#00b7d4',
        cutomClass: {
          text: 'pay_purchase_alert',
          container: 'pay_purchase_alert'
        }
      });
  
    }
  });
  


});


