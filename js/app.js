$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	var stateController = new GeneralStateController();
	stateController.showHomeScreen();

	var homeView = new HomeView($("#homeView"), model);
	var homeViewController = new HomeViewController($("#homeView"), model, stateController);
	var dishSearchView = new DishSearchView($("#dishSearchView"), $("#dishItemCellView"), model,stateController);
	var dishSearchViewController = new DishSearchViewController($("#dishSearchView"),model,stateController);

	// var dishDetailsView = new DishDetailsView($("#dishDetailsView"), model);
	// var dinnerPrintoutView = new DinnerPrintoutView($("#dinnerPrintoutView"), model);
	// var dinnerOverviewView = new DinnerOverviewView($("#dinnerOverview"), model);

	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children
	 * of the specific view you're working with (see exampleView.js).
	 */

});
