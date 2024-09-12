import { ConfigService } from "@nestjs/config";
import { ClientProviderOptions, ClientProxyFactory, Transport } from "@nestjs/microservices";
import { INJECTION_TOKENS } from "src/constants/index.constant";

export const TRANSPORT_PROVIDER = [
    {
        provide: INJECTION_TOKENS.USER_SERVICE_CLIENT,
        useFactory: (configService: ConfigService) => {
            const redisServicer = configService.get<string>("REDIS_SERVER")
            return ClientProxyFactory.create({
                transport: Transport.REDIS,
                options: {
                    host: "localhost",
                    port: 6379,
                    retryAttempts: 5,
                    retryDelay: 1000,
                    
                }
            })
        },
        inject: [ConfigService]
    }
];
