
var DishDetailsView = function (container, model) {

  var redrawDishInfo = function(dishDetails) {
      var dishName = container.find("#dishName");
      dishName.html(dishDetails.title);

      var dishDescription = container.find("#dishDescription");
      //dishDescription.html(dish.type);

      var dishPreparation = container.find("#preparation");
      dishPreparation.html(dishDetails.instructions);

      var dishImage = container.find("#dishImage");
      dishImage.attr('src','https://spoonacular.com/recipeImages/' + dishDetails.id + '-312x231.jpg');
    }


  var redrawTable = function(dishDetails) {
    var ingredientsHeader = container.find("#ingredientsHeader");
    ingredientsHeader.html("Ingredients for " + model.getNumberOfGuests() + " people")

    var totalDishPrice = container.find("#totalDishPrice");
    totalDishPrice.html("SEK " + model.getCurrentDishPrice() * model.getNumberOfGuests())

    var table = container.find("#ingredientsTable");
    table.empty();
    dishDetails.extendedIngredients.forEach(function(ingredient) {
      table.append("<tr><td>"  + ingredient.amount.toFixed(2) * model.getNumberOfGuests() + " " + ingredient.measures.metric.unitShort +  "</td><td>" + ingredient.name + "</td><td>SEK</td><td>" + ingredient.amount.toFixed(2) * model.getNumberOfGuests() + "</td></tr>");
    });
  }

  this.update = function(model, changeDetails) {
    var dish = model.getCurrentDish();
    if(!dish) return;
    if(dish && changeDetails == ChangeDetails.CURRENT_DISH_CHANGED) {
      container.find("#dishName").html("");
      container.find("#dishImage").attr('src','');
      container.find("#ingredientsTableView").hide();
      container.find(".prep").hide();
      container.find(".loader").show();
      var dishDetails = model.getDishDetails(dish.id).then(details => {
        container.find(".prep").show();
        redrawDishInfo(details);
        redrawTable(details)
        container.find(".loader").hide();
        container.find("#ingredientsTableView").show();
      }).catch(error => {
        container.find(".loader").hide();
        container.find(".prep").hide();
        alert(error);
      });
    } else if (dish && changeDetails == ChangeDetails.GUESTS_CHANGED) {
        redrawTable(dish)
    }
  }

  model.addObserver(this.update);
}
