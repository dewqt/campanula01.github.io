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

  openModalButton.on("click", function() {
    $(".modal").fadeIn();
    modal.addClass("active");
  });

  closeModalButton.on("click", function() {
    closeModal();
  });

  $(window).on("click", function(event) {
    if (event.target === modal[0]) {
      closeModal();
    }
  });

  function closeModal() {
    $(".modal").fadeOut();
    modal.removeClass("active");
  }
  $('.toggle_button').click(function() {
        $('.toggle_content').toggle();
       });
      
});
