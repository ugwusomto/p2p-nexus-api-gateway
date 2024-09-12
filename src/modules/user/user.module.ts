import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TransportModule } from 'src/transporters/transport.module';

@Module({
  imports:[TransportModule],
  providers: [UserService],
  exports:[UserService]
})
export class UserModule {}
