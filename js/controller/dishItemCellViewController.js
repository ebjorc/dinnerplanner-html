var DishItemCellViewController = function(cellView, dishId, model,stateController) {
  cellView.click(function() {
    model.currentDish = model.getDish(dishId);
    stateController.showDishDetailsScreen();
  });
}
