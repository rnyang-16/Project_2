$(document).ready(function() {
  $(".select-ingredient").on("click", function(event) {
    event.preventDefault();
    var id = event.target.getAttribute("data-id");

    var newState = {
      select: true
    };

    // Send the PUT request.
    $.ajax("/api/ingredients/" + id, {
      type: "PUT",
      data: newState
    }).then(function() {
      console.log("select", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".unselect-ingredient").on("click", function(event) {
    event.preventDefault();
    var id = event.target.getAttribute("data-id");

    var newState = {
      select: false
    };

    // Send the PUT request.
    $.ajax("/api/ingredients/" + id, {
      type: "PUT",
      data: newState
    }).then(function() {
      console.log("unselect", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newIngredient = {
      title: $("#ingredient_name")
        .val()
        .trim(),
      category: $("#ingredient_category")
        .val()
        .trim(),
      quantity: $("#ingredient_quantity")
        .val()
        .trim()
    };

    // Send the POST request.
    $.ajax("/api/ingredients", {
      type: "POST",
      data: newIngredient
    }).then(function() {
      console.log("created new ingredient");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".delete-ingredient").on("click", function(event) {
    event.preventDefault();
    var id = event.target.getAttribute("data-id");
    // Send the DELETE request.
    $.ajax("/api/ingredients/" + id, {
      type: "DELETE"
    }).then(function() {
      console.log("deleted ingredient", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
