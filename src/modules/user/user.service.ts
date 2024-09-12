import { Inject, Injectable, Type } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { INJECTION_TOKENS } from 'src/constants/index.constant';
import { RegisterDTO } from 'src/dtos/auth.dto';

@Injectable()
export class UserService {

    constructor(@Inject(INJECTION_TOKENS.USER_SERVICE_CLIENT) private readonly userServiceClient: ClientProxy) { }


    async createUser(userData : Type<RegisterDTO>):Promise<any> {
        return  await firstValueFrom(this.userServiceClient.send({cmd:"valo"},userData));
    }
}
