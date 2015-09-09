/**
 * Created by karthikvasudevan on 08/09/15.
 */


var Recipe = require("../Recipe/recipe");
var MessageInstance = require('../Message/message');

//test begins
describe("Filter", function() {
    describe("Filter Recipes: ", function(){
        var Message;
        beforeAll(function(){
            Message = new MessageInstance();
        });
        beforeEach(function(done) {
            done();
        }, 10);
        it("should return no recipe", function() {

            var searchTerm = "sdfsdkjfksdf";
            Recipe.getRecipesWithFilter(searchTerm, undefined, [], function(rows){

                expect(rows.length).toBe(0);
                done();
            }, Message);
        });
        it("should return recipes with name chicken ", function () {

            var searchTerm = "chicken";
            Recipe.getRecipesWithFilter(searchTerm, undefined, [], function(rows){
                expect(rows.length).toBeGreaterThan(0);
                done();
            }, Message);
        });

        it("should return recipes with ingredient lettuce", function () {

            var searchTerm = "lettuce";
            Recipe.getRecipesWithFilter(searchTerm, undefined, [], function(rows){
                expect(rows.length).toBeGreaterThan(0);
                done();
            }, Message);
        });
        it("should filter by cooking time", function () {

            var cookingTime = "15";

            Recipe.getRecipesWithFilter(undefined, cookingTime, [], function(rows){
                expect(rows.length).toBeGreaterThan(0);
                done();
            }, Message);
        });

    });
});