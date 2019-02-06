var SideBarView = function(container, sideBar ,model) {

  this.update = function(model, changeDetails) {
    if (changeDetails == ChangeDetails.GUESTS_CHANGED || changeDetails == ChangeDetails.MENU_CHANGED) {
      var dishes = model.getFullMenu();
      var rowsAdded = [];
      var sideBarItemDiv = container.find("#sideBarItemDiv")

      container.find(".sideBarItemClass").remove();

      dishes.forEach(function(dish) {
        var row = sideBar.clone();
        var name = row.find("#sideBarItemName")
        name.html(dish.title);

        var price = row.find("#sideBarItemPrice")
        price.html(model.getMenuDishPrice(dish.id) * model.getNumberOfGuests());
        rowsAdded.push(row);
      });

      rowsAdded.forEach(function(row) {
        row.show();
        sideBarItemDiv.append(row);
      })
      var totalCostLabel = container.find("#totalCostLabel");
      totalCostLabel.html(model.getTotalMenuPrice() + " SEK");

      var guestsInput = container.find("#guestsInput")
      guestsInput.value = model.getNumberOfGuests();

    }
  }
  model.addObserver(this.update);
}
