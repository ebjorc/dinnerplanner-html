var GeneralStateController = function(model) {

  var homeViewHtml = $("#homeView");
  var rowHtml = $("#rowView");
  var sideBarViewHtml = $("#sideBarView");
  var dishSearchViewHtml = $("#dishSearchView");
  var dishDetailsViewHtml = $("#dishDetailsView");
	var dishItemCellViewHtml = $("#dishItemCellView");
	var dinnerOverViewHtml = $("#dinnerOverview");
	var dinnerPrintOutViewHtml = $("#dinnerPrintoutView");
  var collapseContainerHtml = $("#collapseContainer");
  var sideBarItemHtml = $("#sideBarItem");
  var dishRowHtml = $("#dish-row");
  var dishOverviewCellHtml = $("#dinnerOverviewCell");
	rowHtml.append(sideBarViewHtml);
	rowHtml.append(dishSearchViewHtml);
  rowHtml.append(dishDetailsViewHtml);

  var homeView = new HomeView($("#homeView"), model);
	var homeViewController = new HomeViewController($("#homeView"), model, this);
	var dishSearchView = new DishSearchView($("#dishSearchView"), $("#dishItemCellView"), model, this);
	var dishSearchViewController = new DishSearchViewController($("#dishSearchView"),model,this);
	var dishDetailsView = new DishDetailsView($("#dishDetailsView"), model);
	var dishDetailsViewController = new DishDetailsViewController($("#dishDetailsView"), model, this);
	var sideBarView = new SideBarView($("#sideBarView"),$("#sideBarItem"),model);
	var sideBarViewController = new SideBarViewController($("#sideBarView"), model, this);
	var dinnerOverviewView = new DinnerOverviewView($("#dinnerOverview"),$("#dinnerOverviewCell"), model);
  var dinnerOverviewViewController = new DinnerOverviewViewController($("#dinnerOverview"), model,this);
  var dinnerPrintoutView = new DinnerPrintoutView($("#dinnerPrintoutView"),$("#dish-row"), model);
  var dinnerPrintoutViewController = new DinnerPrintoutViewController($("#dinnerPrintoutView"), model, this);


  this.hideAll = function(){
    homeViewHtml.hide();
    rowHtml.hide();
    sideBarViewHtml.hide();
    dishSearchViewHtml.hide();
    dishDetailsViewHtml.hide();
    dishItemCellViewHtml.hide();
    dinnerOverViewHtml.hide();
    sideBarItemHtml.hide();
    dinnerPrintOutViewHtml.hide();
    dishRowHtml.hide();
    dishOverviewCellHtml.hide();
  }

  this.showHomeScreen = function() {
    this.hideAll();
    homeViewHtml.show();

  }

  this.toggleSideBarItemDiv = function() {
    if (collapseContainerHtml.is(":visible")) {
      collapseContainerHtml.hide();
    } else {
      collapseContainerHtml.show();
    }

  }

  this.checkIfDishSearchViewIsVisible = function(){
    return (dishSearchViewHtml.is(":visible"))
  }


  this.showSelectDishScreen = function() {
    this.hideAll();
    rowHtml.show();
    dishSearchViewHtml.show();
    sideBarViewHtml.show();
  }

  this.showDishDetailsScreen = function() {
    this.hideAll();
    dishDetailsViewHtml.show();
    dishRowHtml.show();
    rowHtml.show();
    sideBarViewHtml.show();
    collapseContainerHtml.show();

  }

  this.backToSearchDishView = function() {
    this.showSelectDishScreen();
  }

  this.showDinnerOverview = function() {
    this.hideAll();
    dinnerOverViewHtml.show();
  }

  this.showDinnerPrintoutView = function() {
    this.hideAll();
    dinnerPrintOutViewHtml.show()
  }


}
