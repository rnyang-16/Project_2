$(".results").on("click", function(event) {
  if(event.target.hasAttribute("recipe_id")) {
    event.preventDefault();
    recipe_id = event.target.getAttribute("recipe_id");
    var queryURL = buildSearchRecipesByIdURL(recipe_id);
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(updateRecipesDetail);
  } else if (event.target.hasAttribute("href")) {
    window.location.replace(event.target.getAttribute("href"));
  }
});

$("#search_recipes").on("click", function(event) {
  event.preventDefault();
  console.log($("#ingredients").val().trim());
  var queryURL = buildSearchRecipesByIngredientsURL();
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(updateSearchResults);
});

function updateRecipesDetail(RecipeData) {
  console.log(RecipeData);

  $(".results").empty();
  createRecipeDetail(RecipeData);
}

function updateSearchResults(RecipeData) {
  // Get from the form the number of results to display
  console.log(RecipeData);

  $(".results").empty();
  createCard(RecipeData);
}

function buildSearchRecipesByIdURL(id) {
  // queryURL is the url we'll use to query the API
  var queryURL = "https://api.spoonacular.com/recipes/{id}/information?";

  // Begin building an object to contain our API call's query parameters
  // Set the API key
  var queryParams = { apiKey: "464c61bf28e446659ccf514ecb520d77" };

  // Grab text the user typed into the search input, add to the queryParams object
  queryURL = queryURL.replace("{id}", id);

  // Logging the URL so we have access to it for troubleshooting
  console.log(queryURL + $.param(queryParams));
  return queryURL + $.param(queryParams);
}

function buildSearchRecipesByIngredientsURL() {
  // queryURL is the url we'll use to query the API
  var queryURL = "https://api.spoonacular.com/recipes/findByIngredients?";

  // Begin building an object to contain our API call's query parameters
  // Set the API key
  var queryParams = { apiKey: "464c61bf28e446659ccf514ecb520d77" };

  // Grab text the user typed into the search input, add to the queryParams object
  queryParams.ingredients = $("#ingredients")
    .val()
    .trim();

  // The maximum number of recipes to return
  queryParams.number = 3;

  // Logging the URL so we have access to it for troubleshooting
  console.log(queryURL + $.param(queryParams));
  return queryURL + $.param(queryParams);
}

cardTemplate = Handlebars.compile(
  `<div class=container>
    <div class="row">
      <div class="card-panel grey lighten-3">
        <div class="card-content">
        <!-- Recipe & Image -->
          <div class="row">
            <div class="col s12 m12 l12">
              <div class="card horizontal">
                <div class="card-image">
                  <img class="materialboxed" width="300" src="{{image}}"></img>
                </div>
                <div class="card-content">
                  <h6 class=header>{{title}}</h6>
                </div>
                <div class="card-action">
                  <a recipe_id="{{id}}" herf="{{id}}" class="btn">Show Detail</a>
                </div>
              </div>
            </div>
            <!-- Used Ingredients Card -->
            <div class="col s6 m6 l6">
              <div class="card horizontal">
                <div class="card-content">
                  <h6>Used Ingredients</h6>
                  <ul>
                    {{#each usedIngredients}}
                    <li>{{name}}<li>
                    {{/each}}
                  </ul>
                </div>
              </div>
            </div>
            <!-- Missed Ingredients Card -->
            <div class="col s6 m6 l6">
              <div class="card horizontal">
                <div class="card-content">
                  <h6>Missed Ingredients</h6>
                    <ul>
                      {{#each missedIngredients}}
                      <li>{{name}}</li>
                      {{/each}}
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</div>`)

function createCard(recipes){
  $.each(recipes, function(index, value){
    $(".results").append(cardTemplate(value));
    })
};

recipeTemplate = Handlebars.compile(
  `	<div class="container">
  <div class="col s12 m12 l12">
    <div class="card horizontal grey lighten-3">
      <div class="card-image">
        <img class="materialboxed" width="300" src="{{image}}"></img>
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <h6>Summary</h6>
          {{{summary}}}
        </div>
        <div class="card-action">
          <a href="{{sourceUrl}}" class="btn">Link</a>
        </div>
      </div>
    </div>
  </div>
</div>`)

function createRecipeDetail(recipe){
  $(".results").append(recipeTemplate(recipe));
};