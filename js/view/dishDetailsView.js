

var DishDetailsView = function (container, model) {
  var dish = model.getDish(1);

  var dishName = container.find("#dishName");
  dishName.html(dish.name);

  var dishDescription = container.find("#dishDescription");
  dishDescription.html(dish.type);

  var dishPreparation = container.find("#preparation");
  dishPreparation.html(dish.description);

  var dishImage = container.find("#dishImage");
  dishImage.attr("src", "./images/" + dish.image);

  var table = container.find("#ingredientsTable");
  var totalPrice = 0;
  dish.ingredients.forEach(function(ingredient) {
    table.append("<tr><td>"  + ingredient.quantity + " " + ingredient.unit +  "</td><td>" + ingredient.name + "</td><td>SEK</td><td>" + ingredient.price + "</td></tr>");
    totalPrice += parseInt(ingredient.price);
  });
  container.find("#totalPrice").html("SEK " + totalPrice);



}
