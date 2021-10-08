import { HTTP_RESPONSES } from 'shared/constants/httpResponse';

const notFoundHandler = (req, res) => {
  const response = HTTP_RESPONSES['NOT_FOUND'];
  res.status(response.statusCode).json(response);
};

export default notFoundHandler;
