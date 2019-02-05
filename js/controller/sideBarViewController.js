var SideBarViewController = function(view, model,stateController) {
  var confirmButton = view.find("#confirmDinnerButton");
  confirmButton.click(function() {
    if(model.getFullMenu().length > 0) {
      stateController.showDinnerOverview();
    }
  })

  var collapseButton = view.find("#collapseButton");
  collapseButton.click(function() {
    stateController.toggleSideBarItemDiv();
  })


  var input = view.find('#guestsInput');
  input.change(function() {
    if (input.val() > 99) {
      input.val() = 99
    }
    else if (input.val() <= 0 || input.val() == undefined) {
      input.val() = 1
    }
    model.setNumberOfGuests(input.val());
  })

}
