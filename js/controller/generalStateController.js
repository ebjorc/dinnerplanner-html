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
  var sideBarItemHtml = $("#sideBarItem")
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

  this.showHomeScreen = function() {
    rowHtml.hide();
    dishDetailsViewHtml.hide();
    dishItemCellViewHtml.hide();
    dinnerOverViewHtml.hide();
    dinnerPrintOutViewHtml.hide();
    sideBarItemHtml.hide();
  }

  this.toggleSideBarItemDiv = function() {
    if (collapseContainerHtml.is(":visible")) {
      collapseContainerHtml.hide();
    } else {
      collapseContainerHtml.show();
    }

  }

  this.showSelectDishScreen = function() {
    homeViewHtml.hide();
    rowHtml.show();
    dinnerOverViewHtml.hide();
    dinnerPrintOutViewHtml.hide();
  }

  this.showDishDetailsScreen = function() {
    dishSearchViewHtml.hide();
    dishDetailsViewHtml.show();
  }

  this.backToSearchDishView = function() {
    dishSearchViewHtml.show();
    dishDetailsViewHtml.hide();
  }

  this.showDinnerOverview = function() {
    rowHtml.hide();
    dinnerPrintOutViewHtml.hide();
    dinnerOverviewView.update();
    dinnerOverViewHtml.show();
  }

  this.showDinerPrintoutView = function() {
    rowHtml.hide();
    dinnerOverViewHtml.hide();
    dinnerPrintoutView.update();
    dinnerPrintOutViewHtml.show()
  }


}
