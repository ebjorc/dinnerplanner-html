var SideBarView = function(container, sideBar ,model) {
  this.update = function(model, changeDetails) {
    console.log("casf");
    if (changeDetails == ChangeDetails.MENU_CHANGED) {
      console.log("run");
      var dishes = model.getFullMenu();
      var rowsAdded = [];
      var sideBarItemDiv = container.find("#sideBarItemDiv")

      dishes.forEach(function(dish) {
        var row = sideBar.clone();
        rowsAdded.push(row);
      });

      rowsAdded.forEach(function(row) {
        row.show();
        sideBarItemDiv.append(row);
      })


    }
  }
  model.addObserver(this.update);
}
