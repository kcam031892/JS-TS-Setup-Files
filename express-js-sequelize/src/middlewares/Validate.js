import { HTTP_RESPONSES } from 'shared/constants/httpResponse';
import { ErrorResponse } from 'shared/utils/errorResponse';

const validate = (schema) => async (req, res, next) => {
  try {
    const resource = req.body;
    await schema.validate(resource, { abortEarly: false });
    next();
  } catch (err) {
    const errorMessage = err?.errors?.join(', ');
    next(new ErrorResponse(errorMessage, HTTP_RESPONSES['VALIDATION_FAILED'].statusCode));
  }
};

export default validate;
