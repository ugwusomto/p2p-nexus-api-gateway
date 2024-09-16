import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { LocalStrategy } from './strategies/local.strategy';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { JwtModuleOptions } from '@nestjs/jwt';
import { AUTH_PROVIDERS } from './providers/index.provider';


@Module({
  imports: [UserModule],
  controllers: [AuthController,],
  providers: [AuthService, LocalStrategy, ...AUTH_PROVIDERS],
  exports:[...AUTH_PROVIDERS]
})
export class AuthModule { }
