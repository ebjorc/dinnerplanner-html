var DinnerOverviewViewController = function(view, model, stateController) {
  var backButton = view.find("#dinnerOverviewBackButton");
  backButton.click(function(){
    stateController.showSelectDishScreen();
  })
  var printButton = view.find("#dinnerOverviewPrintButton");
  printButton.click(function(){
    stateController.showDinerPrintoutView();
  })
}
