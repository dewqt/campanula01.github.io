
  
      $(function(){
        $(".fa-regular").click(function(){
          
          $(this).next(".fa-solid").show();
        })
  
        $(".fa-solid").click(function(){
          $(this).prev(".fa-regular").show();
          $(this).hide();
          
        })
  
      })
  
  
      $(document).ready(function(){
        $('.gauge').each(function(){
          var $this = $(this);
          var per = $this.attr('per');
          $this.css('width', per + "%");
        })
      })
  