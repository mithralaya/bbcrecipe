/*
 * 
 * @Author                  : Karthik Vasudevan
 * @AuthorEmail             : mithralaya@gmail.com
 * @Licence                 : All parts is licenced to karthik. Copying, or accessing the file or its content is prohibited.
 * @FileName                : config.js
 * @ModuleName              : CoreDB
 * @Purpose                 : To securely store all constant values like database passwords in an object for reusability. Also decides whis config to use.
 * @Dependencies            : CoreConfig:config
 *
 * Further comments goes here
 */

/*
 * CODE LOCKED
 * No Changes needed until further comments from Source Owner
 *
 * Code Locked on 07/02/2014 14:51 by Karthik Vasudevan
 *
 */

var Connection = require('./connection').Connection;
var util = require('util');
var message = require('../../Message/message');

//Constructor function
var QueryBuilder = function(tableName, fields, where, groupBy, orderBy, limit, offset, having) {

    //Private variables


    //Public variables
    this._tableName = tableName;
    this._fields = (util.isArray(fields))? fields: [];
    this._where = where;
    this._having = having;
    this._orderBy = (util.isArray(orderBy))? orderBy: [];
    this._groupBy = (util.isArray(groupBy))? groupBy: [];
    this._limit = limit;
    this._offset = offset;
};


