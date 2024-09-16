import { Inject, Injectable, NestMiddleware, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request, Response, NextFunction } from "express";
import { INJECTION_TOKENS } from "src/constants/index.constant";

@Injectable()
export class AuthMiddleWare implements NestMiddleware {

    constructor(@Inject(INJECTION_TOKENS.JWT_SERVICE_TOKEN) private readonly jwtService: JwtService) { }

    use(req: Request, res: Response, next: NextFunction) {
        const payload = req.cookies("Authorization");
        try {
            const { accessToken } = this.jwtService.verify(payload);
            req.user = accessToken;
            next();
        } catch (err) {
            throw new UnauthorizedException('User not authorized: Invalid token');
        }
    }
}



@Injectable()
export class AdminAuthMiddleware implements NestMiddleware {
    constructor(@Inject(INJECTION_TOKENS.JWT_SERVICE_TOKEN) private readonly jwtService: JwtService) { }

    use(req: Request, res: Response, next: NextFunction) {
        const payload = req.cookies("Authorization");
        try {
            const { accessToken } = this.jwtService.verify(payload);
            if (!accessToken.role || accessToken.role != "ADMIN") {
                throw new UnauthorizedException('Admin not authorized: Invalid token');
            }
            req.user = accessToken;
            next();
        } catch (err) {
            throw new UnauthorizedException('Admin not authorized: Invalid token');
        }

    }
}