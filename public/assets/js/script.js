$(document).ready(function() {
    
  // Devour or make another burger
  $(document).on('click', '.change-devoured', function(){
    console.log("The button click worked");
    
    var burgerId = $(this).attr('data-id');
    var newDevoured = $(this).attr('data-newdevoured');
    console.log(newDevoured);
    if (!newDevoured) {
      $.ajax({
        url: "/api/burgers/" + burgerId,
        method: "PUT",
        data: {devoured: newDevoured}
      }).then(function(){
        console.log("Then is working");
        // location.reload();
      })
    } else {
      $.ajax({
        url: "/api/burgers/" + burgerId,
        method: "PUT",
        data: {devoured: newDevoured}
      }).then(function(){
        console.log("Then is working");
        // location.reload();
      })
    }
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
    })

  })
});
  