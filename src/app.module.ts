import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'riwi2024',
      database: 'user_database',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }), UsersModule, AuthModule
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AppModule {}
