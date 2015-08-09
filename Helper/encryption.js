/*
 * 
 * @Author               : Karthik Vasudevan
 * @AuthorEmail          : mithralaya@gmail.com
 * @Licence              : All parts  is licenced to ©karthik. Copying, or accessing the file or its content is prohibited.
 * @FileName             : encryption.js
 * @ModuleName           : CoreHelper
 * @Purpose              : To register and get user information. It can aslo dose email verification and password reset.
 * 
 * Further comments goes here
 */

// setting dependency

var sharedHash = "e2f70f910294d55329f66b17dc94945308f5ecd3f922eeff4ebe77c160f0669b";
var Encryption = function(){
    //private vars
    
    //setting public vars
    this.hash = '';
};

Encryption.prototype = {
    /*
     * @name    createHash
     * @return  (string) hash
     * @params  (string) hashName
     * @purpose Create a random hash key for token purposes
     * 
     */
    createHash: function(hashName){
        var date = new Date();
        var rand = Math.floor((Math.random()*10000000)+1);
        var salt = sharedHash;
        
        var crypto = require('crypto');
        var shasum = crypto.createHash('sha1');
        shasum.update(hashName+date+rand+salt);
        this.hash = shasum.digest('hex');
        
        return this.hash;
    }
            
}

module.exports = new Encryption();