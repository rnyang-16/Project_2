$('input[name="ingredients"]').amsifySuggestags({
    suggestions: ['cheese', 'chicken', 'beef', 'fish', 'butter', 'salt'],
    showAllSuggestions: false
});

$("#search_recipes").on("click", function() {
    event.preventDefault();
    console.log($("input[name=ingredients]").val());
    var queryURL = buildQueryURL();
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(updatePage);

});

function updatePage(RecipeData) {
    // Get from the form the number of results to display
    console.log(RecipeData);
    // TODO: fill in the page with RecipeData
}


function buildQueryURL() {
    // queryURL is the url we'll use to query the API
    var queryURL = "https://api.spoonacular.com/recipes/findByIngredients?";

    // Begin building an object to contain our API call's query parameters
    // Set the API key
    var queryParams = { "apiKey": "464c61bf28e446659ccf514ecb520d77" };

    // Grab text the user typed into the search input, add to the queryParams object
    queryParams.ingredients = $("input[name=ingredients]")
        .val()
        .trim();

    // The maximum number of recipes to return
    queryParams.number = 3;

    // Logging the URL so we have access to it for troubleshooting
    console.log(queryURL + $.param(queryParams));
    return queryURL + $.param(queryParams);
}