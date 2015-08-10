

var recipe = require('../Recipe/recipe');
exports.index = function(req, res){

  var pageNo = 0;
  if(req.params.pageNo !== undefined)
  {
    pageNo = req.params.pageNo - 1; // adjust pageno to multiply with 10.
  }


  recipe.countAllRecipe(function(rows){
    if(rows[0].TotalRows > 1)
    {
      recipe.getPaginatedRecipeIds(pageNo, function(recipeIds){
        if(recipeIds.length > 0)
        {
          var returnedRecipeIds = [];
          for(var recipeIndex in recipeIds)
          {
            if(recipeIds.hasOwnProperty(recipeIndex))
            {
              returnedRecipeIds.push(recipeIds[recipeIndex].id);
            }
          }
          recipe.getRecipeByRecipeId(returnedRecipeIds, function(recipeRows) {
            res.render('index', {
              title:  "BBC Recipe",
              selector: "home",
              totalRecipe: rows[0].TotalRows,
              recipeRows: recipeRows,
              pageNo: pageNo
            });
          }, req.messageInstance);

        }
      }, req.messageInstance)
    }
    else if(rows[0].TotalRows == 1)
    {
      recipe.getAllRecipe(function(recipeRows) {
        res.render('index', {
          title: "BBC Recipe",
          selector: "home",
          totalRecipe: 1,
          recipeRows: recipeRows,
          pageNo: pageNo
        });
      }, req.messageInstance);
    }
    else
    {
      req.messageInstance.add("error", "noRecipe");
      res.render('index', {
        title:  "BBC Recipe",
        selector: "home",
        errors: req.messageInstance.get("error")
      });
    }

  }, req.messageInstance);

};
