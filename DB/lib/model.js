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

// Set private vars and dependencies
var Connection = require('./connection').Connection;
var QueryBuilder = require('./queryBuilder').QueryBuilder;


var Model = function(tableName, fields, where, groupBy, orderBy, limit, offset, identifierField) {
    this.tableName          = tableName;
    this.identifierField    = identifierField;
    this.fields             = fields;
    this.where              = where;
    this.orderBy            = orderBy;
    this.groupBy            = groupBy;
    this.limit              = limit;
    this.offset             = offset;
    this.isInsert           = true;
    this.returnIds          = false;

    //Inheritance workaround
    this.query = new QueryBuilder(this.tableName, this.fields, this.where, this.groupBy, this.orderBy, this.limit, this.offset);
    this.connection = new Connection();
};

//inherit connection
/*
 * @todo:       Inheritance is not working tried util.inherit and Model.prototype.__proto__
 */

//prototypes
Model.prototype = {
    
    /*
     *
     * @name        getItems
     * @param       callback
     * @throws      none
     * @returns     none
     *
     * Build query and execute to get multiple rows from mysql table
     *
     */
    getItems: function(callback, Message)
    {
        var query = this.query.buildSelect(false, false);
        //console.log(query);
        this.connection.executeSelect(query, callback, Message);
    },

    /*
     *
     * @name        getItem
     * @param       callback
     * @throws      none
     * @returns     none
     *
     * Build query and execute to get one rows from mysql table
     *
     */
    getItem: function(callback, Message)
    {
        var query = this.query.buildSelect(false, true);
        this.connection.executeSelect(query, callback, Message);
    },

    /*
     *
     * @name        getSize
     * @param       callback
     * @throws      none
     * @returns     none
     *
     * Build query and execute to get one rows from mysql table
     *
     */
    getSize: function(callback, Message)
    {
        var query = this.query.buildSelect(true, true);
        this.connection.executeSelect(query, callback, Message);
    },
    /*
     *
     * @name        getSize
     * @param       callback
     * @throws      none
     * @returns     none
     *
     * Build query and execute to get total number of rows for the given query from mysql table
     *
     */
    save: function(object, callback, Message)
    {
        var query = null;
        var incrementor = 0;
        var returnId = this.returnIds;
        //deside whether to insert or update
        if(this.where !== undefined)
        {
            decide = 'insert';
            if(!this.isInsert)
            {
                decide = 'update';
            }
        }
        else
        {
            decide = 'update';
            if(this.isInsert)
            {
                decide = 'insert';
            }
        }

        // switch insert or update
        switch(decide)
        {
            case 'insert':
                    query = this.query.buildInsert(object);
                break;
            case 'update':
                    query = this.query.buildUpdate(object);
                break;
            default:
                    query = this.query.buildInsert(object);
                break;
        }

        //executes the query
        if(query !== null)
        {
            // if its a insert request
            if(this.isInsert)
            {
                //execute insert statement
                this.connection.executeUpsert(query, function(id){
                    // check return IDS IS TRUE
                    if(returnId)
                    {
                        // increment and set ids from first insert id returned
                        for(var objectKey in object)
                        {
                            if(object.hasOwnProperty(objectKey))
                            {
                                object[objectKey].id = id+incrementor;
                                incrementor++;
                            }
                        }
                        callback(object);
                    }
                    else
                    {
                        callback(id);
                    }
                }, this.isInsert, Message);
            }
            else
            {
                this.connection.executeUpsert(query, callback, this.isInsert, Message);
            }
        }
    }
};


module.exports = Model;
