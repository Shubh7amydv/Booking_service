const { StatusCodes }=require('http-status-code');

class serviceError extends Error{
    constructor (
        message,
        explantion,
        statusCodes=StatusCodes.INTERNAL_SERVER_ERROR
    ){
        this.name='ServiceError',
        this.message=message,
        this.explantion=explantion,
        this.statusCodes=statusCodes
    }
}

module.exports=serviceError;