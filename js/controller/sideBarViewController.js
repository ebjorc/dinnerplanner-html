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
    if(input.val() > 99){
      model.setNumberOfGuests(99);
    }
    else if(input.val() <= 0 || input.val() == undefined){
      model.setNumberOfGuests(1);
    }
    else{
      model.setNumberOfGuests(input.val());
    }
  });

  input.oninput = function () {
    if (this.value.length > 2) {
        this.value = this.value.slice(0,2);
    }
}
}
