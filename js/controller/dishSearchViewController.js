var DishSearchViewController = function(view, model,stateController) {
  var button = view.find("#searchDishButton");
  button.click(function() {
    const filterType = view.find('#categoryInput').val();
    const filterKeyword = view.find('#keyWordsInput').val();
    model.setFilterTypeAndKeyword(filterType,filterKeyword);
  });

  document.addEventListener('keypress', function (e) {
    if (stateController.checkIfDishSearchViewIsVisible()){
      var key = e.which || e.keyCode;
      if (key === 13) { // 13 is enter
        button.click();
        console.log("ENTER");
      }
    }
  });
}
