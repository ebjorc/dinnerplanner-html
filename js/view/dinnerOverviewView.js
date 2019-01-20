var DinnerOverviewView = function (container, model) {
  var dishes = [model.getDish(1), model.getDish(100), model.getDish(101)];
  var addedCells = [];

  var dishCell = container.find(".dishCell");



  dishes.forEach(function(dish) {
    var cell = dishCell.clone();

    var dishName = cell.find("#dishName");
    dishName.html(dish.name);

    var dishImage = cell.find("#dishImage");
    dishImage.attr("src", "./images/" + dish.image);

    var dishPrice= cell.find("#dishPrice");
    dishPrice.html(dish.type);

    addedCells.push(cell);
  });

  var priceCell = container.find(".priceCell");
  dishCell.remove();
  addedCells.forEach(function(cell) {
    cell.insertBefore(priceCell);
  })
}
