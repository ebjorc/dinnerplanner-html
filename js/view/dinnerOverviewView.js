var DinnerOverviewView = function (container, model) {

  this.update = function() {
      var dishes = model.getFullMenu();
      var addedCells = [];
      var dishCell = container.find(".dishCell");

      var numberOfGuests = container.find("#numberOfGuests");
      numberOfGuests.html("My Dinner: " + model.getNumberOfGuests() + " guests");
      var priceCell = container.find(".priceCell");
      var totalPrice = priceCell.find("#totalPrice");
      totalPrice.html(model.getTotalMenuPrice() + " SEK");

      dishes.forEach(function(dish) {
        var cell = dishCell.clone();

        var dishName = cell.find("#dishName");
        dishName.html(dish.name);

        var dishImage = cell.find("#dishImage");
        dishImage.attr("src", "./images/" + dish.image);

        var dishPrice = cell.find("#dishPrice");
        dishPrice.html(dish.type);
        
        addedCells.push(cell);
      });

      dishCell.remove();
      addedCells.forEach(function(cell) {
        cell.insertBefore(priceCell);
      })
    }
}
