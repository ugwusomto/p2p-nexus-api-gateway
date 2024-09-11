import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';

@Module({
  controllers: [AuthController,UserModule],
  providers: [AuthService]
})
export class AuthModule {}
