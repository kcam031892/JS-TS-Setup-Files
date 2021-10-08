export const transformPagination = (headers) => {
  const page = Number(headers.page || 1);
  const limit = Number(headers.limit || 10);
  return {
    page: (page - 1) * limit,
    limit: limit,
  };
};
