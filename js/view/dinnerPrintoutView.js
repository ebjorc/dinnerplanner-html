var DinnerPrintoutView = function (container, dishRow, model) {
  this.update = function() {
    var dishes = model.getFullMenu();
    var addedRows = [];

    var numberOfGuests = container.find("#numberOfGuests");
    numberOfGuests.html("My Dinner: " + model.getNumberOfGuests() + " guests");

    container.find(".dishRowCellClass").remove();

    dishes.forEach(function(dish) {
      var row = dishRow.clone();

      var dishName = row.find("#dishName");
      dishName.html(dish.title);

      var dishImage = row.find("#dishImage");
      dishImage.attr("src", 'https://spoonacular.com/recipeImages/' + dish.id + '-312x231.jpg');

      var dishDescription = row.find("#dishDescription");
      //dishDescription.html(dish.type);

      var dishPreparation = row.find("#preparation");
      dishPreparation.html(dish.instructions);
      addedRows.push(row);
    });

    dishRow.remove();
    addedRows.forEach(function(row) {
      row.show();
      container.append(row);
    })
  }
  model.addObserver(this.update);
}
