$(document).ready(function() {
    
  // 
  $(document).on('click', '.change-devoured', function(){
    console.log("The button click worked");
    
    var burgerId = $(this).attr('data-id');
    var newDevoured = $(this).attr('data-newdevoured');
    if (!newDevoured) {
      $.ajax({
        url: "/api/burgers/" + burgerId,
        method: "PUT",
        data: {devoured: false}
      }).then(function(){
        console.log("Then is working");
        // location.reload();
      })
    } else {
      $.ajax({
        url: "/api/burgers/" + burgerId,
        method: "PUT",
        data: {devoured: true}
      }).then(function(){
        console.log("Then is working");
        // location.reload();
      })
    }
    console.log(burgerId);
    //update .newdevoured to true if false and false if true
  }); 
});
  