

var recipe = require('../Recipe/recipe');
exports.index = function(req, res){

  var pageNo = 0;
  if(req.params.pageNo !== undefined)
  {
    pageNo = req.params.pageNo - 1; // adjust pageno to multiply with 10.
  }


  recipe.countAllRecipe(function(rows){
    //get total available recipes
    if(rows[0].TotalRows > 1)
    {

      recipe.getPaginatedRecipeIds(pageNo, function(recipeIds){
        //get paginated result of recipes
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
          //render webpage by picking index view
          recipe.getRecipeByRecipeId(returnedRecipeIds, function(recipeRows) {
            res.render('index', {
              title:  "BBC Recipe",
              selector: "home",
              totalRecipe: rows[0].TotalRows,
              recipeRows: recipeRows,
              pageNo: pageNo,
              user: req.session.user
            });
          }, req.messageInstance);

        }
      }, req.messageInstance)
    }
    else if(rows[0].TotalRows == 1)
    {
      // if there is only one recipe
      recipe.getAllRecipe(function(recipeRows) {
        res.render('index', {
          title: "BBC Recipe",
          selector: "home",
          totalRecipe: 1,
          recipeRows: recipeRows,
          pageNo: pageNo,
          user: req.session.user
        });
      }, req.messageInstance);
    }
    else
    {
      //error if there are no recipe
      req.messageInstance.add("error", "noRecipe");  //setting error message reffer Message.config.config
      res.render('index', {
        title:  "BBC Recipe",
        selector: "home",
        errors: req.messageInstance.get("error"),
        user: req.session.user
      });
    }

  }, req.messageInstance);

};
