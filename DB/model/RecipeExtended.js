/*
 * 
 * @Author                 : Karthik Vasudevan
 * @AuthorEmail            : mithralaya@gmail.com
 * @Licence                : All parts is licenced to ©karthik Ltd. Copying, or accessing the file or its content is prohibited.
 * @FileName               : RecipeExtended.js
 * @ModuleName             : CoreDB
 * @Purpose                : Holds instance of RecipeExtended table
 * @Dependencies           : CoreDB:lib:model
 * 
 * Further comments goes here
 */

// Set private vars and dependencies
var Model = require('../lib/model');

//constructor
var RecipeExtended = function(fields, where, groupBy, orderBy, limit, offset) {
    
    //set private variables
    var _tableName = "RecipeExtended";
    var _identifierField = "id";
    
    //set public variables
    this.fields = fields;
    this.where = where;
    this.orderBy = orderBy;
    this.groupBy = groupBy;
    this.limit = limit;
    this.offset = offset;
    
    //Inheritance workaround
    this.model = new Model(_tableName, this.fields, this.where, this.groupBy, this.orderBy, this.limit, this.offset, _identifierField);
};

module.exports = RecipeExtended;