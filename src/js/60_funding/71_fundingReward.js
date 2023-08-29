$(function() {
  let totalSum = 0;

  $('.price_details').each(function(index) {
    const quantityInput = $(this).find('.quantity_input');
    const totalPriceElement = $(this).find('.total_price');
    const pricePerUnit = parseInt($(this).attr('price-per-unit'));

    function updateTotalPrice() {
      const quantity = parseInt(quantityInput.val());
      const totalPrice = quantity * pricePerUnit;
      totalPriceElement.text(totalPrice + " 원");
    }

    $(this).find('.quantity_button_decrease').click(function() {
      let currentValue = parseInt(quantityInput.val());
      if (currentValue > 1) {
        quantityInput.val(currentValue - 1);
        updateTotalPrice();
        updateTotalSum();
      }
    });

    $(this).find('.quantity_button_increase').click(function() {
      let currentValue = parseInt(quantityInput.val());
      if (currentValue < 500) {
        quantityInput.val(currentValue + 1);
        updateTotalPrice();
        updateTotalSum();
      }
    });

    quantityInput.change(function() {
      let currentValue = parseInt(quantityInput.val());
      if (isNaN(currentValue) || currentValue < 1) {
        alert("최소 구매 가능 수량은 1개입니다.");
        quantityInput.val(1);
      } else if (currentValue > 500) {
        alert("최대 구매 가능 수량은 500개입니다.");
        quantityInput.val(500);
      }
      updateTotalPrice();
      updateTotalSum();
    });

    updateTotalPrice();
    updateTotalSum();
  });

  function updateTotalSum() {
    totalSum = 0;
    $('.price_details').each(function(index) {
      const quantity = parseInt($(this).find('.quantity_input').val());
      const pricePerUnit = parseInt($(this).attr('price-per-unit'));
      totalSum += quantity * pricePerUnit;
    });
    $('#final_sum_price_detail').text(totalSum );
  }

  // 초기 전체 합계 업데이트
  updateTotalSum();

  $('.show_content_checkbox').each(function() {
    $(this).on("change", function() {
      const targetId = $(this).attr('data-target');
      const targetContent = $('#' + targetId);
      const quantityInput = targetContent.find('.quantity_input');
      const totalPriceElement = targetContent.find('.total_price');
      const pricePerUnit = parseInt(targetContent.attr('price-per-unit'));

      if ($(this).prop('checked')) {
        targetContent.css('display', 'block');
        quantityInput.val(1);
        totalPriceElement.text(pricePerUnit+" 원");
        updateTotalSum();
      } else {
        targetContent.css('display', 'none');
        quantityInput.val(0);
        totalPriceElement.text("0 원");  // Set total price to 0
        updateTotalSum();
      }
    });
  });

  const openModalButton = $("#open_modal_button");
  const closeModalButton = $("#close_modal_button");
  const modal = $("#modal");
  const content = $("#content");
  const checkboxes = $("#reward_content_box input[type='checkbox']");
  let modalOpened = false; // 모달이 열려있는 상태인지 여부를 나타내는 변수

  function closeModal() {
    $(".modal").fadeOut();
    modal.removeClass("active");

// 모달을 닫을 때 체크 박스의 상태를 초기화합니다.
if (modalOpened) {
  checkboxes2.prop("checked", false);
  // 모달을 닫을 때 checkBoxesState를 초기화합니다.
  checkBoxesState = {};
  // 체크 박스 상태 초기화 후 체크 박스 상태에 따라 버튼 상태를 업데이트합니다.
  checkboxes2.trigger("change");
}
modalOpened = false;
}

  openModalButton.click(function() {
    const anyCheckboxChecked = checkboxes.is(":checked");

    if (!anyCheckboxChecked) {
      alert("체크박스가 하나도 선택되지 않았습니다.");
    } else {
      $(".modal").fadeIn();
      modal.addClass("active");
      modalOpened = true;
    }
  });

  closeModalButton.click(function() {
    closeModal();
  });

  $(window).on("click", function(event) {
    if (event.target === modal[0]) {
      closeModal();
    }
  });

  $('.toggle_button').click(function() {
    $('.toggle_content').toggle();
  });


  const checkboxes2 = $('.check_next');
  const nextButton = $('#check_nextpage');

  let checkBoxesState = {}; // 체크 박스 상태를 저장할 객체

  function updateButtonState() {
    // every() 메서드를 사용하여 모든 체크 박스가 선택되었는지 확인합니다.
    const allChecked = checkboxes2.toArray().every(checkbox => checkbox.checked);
    
    if (allChecked) {
      // 버튼의 disabled 속성을 해제하고, 클래스를 추가하여 색상을 변경합니다.
      nextButton.prop('disabled', false).addClass('active');
    } else {
      // 버튼의 disabled 속성을 활성화하고, 클래스를 제거하여 색상을 원래대로 복원합니다.
      nextButton.prop('disabled', true).removeClass('active');
    }
  }
// 체크 박스의 변경(체크 또는 언체크)이 일어날 때마다 updateButtonState 함수를 호출합니다.
  checkboxes2.on('change', function(){
    checkBoxesState[this.id] = this.checked;
    updateButtonState();
  });
  
  // 페이지가 로드될 때 최초로 한 번 updateButtonState 함수를 호출하여 초기 상태를 설정합니다.
  updateButtonState();
      
});
