import { HTTP_RESPONSES } from 'shared/constants/httpResponse';

const errorHandler = (err, req, res, next) => {
  const response = HTTP_RESPONSES['SERVER_ERROR'];
  if (err.name === 'SequelizeUniqueConstraintError') {
    err.message = err?.errors[0].message;
    err.statusCode = HTTP_RESPONSES['DUPLICATE_VALIDATION'].statusCode;
  }
  if (err.name === 'SequelizeValidationError') {
    err.message = err?.errors[0].message;
    err.statusCode = HTTP_RESPONSES['VALIDATION_FAILED'].statusCode;
  }
  const message = err.message || response.message;
  const statusCode = err.statusCode || response.statusCode;
  const error = err.error || response.message;
  res.status(statusCode).json({
    message,
    statusCode,
    error,
  });
  next();
};

export default errorHandler;
