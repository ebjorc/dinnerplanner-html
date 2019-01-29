var DishDetailsViewController = function(view,model, stateController) {
  var addButton = view.find("#addToMenuButton");
  addButton.click(function() {
    model.addDishToMenu(model.getCurrentDish().id);
  });

  var backButton = view.find("#backButton");
  backButton.click(function() {
    stateController.backToSearchDishView();
  });

}
