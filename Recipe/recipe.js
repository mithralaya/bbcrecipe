/**
 * Created by karthikvasudevan on 09/08/15.
 */

var RecipeModel = require("../DB/model/Recipe");
var RecipeExtendedModel = require("../DB/model/RecipeExtended");
var RecipeStarExtendedModel = require("../DB/model/RecipeStarExtended");
var StarModel = require("../DB/model/Star");

//constructor
var Recipe  = function() {

};


Recipe.prototype = {

    //Get all recipe from recipe extended.
    getAllRecipe: function(callback, Message){

        var recipeModel = new RecipeExtendedModel();
        recipeModel.model.getItems(callback, Message);

    },

    //this will return just the recipe ids paginated to max 10.
    getPaginatedRecipeIds: function(pageNo, callback, Message)
    {
        var recipeModel = new RecipeModel(["id"], undefined, [], [], 10 * pageNo, 10);
        recipeModel.model.getItems(callback, Message);
    },

    //count all recipes to populate page numbers.
    countAllRecipe: function(callback, Message){
        var recipeModel = new RecipeModel();
        recipeModel.model.getSize(callback, Message);
    },

    //recipeIds as name suggest its an array of recipe ids.
    getRecipeByRecipeId: function(recipeIds, callback, Message){

        var where = {
            "recipeId": {
                "value": recipeIds,
                "condition": "IN"
            }
        };
        var recipeModel = new RecipeExtendedModel([], where);
        recipeModel.model.getItems(callback, Message);
    },

    //filter recipe query
    getRecipesWithFilter: function(query, cookingTime, recipeIds, callback, Message){

        var where = {};
        //only if query set
        if(query !== undefined && query!== null && query.length > 0) {
            //where statement with OR operator between recipeName and IngredientName
            where["query"] = {
                "value": {
                    "recipeName": {
                        "value": "%" + query + "%",
                        "condition": "LIKE"
                    },
                    "ingredientName": {
                        "value": "%" + query + "%",
                        "condition": "LIKE"
                    }
                }
            }

        }
        //only if cookingTime is set
        if(cookingTime !== undefined && cookingTime!== null && cookingTime.length > 0) {
            where["cookingTime"] = {
                "value": cookingTime,
                "condition": "<="
            }
        }
        //only if recipeId is set
        if(recipeIds.length > 0)
        {
            where["recipeId"] = {
                "value": recipeIds,
                "condition": "IN"
            }
        }

        // if where has atleast one statement go ahead and execute the query
        if(Object.keys(where).length > 0)
        {

            var recipeModel = new RecipeExtendedModel([], where);
            recipeModel.model.getItems(callback, Message);

        }
        else
        {
            callback(null);
        }
    },
    //check if the given user is starred the recipe
    getStaredByUserId: function(userId, recipeId, callback, Message) {
        var where = {
            "userId": {
                "value": userId,
                "condition": "="
            },
            "recipeId": {
                "value": recipeId,
                "condition": "="
            },
            "deleteDate": {
                "value": null,
                "condition": "IS"
            }
        }
        var recipeStarExtendedModel = new RecipeStarExtendedModel([], where);
        recipeStarExtendedModel.model.getItems(callback, Message);
    },
    //get all recipes for a user
    getStaredByUserIdOnly: function(userId, callback, Message) {
        var where = {
            "userId": {
                "value": userId,
                "condition": "="
            },
            "deleteDate": {
                "value": null,
                "condition": "IS"
            }
        }
        var recipeStarExtendedModel = new RecipeStarExtendedModel([], where);
        recipeStarExtendedModel.model.getItems(callback, Message);
    },
    //store a starred association
    storeStarred: function(starObject, callback, Message)
    {
        if(Object.keys(starObject).length > 0) {
            var starModel = new StarModel();
            starModel.model.isInsert = true;
            starModel.model.returnIds = false;
            starModel.model.save(starObject, callback, Message);
        }else{
            callback(false);
        }
    }

};


module.exports = new Recipe();