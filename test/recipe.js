/**
 * Created by karthikvasudevan on 08/09/15.
 */
/**
 * Created by karthikvasudevan on 08/09/15.
 */


var Recipe = require("../Recipe/recipe");
var MessageInstance = require('../Message/message');

//test begins
describe("Recipe", function() {
    describe("Recipe List: ", function(){
        var Message;
        beforeAll(function(){
            Message = new MessageInstance();
        });
        beforeEach(function(done) {
            done();
        }, 10);
        it("should return no recipes", function() {

            var searchTerm = "sdfsdkjfksdf";
            Recipe.getRecipesWithFilter(searchTerm, undefined, [], function(rows){

                expect(rows.length).toBe(0);
                done();
            }, Message);
        });
        it("should return one recipe ", function () {

            Recipe.getRecipeByRecipeId(1, function(rows){
                expect(rows.length).toBe(1);
                done();
            }, Message);
        });

        it("should return more than one recipe", function () {

            Recipe.getAllRecipe(function(rows){
                expect(rows.count()).toBeGreaterThan(0);
                done();
            }, Message);
        });
        it("should return only 10 recipes for page 1", function () {


            Recipe.getPaginatedRecipeIds(1, function(rows){
                expect(rows.length).toBe(10);
                done();
            }, Message);
        });

        it("should return recipes for page 2", function () {


            Recipe.getPaginatedRecipeIds(2, function(rows){
                expect(rows.length).toBeGreaterThan(10);
                done();
            }, Message);
        });

    });

    describe("Recipe Details: ", function(){
        var Message;
        beforeAll(function(){
            Message = new MessageInstance();
        });
        beforeEach(function(done) {
            done();
        }, 1000);
        it("should return recipe not found for wrong id", function() {

            Recipe.getRecipeByRecipeId(200, function(rows){

                expect(rows.length).toBe(0);
                done();
            }, Message);
        });
        it("should contain recipe cooking time ", function () {

            Recipe.getRecipeByRecipeId(1, function(rows){
                expect(rows[0]).toEqual(jasmine.objectContaining({
                    cookingTime: 30
                }));
                done();
            }, Message);
        });

        it("should contain recipe image", function () {

            Recipe.getRecipeByRecipeId(1, function(rows){
                expect(rows[0]).toEqual(jasmine.objectContaining({
                    imageUrl: "1.jpg"
                }));
                done();
            }, Message);
        });
        it("should contain ingredients", function () {


            Recipe.getRecipeByRecipeId(1, function(rows){
                expect(rows[0]).toEqual(jasmine.objectContaining({
                    ingredientId: 1
                }));
                done();
            }, Message);
        });



    });
});