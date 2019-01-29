var GeneralStateController = function() {
  var homeView = $("#homeView");
  var row = $("#rowView");
  var sideBarView = $("#sideBarView");
  var dishSearchView = $("#dishSearchView");
  var dishDetailsView = $("#dishDetailsView");
	var dishItemCellView = $("#dishItemCellView");
	var dishDinnerOverView = $("#dinnerOverview");
	var dishPrintOutView = $("#dinnerPrintoutView");
	row.append(sideBarView);
	row.append(dishSearchView);
  row.append(dishDetailsView);


  this.showHomeScreen = function() {
    row.hide();
    dishDetailsView.hide();
    dishItemCellView.hide();
    dishDinnerOverView.hide();
    dishPrintOutView.hide();
  }

  this.showSelectDishScreen = function() {
    homeView.hide();
    row.show();
  }

  this.showDishDetailsScreen = function() {
    dishSearchView.hide();
    dishDetailsView.show();
  }
}
