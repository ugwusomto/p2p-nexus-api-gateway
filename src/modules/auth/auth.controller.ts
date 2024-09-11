import { Controller, Post } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly userService:UserService){}

    @Post("register")
    async registerUser(){
        
    }


}
