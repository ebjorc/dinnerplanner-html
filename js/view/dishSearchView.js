var DishSearchView = function(container, imageView, model, stateController) {

  this.redraw = function(dishes) {
    var dishItemScrollView = container.find("#dishItemScrollView");
    var cellsAdded = [];

    dishes.forEach(function(dish) {
      var cellView = imageView.clone();
      var dishItemCellView = new DishItemCellView(cellView, dish);
      var dishCellViewController = new DishItemCellViewController(cellView, dish.id, model, stateController);
      cellsAdded.push(cellView);
    });

    //dishRow.remove();
    cellsAdded.forEach(function(cell) {
      cell.show();
      dishItemScrollView.append(cell);
    });
  }

  this.update = function(model, changeDetails) {
    if (changeDetails == ChangeDetails.FILTER_CHANGED){
      const dishes = model.getAllDishes(model.getFilterType(), model.getFilterKeyword());
      var dishItemScrollView = container.find("#dishItemScrollView");

      var children = dishItemScrollView.children();

      dishItemScrollView.find(".imgContainer").unbind()
      dishItemScrollView.find(".imgContainer").remove();

      var cellsAdded = [];

      dishes.forEach(function(dish) {
        var cellView = imageView.clone();
        var dishItemCellView = new DishItemCellView(cellView, dish);
        var dishCellViewController = new DishItemCellViewController(cellView, dish.id, model, stateController);
        cellsAdded.push(cellView);
      });

      //dishRow.remove();
      cellsAdded.forEach(function(cell) {
        cell.show();
        dishItemScrollView.append(cell);
      });
    } else if(changeDetails == ChangeDetails.MENU_CHANGED) {
      var findDishHeader = container.find("#findDishHeader");
      findDishHeader.html("Select another dish");
    }
  }

  model.addObserver(this.update)

  var dishes = model.getAllDishes();
  this.redraw(dishes);
}
