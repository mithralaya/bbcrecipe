/**
 * Created by karthikvasudevan on 09/08/15.
 */

var recipe = require('../Recipe/recipe');
exports.index = function(req, res, next)
{
    var recipeId = req.params.recipeId;
    if(recipeId !== undefined)
    {
        recipe.getRecipeByRecipeId([recipeId], function(recipeRow) {
            if(recipeRow.length > 0)
            {
                res.render('recipe', {
                    title:  "BBC Recipe",
                    selector: "",
                    recipeRows: recipeRow
                });
            }
            else
            {
                req.messageInstance.add("error", "noSuchRecipe");
                res.render('recipe', {
                    title:  "BBC Recipe",
                    selector: "",
                    errors: req.messageInstance.get("error"),
                    recipeRows: []
                });
            }

        }, req.messageInstance);
    }
    else
    {
        req.messageInstance.add("error", "noSuchRecipe");
        res.render('recipe', {
            title:  "BBC Recipe",
            selector: "",
            errors: req.messageInstance.get("error")
        });
    }
};