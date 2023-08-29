
export interface Errors {
  response: {
    status: number;
    data: {
      errors: any;
      message: string;
    };
  };
}

export interface FormatApiResponse {
  data: any;
  msg: string;
  code: number;
}

function formatErrors(errorResponse: Errors): Promise<FormatApiResponse> {

  const { status } = errorResponse.response
  const { message, errors } = errorResponse.response.data

  return Promise.reject({
    data: errors,
    msg: message,
    code: status,
  });
}

export { formatErrors };
