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

//private variable and dependencies

var config = require('./config/config');

var Message = function() {

    this._message = {};
    this._statusCode = 200;
    this._numberOfQueries = 0;

    this.add = function(type, errorCode, customMessage, objectRef)
    {
        // initialise message and its type
        if (this._message[type] === undefined)
        {
            this._message[type] = {};
        }
        // initialise by status code to unify all statusCodes
        if (this._message[type][config.messages[type][errorCode].statusCode] === undefined)
        {
            this._message[type][config.messages[type][errorCode].statusCode] = {};
        }
        // set status code
        var statusCode = parseInt(config.messages[type][errorCode].statusCode);
        // always set the greatest status code as primary
        this._statusCode = (statusCode > this._statusCode) ? statusCode : this._statusCode;

        // set other parameters to message
        this._message[type][config.messages[type][errorCode].statusCode][errorCode] = {
            id: config.messages[type][errorCode].id,
            statusCode: config.messages[type][errorCode].statusCode,
            title: config.messages[type][errorCode].title,
            details: config.messages[type][errorCode].details
        };
        // set the custom message if any
        if (customMessage !== undefined)
        {
            this._message[type][config.messages[type][errorCode].statusCode][errorCode].customMessage = customMessage;
        }
        this._message[type][config.messages[type][errorCode].statusCode][errorCode].objectRef = new Array();
        // set object references for a message if any
        if (objectRef !== undefined && objectRef instanceof Array)
        {
            this._message[type][config.messages[type][errorCode].statusCode][errorCode].objectRef = objectRef;
        }
    },

    this.incerementQuery = function()
    {
        this._numberOfQueries++;
    },

    this.get = function (type)
    {
        return this._message[type];
    },

    this.getStatusCode = function()
    {
        return this._statusCode;
    },

    this.getNoOfQueries = function()
    {
        return this._numberOfQueries;
    }

};

module.exports = Message;