$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	var stateController = new GeneralStateController(model);
	stateController.showHomeScreen();
});
