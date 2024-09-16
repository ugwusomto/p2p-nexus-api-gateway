import { ConfigService } from "@nestjs/config"
import { JwtService } from "@nestjs/jwt"
import { INJECTION_TOKENS } from "src/constants/index.constant"

export const AUTH_PROVIDERS = [{
    provide: INJECTION_TOKENS.JWT_SERVICE_TOKEN,
    useFactory: (configService: ConfigService) => {
        return new JwtService({ secret: configService.get<string>("JWT_SECRET"), signOptions: { expiresIn: "3600s" } })
    },
    inject: [ConfigService]
}]