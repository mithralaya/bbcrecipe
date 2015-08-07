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

//Private variables and dependencies
var _coreConfig = require('../../CoreConfig/config');

//RDBMS variables
var mysqlSelectHost = '';
var mysqlSelectUser = '';
var mysqlSelectPass = '';
var mysqlSelectName = '';

var mysqlUpsertHost = '';
var mysqlUpsertUser = '';
var mysqlUpsertPass = '';
var mysqlUpsertName = '';


//Time series DB variables

//Decide which DB config to set according to environment set in CoreConfig
switch(_coreConfig.environment){
    case "development":
        mysqlSelectHost = 'localhost';
        mysqlSelectUser = '';
        mysqlSelectPass = '';
        mysqlSelectName = 'bbcrecipe';

        mysqlUpsertHost = 'localhost';
        mysqlUpsertUser = '';
        mysqlUpsertPass = '';
        mysqlUpsertName = 'bbcrecipe';

        break;

    case "beta":
        mysqlSelectHost = 'localhost';
        mysqlSelectUser = '';
        mysqlSelectPass = '';
        mysqlSelectName = 'bbcrecipe';

        mysqlUpsertHost = 'localhost';
        mysqlUpsertUser = '';
        mysqlUpsertPass = '';
        mysqlUpsertName = 'bbcrecipe';


        break;

    case "staging":
        mysqlSelectHost = 'localhost';
        mysqlSelectUser = '';
        mysqlSelectPass = '';
        mysqlSelectName = 'bbcrecipe';

        mysqlUpsertHost = 'localhost';
        mysqlUpsertUser = '';
        mysqlUpsertPass = '';
        mysqlUpsertName = 'bbcrecipe';

        break;

    case "production":
        mysqlSelectHost = 'localhost';
        mysqlSelectUser = '';
        mysqlSelectPass = '';
        mysqlSelectName = 'bbcrecipe';

        mysqlUpsertHost = 'localhost';
        mysqlUpsertUser = '';
        mysqlUpsertPass = '';
        mysqlUpsertName = 'bbcrecipe';

        break;

    default:
        mysqlSelectHost = 'localhost';
        mysqlSelectUser = '';
        mysqlSelectPass = '';
        mysqlSelectName = 'bbcrecipe';

        mysqlUpsertHost = 'localhost';
        mysqlUpsertUser = '';
        mysqlUpsertPass = '';
        mysqlUpsertName = 'bbcrecipe';

        break;
}

module.exports = {
       
    moduleName: "CoreDB",
    
    // Define MySQL configuration        
    mySQLDB: {
        select: {
            dbName: mysqlSelectName,
            dbUser: mysqlSelectUser,
            dbPass: mysqlSelectPass,
            dbHost: mysqlSelectHost
        },
        upsert: {
            dbName: mysqlUpsertName,
            dbUser: mysqlUpsertUser,
            dbPass: mysqlUpsertPass,
            dbHost: mysqlUpsertHost
        }

    }
    
    // Other configuration goes here
    
};

