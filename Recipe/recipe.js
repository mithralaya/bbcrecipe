/**
 * Created by karthikvasudevan on 09/08/15.
 */

var RecipeModel = require("../DB/model/Recipe");
var RecipeExtendedModel = require("../DB/model/RecipeExtended");
var RecipeStarExtendedModel = require("../DB/model/RecipeStarExtended");
var StarModel = require("../DB/model/Star");

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
    },
    getRecipesWithFilter: function(query, cookingTime, recipeIds, callback, Message){

        var where = {};
        if(query !== undefined && query!== null && query.length > 0) {
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
        if(cookingTime !== undefined && cookingTime!== null && cookingTime.length > 0) {
            where["cookingTime"] = {
                "value": cookingTime,
                "condition": "<="
            }
        }
        if(recipeIds.length > 0)
        {
            where["recipeId"] = {
                "value": recipeIds,
                "condition": "IN"
            }
        }

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