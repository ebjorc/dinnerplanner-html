var GeneralStateController = function(model) {

  var homeView = $("#homeView");
  var row = $("#rowView");
  var sideBarView = $("#sideBarView");
  var dishSearchView = $("#dishSearchView");
  var dishDetailsView = $("#dishDetailsView");
	var dishItemCellView = $("#dishItemCellView");
	var dinnerOverView = $("#dinnerOverview");
	var dinnerPrintOutView = $("#dinnerPrintoutView");
  var collapseContainer = $("#collapseContainer");
  var sideBarItem = $("#sideBarItem")
	row.append(sideBarView);
	row.append(dishSearchView);
  row.append(dishDetailsView);

  var homeView1 = new HomeView($("#homeView"), model);
	var homeViewController = new HomeViewController($("#homeView"), model, this);
	var dishSearchView1 = new DishSearchView($("#dishSearchView"), $("#dishItemCellView"), model, this);
	var dishSearchViewController = new DishSearchViewController($("#dishSearchView"),model,this);
	var dishDetailsView1 = new DishDetailsView($("#dishDetailsView"), model);
	var dishDetailsViewController = new DishDetailsViewController($("#dishDetailsView"), model, this);
	var sideBarView1 = new SideBarView($("#sideBarView"),$("#sideBarItem"),model);
	var sideBarViewController = new SideBarViewController($("#sideBarView"), model, this);
	var dinnerOverviewView1 = new DinnerOverviewView($("#dinnerOverview"), model);
  var dinnerOverviewViewController = new DinnerOverviewViewController($("#dinnerOverview"), model,this);
  var dinnerPrintoutView1 = new DinnerPrintoutView($("#dinnerPrintoutView"), model);
  var dinnerPrintoutViewController = new DinnerPrintoutViewController($("#dinnerPrintoutView"), model, this);

  this.showHomeScreen = function() {
    row.hide();
    dishDetailsView.hide();
    dishItemCellView.hide();
    dinnerOverView.hide();
    dinnerPrintOutView.hide();
    sideBarItem.hide();
  }

  this.toggleSideBarItemDiv = function() {
    if (collapseContainer.is(":visible")) {
      collapseContainer.hide();
    } else {
      collapseContainer.show();
    }

  }

  this.showSelectDishScreen = function() {
    homeView.hide();
    row.show();
    dinnerOverView.hide();
    dinnerPrintOutView.hide();
  }

  this.showDishDetailsScreen = function() {
    dishSearchView.hide();
    dishDetailsView.show();
  }

  this.backToSearchDishView = function() {
    dishSearchView.show();
    dishDetailsView.hide();
  }

  this.showDinnerOverview = function() {
    row.hide();
    dinnerPrintOutView.hide();
    dinnerOverviewView1.update();
    dinnerOverView.show();
  }

  this.showDinerPrintoutView = function() {
    row.hide();
    dinnerOverView.hide();
    dinnerPrintoutView1.update();
    dinnerPrintOutView.show()
  }


}
