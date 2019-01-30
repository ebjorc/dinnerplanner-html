var SideBarView = function(container, sideBar ,model) {
  this.update = function(model, changeDetails) {
    if (changeDetails == ChangeDetails.MENU_CHANGED) {
      var dishes = model.getFullMenu();
      var rowsAdded = [];
      var sideBarItemDiv = container.find("#sideBarItemDiv")

      container.find(".sideBarItemClass").remove();

      dishes.forEach(function(dish) {
        var row = sideBar.clone();
        var name = row.find("#sideBarItemName")
        name.html(dish.name);

        var price = row.find("#sideBarItemPrice")
        price.html(model.getDishPrice(dish.id));
        rowsAdded.push(row);
      });

      rowsAdded.forEach(function(row) {
        row.show();
        sideBarItemDiv.append(row);
      })
    }
    if (changeDetails == ChangeDetails.GUESTS_CHANGED || changeDetails == ChangeDetails.MENU_CHANGED) {
      var totalCostLabel = container.find("#totalCostLabel");
      totalCostLabel.html(model.getTotalMenuPrice() + " SEK");
    }
  }
  model.addObserver(this.update);
}
