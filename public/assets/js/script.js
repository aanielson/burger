$(document).ready(function() {
    
  // 
  $(document).on('click', '.change-devoured', function(){
    console.log("The button click worked");
    
    var burgerId = $(this).attr('data-id');
    //update .newdevoured to true if false and false if true
    if ($(this).attr('newdevoured') === false) {
      $(this).attr('newdevoured') = true
    }
    if ($(this).attr('newdevoured') === true) {
      $(this).attr('newdevoured') = false;
    }

  });

   
});
  