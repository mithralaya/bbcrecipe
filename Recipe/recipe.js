/**
 * Created by karthikvasudevan on 09/08/15.
 */

var RecipeModel = require("../DB/model/Recipe");
var RecipeExtendedModel = require("../DB/model/RecipeExtended");

var Recipe  = function() {

};


Recipe.prototype = {

    getAllRecipe: function(callback, Message){

        var recipeModel = new RecipeExtendedModel();
        recipeModel.model.getItems(callback, Message);

    },

    getPaginatedRecipeIds: function(pageNo, callback, Message)
    {
        var recipeModel = new RecipeModel(["id"], undefined, [], [], 10 * pageNo, 10);
        recipeModel.model.getItems(callback, Message);
    },

    countAllRecipe: function(callback, Message){
        var recipeModel = new RecipeModel();
        recipeModel.model.getSize(callback, Message);
    },

    getRecipeByRecipeId: function(recipeIds, callback, Message){

        var where = {
            "recipeId": {
                "value": recipeIds,
                "condition": "IN"
            }
        };
        var recipeModel = new RecipeExtendedModel([], where);
        recipeModel.model.getItems(callback, Message);
    }

};


module.exports = new Recipe();