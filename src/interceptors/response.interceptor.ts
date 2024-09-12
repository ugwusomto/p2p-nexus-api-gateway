import { CallHandler, ExecutionContext, HttpStatus, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { tap } from 'rxjs/operators';

@Injectable()
class ResponseInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        return next.handle().pipe(tap(data => {
            const response = context.switchToHttp().getResponse();
            if (data && data.status === false) {
              response.status(HttpStatus.BAD_REQUEST); 
            } else {
              response.status(HttpStatus.OK);
            }
            return ({

            });
        }))
    }
}

export default ResponseInterceptor