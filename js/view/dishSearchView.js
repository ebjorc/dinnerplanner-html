var DishSearchView = function(container, imageView, model, stateController) {
  var categoryInput = container.find("#categoryInput")
  var dishTypes = model.getDishTypes();

  dishTypes.forEach(function(dishType){
    var option = new Option(dishType, dishType);
    categoryInput.append(option);

  })


  var redraw = function(dishes) {
    var dishItemScrollView = container.find("#dishItemScrollView");
    var cellsAdded = [];

    if(dishes.length == 0) {
      container.find("#onEmptyLabel").show();
    } else {
      container.find("#onEmptyLabel").hide();
    }

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
      container.find(".loader").show();
      container.find("#onEmptyLabel").hide();
      const dishes = model.getAllDishes(model.getFilterType(), model.getFilterKeyword()).then(dishes => {
        container.find(".loader").hide();
        var dishItemScrollView = container.find("#dishItemScrollView");
        var children = dishItemScrollView.children();

        dishItemScrollView.find(".imgContainer").unbind()
        dishItemScrollView.find(".imgContainer").remove();
        redraw(dishes);
      }).catch(error => {
        container.find(".loader").hide();
        alert("Error! Please check your internet connection");
      });
    }
    else if(changeDetails == ChangeDetails.MENU_CHANGED) {
      var findDishHeader = container.find("#findDishHeader");
      findDishHeader.html("Select another dish");
    }
  }

  model.addObserver(this.update)

  container.find(".loader").show();
  var dishes = model.getAllDishes().then(dishes => {
    container.find(".loader").hide();
    redraw(dishes);
  }).catch(error => {
    container.find(".loader").hide();
    alert("Error! Please check your internet connection");
  });
}
