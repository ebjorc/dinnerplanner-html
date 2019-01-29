var DishSearchView = function(container, imageView, model, stateController){

  var dishes = model.getAllDishes("starter");

  var dishItemScrollView = container.find("#dishItemScrollView");
  var cellsAdded = [];

  dishes.forEach(function(dish) {
    var cellView = imageView.clone();
    var dishItemCellView = new DishItemCellView(cellView, dish);
    var dishCellViewController = new DishItemCellViewController(cellView,dish.id, model, stateController);
    cellsAdded.push(cellView);
  });

  //dishRow.remove();
  cellsAdded.forEach(function(cell) {
    cell.show();
    dishItemScrollView.append(cell);
  });

}
