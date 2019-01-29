var DishSearchViewController = function(view, model,stateController) {
  var button = view.find("#searchDishButton");
  button.click(function() {
    const filterType = view.find('#categoryInput').val();
    const filterKeyword = view.find('#keyWordsInput').val();
    model.setFilterTypeAndKeyword(filterType,filterKeyword);
  });
}
