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


  var form = view.find('.form-control');
  form.change(function() {
    model.setNumberOfGuests(form.val());
  })
}
