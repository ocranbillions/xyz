class Utilities {
  static errorStatus(res, statusCode, errorMessage) {
    return res.status(statusCode).json({
      status: statusCode,
      error: errorMessage,
    });
  }

  static successStatus(res, statusCode, message, data) {
    return res.status(statusCode).json({ status: statusCode, message, data });
  }
}

export default Utilities;
