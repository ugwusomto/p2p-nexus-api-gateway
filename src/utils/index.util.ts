interface ResponseData{
    message: string;
    status?: boolean;
    data?: object;
  };
  
 export function createResponse(message: string, data?:object|undefined, status: boolean = true) {
    const response: ResponseData = { status, message };
  
    if (data !== undefined) {
      response.data = data;
    }
  
    return response;
  }