var DinnerPrintoutViewController = function(view, model, stateController) {
  var button = view.find("#dinnerPrintoutBackButton");
  button.click(function() {
    stateController.showSelectDishScreen();
  });
}
