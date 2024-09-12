import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { RegisterDTO } from 'src/dtos/auth.dto';

@Controller('auth')
export class AuthController {

    constructor(private readonly userService:UserService){}

    @Post("register")
    async registerUser(@Body() body : RegisterDTO){
        return {message:"successfuly sent"}
    }


}
