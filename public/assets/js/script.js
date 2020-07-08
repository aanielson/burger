$(document).ready(function() {
    
  // Devour or make another burger
  $(document).on('click', '.change-devoured', function(){
    console.log("The button click worked");
    
    var burgerId = $(this).attr('data-id');
      $.ajax({
        url: "/api/burgers/" + burgerId,
        method: "PUT"
      }).then(function(){
        console.log("Then is working");
        window.location.reload();
      })
    
    console.log(burgerId);
    //update .newdevoured to true if false and false if true
  }); 

  //delete a burger
  $(document).on('click', '.delete-burger', function() {
    console.log("delete clicked");
    var burgerId = $(this).attr('data-id');
    $.ajax({
      url: "/api/burgers/" + burgerId,
      method: "DELETE"
    }).then(function() {
      console.log("Burger successfully removed")
      window.location.reload();
    })

  })
});
  