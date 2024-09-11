import { Module } from "@nestjs/common";
import { ClientsModule } from "@nestjs/microservices";
import TRANSPORTERS from "./provider.transporter";



@Module({
    imports:[ClientsModule.register(TRANSPORTERS)],
    exports:[]
})
export class TransportModule{}