import { ClientProviderOptions, Transport } from "@nestjs/microservices";
import { INJECTION_TOKENS } from "src/constants/index.constant";

const TRANSPORTERS = [
    {
        name: INJECTION_TOKENS.USER_SERVICE,
        transport: Transport.REDIS,
        options: {
            host: 'redis://localhost:6379',
        },
    }
] as ClientProviderOptions[]; 

export default TRANSPORTERS