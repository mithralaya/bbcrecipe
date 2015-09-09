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

//private vars and dependencies
var Message = require('../../Message/message');

//private variables and dependencies includes
var _mysql = require('mysql');
var _config = require('../config/config');



//create mysql pool connection requires nodejs mysql this connection is used only for selects.
var _connectionSelect = _mysql.createPool({
    host                : _config.mySQLDB.select.dbHost,
    user                : _config.mySQLDB.select.dbUser,
    password            : _config.mySQLDB.select.dbPass,
    database            : _config.mySQLDB.select.dbName,
    supportBigNumbers   : true,
    connectTimeout      : 7000,
    connectionLimit     : 20,
    queueLimit          : 20
});


function Connection()
{

    //create mysql connection requires nodejs mysql this connection is used only for updates and inserts.
    var _connectionUpsert = _mysql.createConnection({
        host                : _config.mySQLDB.upsert.dbHost,
        user                : _config.mySQLDB.upsert.dbUser,
        password            : _config.mySQLDB.upsert.dbPass,
        database            : _config.mySQLDB.upsert.dbName,
        supportBigNumbers   : true,
        connectTimeout      : 7000
    });

    //public variables
    
    /*
     * 
     * @name        executeUpsert
     * @param       (string) sql, (function) callback, (bool) isInsert, (Message) Message
     * @throws      Executes the given sql query.
     * @returns     Callback function no return
     * @see         https://github.com/felixge/node-mysql
     * 
     * Creates MySQL connection and executes a query and pass the result to the 
     * callback function. Throws custom error if _connection.query produces error.
     * Also ends the connection.
     * 
     */
    this.executeUpsert = function(sql, callback, isInsert, Message)
    {
        //connects to mysql.
        _connectionUpsert.connect(function(connectionError){
            if(connectionError)
            {
                console.log(connectionError);
                //throws error if connection or sql gone wrong
                Message.add("error", 'serviceDown');
                Message.add("devError", 'unknownError');
                callback(false);
            }
            else
            {
                //executes the query passed
                _connectionUpsert.query(sql, function(error, rows, fields) {
                    Message.incerementQuery();
                    if(error)
                    {
                        console.log(error+sql);
                        _connectionUpsert.end();
                        //throws error if connection or sql gone wrong
                        Message.add("error", 'unknownError');
                        Message.add("devError", "seriousError", "Database errors at resource server side");
                        callback(false);
                    }
                    else
                    {
                        if(isInsert)
                        {
                            var lastInsertId  = rows.insertId;
                            _connectionUpsert.end();
                            //executes the callback function
                            callback(lastInsertId);
                        }
                        else
                        {
                            _connectionUpsert.end();
                            //executes the callback function
                            callback(rows);
                        }
                    }
                });
            }
        });
    };

    /*
     *
     * @name        executeSelect
     * @param       (string) sql, (function) callback, (Message) Message
     * @throws      Executes the given sql query.
     * @returns     Callback function no return
     * @see         https://github.com/felixge/node-mysql
     *
     * Creates MySQL connection and executes a query and pass the result to the
     * callback function. Throws custom error if _connection.query produces error.
     * Also release the connection.
     *
     */
    this.executeSelect = function(sql, callback, Message)
    {
        //connects to mysql.
        _connectionSelect.getConnection(function(connectionError, Connection){
            if(connectionError)
            {
                console.log(connectionError);
                //throws error if connection or sql gone wrong
                Message.add("error", 'serviceDown');
                Message.add("devError", 'unknownError');
                callback(false);
            }
            else
            {
                //executes the query passed
                Connection.query(sql, function(error, rows) {
                    Message.incerementQuery();
                    if(error)
                    {
                        Connection.release();
                        console.log(error+sql);
                        //throws error if connection or sql gone wrong
                        Message.add("error", 'unknownError');
                        Message.add("devError", "seriousError", "Database errors at resource server side");
                        callback(false);
                    }
                    else
                    {
                        Connection.release();
                        //executes the callback function
                        callback(rows);
                    }
                });
            }
        });
    };

}


exports.Connection = Connection;