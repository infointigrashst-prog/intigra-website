export const ApiResponse = (
  responseStatus: number,
  message: string,
  responseSuccess: boolean = false,
  data: any[] = [],
  totalRecord: number = 0,
  isAuthFailure: boolean = true,
) => {
  const responseBody = {
    Success: responseSuccess,
    Message: message,
    TotalRecord: totalRecord
      ? totalRecord
      : data.length > 0
        ? data.length
        : Object.keys(data).length > 0
          ? 1
          : 0,
    IsAuthFailure: isAuthFailure,
    Data: data,
    StatusCode: responseStatus,
  };

  return responseBody;
};
