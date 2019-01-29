var HomeViewController = function (view, model, stateController) {
  var button = view.find("#createDinnerButton");
  button.click(function() {
    stateController.showSelectDishScreen();
  });
}
