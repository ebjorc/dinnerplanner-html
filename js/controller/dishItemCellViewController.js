var DishItemCellViewController = function(cellView, dishId, model,stateController) {
  cellView.click(function() {
    model.setCurrentDish(model.getDish(dishId));
    stateController.showDishDetailsScreen();
  });
}
