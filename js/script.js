jQuery(document).ready(function($){
   $('#toggle').on('click', function() {
      $(this).toggleClass('active');
      $('#overlay').toggleClass('open');
     });
})

