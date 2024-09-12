import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { RegisterDTO } from 'src/dtos/auth.dto';
import { createResponse } from 'src/utils/index.util';

@Controller('auth')
export class AuthController {

    constructor(private readonly userService:UserService){}

    @Post("register")
    async registerUser(@Body() body : RegisterDTO){
        const result = await this.userService.createUser(body);
        console.log(result)
        return {message:"Registration successful",status:true}
    }


}
