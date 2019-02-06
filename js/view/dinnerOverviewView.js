var DinnerOverviewView = function (container,dishCell, model) {

  this.update = function() {
      var dishes = model.getFullMenu();
      var addedCells = [];

      var numberOfGuests = container.find("#numberOfGuests");
      numberOfGuests.html("My Dinner: " + model.getNumberOfGuests() + " guests");
      var priceCell = container.find(".priceCell");
      var totalPrice = priceCell.find("#totalPrice");
      totalPrice.html(model.getTotalMenuPrice() + " SEK");

      container.find(".dishCell").remove();

      dishes.forEach(function(dish) {
        var cell = dishCell.clone();

        var dishName = cell.find("#dishName");
        dishName.html(dish.title);

        var dishImage = cell.find("#dishImage");
        dishImage.attr("src", 'https://spoonacular.com/recipeImages/' + dish.id + '-312x231.jpg');

        var dishPrice = cell.find("#dishPrice");
        dishPrice.html(model.getMenuDishPrice(dish.id) * model.getNumberOfGuests() + " SEK");

        addedCells.push(cell);
      });

      dishCell.remove();
      addedCells.forEach(function(cell) {
        cell.show();
        cell.insertBefore(priceCell);
      })
    }

    model.addObserver(this.update);
}
