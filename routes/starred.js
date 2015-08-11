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

    //only if star is set otherwise no action is taken return empty result
    if(star !== undefined && recipeId !== undefined)
    {
        if(star == -1)
        {
            //if unstarred set the deleteDate to make soft delete.
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
            //set deleteDate to null to restar the recipe
            starObject = {
                "0": {
                    "userId": req.session.user.id,
                    "recipeId": recipeId,
                    "deleteDate": null

                }
            }
        }

        //store the object
        recipe.storeStarred(starObject, function(returned){
            //send it to Helper.fabricate so it sends as JSON
            req.built.star.success = returned;
            next();
        }, req.messageInstance);
    }
    else
    {
        next();
    }
};