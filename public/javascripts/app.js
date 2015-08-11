/**
 * Created by karthikvasudevan on 10/08/15.
 */


'use strict';

/* Controllers */

var baseUrl = "http://localhost:3000/";
var app = angular.module('bbcrecipeApp', []);
var star = 0;
var toggleStar = 0;
app.controller('RecipeController', ['$scope', '$http', function(scope, http) {

    scope.filter = {};
    scope.error = {};
    scope.recipies = {};
    scope.filterRecipe = function ()
    {
        $("#postFilter").hide();
        $("#apiError").hide();
        $("#preFilter").hide();
        if((scope.filter.q !== undefined && scope.filter.q.length > 0)
            || (scope.filter.cookingTime !== undefined && scope.filter.cookingTime.length > 0)
            || toggleStar != 0) {
            scope.filter.toggleStar = toggleStar;
            $("#preFilter").hide();
            $(".pagination").hide();
            $(".preloader").show();
            $("#apiError").hide();
            http({url: baseUrl + "filter", method: 'GET', params: scope.filter}).success(function (response) {
                $(".preloader").hide();
                $("#postFilter").show();
                if(response.recipe.length > 0)
                {
                    scope.recipies = response.recipe;
                }
                else if(response.recipe.length == 0 && response.error !== undefined)
                {
                    $("#postFilter").hide();
                    $("#preFilter").hide();
                    scope.recipies = {};
                    scope.error.title = response.error.title;
                    scope.error.desc = response.error.desc;
                    $("#apiError").show();

                }
            }).error(function (data, status, headers, config) {
                console.log("failed - req:-" + url + " headers: " + headers);
                callback(data);
            });
        }
        else
        {
            $("#postFilter").hide();
            $("#preFilter").show();
            $(".preloader").hide();
            $(".pagination").show();
            $("#apiError").hide();
        }
    };

    scope.resetFilter = function()
    {

        scope.filter.q = "";
        scope.filter.cookingTime = "";

        $("#postFilter").hide();
        $("#preFilter").show();
        $(".preloader").hide();
        $(".pagination").show();
        $("#apiError").hide();

    },
    scope.toggleStarfn = function()
    {
        if(toggleStar == 0)
        {
            toggleStar = 1;
        }
        else
        {
            toggleStar = 0;
        }
        this.filterRecipe();
    }



}]);

app.controller('StarController', ['$scope', '$http', function(scope, http) {

    scope.star = function (flag, recipeId)
    {
        var params = {};
        var starIcon =  '';
        $("#star").prop('disabled', true);
        params.star = star;

        if(star == 0) {
            params.star = flag;
        }

        if(star == -1)
        {
            starIcon = "<i class=\"ion-ios-star-outline\"></i>";
        }
        else
        {
            starIcon = "<i class=\"ion-ios-star\"></i>";
        }

        params.recipeId = recipeId;
        http({url: baseUrl + "starred", method: 'GET', params: params}).success(function (response) {
            if(response)
            {
                star = -params.star;
                $("#star").html(starIcon);
                $("#star").prop('disabled', false);

            }

        }).error(function (data, status, headers, config) {
            console.log("failed - req:-" + url + " headers: " + headers);
            callback(data);
            $("#star").prop('disabled', false);
        });
    }
}]);
