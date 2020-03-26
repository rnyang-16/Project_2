$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
  });

  $(".ingredients").on("submit", function(event) {
    console.log("click")
    event.preventDefault();

    var newIngred = {
        title: $("#title").val(),
        category:$("#category").val(),
        quantity:$("#quantity").val(),
    };

    console.log(newIngred);

    $.ajax("/api/ingredients", {
        type: "POST",
        data: newIngred
    }).then(function(){
        console.log("New Ingredient added");
        location.reload();
    });
});

$(".toSelect").on("click", function(event){
  console.log("Click")
  var id = $(this).data("id");
  var select = {select : true};

  $.ajax("/api/ingredients/selected/" + id, {
      type: "PUT",
      data: select

  }).then(
      function(){
          console.log("Ingredient Selected");
          location.reload();
      }
  );


});

$(".toUnselect").on("click", function(event){
  console.log("Click")
  var id = $(this).data("id");
  var select = {select : false};

  $.ajax("/api/ingredients/selected/" + id, {
      type: "PUT",
      data: select

  }).then(
      function(){
          console.log("Ingredient Unselected");
          location.reload();
      }
  );


});

});
