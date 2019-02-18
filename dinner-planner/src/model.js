//DinnerModel Object constructor
class DinnerModel  {
    dishTypes = ['All', 'dessert', 'main course', 'side dish', 'appetizer', 'salad', 'bread', 'breakfast', 'soup', 'beverage', 'sauce', 'drink'];
    apiKey = "3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767";

    setCurrentDish = function(dish) {
      this.currentDish = dish;
    }
  
    getCurrentDish = function() {
      return this.currentDish;
    }
  
    getDishTypes = function(){
      return this.dishTypes;
    }
  
    getMenuDishPrice = function(id) {
      this.dishesAdded.foreach(key => {
              if(this.dishesAdded[key].id == id) {
                  return this.getDishPrice(this.dishesAdded[key]);
              }
          })
    }
  
    getDishPrice = function(dish) {
      var totalPrice = 0;
      dish.extendedIngredients.forEach(function(ingredient) {
          totalPrice += ingredient.amount;
      });
      return totalPrice.toFixed(2);
    }
  
    getCurrentDishPrice = function(){
      return this.getDishPrice(this.currentDish);
    }
  
    setFilterTypeAndKeyword = function(type, keyword) {
      if(this.filterKeyword != keyword || this.filterType != type) {
        this.filterType = type;
        if (this.filterType == "All") {
          this.filterType = null;
        }
        this.filterKeyword = keyword;
      }
    }
  
    getDishDetails = function(id) {
      var baseUrl = "http://sunset.nada.kth.se:8080/iprog/group/13/recipes/" + id +"/information?includeNutrition=false"
      return fetch(baseUrl,
        {
        headers:{"X-Mashape-Key": this.apiKey}
        })
      .then(this.handleHTTPError)
      .then(function(response){return response.json();})
      .then(function(data){
        return data;
      });
    }
  
    getFilterType = function() {
      return this.filterType;
    }
  
    getFilterKeyword = function() {
      return this.filterKeyword;
    }
  
    setNumberOfGuests = function(num) {
        this.guests = num;
    }

    getNumberOfGuests = function() {
        return this.guests;
    }
  
    //Returns the dish that is on the menu for selected type
    getSelectedDish = function(type) {
        this.dishesAdded.forEach(function(dish) {
            if(dish.type == type){
                return dish;
            }
        });
    }
  
    //Returns all the dishes on the menu.
    getFullMenu = function() {
        return this.dishesAdded;
    }

    //Returns all ingredients for all the dishes on the menu.
    getAllIngredients = function() {
        var allIngridients = [];
    this.dishesAdded.forEach((dish) => {
      dish.extendedIngredients.forEach((currentIngredient) => {
        allIngridients.push(currentIngredient)
      });
    });
        return allIngridients;
    }

    //Returns the total price of the menu (all the ingredients multiplied by number of guests).
    getTotalMenuPrice = function() {
      var ingredients = this.getAllIngredients();
      var totalPrice = 0;
      ingredients.forEach((ingredient) => {
        totalPrice += ingredient.amount;
      });
          return (totalPrice * this.guests).toFixed(2);
    }

  // Get dish price for a specific dish.
  getDishPrice = function(id) {
    this.dishes.foreach(key =>{
            if(this.dishes[key].id == id) {
        var totalPrice = 0;
        this.dishes[key].ingredients.forEach((ingredient) => {
          totalPrice += ingredient.price;
        });
                return totalPrice
            }
        });
  }

    //Adds the passed dish to the menu. If the dish of that type already exists on the menu
    //it is removed from the menu and the new one added.
    addDishToMenu = function(id) {
      var dishAlreadyAdded = false;
      this.dishesAdded.forEach( (dish) => {
        if(dish.id == id) {
          dishAlreadyAdded = true;
          return;
        }
      });
      if(dishAlreadyAdded) return;
      this.dishesAdded.push(this.currentDish);
    };

    //Removes dish from menu
    removeDishFromMenu = function(id) {
        var menu = this.getFullMenu();
        this.dishesAdded = menu.filter(function(dish){
            return (dish.id != id);
        });
    }

    // function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
    // you can use the filter argument to filter out the dish by name or ingredient (use for search)
    // if you don't pass any filter all the dishes will be returned
    getAllDishes = function (type,filter) {
      var baseUrl = "http://sunset.nada.kth.se:8080/iprog/group/13/recipes/search?number=20&"
      if(type){
        baseUrl += "type=" + type + "&";
      }
      if(filter){
        baseUrl += "query=" + filter
      }
  
      return fetch(baseUrl,
        {
        headers:{"X-Mashape-Key": this.apiKey}
        })
      .then(this.handleHTTPError)
      .then(function(response){return response.json();})
      .then(function(data){
        return data.results;
      });
  }
  
    handleHTTPError = function(response) {
      if(response.ok)
         return response;
      throw Error(response.statusText);
    }
  
  
      //function that returns a dish of specific ID
      getDish = function (id) {
        this.dishes.foreach(key =>{
              if(this.dishes[key].id == id) {
                  return this.dishes[key];
              }
          });
      }
  }

  export default DinnerModel;
  