import { ArgumentsHost, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { ErrorResponseDto } from "../dtos/exception.dto";
import { Request, Response } from 'express';
import { RpcException } from "@nestjs/microservices";

export class GlobalExceptionFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
        const context = host.switchToHttp();
        const response = context.getResponse<Response>();
        const request = context.getRequest<Request>();
        let status =
            exception instanceof HttpException
                ? exception.getStatus()
                : HttpStatus.INTERNAL_SERVER_ERROR;

        let responseMessage: string;
        console.log(exception)
        if (exception && exception.message) {
            responseMessage = exception.message;
            status = HttpStatus.BAD_REQUEST
        } else if (exception instanceof HttpException) {
            const exceptionResponse = exception.getResponse();
            responseMessage =
                typeof exceptionResponse === 'string'
                    ? exceptionResponse
                    
                    : (exceptionResponse as any).message || 'Unknown error';
        } else if (exception instanceof RpcException) {
            responseMessage =
                typeof exception === 'string'
                    ? exception
                    : (exception as any).message || 'Unknown error';
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