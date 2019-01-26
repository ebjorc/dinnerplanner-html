var HomeView = function (container, model) {

  var createDinnerButton = container.find("#createDinnerButton")

  var listener = function(event){
    location.assign("selectDish.html");
    event.preventDefault();
  }

  createDinnerButton.click(listener);


}
