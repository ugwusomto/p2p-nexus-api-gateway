import { ArgumentsHost, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { ErrorResponseDto } from "../dtos/exception.dto";
import { Request, Response } from 'express';

export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    console.log(exception)
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    const request = context.getRequest<Request>();
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    let responseMessage: string;

    if (exception instanceof HttpException) {
      const exceptionResponse = exception.getResponse();
      responseMessage =
        typeof exceptionResponse === 'string'
          ? exceptionResponse
          : (exceptionResponse as any).message || 'Unknown error';
    } else {
      responseMessage = 'Internal server error';
    }

    const result: ErrorResponseDto = {
      status: false,
      message: Array.isArray(responseMessage) ? responseMessage[0] : responseMessage,
    };

    response.status(status).json(result);


  }
}

export default GlobalExceptionFilter;