var DinnerPrintoutView = function (container, model) {
  var dishes = [model.getDish(1), model.getDish(100), model.getDish(101)];
  var addedRows = [];

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
