var DishItemCellView = function(view, dish) {

  var div = document.createElement('div');
  div.className = 'imgContainer';

  var img = document.createElement('img');
  img.src = 'images/' + dish.image;

  var imgText = document.createElement('p');
  imgText.textContent = dish.name;

  div.append(img);
  div.append(imgText);
  view.append(div);
}
