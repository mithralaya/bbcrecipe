/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


module.exports = {
    
    messages        : {
        error       : {
            "serviceDown": {
                    "id"         : 0,
                    "statusCode" : 503,
                    "title"      : "Service Down Temporarily",
                    "details"    : "Something went wrong. Please contact the site administrator info@getshopwave.com"
            },
            "unknownError": {
                   "id"         : 1,
                   "statusCode" : 500,
                   "title"      : "Unknown Error",
                   "details"    : "Something went wrong. Please contact the site administrator info@getshopwave.com"
            },
            //login errors
            "loginFailed": {
                   "id"         : 2,
                   "statusCode" : 401,
                   "title"      : "Login Failed",
                   "details"    : "Invalid username/password combination or invalidated account"
            },
            //login & register errors            
            "usernameInvalid": {
                   "id"         : 3,
                   "statusCode" : 400,
                   "title"      : "Username Invalid",
                   "details"    : "Please enter a valid username"
            },
            "passwordInvalid": {
                   "id"         : 4,
                   "statusCode" : 400,
                   "title"      : "Password Invalid",
                   "details"    : "Please enter a valid password. Your password must be greater than 6 characters and less than 15 characters"
            },
            //register errors
            "firstnameEmpty": {
                   "id"         : 5,
                   "statusCode" : 400,
                   "title"      : "Firstname Empty",
                   "details"    : "Please enter your First Name"
            },
            "lastnameEmpty": {
                   "id"         : 6,
                   "statusCode" : 400,
                   "title"      : "Lastname Empty",
                   "details"    : "Please enter your Last Name"
            },
            "emailInvalid": {
                   "id"         : 7,
                   "statusCode" : 400,
                   "title"      : "Email Invalid",
                   "details"    : "The email supplied is invalid"
            },
            "usernameAlreadyExist": {
                   "id"         : 8,
                   "statusCode" : 400,
                   "title"      : "Username Already Exist",
                   "details"    : "The chosen username already exist"
            },
            "passwordMismatch": {
                   "id"         : 10,
                   "statusCode" : 400,
                   "title"      : "Password missmatch",
                   "details"    : "Please check confirm password. It is different from password field"
            },
            "captchaNotValid": {
                   "id"         : 11,
                   "statusCode" : 400,
                   "title"      : "Captcha Error",
                   "details"    : "Please enter the letters as seen in the image"
            },
            //Verify email
            "verifyInvalid": {
                   "id"         : 12,
                   "statusCode" : 400,
                   "title"      : "Verification Invalid",
                   "details"    : "Verification code is invalid"
            },
            "emailNotSent": {
                   "id"         : 13,
                   "statusCode" : 500,
                   "title"      : "Email server down",
                   "details"    : "Something went wrong with our email server."
            },
            "emailAlreadyExist": {
                "id"         : 14,
                "statusCode" : 400,
                "title"      : "Email Already Exists",
                "details"    : 'This email is already registered with us. Please <a href="/forgotPassword">click here</a> to retrive your password'
            },
            "passwordResetLinkInvalid": {
                "id"         : 15,
                "statusCode" : 400,
                "title"      : "Password Reset Link Invalid",
                "details"    : 'Your password reset link is invalid. If you like to reset your password please <a href="/forgotPassword">click here</a>'
            },
            "currentPasswordInvalid": {
                "id"         : 16,
                "statusCode" : 400,
                "title"      : "Check Your Current Password",
                "details"    : 'The password that you entered does not match with this account. If you forgot your password, logout this account and use forgot password link from login page.'
            },
            "accountNotFound": {
                "id"         : 17,
                "statusCode" : 400,
                "title"      : "Account Not Found",
                "details"    : 'No account found with the email address supplied. Would you like to <a href="/register">Register</a>?'
            }
            
        },
        success     : {
            "emailSent": {
                   "id"         : 200,
                   "statusCode" : 200,
                   "title"      : "Email successfully sent",
                   "details"    : "Email succesfully sent to your email address"                           
            },
            "verifySuccess": {
                   "id"         : 201,
                   "statusCode" : 200,
                   "title"      : "Account verified",
                   "details"    : "Your account has been verified"
            },
            "tokenValid": {
                   "id"         : 202,
                   "statusCode" : 200,
                   "title"      : "Token is valid",
                   "details"    : "Token is validated and found valid."
            },
            "requestSuccessful": {
                   "id"         : 203,
                   "statusCode" : 200,
                   "title"      : "Request Processed Successfully",
                   "details"    : "The request has been successfully completed."
            },
            "noContent": {
                    "id"        : 204,
                    "statusCode": 204,
                    "title"     : "No content to return",
                    "details"   : "End of the page or no content to return for your request"
            },
            "resetContent": {
                    "id"        : 205,
                    "statusCode": 205,
                    "title"     : "Content reset",
                    "details"   : "Your request was processed successfully, it is recommended that you refresh your contents to see these changes."
            },
            "created": {
                    "id"        : 206,
                    "statusCode": 201,
                    "title"     : "Resource Created",
                    "details"   : "Your resource is created partially or fully. Please check further message or process log"
            },
            "accountChanged": {
                    "id"        : 207,
                    "statusCode": 205,
                    "title"     : "Account Updated",
                    "details"   : "Your account has been successfully updated to your latest changes. If you have changed your email, username or password then please use them the next time you log in."
            }
    
        },
        devError    : {
            "seriousError": {
                "id"         : 899,
                "statusCode" : 500,
                "title"      : "Unknown Error",
                "details"    : "Something went wrong. Please contact the site administrator"
            },
            "unknownError"  : {
                "id"         : 900,
                "statusCode" : 503,
                "title"      : "Service Down",
                "details"    : "The service went down. Please check back later."
            },
            "invalidClient" : {
                   "id"         : 901,
                   "statusCode" : 400,
                   "title"      : "Invalid Client",
                   "details"    : "The client_id supplied is invalid"
            },
            "unauthorizedClient": {
                   "id"         : 902,
                   "statusCode" : 401,
                   "title"      : "Unauthorised Client",
                   "details"    : "The app is not authorized to use our service."
            },
            "redirectUriMismatch": {
                   "id"         : 903,
                   "statusCode" : 400,
                   "title"      : "Redirect URI Mismatch",
                   "details"    : "The redirect_uri supplied is not valid or is not registered with us."
            },
            "accessDenied": {
                   "id"         : 904,
                   "statusCode" : 401,
                   "title"      : "Access Denied",
                   "details"    : "Access denied for the request"
            },
            "invalidScope": {
                   "id"         : 905,
                   "statusCode" : 400,
                   "title"      : "Invalid Scope",
                   "details"    : "The scope provided is invalid"
            },
            "invalidGrant": {
                   "id"         : 906,
                   "statusCode" : 400,
                   "title"      : "Invalid Grant",
                   "details"    : "The grant type requested is invalid"
            },
            "invalidToken": {
                   "id"         : 907,
                   "statusCode" : 401,
                   "title"      : "Invalid Token",
                   "details"    : "The token supplied is invalid"
            },
            "expiredToken": {
                   "id"         : 908,
                   "statusCode" : 401,
                   "title"      : "Expired Token",
                   "details"    : "Token expired or invalid. Please renew your token"
            },
            "invalidCode": {
                   "id"         : 909,
                   "statusCode" : 401,
                   "title"      : "Invalid Code",
                   "details"    : "The code provided is invalid for your client_id"
            },
            "notFound": {
                   "id"         : 910,
                   "statusCode" : 404,
                   "title"      : "Not Found",
                   "details"    : "The resource you are looking for does not exist"
            },
            "authHeaderInvalid": {
                   "id"         : 911,
                   "statusCode" : 401,
                   "title"      : "Authorization Header Invalid",
                   "details"    : "The authorization header is invalid. The correct format is Authorization: {token_type} {accessToken}"
            },
            "resourceNotAllowed": {
                    "id"        : 912,
                    "statusCode": 403,
                    "title"     : "Resource Not Allowed For Specified User",
                    "details"   : "The user does not own this resource and its forbidden"
            },
            "missingRequiredParam": {
                    "id"        : 913,
                    "statusCode": 400,
                    "title"     : "Required parameter or object missing in request",
                    "details"   : "One or more of the required parameters or object formation is missing in your request. Please refer the documentation"
            },
            "invalidEmail": {
                    "id"        : 914,
                    "statusCode": 400,
                    "title"     : "Email address is not valid",
                    "details"   : "One or more of the required parameters or object formation is missing in your request. Please refer the documentation"
            },
            "tooManyRequest": {
                    "id"        : 914,
                    "statusCode": 429,
                    "title"     : "Cannot handle too many request",
                    "details"   : "There is a limit for every object you can send to our server and you are exceding that."
            },
            "promotionCodeUnique": {
                    "id"        : 915,
                    "statusCode": 400,
                    "title"     : "Promotion code is unique",
                    "details"   : "Promotion code is unique to a basket. Promotion code once used on one basket cannot be used again."
            },
            "unsupportedMediaType": {
                    "id"        : 916,
                    "statusCode": 415,
                    "title"     : "Unsupported Media Type",
                    "details"   : "The media type is unsupported by the server."
            },
            "serverError": {
                    "id"        : 917,
                    "statusCode": 500,
                    "title"     : "Internal Server Error",
                    "details"   : "Something went wrong."
            },
            "jsonWebTokenNotFound": {
                "id"        : 918,
                "statusCode": 400,
                "title"     : "JSON Web Token Invalid or Not Found",
                "details"   : "JSON web token is not supplied or found invalid. Please supply a valid HMAC-SHA256 encoded token. The correct format is base64encode(JWT_Header).base64encode(Payload).HMACSHA256(Part1_encodedString, 'shared_secret'). Please refer to <a href='http://jwt.io' target='_blank'>http://jwt.io</a> for more details."
            }
        },
        "devWarning"    : {
            "basketCompletedDeleted": {
                "id"        : 601,
                "statusCode": 403,
                "title"     : "Baskets Already Complete",
                "details"   : "Each of the following basket IDs have already been flagged as complete and thus no longer editable. The developer should ensure that they are flagged as complete on the client application and remove the abilty to edit it further. MoreInfo supplies a list of Shopwave Basket IDs which have been effected by this warning. ObjectRef supplies a list of the client app's IDs which have been affected by this warning."
            },
            "transactionCompleted": {
                "id"        : 601,
                "statusCode": 403,
                "title"     : "Transaction Already Complete",
                "details"   : "Each of the following transaction IDs have already been flagged as complete and thus no longer editable. The developer should ensure that they are flagged as complete on the client application and remove the abilty to edit it further. MoreInfo supplies a list of Shopwave Transaction IDs which have been effected by this warning. ObjectRef supplies a list of the client app's IDs which have been affected by this warning."
            }
        }
    }
};