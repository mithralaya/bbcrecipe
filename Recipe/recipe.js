/**
 * Created by karthikvasudevan on 09/08/15.
 */

var RecipeModel = require("../DB/model/Recipe");
var RecipeModel = require("../DB/model/Recipe");

var Recipe  = function() {

};


Recipe.prototype = {

    getAllRecipe: function(merchantId, employeeIds, callback, Message){

        var where = {
            "merchantId": {
                "value": merchantId,
                "condition": "="
            }
        };

        if(employeeIds !== undefined)
        {
            where["id"] = {
                "value": employeeIds.split(','),
                "condition": "IN"
            }
        }

        var userExtended = new UserExtended([], where);

        userExtended.model.getItems(callback, Message);

    }
};


module.exports = new Recipe();