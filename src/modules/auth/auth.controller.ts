import { Body, Controller, HttpException, HttpStatus, Inject, Post, Req, Res, UseGuards } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { LoginDTO, RegisterDTO } from 'src/dtos/auth.dto';
import { createResponse } from 'src/utils/index.util';
import { LocalAuthGuard } from 'src/guards/auth.guard';
import { Request, Response, response } from 'express';
import { JwtService } from '@nestjs/jwt';
import { INJECTION_TOKENS } from 'src/constants/index.constant';

@Controller('auth')
export class AuthController {


    constructor(private readonly userService: UserService, @Inject(INJECTION_TOKENS.JWT_SERVICE_TOKEN) private readonly jwtService: JwtService) { }

    @Post("register")
    async registerUser(@Body() body: RegisterDTO) {
        const result = await this.userService.createUser(body);
        return result;
    }

    @UseGuards(LocalAuthGuard)
    @Post("login")
    async loginUser(@Body() body: LoginDTO, @Req() request: Request, @Res() response: Response,) {
        const user = request.user as any;
        const payload = this.jwtService.sign({ accessToken: { id: user.id } })
        const millisecondsInADay = 24 * 60 * 60 * 1000;
        response.cookie("Authentication",payload, {
            expires: new Date(Date.now() + millisecondsInADay),
            httpOnly: true,
            secure: true,
            
        })
        return response.json({ message: "Use logged in successfully", data: { user } })
    }


}
