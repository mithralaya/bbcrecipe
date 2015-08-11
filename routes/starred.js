/**
 * Created by karthikvasudevan on 10/08/15.
 */

var recipe = require('../Recipe/recipe');
var dateFormatter = require('../Helper/dateFormatter');

exports.index = function(req, res, next)
{
    var star = req.query.star;
    var recipeId = req.query.recipeId;
    var starObject = {};
    req.built.star = {};

    if(star !== undefined && recipeId !== undefined)
    {
        if(star == -1)
        {
            starObject = {
                "0": {
                    "userId": req.session.user.id,
                    "recipeId": recipeId,
                    "deleteDate":dateFormatter.getFormattedDate(new Date())
                }
            }
        }
        if(star == 1)
        {
            starObject = {
                "0": {
                    "userId": req.session.user.id,
                    "recipeId": recipeId,
                    "deleteDate": null

                }
            }
        }

        recipe.storeStarred(starObject, function(returned){
            req.built.star.success = returned;
            next();
        }, req.messageInstance);
    }
};