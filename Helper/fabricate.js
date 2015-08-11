/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

exports.index = function(req, res){
    var statusCodeMain = req.messageInstance.getStatusCode();
    var devErrors = req.messageInstance.get("devError");
    var devWarnings = req.messageInstance.get("devWarning");
    var success = req.messageInstance.get("success");
    //req.built.api = {};
    //req.built.api.message = {};
    if(devErrors !== undefined)
    {
        req.built.api.message.errors = {};
        for(var statusCode in devErrors)
        {
            if(devErrors.hasOwnProperty(statusCode))
            {
                for(var errorCode in devErrors[statusCode])
                {
                    if(devErrors[statusCode].hasOwnProperty(errorCode))
                    {
                        req.built.api.message.errors[devErrors[statusCode][errorCode].id] = {};
                        req.built.api.message.errors[devErrors[statusCode][errorCode].id].id = devErrors[statusCode][errorCode].id;
                        //req.built.api.message.errors[devErrors[statusCode][errorCode].id].code = errorCode;
                        req.built.api.message.errors[devErrors[statusCode][errorCode].id].title = devErrors[statusCode][errorCode].title;
                        req.built.api.message.errors[devErrors[statusCode][errorCode].id].details = devErrors[statusCode][errorCode].details;
                        if(devErrors[statusCode][errorCode].customMessage !== undefined)
                        {
                            req.built.api.message.errors[devErrors[statusCode][errorCode].id].moreInfo = devErrors[statusCode][errorCode].customMessage;
                        }
                        if(devErrors[statusCode][errorCode].objectRef !== undefined && devErrors[statusCode][errorCode].objectRef.length > 0)
                        {
                            req.built.api.message.errors[devErrors[statusCode][errorCode].id].objectRef = devErrors[statusCode][errorCode].objectRef;
                        }
                    }
                }
            }
        }
    }

    if(devWarnings !== undefined)
    {
        req.built.api.message.warnings = {};
        for(var statusCode in devWarnings)
        {
            if(devWarnings.hasOwnProperty(statusCode))
            {
                for(var errorCode in devWarnings[statusCode])
                {
                    if(devWarnings[statusCode].hasOwnProperty(errorCode))
                    {
                        req.built.api.message.warnings[devWarnings[statusCode][errorCode].id] = {};
                        req.built.api.message.warnings[devWarnings[statusCode][errorCode].id].id = devWarnings[statusCode][errorCode].id;
                        //req.built.api.message.warnings[devWarnings[statusCode][errorCode].id].code = errorCode;
                        req.built.api.message.warnings[devWarnings[statusCode][errorCode].id].title = devWarnings[statusCode][errorCode].title;
                        req.built.api.message.warnings[devWarnings[statusCode][errorCode].id].details = devWarnings[statusCode][errorCode].details;
                        if(devWarnings[statusCode][errorCode].customMessage !== undefined)
                        {
                            req.built.api.message.warnings[devWarnings[statusCode][errorCode].id].moreInfo = devWarnings[statusCode][errorCode].customMessage;
                        }
                        if(devWarnings[statusCode][errorCode].objectRef !== undefined && devWarnings[statusCode][errorCode].objectRef.length > 0)
                        {
                            req.built.api.message.warnings[devWarnings[statusCode][errorCode].id].objectRef = devWarnings[statusCode][errorCode].objectRef;
                        }
                    }
                }
            }
        }
    }
    
    if(success !== undefined)
    {
        req.built.api.message.success = {};
        for(var sucStatusCode in success)
        {
            if(success.hasOwnProperty(sucStatusCode))
            {
                for(var sucErrorCode in success[sucStatusCode])
                {
                    if(success[sucStatusCode].hasOwnProperty(sucErrorCode))
                    {
                        req.built.api.message.success[success[sucStatusCode][sucErrorCode].id] = {};
                        req.built.api.message.success[success[sucStatusCode][sucErrorCode].id].id = success[sucStatusCode][sucErrorCode].id;
                        //req.built.api.message.success[success[sucStatusCode][sucErrorCode].id].code = sucErrorCode;
                        req.built.api.message.success[success[sucStatusCode][sucErrorCode].id].title = success[sucStatusCode][sucErrorCode].title;
                        req.built.api.message.success[success[sucStatusCode][sucErrorCode].id].details = success[sucStatusCode][sucErrorCode].details;
                        if(success[sucStatusCode][sucErrorCode].customMessage !== undefined)
                        {
                            req.built.api.message.success[success[sucStatusCode][sucErrorCode].id].moreInfo = success[sucStatusCode][sucErrorCode].customMessage;
                        }
                        if(success[sucStatusCode][sucErrorCode].objectRef !== undefined && success[sucStatusCode][sucErrorCode].objectRef.length > 0)
                        {
                            req.built.api.message.success[success[sucStatusCode][sucErrorCode].id].objectRef = success[sucStatusCode][sucErrorCode].objectRef;
                        }
                    }
                }
            }
        }
    }

    var end = +new Date();
    //req.built.api.executionTime_milliSeconds = end - req.startTime;

    res.status(statusCodeMain).json(req.built);


}