//Prototypes
QueryBuilder.prototype = {

    /*
     * 
     * @name        buildWhere
     * @param       none
     * @throws      none
     * @returns     (string) whereString
     * 
     * Builds where statement using the given where object.
     * 
     */
    buildWhere: function(having)
    {
        if(having === true)
        {
            this._where = this._having;
        }
        var whereString = '';
        for(var whereKey in this._where){
            if(this._where.hasOwnProperty(whereKey)){
                //if it is a object wrap OR statement
                if(typeof this._where[whereKey].value === 'object'
                    && this._where[whereKey].value != null
                    && this._where[whereKey].value instanceof Array === false)
                {
                    //if value is an object do OR statement
                    whereString += '(';
                    for(var valueKey in this._where[whereKey].value)
                    {
                        if(this._where[whereKey].value.hasOwnProperty(valueKey))
                        {
                            if(this._where[whereKey].value[valueKey].value instanceof Array)
                            {
                                //if value is string simply wrap with condition
                                if(this._where[whereKey].value[valueKey].noQuote === undefined)
                                {
                                    var isValueNull = ' ("'+this.replaceArray(this._where[whereKey].value[valueKey].value).join('","')+'")';
                                }
                                else
                                {
                                    var isValueNull = ' ('+this.replaceArray(this._where[whereKey].value[valueKey].value).join('","')+')';
                                }
                                if(this._where[whereKey].value[valueKey].noTilt === undefined)
                                {
                                    whereString += '(`'+valueKey+'` '+this._where[whereKey].value[valueKey].condition+ isValueNull+') OR ';
                                }
                                else
                                {
                                    whereString += '('+valueKey+' '+this._where[whereKey].value[valueKey].condition+ isValueNull+') OR ';
                                }
                            }
                            else
                            {
                                if(this._where[whereKey].value[valueKey].noQuote === undefined)
                                {
                                    var isValueNull = (this._where[whereKey].value[valueKey].value == null)? ' NULL' : ' "'+new String(this._where[whereKey].value[valueKey].value).replace(new RegExp('"', 'g'), '&quote;') +'"';
                                }
                                else
                                {
                                    var isValueNull = (this._where[whereKey].value[valueKey].value == null)? ' NULL' : ' '+new String(this._where[whereKey].value[valueKey].value).replace(new RegExp('"', 'g'), '&quote;') +'';
                                }

                                if(this._where[whereKey].value[valueKey].noTilt === undefined)
                                {
                                    whereString += '(`'+valueKey+'` '+this._where[whereKey].value[valueKey].condition+ isValueNull+ ') OR ';
                                }
                                else
                                {
                                    whereString += '('+valueKey+' '+this._where[whereKey].value[valueKey].condition+ isValueNull + ') OR ';
                                }
                            }
                        }
                    }
                    whereString = whereString.slice(0, whereString.length-4)+')';
                }
                //if it is an array prepare for IN statement
                else if(this._where[whereKey].value instanceof Array)
                {
                    if(this._where[whereKey].value.length > 0)
                    {
                        //if value is string simply wrap with condition
                        if (this._where[whereKey].noQuote === undefined) {
                            var isValueNull = ' ("' + this.replaceArray(this._where[whereKey].value).join('","') + '")';
                        }
                        else {
                            var isValueNull = ' (' + this.replaceArray(this._where[whereKey].value).join('","') + ')';
                        }
                        if (this._where[whereKey].noTilt === undefined) {
                            whereString += '(`' + whereKey + '` ' + this._where[whereKey].condition + isValueNull + ')';
                        }
                        else {
                            whereString += '(' + whereKey + ' ' + this._where[whereKey].condition + isValueNull + ')';
                        }
                    }
                    else
                    {
                        whereString += '(' + whereKey + ' IS ' + null + ')';
                    }
                }
                else
                {
                    //if value is string simply wrap with condition
                    if(this._where[whereKey].noQuote === undefined)
                    {
                        var isValueNull = (this._where[whereKey].value == null)? ' NULL' : ' "'+new String(this._where[whereKey].value).replace(new RegExp('"', 'g'), '&quote;')+'"';
                    }
                    else
                    {
                        var isValueNull = (this._where[whereKey].value == null)? ' NULL' : ' '+new String(this._where[whereKey].value).replace(new RegExp('"', 'g'), '&quote;')+'';
                    }
                    if(this._where[whereKey].noTilt === undefined)
                    {
                        whereString += '(`'+whereKey+'` '+this._where[whereKey].condition+ isValueNull+')';
                    }
                    else
                    {
                        whereString += '('+whereKey+' '+this._where[whereKey].condition+ isValueNull+')';
                    }
                }
                whereString += ' AND ';
            }
        }
        whereString = whereString.slice(0, whereString.length-4);
        return whereString;
    },

    /*
     * 
     * @name        buildSelect
     * @param       (bool) size, (bool) oneRecord
     * @throws      none
     * @returns     (string) selectStmt
     * @see         Check mysql documentation
     * @todo:       Code review and make it simpler. Its too complex with lot of if statements
     * 
     * Builds select statement using given parameters like where, fields, orderby etc.
     * 
     */
    buildSelect: function(size, oneRecord)
    {
        this._selectStmt = 'SELECT ';


        //check if the query is to get total no of records
        if(size)
        {
            this._selectStmt += 'COUNT(*) AS `TotalRows`';
        }
        //check if fields param is set as array and its not empty
        else if(this._fields.length > 0)
        {
            this._selectStmt += this._fields.join(',');
        }
        //otherwise select all fields
        else
        {
            this._selectStmt += '*';
        }

        //set the tablename
        this._selectStmt += ' FROM '+this._tableName;

        //check if where is set as an object and its not undefined
        if(this._where !== undefined)
        {
            this._selectStmt += ' WHERE '+this.buildWhere();
        }

        //check if groupBy is set as an array and its not empty
        if(this._groupBy.length > 0)
        {
            this._selectStmt += ' GROUP BY '+this._groupBy.join(",");
        }

        //check if having is set as an object and its not undefined
        if(this._having !== undefined)
        {
            this._selectStmt += ' HAVING '+this.buildWhere(true);
        }

        //check if orderBy is set as an array and its not empty
        if(this._orderBy.length > 0)
        {
            this._selectStmt += ' ORDER BY '+this._orderBy.join(",");
        }

        //check if limit is set
        if(!size && !oneRecord)
        {
            if(this._limit !== undefined)
            {
                this._selectStmt += ' LIMIT '+this._limit;
                if(this._offset >= 0)
                {
                    this._selectStmt +=', '+this._offset;
                }
            }
        }
        //check if the request is for one record
        if(oneRecord)
        {
            this._selectStmt += ' LIMIT 1';
        }
        return this._selectStmt;
    },

    /*
     * 
     * @name        buildInsert
     * @param       (object) object
     * @throws      none
     * @returns     (string) insertStmt
     * @see         check mysql documentation
     * @todo:       Needs code review and make it simpler. 3 loops and lot of if conditions. 3 look inside a loop.
     * @todo:       throw new Error() needs to write and test CoreException class. Error codes has to be created in config.
     * 
     * Builds the Insert or Update mysql statement with the give object and set params.
     * 
     */
    buildInsert: function(object)
    {

        if(object === undefined)
        {
            Message.add("error", 'unknownError');
        }

        //build insert
        this._insertStmt = 'INSERT INTO `'+ this._tableName+'` (';

        //loop through each object to get its object keys to build field names
        for(var objectKey in object)
        {
            if(object.hasOwnProperty(objectKey))
            {
                for(var key in object[objectKey])
                {
                    if(object[objectKey].hasOwnProperty(key))
                    {
                        //create fields in comma seprated
                        this._insertStmt += key+', ';
                    }
                }
                break;
            }
        }
        //slice up the additional characters
        this._insertStmt = this._insertStmt.slice(0, this._insertStmt.length-2);
        this._insertStmt += ') VALUES ';

        var tempInsertArray = new Array();
        //create values set
        for(var objectKey in object)
        {
            if(object.hasOwnProperty(objectKey))
            {
                var tempInsertStmt = '';
                //Creating bulk insert option if the object has more than one row
                tempInsertStmt += '(';
                for(var key in object[objectKey])
                {
                    if(object[objectKey].hasOwnProperty(key))
                    {
                        tempInsertStmt += (object[objectKey][key] == null)? 'NULL, ':  '"'+new String(object[objectKey][key]).replace(new RegExp('"', 'g'), '&quote;')+'", ';
                    }
                }
                tempInsertStmt = tempInsertStmt.slice(0, tempInsertStmt.length-2);
                tempInsertStmt += ')';
                tempInsertArray.push(tempInsertStmt);
            }
        }

        this._insertStmt += tempInsertArray.join(', ');//this._insertStmt.slice(0, this._insertStmt.length-2);

        // Building on duplicate key 
        this._insertStmt += ' ON DUPLICATE KEY UPDATE ';

        for(var objectKey in object)
        {
            if(object.hasOwnProperty(objectKey))
            {
                for(var key in object[objectKey])
                {
                    if(object[objectKey].hasOwnProperty(key))
                    {
                        // set key value par for the on duplicate key update
                        this._insertStmt += '`'+key+'` = VALUES('+key+'), ';
                    }
                }
                break;
            }
        }
        // slice up the additional characters
        this._insertStmt = this._insertStmt.slice(0, this._insertStmt.length-2);

        return this._insertStmt;
    },

    /*
     * 
     * @name        buildUpdate
     * @param       (object) object
     * @throws      none
     * @returns     (string) updateStmt
     * @see         see mysql documentation 
     * @todo:       throw new Error() needs to write and test CoreException class. Error codes has to be created in config.
     * 
     * Builds the update statement using the given params.
     * 
     */
    buildUpdate: function(object)
    {
        if(object === undefined)
        {
            Message.add("error", 'unknownError');
        }
        this._updateStmt = 'UPDATE `'+this._tableName;
        this._updateStmt += '` SET ';

        //loop through key value pair to build set command
        for(var key in object){
            if(object.hasOwnProperty(key)){
                var checkIfNull = (object[key] == null)? 'NULL': '"'+object[key].replace(new RegExp('"', 'g'), '&quote;')+'"';
                this._updateStmt += '`'+key+'` = '+checkIfNull+', ';
            }
        }

        this._updateStmt = this._updateStmt.slice(0, this._updateStmt.length-2);

        //check if where is set as an object and its not undefined
        if(this._where !== undefined)
        {
            //build where statement
            this._updateStmt += ' WHERE '+this.buildWhere();
        }

        return this._updateStmt;
    },

    replaceArray: function(find) {
        var returnArray = new Array();
        for (var i = 0; i < find.length; i++) {
            returnArray.push(new String(find[i]).replace(new RegExp('"', 'g'), '&quote;'));
        }
        return returnArray;
    }
};


exports.QueryBuilder = QueryBuilder;