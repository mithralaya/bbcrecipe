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
var environment = "development";

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
switch(environment){
    case "development":
        mysqlSelectHost = 'bbcrecipe.cgwi22ojphnb.eu-west-1.rds.amazonaws.com';
        mysqlSelectUser = 'admin';
        mysqlSelectPass = 'SuperKings12';
        mysqlSelectName = 'bbcrecipe';

        mysqlUpsertHost = 'bbcrecipe.cgwi22ojphnb.eu-west-1.rds.amazonaws.com';
        mysqlUpsertUser = 'admin';
        mysqlUpsertPass = 'SuperKings12';
        mysqlUpsertName = 'bbcrecipe';

        break;

    case "beta":
        mysqlSelectHost = 'bbcrecipe.cgwi22ojphnb.eu-west-1.rds.amazonaws.com';
        mysqlSelectUser = 'admin';
        mysqlSelectPass = 'SuperKings12';
        mysqlSelectName = 'bbcrecipe';

        mysqlUpsertHost = 'bbcrecipe.cgwi22ojphnb.eu-west-1.rds.amazonaws.com';
        mysqlUpsertUser = 'admin';
        mysqlUpsertPass = 'SuperKings12';
        mysqlUpsertName = 'bbcrecipe';

        break;

    case "staging":
        mysqlSelectHost = 'bbcrecipe.cgwi22ojphnb.eu-west-1.rds.amazonaws.com';
        mysqlSelectUser = 'admin';
        mysqlSelectPass = 'SuperKings12';
        mysqlSelectName = 'bbcrecipe';

        mysqlUpsertHost = 'bbcrecipe.cgwi22ojphnb.eu-west-1.rds.amazonaws.com';
        mysqlUpsertUser = 'admin';
        mysqlUpsertPass = 'SuperKings12';
        mysqlUpsertName = 'bbcrecipe';

        break;

    case "production":
        mysqlSelectHost = 'bbcrecipe.cgwi22ojphnb.eu-west-1.rds.amazonaws.com';
        mysqlSelectUser = 'admin';
        mysqlSelectPass = 'SuperKings12';
        mysqlSelectName = 'bbcrecipe';

        mysqlUpsertHost = 'bbcrecipe.cgwi22ojphnb.eu-west-1.rds.amazonaws.com';
        mysqlUpsertUser = 'admin';
        mysqlUpsertPass = 'SuperKings12';
        mysqlUpsertName = 'bbcrecipe';

        break;

    default:
        mysqlSelectHost = 'bbcrecipe.cgwi22ojphnb.eu-west-1.rds.amazonaws.com';
        mysqlSelectUser = 'admin';
        mysqlSelectPass = 'SuperKings12';
        mysqlSelectName = 'bbcrecipe';

        mysqlUpsertHost = 'bbcrecipe.cgwi22ojphnb.eu-west-1.rds.amazonaws.com';
        mysqlUpsertUser = 'admin';
        mysqlUpsertPass = 'SuperKings12';
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

