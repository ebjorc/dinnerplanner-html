var DishItemCellView = function(view, dish) {

  var div = document.createElement('div');
  div.className = 'imgContainer';

  var img = document.createElement('img');
  img.src = 'https://spoonacular.com/recipeImages/' + dish.id + '-312x231.jpg';

  var imgText = document.createElement('p');
  imgText.textContent = dish.title;

  div.append(img);
  div.append(imgText);
  view.append(div);
}
