
var DishDetailsView = function (container, model) {

  this.update = function(model, changeDetails) {
    var dish = model.getCurrentDish();

    if(dish && changeDetails == ChangeDetails.CURRENT_DISH_CHANGED) {
      var dishName = container.find("#dishName");
      dishName.html(dish.name);

      var dishDescription = container.find("#dishDescription");
      dishDescription.html(dish.type);

      var dishPreparation = container.find("#preparation");
      dishPreparation.html(dish.description);

      var dishImage = container.find("#dishImage");
      dishImage.attr("src", "./images/" + dish.image);


    }

    if (dish && ChangeDetails.GUESTS_CHANGED) {
      var ingredientsHeader = container.find("#ingredientsHeader");
      ingredientsHeader.html("Ingredients for " + model.getNumberOfGuests() + " people")

      var totalDishPrice = container.find("#totalDishPrice")
      totalDishPrice.html("SEK " + model.getDishPrice(model.getCurrentDish().id) * model.getNumberOfGuests())

      var table = container.find("#ingredientsTable");
      table.empty();
      dish.ingredients.forEach(function(ingredient) {
        table.append("<tr><td>"  + ingredient.quantity * model.getNumberOfGuests() + " " + ingredient.unit +  "</td><td>" + ingredient.name + "</td><td>SEK</td><td>" + ingredient.price * model.getNumberOfGuests() + "</td></tr>");
      });
    }
  }

  model.addObserver(this.update);
}
