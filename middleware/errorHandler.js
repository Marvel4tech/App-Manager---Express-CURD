/*const { constants } = require("../constants")

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.status(statusCode)
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title: "Validation failed",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants.NOT_FOUND:
            res.json({
                title: "Not Found",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants.UNAUTHORIZED:
            res.json({
                title: "UnAuthorized",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants.FORBIDDEN:
            res.json({
                title: "Forbidden",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants.INTERNAL_SERVER_ERROR:
            res.json({
                title: "SERVER ERROR",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        default:
            console.log("No Error, All good !")
            break;
    }
}

module.exports = errorHandler */

const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    res.status(statusCode); // Ensure the status code is set

    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            return res.json({
                title: "Validation failed",
                message: err.message,
                stackTrace: process.env.NODE_ENV === 'production' ? null : err.stack,
            });
        case constants.NOT_FOUND:
            return res.json({
                title: "Not Found",
                message: err.message,
                stackTrace: process.env.NODE_ENV === 'production' ? null : err.stack,
            });
        case constants.UNAUTHORIZED:
            return res.json({
                title: "Unauthorized",
                message: err.message,
                stackTrace: process.env.NODE_ENV === 'production' ? null : err.stack,
            });
        case constants.FORBIDDEN:
            return res.json({
                title: "Forbidden",
                message: err.message,
                stackTrace: process.env.NODE_ENV === 'production' ? null : err.stack,
            });
        case constants.INTERNAL_SERVER_ERROR:
            return res.json({
                title: "Server Error",
                message: err.message,
                stackTrace: process.env.NODE_ENV === 'production' ? null : err.stack,
            });
        default:
            console.error("Unhandled error:", err); // Log the error for debugging
            return res.json({
                title: "Error",
                message: "An unexpected error occurred.",
                stackTrace: process.env.NODE_ENV === 'production' ? null : err.stack,
            });
    }
};

module.exports = errorHandler;