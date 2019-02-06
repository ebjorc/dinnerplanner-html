//DinnerModel Object constructor
var DinnerModel = function() {
  var guests = 1;
  var dishesAdded = [];
  var currentDish;
  var dishes = [];
  var observers = [];
  var filterType;
  var filterKeyword;
  var dishTypes = ['All', 'dessert', 'main course', 'side dish', 'appetizer', 'salad', 'bread', 'breakfast', 'soup', 'beverage', 'sauce', 'drink'];

  this.addObserver = function(observer){
    observers.push(observer);
    }

  this.notifyObservers = function(changeDetails) {
    observers.forEach((observer) => {
          observer(this, changeDetails);
    });
  }

  this.removeObserver = function(observer){

  }

  this.setCurrentDish = function(dish) {
    currentDish = dish;
    this.notifyObservers(ChangeDetails.CURRENT_DISH_CHANGED);
  }

  this.getCurrentDish = function() {
    return currentDish;
  }

  this.getDishTypes = function(){
    return dishTypes;
  }

  this.getMenuDishPrice = function(id) {
    for(key in dishesAdded){
			if(dishesAdded[key].id == id) {
				return getDishPrice(dishesAdded[key]);
			}
		}
  }

  var getDishPrice = function(dish) {
    var totalPrice = 0;
    dish.extendedIngredients.forEach(function(ingredient) {
        totalPrice += ingredient.amount;
    });
    return totalPrice.toFixed(2);
  }

  this.getCurrentDishPrice = function(){
    return getDishPrice(currentDish);
  }

  this.setFilterTypeAndKeyword = function(type, keyword) {
    if(this.filterKeyword != keyword || this.filterType != type) {
      this.filterType = type;
      if (this.filterType == "All") {
        this.filterType = null;
      }
      this.filterKeyword = keyword;
      this.notifyObservers(ChangeDetails.FILTER_CHANGED);
    }
  }

  this.getDishDetails = function(id) {
    var baseUrl = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/" + id +"/information?includeNutrition=false"
    return fetch(baseUrl,
      {
      headers:{"X-Mashape-Key": "3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767"}
      })
    .then(handleHTTPError)
    .then(function(response){return response.json();})
    .then(function(data){
      currentDish = data;
      return data;
    });
  }

  this.getFilterType = function() {
    return this.filterType;
  }

  this.getFilterKeyword = function() {
    return this.filterKeyword;
  }

	this.setNumberOfGuests = function(num) {
		guests = num;
    this.notifyObservers(ChangeDetails.GUESTS_CHANGED);
	}

	this.getNumberOfGuests = function() {
		return guests;
	}

	//Returns the dish that is on the menu for selected type
	this.getSelectedDish = function(type) {
		dishesAdded.forEach(function(dish) {
			if(dish.type == type){
				return dish;
			}
		});
	}

	//Returns all the dishes on the menu.
	this.getFullMenu = function() {
		return dishesAdded;
	}

	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function() {
		var allIngridients = [];
    dishesAdded.forEach((dish) => {
      dish.extendedIngredients.forEach((currentIngredient) => {
        allIngridients.push(currentIngredient)
      });
    });
		return allIngridients;
	}

	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
    var ingredients = this.getAllIngredients();
    var totalPrice = 0;
    ingredients.forEach((ingredient) => {
      totalPrice += ingredient.amount;
    });
		return (totalPrice * guests).toFixed(2);
	}

  // Get dish price for a specific dish.
  this.getDishPrice = function(id) {
    for(key in dishes){
			if(dishes[key].id == id) {
        var totalPrice = 0;
        dishes[key].ingredients.forEach((ingredient) => {
          totalPrice += ingredient.price;
        });
				return totalPrice
			}
		}
  }

	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function(id) {
    var dishAlreadyAdded = false;
    dishesAdded.forEach( (dish) => {
      if(dish.id == id) {
        dishAlreadyAdded = true;
        return;
      }
    });
    if(dishAlreadyAdded) return;
    dishesAdded.push(currentDish);
    this.notifyObservers(ChangeDetails.MENU_CHANGED);
	};

	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
		var menu = this.getFullMenu();
		dishesAdded = menu.filter(function(dish){
			return (dish.id != id);
		});
    this.notifyObservers(ChangeDetails.MENU_CHANGED);
	}

	// function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	// you can use the filter argument to filter out the dish by name or ingredient (use for search)
	// if you don't pass any filter all the dishes will be returned
	this.getAllDishes = function (type,filter) {
    var baseUrl = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?"
    if(type){
      baseUrl += "type=" + type + "?";
    }
    if(filter){
      baseUrl += "query=" + filter
    }

    return fetch(baseUrl,
      {
      headers:{"X-Mashape-Key": "3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767"}
      })
    .then(handleHTTPError)
    .then(function(response){return response.json();})
    .then(function(data){
      dishes = data.results;
      return data.results;
    });

  }

  var handleHTTPError = function(response) {
    if(response.ok)
       return response;
    throw Error(response.statusText);
  }


	//function that returns a dish of specific ID
	this.getDish = function (id) {
	  for(key in dishes){
			if(dishes[key].id == id) {
				return dishes[key];
			}
		}
	}
}
