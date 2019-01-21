var DinnerPrintoutView = function (container, model) {
  model.addDishToMenu(1);
  model.addDishToMenu(100);
  model.addDishToMenu(200);
  model.setNumberOfGuests(2);
  var dishes = model.getFullMenu();
  var addedRows = [];

  var numberOfGuests = container.find("#numberOfGuests");
  numberOfGuests.html("My Dinner: " + model.getNumberOfGuests() + " guests");

  var dishRow = container.find("#dish-row")

  dishes.forEach(function(dish) {
    var row = dishRow.clone();

    var dishName = row.find("#dishName");
    dishName.html(dish.name);

    var dishImage = row.find("#dishImage");
    dishImage.attr("src", "./images/" + dish.image);

    var dishDescription = row.find("#dishDescription");
    dishDescription.html(dish.type);

    var dishPreparation = row.find("#preparation");
    dishPreparation.html(dish.description);
    addedRows.push(row);
  });

  dishRow.remove();
  addedRows.forEach(function(row) {
    container.append(row);
  })
}
