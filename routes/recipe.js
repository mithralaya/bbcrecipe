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
        //find recipe by given id
        recipe.getRecipeByRecipeId([recipeId], function(recipeRow) {
            if(recipeRow.length > 0)
            {
                //check if the given recipe is starred by the current user
                recipe.getStaredByUserId(req.session.user.id, recipeId, function(starRows){
                    if(starRows.length > 0)
                    {
                        //if yes set true
                        star = true;
                    }
                    //render recipe page by sending all required params
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
                //error if the recipe cannot be found.
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
        //send error as the recipe cannot be found without the recipeId
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