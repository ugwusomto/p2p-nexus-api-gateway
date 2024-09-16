import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { UserService } from "src/modules/user/user.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
   constructor(private readonly userService: UserService){
    super({
        usernameField:"email"
    })
   }

   async validate(email:string , password:string){
    const result = await this.userService.login({email , password});
    if(!result){
        throw new UnauthorizedException("Invalid login detail")
    }
    return result.data.user || null;
   }
}