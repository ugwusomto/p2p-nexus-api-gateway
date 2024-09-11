import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { TransportModule } from 'src/transporters/transport.module';

@Module({
  imports:[TransportModule],
  controllers: [AuthController,UserModule],
  providers: [AuthService]
})
export class AuthModule {}
