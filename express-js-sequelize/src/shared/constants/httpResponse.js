export const HTTP_RESPONSES = {
  SUCCESS: {
    message: 'Success',
    statusCode: 200,
  },
  CREATED: {
    message: 'Created',
    statusCode: 201,
  },
  BAD_REQUEST: {
    message: 'Bad Request',
    statusCode: 400,
  },
  VALIDATION_FAILED: {
    message: 'Validation Failed',
    statusCode: 422,
  },
  DUPLICATE_VALIDATION: {
    messae: 'Duplicate',
    statusCode: 409,
  },
  SERVER_ERROR: {
    message: 'Server Error.',
    statusCode: 500,
  },
  NOT_FOUND: {
    message: 'Resource not found.',
    statusCode: 404,
  },
  UNAUTHORIZED: {
    message: 'Unauthorized',
    statusCode: 401,
  },
};
