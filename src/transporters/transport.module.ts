import { Module } from "@nestjs/common";
import { TRANSPORT_PROVIDER } from "./provider.transporter";





@Module({
    imports:[],
    providers:[...TRANSPORT_PROVIDER],
    exports:[...TRANSPORT_PROVIDER]
})
export class TransportModule{}