/**
 * Created by karthikvasudevan on 09/08/15.
 */

var recipe = require('../Recipe/recipe');
exports.index = function(req, res, next)
{
    var recipeId = req.params.recipeId;
    var star = false;
    if(recipeId !== undefined)
    {
        recipe.getRecipeByRecipeId([recipeId], function(recipeRow) {
            if(recipeRow.length > 0)
            {
                recipe.getStaredByUserId(req.session.user.id, recipeId, function(starRows){
                    if(starRows.length > 0)
                    {
                        star = true;
                    }
                    res.render('recipe', {
                        title:  "BBC Recipe",
                        selector: "",
                        recipeRows: recipeRow,
                        user: req.session.user,
                        isStar: star
                    });

                }, req.messageInstance);

            }
            else
            {
                req.messageInstance.add("error", "noSuchRecipe");
                res.render('recipe', {
                    title:  "BBC Recipe",
                    selector: "",
                    errors: req.messageInstance.get("error"),
                    recipeRows: [],
                    user: req.session.user,
                    isStar: star
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
            errors: req.messageInstance.get("error"),
            user: req.session.user,
            isStar: star
        });
    }
};