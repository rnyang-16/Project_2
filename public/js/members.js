

$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  function createCard(recipes){
    $.each(recipes, function(index, value){
      $(".results").append(cardTemplate(value));
      })
  };

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
$("#selected_button").on("click", function(event){
  console.log("clicked");
  $.ajax("/api/ingredients", {type: "GET"}).then(function(res){
    var selected = []
    for (i = 0; i < res.length; i ++){
      if (res[i].select === true){
        selected.push(res[i].title);
      };
    }
      if (i = res.length - 1){
        selected = JSON.stringify(selected);
        console.log(selected);
        function buildSearchRecipesByIngredients()  {
            var queryURL = "https://api.spoonacular.com/recipes/findByIngredients?";
         
            var queryParams = { apiKey: "464c61bf28e446659ccf514ecb520d77" };
          
            queryParams.ingredients = selected;
            queryParams.number = 3;
          
          
            console.log(queryURL + $.param(queryParams));
            return queryURL + $.param(queryParams);
          }
        var queryURL = buildSearchRecipesByIngredients();
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(res){
          $(".results").empty();
          $.each(res, function (index, value){
            $.getScript("/js/recipes.js", function(){
              
              $(".results").append(cardTemplate(value))
            })
          })

        });
      }
  })
});
});