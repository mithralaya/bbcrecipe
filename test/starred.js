/**
 * Created by karthikvasudevan on 08/09/15.
 */
/**
 * Created by karthikvasudevan on 08/09/15.
 */


var Recipe = require("../Recipe/recipe");
var MessageInstance = require('../Message/message');
var DateHelper = require("../Helper/dateFormatter");

//test begins
describe("Star", function() {
    describe("Star a recipe: ", function(){
        var Message;
        beforeAll(function(){
            Message = new MessageInstance();
        });
        beforeEach(function(done) {
            done();
        }, 10);
        it("should star a recipe", function() {

            var starObject = {
                "0": {
                    "userId": 1,
                    "recipeId": 1,
                    "deleteDate":null
                }
            };
            Recipe.storeStarred(starObject, function(returned){
                expect(returned).toBeTruthy();
                done();
            }, MessageInstance);
        });
        it("should unstar a recipe ", function () {

            var starObject = {
                "0": {
                    "userId": 1,
                    "recipeId": 1,
                    "deleteDate":DateHelper.getFormattedDate(new Date())
                }
            };
            Recipe.storeStarred(starObject, function(returned){
                expect(returned).toBeTruthy();
            }, MessageInstance);
        });

        it("should return no stared recipe", function () {

            Recipe.getStaredByUserIdOnly(1, function(rows){
                expect(rows.length).toBe(0);
                var starObject = {
                    "0": {
                        "userId": 1,
                        "recipeId": 1,
                        "deleteDate":null
                    }
                };
                Recipe.storeStarred(starObject, function(returned){
                    expect(returned).toBeTruthy();
                    done();
                }, MessageInstance);
            }, MessageInstance);
        });
        it("should return stared recipe", function () {


            Recipe.getStaredByUserIdOnly(1, function(rows){
                expect(rows.length).toBeGreaterThan(0);
                done();
            }, MessageInstance);
        });

    });
});