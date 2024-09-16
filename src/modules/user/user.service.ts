import { Inject, Injectable, Type } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { INJECTION_TOKENS, MESSAGE_PATTERN } from 'src/constants/index.constant';
import { RegisterDTO } from 'src/dtos/auth.dto';

@Injectable()
export class UserService {

    constructor(@Inject(INJECTION_TOKENS.USER_SERVICE_CLIENT) private readonly userServiceClient: ClientProxy) { }


    async createUser(userData: ICreateUser): Promise<any> {
        return await firstValueFrom(this.userServiceClient.send({ cmd: MESSAGE_PATTERN.REGISTER_USER }, userData));
    }

    async login(userData: ICreateLogin): Promise<any> {
        console.log(userData)
        return await firstValueFrom(this.userServiceClient.send({ cmd: MESSAGE_PATTERN.LOGIN_USER }, userData));
    }
}
